# Cahier des charges fonctionnel — KLÉO

**Produit :** KLÉO — Plateforme de pilotage hygiène & sécurité alimentaire (PMS / HACCP) pour les métiers de bouche.
**Tagline :** *Votre hygiène, clé en main.*
**Format :** Progressive Web App (PWA) cloud, installée sur tablette, paramétrée à distance.
**Cible :** Restaurants, boucheries, boulangeries-pâtisseries, poissonneries, traiteurs, fromageries, primeurs, food-trucks — en remise directe et/ou transformation. Segment prioritaire : **franchises multi-sites**.
**Promesse :** « Tous vos justificatifs hygiène prêts et exportables en cas de contrôle. »

> ⚠️ **Cadre de responsabilité.** KLÉO fournit l'outil de suivi et d'archivage. Il ne garantit pas le résultat d'un contrôle, qui dépend des pratiques réelles de l'établissement. Disclaimer à intégrer aux CGU.

---

## 0. Cadre réglementaire de référence

| Texte | Objet |
|---|---|
| Règl. CE 178/2002 | Principes généraux, traçabilité, retrait/rappel |
| Règl. CE 852/2004 | Hygiène denrées alimentaires — **PMS obligatoire (art. 5)** |
| Règl. CE 853/2004 | Règles spécifiques produits d'origine animale, **agrément sanitaire** |
| Arrêté du 21 déc. 2009 | Températures de conservation, plats témoins, commerce de détail |
| Règl. UE 1169/2011 (INCO) | Information consommateur, **14 allergènes** |
| Décret 2011-731 | **Formation hygiène** obligatoire en restauration commerciale |
| Loi EGalim / Alim'confiance | Publication & affichage du résultat de contrôle |
| GBPH sectoriels | Guides de Bonnes Pratiques d'Hygiène par métier (référentiels) |

---

## 1. Architecture fonctionnelle (modules)

### Bloc A — Pilotage quotidien
- **A1. Tableau de bord** — score de conformité, score « inspection-ready », KPI, alertes du jour.
- **A2. Relevés de température** — saisie manuelle + sondes connectées, seuils par enceinte, écarts & actions correctives.
- **A3. Plans de nettoyage-désinfection** — check-lists par zone/fréquence, méthode TACT, validation horodatée.
- **A4. Traçabilité & DLC/DDM** — réception, lots, étiquetage, décongélation, plats témoins, alertes DLC.

### Bloc B — Conformité documentaire
- **B1. Mon PMS** — document maître vivant : BPH + plan HACCP + traçabilité, généré et tenu à jour.
- **B2. Coffre-fort documentaire** — FDS, fiches techniques, contrats 3D/huiles/déchets, agréments, attestations.
- **B3. Allergènes** — 14 allergènes, fiches recettes, affichage consommateur.
- **B4. Équipe & formations** — registre du personnel, attestations, échéances, suivi état de santé.

### Bloc C — Différenciants KLÉO
- **C1. Mode Inspecteur** — auto-inspection avec la grille DDPP → score + plan d'action priorisé.
- **C2. Dossier de contrôle** — export PDF en 1 clic (PMS + 12 mois de relevés + attestations).
- **C3. Multi-sites / Franchise** — vue consolidée de la conformité d'un réseau.
- **C4. Alertes intelligentes** — DLC, étalonnage sondes, formations, contrats à échéance.

---

## 2. Spécifications détaillées par module

### A2 — Relevés de température
**Enceintes / points de contrôle paramétrables par métier :**
- Réception marchandises (contrôle à la livraison)
- Froid positif : **0 à +4 °C** (selon denrée)
- Froid négatif : **≤ −18 °C**
- Cuisson : **≥ +63 °C à cœur**
- Refroidissement rapide : **+63 → +10 °C en < 2 h**
- Maintien au chaud : **≥ +63 °C**
- Remise en température : **+63 °C en < 1 h**

**Fonctions :**
- Saisie manuelle (clavier numérique tablette) **ou** auto via sonde Bluetooth/Wi-Fi.
- Seuils min/max par enceinte → statut auto (conforme / à surveiller / non conforme).
- **En cas d'écart : action corrective obligatoire tracée** (champ + responsable + horodatage).
- Fréquence configurable (ex. 2×/jour matin/soir) + rappels.
- Historique + courbes + export.

### A3 — Plans de nettoyage-désinfection
- Check-lists par **zone** (cuisine, chambres froides, sanitaires, salle, véhicule…) et **fréquence** (quotidien / hebdo / mensuel).
- Pour chaque tâche : produit utilisé, **méthode TACT**, lien FDS, opérateur, horodatage de validation.
- Photo de preuve optionnelle.
- Taux de réalisation + historique.

### A4 — Traçabilité & DLC/DDM
- **Réception** : fournisseur, n° lot, T° livraison, BL/facture (photo).
- **Étiquetage** : génération d'étiquettes (produit, date d'ouverture, DLC secondaire, date de décongélation).
- **Plats témoins** : enregistrement, conservation **5 j à +3 °C**, alerte de destruction.
- **Alertes DLC** : J-3 / J-1 / jour J.
- **Huiles de friture** : suivi composés polaires **≤ 25 %**.

