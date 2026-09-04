# Créer une instance KLÉO personnalisée par client

L'app KLÉO est **pilotée par configuration** : toutes les données propres à un client
(nom, logo/initiales, métier, équipe, sites…) vivent dans un fichier JSON.
Pour un nouveau client, **on ne touche pas au code** — on remplit sa fiche et c'est en ligne.

## En 3 étapes

1. **Copier** `_TEMPLATE.json` → `clients/<slug>.json` (ex. `clients/boucherie-martin.json`).
   Le `slug` = identifiant en minuscules-avec-tirets, sans espace ni accent.
2. **Remplir** les champs (voir ci-dessous).
3. **Déployer** (`npx vercel --prod --yes` puis re-alias) et ouvrir l'instance :
   `https://kleo-hygiene.vercel.app/app?client=<slug>`
   Exemple prêt : https://kleo-hygiene.vercel.app/app?client=boucherie-martin

> Sans `?client=…`, l'app affiche la **démo** (Le Comptoir Central).

## Les champs

| Champ | Rôle |
|---|---|
| `slug` | Identifiant unique (doit correspondre au nom du fichier). |
| `metier` | Profil métier de base : `restaurant`, `boucherie`, `boulangerie`, `poissonnerie`, `traiteur`, `fromagerie`, `primeur`, `foodtruck`. Définit les équipements/seuils et zones de nettoyage par défaut. |
| `client.name` / `city` / `type` / `initials` | Identité affichée partout (en-têtes, dossier de contrôle, mode inspecteur). `initials` = 2 lettres du logo. |
| `manager` | Prénom affiché dans « Bonjour, … ». |
| `team[]` | Opérateurs. `n` = nom complet, `short` = « Prénom N. », `r` = rôle, `i` = initiales (2 lettres), `s` = nb de saisies (30 j), `t` = fiabilité %, `active` = true pour le responsable. Sert à l'écran Équipe **et** au mode saisie « 3 clics ». |
| `sites[]` | Établissements montrés sur l'Accueil. **Un seul** site → l'app passe en mode mono-établissement (l'écran Réseau est masqué). Plusieurs → vue multi-sites. |
| `network[]` | Lignes de l'écran Réseau (si multi-sites). `conf` = conformité %, `r` = relevés, `e` = écarts, `tone` = `ok`/`warn`/`alert`. Les KPI du haut sont calculés automatiquement. Laisser `[]` si mono-site. |
| `equipment` | **Optionnel.** Pour surcharger les points de température du métier. `null` = utilise le profil métier. Format : `[{ "name":"…", "sub":"…", "seuil":"≤ 4°C", "th":4, "hot":false }]` (`hot:true` pour un seuil « ≥ », ex. maintien au chaud). |
| `zones` | **Optionnel.** Pour surcharger le plan de nettoyage. `null` = profil métier. Format : `[{ "zone":"…", "freq":"Quotidien" }]`. |

## Bon à savoir
- Chaque instance a sa **propre persistance** (localStorage nommé `kleo-<slug>`) → les données d'un client ne se mélangent pas avec un autre sur le même appareil.
- On peut aussi injecter la config sans URL en définissant `window.KLEO_CONFIG = {…}` avant le chargement (utile pour un hébergement dédié par client).
- **Niveau actuel** = personnalisation « front » (idéal démos sur-mesure & pilotes). Le vrai multi-clients avec comptes + back-office + données hébergées est cadré dans `../CDC-TECHNIQUE-KLEO.md`.
