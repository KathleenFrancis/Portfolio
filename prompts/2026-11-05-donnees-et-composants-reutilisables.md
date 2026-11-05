# Intitulé

Externalisation des données (`Projects.tsx`, `Experiences.ts`) et composants réutilisables `ProjectComponent` / `ExperienceComponent`

## Version

- **Version** : 1.0.0
- **Date** : 2026-11-05
- **Branche** : `main`
- **Auteur** : Kathleen Francis (assisté par Claude Code)

## Contexte

Suite au découpage de `App.tsx` en sections séparées, les données des projets
et des expériences restaient définies *à l'intérieur* de `ProjectsSection.tsx`
et `WorkSection.tsx`, et leur rendu (la carte `<article>` de chaque élément)
était écrit en dur dans la boucle `.map()`. Un fichier `src/data/Experiences.ts`
existait déjà mais sans `export` (donc inutilisé), et `src/data/Projects.ts`
ne contenait qu'un bloc commenté. Ajouter un nouveau projet ou une nouvelle
expérience demandait donc de modifier directement la section concernée.

## Résumé des changements

1. **Les données vivent maintenant dans `src/data/`**, réellement utilisées
   par les sections plutôt que dupliquées :
   - `src/data/Experiences.ts` exporte désormais `Experiences` (un tableau
     typé `Experience[]`) — le fichier existait déjà mais n'exportait rien.
   - `src/data/Projects.tsx` exporte `Projects` (un tableau typé `Project[]`).
     Renommé de `.ts` à `.tsx` car chaque projet embarque son « mockup »
     visuel en JSX (`visual: <div className="project-window">...</div>`),
     ce qu'un fichier `.ts` ne peut pas contenir. L'ancien `Projects.ts`
     (entièrement commenté, non fonctionnel) a été supprimé.

2. **Deux nouveaux composants réutilisables dans `src/components/`** :
   - `ExperienceComponent.tsx` — rend une entrée du Parcours (date, rôle,
     entreprise, description). Prend `experience` et `isLast` (pour la ligne
     de séparation sous le dernier élément de la liste).
   - `ProjectComponent.tsx` — rend une carte de projet (numéro, type, titre,
     description, stack, lien GitHub, mockup visuel). Prend `project`.

3. **`ProjectsSection.tsx` et `WorkSection.tsx` simplifiés** : chacune importe
   désormais ses données depuis `src/data/` et boucle sur un composant au lieu
   d'un `<article>` écrit en dur :

   ```tsx
   {Projects.map((project) => (
     <ProjectComponent key={project.title} project={project} />
   ))}
   ```

   ```tsx
   {Experiences.map((experience, index) => (
     <ExperienceComponent
       key={experience.role}
       experience={experience}
       isLast={index === Experiences.length - 1}
     />
   ))}
   ```

## Ajouter un projet ou une expérience

- **Projet** : ajouter un objet au tableau `Projects` dans
  `src/data/Projects.tsx` (y compris son `visual` JSX). `ProjectsSection.tsx`
  n'a rien à changer — la carte est générée automatiquement par
  `ProjectComponent`.
- **Expérience** : ajouter un objet au tableau `Experiences` dans
  `src/data/Experiences.ts`. `WorkSection.tsx` n'a rien à changer non plus.

## Fichiers modifiés / créés

| Fichier | Nature du changement |
| --- | --- |
| `src/data/Experiences.ts` | `export` ajouté + type `Experience` ; données inchangées |
| `src/data/Projects.tsx` | Créé (remplace `Projects.ts`) — données + type `Project`, déplacées depuis `ProjectsSection.tsx` |
| `src/data/Projects.ts` | Supprimé — bloc commenté non fonctionnel, superseded par `Projects.tsx` |
| `src/components/ExperienceComponent.tsx` | Créé |
| `src/components/ProjectComponent.tsx` | Créé |
| `src/sections/WorkSection.tsx` | Utilise `ExperienceComponent` + importe `Experiences` depuis `data/` au lieu de les définir localement |
| `src/sections/ProjectsSection.tsx` | Utilise `ProjectComponent` + importe `Projects` depuis `data/` au lieu de les définir localement |

Le contenu (textes, données, liens, markup visuel) est resté strictement
identique — seule l'organisation du code a changé.

## Détails techniques à noter

- **L'entrée « Master Développement Web »** (diplôme, dans `WorkSection.tsx`)
  n'a pas été intégrée au tableau `Experiences` : elle n'a pas la même forme
  (pas de `role`/`company`/`text`, juste une date et un intitulé) et n'est pas
  censée faire partie des « expériences professionnelles » qu'`ExperienceComponent`
  est fait pour représenter. Elle reste un `<article>` écrit à la main dans
  `WorkSection.tsx`, après la boucle.
- **`isLast` sur `ExperienceComponent`** reproduit un détail visuel existant :
  seul le dernier élément de la boucle dessine une ligne de séparation en bas
  (qui sépare visuellement les expériences professionnelles de l'entrée
  diplôme juste en dessous).
- **Le lien « Voir sur GitHub »** de `ProjectComponent` pointe toujours vers
  `Profile.github` (le profil GitHub général), pas vers un dépôt spécifique au
  projet — comportement préexistant, conservé tel quel (`Project` n'a pas de
  champ d'URL par projet).

## Vérifications effectuées

| Vérification | Résultat |
| --- | --- |
| `npx tsc --noEmit` | ✅ Aucune erreur |
| `npm run build` | ✅ Build réussi (31 modules, < 1 s) |
| Test navigateur (Playwright, headless Chromium) | ✅ Aucune erreur console |
| Captures d'écran — sections Projets et Parcours | ✅ Rendu identique à l'avant-changement |