### B1 — Mon PMS (document maître)
- Génération guidée du PMS personnalisé par métier (sur base GBPH).
- 3 blocs : BPH (prérequis), plan HACCP (7 principes + diagrammes de fabrication par famille), traçabilité/non-conformités/retrait-rappel.
- Versionné, daté, exportable.

### B2 — Coffre-fort documentaire
- Stockage : FDS produits, fiches techniques, **contrat 3D nuisibles**, contrat collecte huiles, contrat déchets/SPA, **agrément ou dérogation**, déclaration d'activité DDPP, attestations formation, factures fournisseurs.
- Alertes d'expiration (contrats, agréments).

### B3 — Allergènes
- Les **14 allergènes** (gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, sésame, sulfites, lupin, mollusques).
- Fiches recettes ↔ allergènes ; document d'information consommateur imprimable.

### B4 — Équipe & formations
- Registre du personnel, **attestation formation hygiène** (14 h ou 3 ans d'expérience — décret 2011-731), échéances, suivi de l'état de santé.

### C1 — Mode Inspecteur (différenciant clé)
Auto-inspection sur la **grille DDPP** → produit un score « inspection-ready » et un plan d'action priorisé. Chapitres :
1. Hygiène générale (locaux, équipements, personnel)
2. Maîtrise des températures
3. PMS documenté et appliqué
4. Lutte contre les nuisibles
5. Traçabilité & gestion des non-conformités
6. Formation du personnel

Chaque item : conforme / non conforme / non applicable → pondération → note + recommandations.

### C2 — Dossier de contrôle
- Export PDF en 1 clic : PMS à jour + 12 derniers mois de relevés + plans de nettoyage + attestations + registres.
- Génération horodatée, présentable directement à l'inspecteur.

### C3 — Multi-sites / Franchise
- Tableau consolidé : score de chaque site, alertes ouvertes, taux de saisie.
- Rôles : franchiseur (lecture réseau) / gérant de site (saisie).
- Benchmark inter-sites.

### C4 — Alertes intelligentes
- DLC à venir, **étalonnage des sondes/thermomètres**, formations expirant, contrats 3D/huiles à renouveler, écarts de température non traités.

---

## 3. Personnalisation par métier (cœur standardisé + couche paramétrable)

Chaque métier charge un **profil** : enceintes & seuils, plans de nettoyage, dangers HACCP, allergènes types, alertes spécifiques.

| Métier | Spécificités intégrées |
|---|---|
| Restaurant | Liaison chaude, vitrines, réception, refroidissement |
| Boucherie-charcuterie | Froid viande 0/+2 °C, labo découpe, **traçabilité/estampille lot**, scie/hachoir, haché DLC J |
| Boulangerie-pâtisserie | Chambre de pousse, **allergènes**, crème pâtissière DLC, four/pétrin |
| Poissonnerie | Étal sous glace 0/+2 °C, **traçabilité pêche / salubrité coquillages**, vivier |
| Traiteur | **Cellule de refroidissement**, liaisons transport, **plats témoins 5 j** |
| Fromagerie / crémerie | Cave d'affinage (T°/hygrométrie), DLC laitiers |
| Primeur | Conservation fruits/légumes, lavage |
| Food-truck | Eau, autonomie froid, traçabilité mobile |

---

## 4. Personnalisation marque client
- Import du **logo** de l'établissement (en-tête + dossier de contrôle).
- Nom, type de métier, localisation, équipements réels.
- Paramétrage **réalisé à distance par KLÉO** (onboarding = valeur ajoutée).

---

## 5. Rôles & droits
- **Gérant** : tout, paramétrage, export.
- **Employé** : saisie relevés/nettoyage (interface simplifiée « 3 clics »).
- **Franchiseur** : lecture consolidée multi-sites.
- **KLÉO (admin)** : paramétrage à distance, mises à jour réglementaires.

---

## 6. Exigences techniques & légales
- **PWA** responsive tablette, mode hors-ligne + synchro.
- Hébergement **France/UE** (argument commercial).
- **RGPD** : registre de traitement, mentions, hébergement UE, durée de conservation des données (≥ obligations PMS).
- Sauvegarde automatique, export des données.
- Sécurité : authentification, chiffrement, journal d'audit.

---

## 7. Périmètre MVP recommandé (priorisation de lancement)
1. A1 Tableau de bord · A2 Relevés température · A3 Nettoyage · A4 Traçabilité/DLC
2. C2 Dossier de contrôle · C1 Mode Inspecteur
3. B1 PMS · B2 Coffre-fort · B4 Formations
4. C3 Multi-sites (phase franchise) · sondes connectées (option)

---

## 8. Modèle économique (rappel)
- **Installation/paramétrage : ~500 € one-shot** (sur-mesure, à distance).
- **Abonnement maintenance : ~10–15 €/mois** (mises à jour réglementaires + cloud + support).
- Multi-sites : tarif dégressif par site + dashboard franchiseur.
- Hardware (tablette/sondes) en option/location.

*Positionnement : ~2× moins cher que les SaaS du marché (Hygie, Octopus, Traqfood…), tout en restant rentable grâce au récurrent minimal qui finance le cloud et la veille réglementaire.*
