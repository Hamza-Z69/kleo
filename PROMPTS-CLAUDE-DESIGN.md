# Prompts Claude Design — KLÉO

Prompts prêts à coller dans Claude Design pour générer les maquettes ultra premium.
Workflow : Claude Design (visuel) → renvoyer les exports → Claude Code (intégration HTML autonome + data).

---

## 1. Landing page de vente — v2 (angle équilibré indépendant + réseau, aligné sur l'app livrée)

> But : convertir. Doit parler d'abord au gérant d'UN établissement (le gros du marché), avec une section dédiée pour les multi-établissements. Même identité visuelle que l'app KLÉO déjà en ligne (kleo-hygiene.vercel.app) → cohérence de marque totale.

```
Tu es un directeur artistique senior spécialisé dans les landing pages SaaS premium (références : Linear, Vercel, Arc, Raycast, Stripe, Retool). Conçois la landing page de vente de KLÉO — ultra premium, très design, dans l'air du temps 2026, qui donne immédiatement envie de réserver une démo. Elle doit être la sœur visuelle exacte de l'application KLÉO existante (déjà en ligne), pas un univers différent.

## LE PRODUIT
KLÉO — plateforme de pilotage de l'hygiène et de la sécurité alimentaire (Plan de Maîtrise Sanitaire / HACCP) pour tous les métiers de bouche.
Tagline : « Votre hygiène, clé en main. »
Promesse centrale : en cas de contrôle sanitaire (DDPP / Alim'confiance), les justificatifs sont prêts et exportables en un instant. KLÉO transforme la corvée HACCP en routine de quelques clics par jour. Formulation honnête : KLÉO fournit l'outil et les preuves, il ne « garantit » pas le résultat du contrôle.

## LA CIBLE (IMPORTANT — deux profils, à ÉQUILIBRER)
1. PRINCIPAL — l'INDÉPENDANT mono-site : gérant d'un restaurant, d'une boucherie, d'une boulangerie, d'une poissonnerie, d'un traiteur, d'une fromagerie, d'un primeur, d'un food-truck. Pressé, terrain, peu technophile, stressé par les contrôles, agacé par la paperasse. C'est LE cœur de cible → le corps de la page lui parle à lui.
2. SECONDAIRE — le MULTI-ÉTABLISSEMENTS : gérant de 2-10 points de vente ou responsable de réseau/franchise. À capter via UNE section dédiée « Vous gérez plusieurs établissements ? » (vue réseau, conformité comparée, paramétrage à distance). Ne PAS transformer toute la page en discours corporate/franchise.

## L'ARGUMENT DE VENTE
- Moitié moins cher que les SaaS du marché (Hygie, Octopus, Traqfood ~40-80 €/mois).
- Modèle limpide : ~500 € d'installation one-shot + ~12 €/mois (maintenance, cloud, veille réglementaire). 2× moins cher sur 3 ans.
- S'installe sur une simple tablette (PWA, fonctionne même hors-ligne), paramétrée à distance, hébergée en France/UE (RGPD).
- Adapté à CHAQUE métier : profils prêts (restaurant, boucherie, boulangerie, poissonnerie, traiteur, fromagerie, primeur, food-truck) avec seuils de température et plans de nettoyage spécifiques.
- Mode saisie employé « 3 clics » : l'équipe fait ses relevés sans formation.
- Conforme au cadre : Paquet Hygiène (CE 852/2004 — PMS obligatoire), Arrêté du 21 déc. 2009 (températures), INCO 1169/2011 (14 allergènes).

## IDENTITÉ VISUELLE — REPRENDRE À L'IDENTIQUE CELLE DE L'APP
- Univers dark premium, contrasté et lumineux. Fonds noir bleuté profond : #06090C, surfaces glassmorphism (blanc à 3-5% d'opacité, bordures fines blanches à 8-12%).
- Couleur signature : dégradé menthe → teal, #4BF7B4 → #0FB6A8. Halos/glows menthe mesurés.
- États sémantiques (à montrer dans les mockups) : vert menthe = conforme, ambre #F5B14C = à surveiller, rouge #FF6B6B = écart/action requise.
- Logo = « sceau d'approbation » : anneau pointillé fin + disque en dégradé menthe + coche. À réutiliser comme motif et comme puce de validation.
- Typographies : titres en Space Grotesk (géométrique, grands titres généreux, fort contraste de tailles) ; chiffres/données en JetBrains Mono (tabulaire), pour les températures, prix, hash d'intégrité.
- Micro-détails premium : badges « Conforme Paquet Hygiène », étiquettes de statut « Conforme » vertes, mini-courbes de température, faux journal horodaté, empreinte SHA-256, jauges de conformité en anneau.

## STRUCTURE DE LA PAGE (sections, dans l'ordre)
1. Nav fine translucide : logo sceau + KLÉO, liens (Fonctionnalités, Métiers, Tarif, Démo), CTA « Voir la démo ».
2. HERO : grand titre magnétique (ex. « Votre hygiène, clé en main. »), sous-titre bénéfice (« Vos relevés HACCP et vos justificatifs de contrôle, prêts en quelques clics — pour un seul établissement comme pour tout un réseau. »), 2 CTA (« Voir la démo » primaire menthe + « Réserver un appel » secondaire), et un mockup de l'app sur tablette qui flotte avec halo menthe (écran Tableau de bord ou Mode Inspecteur « 98% conforme »). Bandeau de réassurance : « Installé sur tablette · Hébergé en France · Conforme Paquet Hygiène ».
3. PROBLÈME : le stress du contrôle surprise, les classeurs papier, les relevés oubliés, les températures notées sur un cahier. Ton empathique, visuel « avant ».
4. SOLUTION — 3 à 4 features clés avec vraies captures de l'app : (a) Relevés en 3 clics + détection auto des écarts, (b) Dossier de contrôle PDF avec empreinte d'intégrité inviolable, (c) Plan de nettoyage & traçabilité DLC, (d) Mode Inspecteur à présenter à la DDPP.
5. ADAPTÉ À VOTRE MÉTIER : rangée de profils (restaurant, boucherie, boulangerie, poissonnerie, traiteur, fromagerie, primeur, food-truck) avec pictos — montrer que les seuils/zones s'adaptent.
6. COMPARATIF PRIX : tableau KLÉO vs Hygie / Octopus / Traqfood, KLÉO clairement gagnant (colonne mise en avant en menthe), coût sur 3 ans.
7. SECTION DÉDIÉE « Vous gérez plusieurs établissements ? » : vue réseau, conformité comparée entre sites, paramétrage à distance, déploiement multi-sites / franchises. Visuellement distincte (léger changement de fond) pour ne pas alourdir le discours indépendant.
8. PREUVE DE CONFORMITÉ : rappel du cadre réglementaire (Paquet Hygiène, arrêté températures, INCO allergènes) en badges rassurants.
9. CHIFFRE FORT / TÉMOIGNAGE : un chiffre marquant + un verbatim gérant crédible (placeholder).
10. OFFRE & PRICING : carte claire ~500 € installation + ~12 €/mois, ce qui est inclus, CTA.
11. FAQ courte (5-6 questions : contrôle, hors-ligne, données, installation, engagement, multi-sites).
12. CTA FINAL plein largeur avec glow menthe + footer sobre (mentions France/UE, RGPD).

## DIRECTION ESTHÉTIQUE
- Layout aéré, rythme vertical soigné, sections respirantes, animations suggérées (fade/parallax subtils, apparition au scroll).
- Glassmorphism subtil, bordures lumineuses, ombres douces, grain léger, glows de couleur.
- Mobile-first impeccable (la cible regarde majoritairement sur téléphone).
- Ton des textes : factuel, concret, rassurant, PREMIUM — pas de superlatifs creux, pas de jargon marketing. Chaque phrase doit rassurer un gérant pressé.

## LIVRABLE
Maquette haute-fidélité complète (desktop + mobile), design system cohérent avec l'app, prête à être intégrée ensuite en HTML autonome. Objectif ressenti : « ça a l'air pro, sérieux sur le plan réglementaire, et ça va vraiment me simplifier la vie — je réserve une démo. »
```

