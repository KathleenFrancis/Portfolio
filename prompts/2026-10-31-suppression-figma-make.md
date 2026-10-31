# Intitulé

Correction de l'erreur de démarrage Vite et suppression complète de la tuyauterie Figma Make

## Version

- **Version** : 1.0.0
- **Date** : 2026-10-31
- **Branche** : `main`
- **Auteur** : Kathleen Francis (assisté par Claude Code)

## Contexte / Problème

Le serveur de développement refusait de démarrer :

```
failed to load config from C:\Git repos\perso\Portfolio\vite.config.ts
error when starting dev server:
Error: Build failed with 1 error:

[UNRESOLVED_IMPORT] Could not resolve './.figma/make/site.json' in vite.config.ts
   ╭─[ vite.config.ts:7:31 ]
   │
 7 │ import siteConfiguration from "./.figma/make/site.json";
   │                               ────────────┬────────────
   │                                           ╰────────────── Module not found.
```

Le projet avait été exporté depuis **Figma Make**. Le `vite.config.ts` embarquait cinq plugins propriétaires
dépendant d'un dossier `.figma/` qui n'est jamais exporté hors de l'environnement Figma :

- `figmaSiteConfiguration` — injectait titre/description/favicon/analytics depuis `.figma/make/site.json`
- `figmaErrorOverlayReplay` — rejouait les erreurs de build dans l'iframe de prévisualisation Figma
- `figmaReactRefreshBoundaryFallback` — contournement HMR spécifique à l'agent Figma
- `figmaMakeKitPlugin` — servait une page de rendu à `/.figma/make/kit.html`
- `figmaLinkedPackageSourcemaps` — réécrivait les sourcemaps des paquets liés

Aucun de ces plugins n'a d'utilité hors de Figma. Le dossier `.figma/` étant absent du dépôt,
l'import échouait et bloquait tout le projet.

## Résumé des changements

1. **`vite.config.ts` réécrit intégralement** — passé de 537 lignes à 20. Suppression de l'import
   `./.figma/make/site.json` et des cinq plugins Figma, du type `FigmaSiteConfiguration`, ainsi que
   des variables d'environnement `FIGMA_PUBLIC_URL` et `FIGMA_DEV_SERVER_HOST`. Il ne reste que
   `react()`, `tailwindcss()`, l'alias `@` → `src`, et des ports standard Vite (5173 en dev, 4173 en
   preview, au lieu du 8443 imposé par Figma).
2. **`index.html` nettoyé** — les six marqueurs `<!-- figma:* -->` (remplis à l'exécution par le
   plugin supprimé) sont remplacés par de vraies valeurs : `lang="fr"`, un `<title>` et une
   `<meta name="description">`. Sans ce changement la page s'affichait avec `lang="<!-- figma:lang -->"`
   et un onglet sans titre.
3. **`src/App.tsx` — erreur de syntaxe TypeScript corrigée** (bloquante, indépendante de Figma) :
   un séparateur manquait dans le type inline du composant `Icon`
   (`{ name: IconName size?: number }` → `{ name: IconName; size?: number }`).
4. **Nom du paquet normalisé** — `figma-make-app` dans `package-lock.json` et `Portfolio` dans
   `package.json` sont alignés sur `portfolio` (npm exige des noms en minuscules).
5. **Avertissement Vite 8 résolu** — `__dirname` remplacé par `import.meta.dirname`, requis par le
   futur `configLoader: 'native'`.
6. **`.gitignore`** — ajout de `/dist` pour ne pas committer les artefacts de build.
7. **`CLAUDE.md`** — la description du `vite.config.ts` ne mentionne plus les plugins Figma Make ;
   ajout du dossier `prompts/` à la structure documentée.

## Fichiers modifiés

| Fichier | Nature du changement |
| --- | --- |
| `vite.config.ts` | Réécrit — suppression de l'import `.figma/make/site.json` et des 5 plugins Figma (537 → 20 lignes) |
| `index.html` | Marqueurs `<!-- figma:* -->` remplacés par lang, title et meta description réels |
| `src/App.tsx` | Correction de syntaxe : `{ name: IconName; size?: number }` (ligne 14) |
| `package.json` | `name` : `Portfolio` → `portfolio` |
| `package-lock.json` | `name` : `figma-make-app` → `portfolio` (2 occurrences) |
| `.gitignore` | Ajout de `/dist` |
| `CLAUDE.md` | Mise à jour de la structure du projet |

## Occurrence de « Figma » volontairement conservée

`src/App.tsx` ligne 607 — `"Git · GitHub · Figma\nDocker · Méthode agile"` dans la section
« Ma boîte à outils ». Il s'agit d'une compétence affichée sur le portfolio, pas de code
d'infrastructure. Elle est conservée ; à supprimer uniquement si ce n'est pas une compétence à
mettre en avant.

## Vérifications effectuées

| Commande | Résultat |
| --- | --- |
| `npx tsc --noEmit` | ✅ Aucune erreur |
| `npm run build` | ✅ Build réussi en 794 ms — `dist/index.html`, CSS 28,62 kB, JS 241,06 kB |
| `npx vite` | ✅ Serveur prêt en 1219 ms sur `http://localhost:5173/` — HTTP 200 |

L'erreur `UNRESOLVED_IMPORT` d'origine ne se reproduit plus.

## Points d'attention pour la suite

- **Métadonnées** — le titre et la description de `index.html` sont désormais statiques. C'est
  l'endroit à éditer pour le SEO (plus de `site.json`).
- **Favicon** — le plugin Figma injectait un `<link rel="icon">` vers `/favicon.svg`. Aucun favicon
  n'est déclaré actuellement : déposer un fichier dans un dossier `public/` et ajouter la balise
  dans `index.html` si souhaité.
- **Ports** — un éventuel script de déploiement qui supposait le port 8443 doit être mis à jour.
- **Open Graph / analytics** — l'infrastructure (og:image, Google Analytics, `robots.txt`) était
  fournie par le plugin supprimé. À réimplémenter manuellement dans `index.html` au besoin.
