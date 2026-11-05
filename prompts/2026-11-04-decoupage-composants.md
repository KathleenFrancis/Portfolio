# Intitulé

Découpage de `App.tsx` en composants séparés et introduction d'un composant `Section` réutilisable

## Version

- **Version** : 1.0.0
- **Date** : 2026-11-04
- **Branche** : `main`
- **Auteur** : Kathleen Francis (assisté par Claude Code)

## Résumé des changements

`App.tsx` contenait auparavant la navigation, les six sections de la page et le
pied de page dans un seul fichier de ~760 lignes. Ajouter, retirer ou réordonner
une section demandait de naviguer dans tout le fichier. Le code est maintenant
réparti en fichiers dédiés : un fichier par section, un composant `Header` et
un composant `Footer` séparés, et un composant `Section` générique qui fournit
la structure commune (balise `<section>`, conteneur, bloc titre) à la plupart
des sections.

`App.tsx` se résume désormais à une liste de composants :

```tsx
<Header />
<main>
  <IntroSection />
  <AboutSection />
  <ProjectsSection />
  <WorkSection />
  <SkillsSection />
  <ContactSection />
</main>
<Footer />
```

**Ajouter une section** : créer un fichier dans `src/sections/`, l'importer
dans `App.tsx`, ajouter la balise correspondante dans la liste ci-dessus (et un
lien dans `Header.tsx` si elle doit apparaître dans la navigation).

**Retirer une section** : supprimer sa balise (et son import) dans `App.tsx`,
et son lien dans `Header.tsx` le cas échéant. Le fichier de la section peut
être supprimé ou laissé de côté.

## Nouvelle arborescence

```
src/
  App.tsx                       — compose Header, les sections et Footer
  components/
    Header.tsx                  — nav, menu mobile, bouton de thème (état autonome)
    Footer.tsx
    Section.tsx                 — coquille réutilisable (voir ci-dessous)
    Icon.tsx                    — composant Icon + type IconName
  data/
    Profile.ts                  — nom, email, ville, liens (partagé entre plusieurs sections)
  sections/
    IntroSection.tsx              (#accueil)
    AboutSection.tsx             (#a-propos)
    ProjectsSection.tsx          (#projets — contient les données `projects`)
    WorkSection.tsx           (#parcours — contient les données `experiences`)
    SkillsSection.tsx            (pas d'ancre dans le code d'origine — contient les données `skills`)
    ContactSection.tsx           (#contact)
```

Les données propres à une seule section (`projects`, `experiences`, `skills`)
sont restées dans le fichier de la section correspondante plutôt que d'être
extraites dans `data/`, pour éviter d'ajouter un niveau d'indirection pour du
contenu qui n'est utilisé qu'à un seul endroit. Seul `Profile` (utilisé par
`Header`, `IntroSection`, `ProjectsSection` et `ContactSection`) est partagé.

## Le composant `Section`

```tsx
<Section
  id="a-propos"
  className="dark-panel bg-ink text-cream"
  eyebrow="01 · À propos"
  title={
    <>
      Curieuse par nature,{" "}
      <span className="italic text-coral-light">rigoureuse</span> par
      conviction.
    </>
  }
>
  {/* contenu propre à la section */}
</Section>
```

Props disponibles :

| Prop                 | Rôle                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| `id`                 | Ancre de navigation (`href="#..."`)                                                                    |
| `className`          | Classes sur la balise `<section>` (fond, couleur de texte, hauteur personnalisée…)                     |
| `containerClassName` | Classes sur le `.page-container` interne (ex. `relative` pour un fond en position absolue)             |
| `spacing`            | Applique le rythme vertical standard (`.section-space`). `false` pour une section à padding sur mesure |
| `eyebrow`            | Petite étiquette au-dessus du titre, ex. `"01 · À propos"`                                             |
| `title`              | Titre de la section (`<h2>`). Omis = section sans en-tête générée                                      |
| `titleClassName`     | Taille/graisse du titre (chaque section a sa propre typographie)                                       |
| `headingClassName`   | Classes sur le bloc eyebrow+titre, ex. `max-w-2xl`                                                     |
| `description`        | Paragraphe optionnel sous ou à côté du titre                                                           |
| `split`              | Place la description à côté du titre (desktop) au lieu de dessous                                      |
| `bordered`           | Ajoute la ligne de séparation au-dessus du titre                                                       |
| `children`           | Contenu de la section                                                                                  |

### Sections qui utilisent l'en-tête générique

`AboutSection`, `ProjectsSection` et `SkillsSection` partagent la même forme
(étiquette + titre [+ description] au-dessus du contenu) et utilisent donc
pleinement `eyebrow`/`title`/`description`/`split`/`bordered`.