---

## 2. Refonte de l'application (les écrans de la démo)

> But : une démo produit qui claque, UX terrain irréprochable.

```
Tu es un product designer senior spécialisé dans les web-apps SaaS premium (niveau Linear, Vercel, Arc, Retool, Superhuman). Refonds l'interface de l'application KLÉO en version ultra premium, très design, dans l'air du temps, avec une UX terrain irréprochable.

## LE PRODUIT
KLÉO — application de pilotage de l'hygiène et de la sécurité alimentaire (PMS / HACCP) pour les métiers de bouche. PWA installable sur tablette, utilisée au quotidien en cuisine / arrière-boutique par des opérateurs pressés et peu technophiles.
Tagline : « Votre hygiène, clé en main. »

## LES UTILISATEURS
- L'opérateur (cuisinier, employé) : fait ses relevés vite, debout, parfois avec les mains occupées. Il lui faut du gros, du tactile, du « 3 clics ».
- Le gérant / responsable réseau : consulte le tableau de bord, prépare le dossier de contrôle, gère plusieurs sites.
Deux niveaux de lecture doivent coexister : simplicité radicale pour la saisie, richesse d'information pour le pilotage.

## LES ÉCRANS À CONCEVOIR
1. Accueil / portail — sélection du site + accès rapides aux tâches du jour.
2. Tableau de bord — état de conformité global, tâches en retard, courbes de température, taux de complétion, alertes.
3. Relevés de température — saisie tactile (pavé numérique géant), détection automatique conforme / écart vs seuils, si écart → action corrective obligatoire.
4. Nettoyage — plan de nettoyage, cases à cocher par zone/fréquence, signature de l'opérateur.
5. Traçabilité / DLC — étiquettes produits, dates limites, alertes d'expiration.
6. Calendrier & historique — vue mois/semaine des tâches faites/à faire, journal horodaté inviolable.
7. Mode Inspecteur — vue plein écran, épurée, rassurante, à présenter au contrôleur DDPP.
8. Dossier de contrôle — génération d'un PDF de justificatifs avec empreinte d'intégrité.
9. Équipe — opérateurs, attribution des saisies.
10. Multi-sites — comparaison de la conformité entre établissements d'un réseau.
11. Coffre-fort — documents réglementaires (agréments, formations, analyses).

## IDENTITÉ VISUELLE
- Dark premium très contrasté et lumineux. Fonds noir bleuté / anthracite profond.
- Couleur signature : dégradé menthe → teal (#3CF0AC → #0FB6A8).
- États sémantiques clairs : vert menthe = conforme, ambre = à surveiller, rouge = écart/action requise.
- Logo « sceau d'approbation » (anneau pointillé + disque dégradé + coche) réutilisé comme motif et comme marqueur de validation.
- Typo moderne géométrique, chiffres tabulaires bien lisibles pour les relevés.

## DIRECTION ESTHÉTIQUE (air du temps 2026)
- Navigation latérale élégante (icônes + labels), ou barre du bas sur tablette.
- Cartes en glassmorphism subtil, bordures fines lumineuses, glows de couleur mesurés, ombres douces.
- Data-viz soignée : courbes de température fluides, jauges de conformité, timelines du journal.
- Composants tactiles surdimensionnés pour la saisie terrain, feedback visuel immédiat (haptique suggéré, animation de validation « coche »).
- Micro-interactions premium : transitions douces entre écrans, apparition en fade, confettis/coche animée à la validation d'une tâche.
- Cohérence totale : design system complet (couleurs, typo, espacements, composants, états).

## CONTRAINTE UX CLÉ
La saisie d'un relevé doit se faire en 3 interactions maximum. Le stress d'un contrôle sanitaire doit se transformer en sentiment de contrôle et de sérénité. Ton visuel : professionnel, rassurant, jamais gadget.

## LIVRABLE
Maquettes haute-fidélité des écrans principaux (desktop + tablette), design system cohérent, prêt à être intégré ensuite en HTML/PWA autonome. Prioriser la sensation « c'est beau, c'est carré, et c'est ultra simple à utiliser ».
```

---

## Après Claude Design
Renvoyer les exports/captures à Claude Code → intégration en HTML autonome + données réelles (persistance localStorage, PWA), puis redéploiement Vercel (`kleo-hygiene`).
