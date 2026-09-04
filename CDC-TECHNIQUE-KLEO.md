# Cahier des charges technique — KLÉO (produit réel)

> Document d'architecture pour passer du prototype au produit déployable chez un pilote.
> Complète le [cahier des charges fonctionnel](CDC-KLEO.md).

---

## 1. Principes d'architecture

1. **Local-first / offline-first** — la cuisine a un réseau instable. L'app doit fonctionner hors-ligne et synchroniser ensuite. C'est non négociable pour l'adoption.
2. **Valeur probante** — les relevés sont **append-only** (jamais réécrits), **horodatés côté serveur**, et l'audit-log est **chaîné par hash** (chaque enregistrement intègre le hash du précédent). Un inspecteur peut faire confiance aux données. C'est aussi un argument commercial.
3. **Multi-tenant** — une organisation (franchise) → plusieurs établissements → plusieurs utilisateurs. Isolation stricte des données.
4. **Hébergement UE** — argument « données hébergées en France » + conformité RGPD.

---

## 2. Stack recommandée

| Couche | Choix recommandé | Pourquoi |
|---|---|---|
| **Frontend** | **Next.js (React) + TypeScript + Tailwind**, en **PWA** (`next-pwa`) | Installable sur tablette, offline, un seul codebase web/mobile. |
| **Backend / BDD** | **Supabase** (PostgreSQL + Auth + Storage + Realtime + **Row Level Security**) | Multi-tenant natif via RLS, auth incluse, rapide à mettre en place pour une petite équipe. Région **EU (Paris/Francfort)**. |
| **Offline & sync** | IndexedDB local + file de synchro ; option **PowerSync** ou **RxDB** | Saisie hors-ligne, synchro à la reconnexion. Les logs append-only évitent les conflits. |
| **Notifications** | **Web Push (VAPID)** pour la PWA + **Brevo/Twilio** (e-mail/SMS) pour les alertes critiques | Coupure de froid la nuit → SMS au gérant. |
| **Sondes connectées** | **Web Bluetooth** (sondes BLE, lecture depuis la tablette) **ou** sondes Wi-Fi/NB-IoT → passerelle → webhook API | Relevé automatique + alerte. Voir §6. |
| **Génération PDF** | Rendu serveur (Puppeteer headless) ou `react-pdf` | Dossier de contrôle réel, fidèle et horodaté. |
| **Paiement** | **Stripe** (abonnement + frais de setup one-shot) | 500 € + 12 €/mois, gestion des relances. |
| **Hébergement** | Frontend **Vercel** · Backend **Supabase EU** (ou **Scaleway/OVH** full-FR si exigé) | Compromis vitesse / souveraineté. |

> Alternative « full souveraineté FR » : Postgres managé OVH/Scaleway + NestJS (API) + Clever Cloud. Plus de travail, argument souveraineté maximal.

---

## 3. Modèle de données (schéma cible)

```
organizations         (id, nom, type[indépendant|franchise], stripe_customer_id)
establishments        (id, org_id, nom, métier, adresse, logo_url, settings_json)
users                 (id, org_id, email, role[admin_kleo|franchiseur|gérant|employé], pin_hash)
equipments            (id, establishment_id, nom, type[froid+|froid-|chaud|cellule…],
                       seuil_min, seuil_max, unité, sonde_id?, fréquence_releve)
temperature_logs      (id, equipment_id, valeur, statut[ok|écart], author_id, recorded_at[serveur],
                       action_corrective?, source[manuel|sonde], hash, prev_hash)   ← append-only
cleaning_tasks        (id, establishment_id, libellé, zone, fréquence, produit, fds_url)
cleaning_logs         (id, task_id, author_id, done_at, photo_url?, hash, prev_hash) ← append-only
traceability_lots     (id, establishment_id, produit, n_lot, fournisseur, temp_réception, dlc, bl_url)
labels                (id, establishment_id, produit, date_ouverture, dlc_secondaire, date_décongélation)
witness_plates        (id, establishment_id, libellé, prélevé_le, à_détruire_le)     ← plats témoins 5j
documents             (id, establishment_id, type, nom, fichier_url, date_expiration?) ← coffre-fort
formations            (id, user_id, type, date_obtention, date_expiration, attestation_url)
nuisibles_releves     (id, establishment_id, date, constat, prestataire)             ← plan 3D
alerts                (id, establishment_id, type, sévérité, message, créée_le, résolue_le?)
inspections           (id, establishment_id, date, score, réponses_json, plan_action_json) ← mode inspecteur
audit_log             (id, establishment_id, user_id, action, payload_hash, prev_hash, at) ← inviolable
subscriptions         (id, org_id, stripe_sub_id, plan, statut, sites_count)
```