### Sections à mise en page particulière

`IntroSection`, `WorkSection` et `ContactSection` ont une structure propre
(fond en grille absolu, deux colonnes côte à côte, bande corail avec CTA) qui
ne correspond pas au schéma « étiquette + titre au-dessus du contenu ». Elles
utilisent `Section` uniquement comme coquille (`id`, `spacing`,
`containerClassName`) et construisent leur propre en-tête directement dans
`children`, plutôt que de forcer `Section` à gérer une mise en page qui n'est
utilisée qu'une fois. C'est un choix délibéré : plier le composant générique à
ces trois cas aurait ajouté des props spécifiques à un seul usage chacune.

## Fichiers modifiés / créés

| Fichier                            | Nature du changement                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| `src/App.tsx`                      | Réduit à la composition de `Header`, des 6 sections et `Footer`                                  |
| `src/components/Header.tsx`        | Créé — nav, menu mobile, bouton de thème (état `menuOpen`/`isDark` déplacé ici depuis `App.tsx`) |
| `src/components/Footer.tsx`        | Créé                                                                                             |
| `src/components/Section.tsx`       | Créé — coquille réutilisable décrite ci-dessus                                                   |
| `src/components/Icon.tsx`          | Créé — déplacé tel quel depuis `App.tsx`                                                         |
| `src/data/Profile.ts`              | Créé — déplacé tel quel depuis `App.tsx`                                                         |
| `src/sections/IntroSection.tsx`    | Créé                                                                                             |
| `src/sections/AboutSection.tsx`    | Créé                                                                                             |
| `src/sections/ProjectsSection.tsx` | Créé — contient les données `projects`                                                           |
| `src/sections/WorkSection.tsx`     | Créé — contient les données `experiences`                                                        |
| `src/sections/SkillsSection.tsx`   | Créé — contient les données `skills`                                                             |
| `src/sections/ContactSection.tsx`  | Créé                                                                                             |

Aucun fichier CSS n'a été modifié. Le contenu (textes, données, liens) est
resté strictement identique — seule l'organisation du code a changé.

## Détails techniques à noter

- **État du thème et du menu mobile déplacé dans `Header`** : ces deux états
  (`isDark`, `menuOpen`) n'étaient utilisés que par l'en-tête dans le code
  d'origine. Les rendre autonomes dans `Header.tsx` évite d'avoir à les faire
  transiter par `App.tsx` via des props.
- **`containerClassName` ajouté à `Section`** : la section Hero a besoin de
  `position: relative` à la fois sur la balise `<section>` (pour contenir la
  grille de fond en position absolue) et sur le `.page-container` interne
  (pour que le contenu passe au-dessus de cette grille dans l'ordre
  d'empilement). Cette prop permet de cibler le conteneur interne
  spécifiquement, sans quoi le texte du Hero aurait pu se retrouver sous la
  grille décorative.
- **Liens de navigation** : `Header.tsx` définit son propre tableau
  `navLinks` (À propos / Projets / Parcours). Ce tableau n'est pas généré
  automatiquement à partir des sections existantes — ajouter une section
  nécessite donc une modification manuelle (mais limitée à un seul fichier)
  si elle doit apparaître dans la navigation.

## Vérifications effectuées

| Vérification                                                                  | Résultat                                                         |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `npx tsc --noEmit`                                                            | ✅ Aucune erreur                                                 |
| `npm run build`                                                               | ✅ Build réussi (27 modules, < 1,1 s)                            |
| Test navigateur (Playwright, headless Chromium)                               | ✅ Aucune erreur console                                         |
| Captures d'écran — Hero, À propos, Projets, Parcours, Outils, Contact (clair) | ✅ Rendu identique à l'avant-refactorisation                     |
| Capture d'écran — Hero (sombre)                                               | ✅ Mode sombre toujours fonctionnel après le découpage           |
| Capture d'écran — menu mobile                                                 | ✅ Ouverture/fermeture, liens, bouton de thème tous fonctionnels |

## Points d'attention pour la suite

- La section « Ma boîte à outils » n'a pas d'`id` (ni dans le code d'origine,
  ni dans `SkillsSection.tsx`) — elle n'est donc pas atteignable par une ancre
  de navigation. Comportement préexistant, volontairement conservé tel quel
  (non demandé dans cette tâche).
- Si une future section partage la mise en page « étiquette + titre en
  colonne de gauche, contenu en colonne de droite » (comme `WorkSection`),
  il sera temps d'envisager une variante `layout="sidebar"` pour `Section` —
  prématuré tant qu'un seul cas existe.