**Inviolabilité** : `temperature_logs`, `cleaning_logs`, `audit_log` sont en insertion seule (pas d'`UPDATE`/`DELETE` via RLS). Chaque ligne stocke `hash = SHA256(payload + prev_hash)` → toute altération casse la chaîne et se détecte.

---

## 4. Authentification & rôles

- **Auth principale** : email + mot de passe / magic link (Supabase Auth).
- **Connexion rapide terrain** : la tablette reste connectée à l'établissement ; chaque **employé saisit avec son code PIN** → attribution des saisies sans déconnexion. (qui a fait quoi = exigence de traçabilité des actions.)
- **Rôles & RLS** :
  - `admin_kleo` : paramétrage à distance de tous les clients.
  - `franchiseur` : lecture consolidée de ses établissements.
  - `gérant` : tout sur son établissement.
  - `employé` : saisie uniquement (interface « 3 clics »).

---

## 5. Synchronisation hors-ligne

1. Toute saisie est écrite **localement (IndexedDB)** immédiatement → l'employé n'attend jamais le réseau.
2. Une **file de synchro** pousse vers Supabase dès que la connexion revient.
3. Les logs étant **append-only**, pas de conflit d'écriture (pas de modification concurrente d'une même ligne).
4. Le **service worker** met en cache l'app (coquille) → ouverture instantanée même hors-ligne.

---

## 6. Sondes connectées (le ROI tangible)

Deux architectures possibles, à proposer selon le client :

- **A — Sondes BLE + tablette (Web Bluetooth)** : la tablette lit les sondes par Bluetooth, relevé automatique à intervalle. Simple, peu coûteux, pas d'abonnement opérateur. Limite : la tablette doit être à portée et allumée.
- **B — Sondes autonomes Wi-Fi / NB-IoT + passerelle** : les sondes émettent en continu vers une passerelle → **webhook** vers l'API KLÉO → stockage + **moteur d'alertes**. Permet l'**alerte coupure de froid la nuit** (SMS) même tablette éteinte. C'est l'argument **ROI** le plus fort (éviter la perte de marchandise).

**Moteur d'alertes** : un job planifié évalue les seuils, détecte écarts/absence de relevé, et déclenche Web Push + SMS selon la sévérité.

---

## 7. Sécurité & RGPD

- Hébergement **UE**, chiffrement **en transit (TLS)** et **au repos**.
- **RLS** Postgres : isolation stricte par établissement/organisation.
- **Registre des traitements**, mentions légales, **DPA** avec les sous-traitants (Supabase, Stripe, Brevo).
- **Conservation** des données alignée sur les obligations PMS (≥ durée légale ; relevés conservés et exportables ≥ 12 mois, documents selon réglementation).
- **Export / portabilité** des données du client à tout moment.
- **Sauvegardes** automatiques + restauration testée.

---

## 8. PDF « Dossier de contrôle »

Génération serveur (Puppeteer) à la demande : page de garde (établissement, période, score), PMS, relevés horodatés des 12 derniers mois, plans de nettoyage validés, attestations, registres, **empreinte de vérification (hash)** prouvant l'intégrité. Téléchargeable et présentable hors-ligne (mis en cache).

---

## 9. Découpage en lots de développement

| Lot | Contenu | Sortie |
|---|---|---|
| **L0 — Socle** | Auth, multi-tenant, RLS, modèle de données, PWA + offline | Base technique |
| **L1 — Saisie cœur** | Relevés (manuel) + écart→action, nettoyage, persistance, audit-log inviolable | **MVP utilisable** |
| **L2 — Dossier & alertes** | PDF dossier de contrôle, alertes intelligentes (push/SMS) | Promesse tenue |
| **L3 — Conformité** | PMS guidé, allergènes, étiquetage, plats témoins, 3D, étalonnage | Couverture complète |
| **L4 — ROI** | Sondes connectées + moteur d'alertes coupure de froid | Argument de vente fort |
| **L5 — Scale** | Espace admin KLÉO, onboarding, Stripe, multi-sites franchiseur | Commercialisation |

---

## 10. Estimation indicative

- **L0+L1 (MVP réel)** : ~6–10 semaines à 1 dev expérimenté (ou no-code/low-code Supabase + Next pour aller plus vite).
- **L2** : ~3–4 semaines. **L3** : ~4–6 semaines. **L4** : dépend du matériel sonde. **L5** : ~3–4 semaines.

> Le prototype HTML actuel reste l'outil de **démo/vente** et de **validation Phase 0** pendant que L0/L1 se construisent.
