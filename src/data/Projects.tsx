import type { ReactNode } from "react";
import Icon from "../components/Icon";

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  number: string;
  type: string;
  title: string;
  description: string;
  stack: string[];
  color: string;
  visual: ReactNode;
  links: ProjectLink[];
};

export const Projects: Project[] = [
  {
    number: "01",
    type: "Recherche documentaire & IA",
    title: "LitExtract AI",
    description:
      "Un outil de recherche et d’analyse de documents basé sur des techniques d’intelligence artificielle, pensé pour améliorer la pertinence des résultats.",
    stack: ["Python", "FastAPI", "ReactJS", "Ollama"],
    color: "bg-[#dce6d5]",
    links: [
      { label: "Voir sur GitHub", url: "https://github.com/KathleenFrancis" },
    ],
    visual: (
      <div className="project-window p-6 text-ink">
        <span className="mb-5 block text-ink/35">
          <Icon name="database" size={32} />
        </span>
        <p className="font-serif text-xl leading-snug">
          Recherche documentaire
          <br />
          en intelligence artificielle
        </p>
      </div>
    ),
  },
  {
    number: "02",
    type: "Application mobile",
    title: "Dishcovery",
    description:
      "Une application mobile complète avec navigation, gestion d’état et intégration à une API backend pour la gestion des données.",
    stack: ["React Native", "Expo", "Firebase", "Firestore"],
    color: "bg-[#f1d8c9]",
    links: [
      {
        label: "Voir sur GitHub",
        url: "https://github.com/adil-ets/dishcovery",
      },
    ],
    visual: (
      <div className="project-window p-6 text-ink">
        <span className="mb-5 block text-ink/35">
          <Icon name="layers" size={32} />
        </span>
        <p className="font-serif text-xl leading-snug">
          Application mobile
          <br />
          multiplateforme
        </p>
      </div>
    ),
  },
  {
    number: "03",
    type: "Simulation & robotique",
    title: "Programmation mathématique",
    description:
      "Une librairie de calcul matriciel et de simulation physique, incluant la cinématique inverse d’un bras robotisé.",
    stack: ["C++", "CMake", "GitHub"],
    color: "bg-[#d9d8ed]",
    links: [
      { label: "Voir sur GitHub", url: "https://github.com/KathleenFrancis" },
    ],
    visual: (
      <div className="project-window p-6 text-ink">
        <span className="mb-5 block text-ink/35">
          <Icon name="code" size={32} />
        </span>
        <p className="font-serif text-xl leading-snug">
          Matrices, vecteurs
          <br />
          et cinématique inverse
        </p>
      </div>
    ),
  },
  {
    number: "04",
    type: "Outils DevOps",
    title: "Metrics EQ8",
    description:
      "Une API Python de collecte de métriques Kanban et de pull requests via l’API GraphQL de GitHub, avec configuration Kubernetes et suivi des indicateurs d’équipe pour le système MobilitySoft.",
    stack: ["Python", "SQLite", "GitHub", "GraphQL", "Kubernetes"],
    color: "bg-[#ece3c9]",
    links: [
      {
        label: "Metrics EQ8",
        url: "https://github.com/JAMC8/metrics-eq8",
      },
      {
        label: "MobilitySoft",
        url: "https://github.com/JAMC8/mobilitysoft-eq8",
      },
    ],
    visual: (
      <div className="project-window p-6 text-ink">
        <span className="mb-5 block text-ink/35">
          <Icon name="server" size={32} />
        </span>
        <p className="font-serif text-xl leading-snug">
          Métriques Kanban
          <br />
          et pull requests
        </p>
      </div>
    ),
  },
  {
    number: "05",
    type: "Application mobile",
    title: "WordCut",
    description:
      "Un jeu de mots mobile où l’on réarrange des lettres pour former de nouveaux mots valides, avec validation en temps réel et support bilingue français/anglais.",
    stack: ["React Native", "Expo", "TypeScript", "Expo Router"],
    color: "bg-[#f0d9e0]",
    links: [
      {
        label: "Voir sur GitHub",
        url: "https://github.com/KathleenFrancis/wordcut-mobile",
      },
    ],
    visual: (
      <div className="project-window p-6 text-ink">
        <span className="mb-5 block text-ink/35">
          <Icon name="layers" size={32} />
        </span>
        <p className="font-serif text-xl leading-snug">
          Jeu de mots
          <br />
          mobile
        </p>
      </div>
    ),
  },
  {
    number: "06",
    type: "Jeu vidéo",
    title: "I don't want to be Isekai'ed",
    description:
      "Un jeu vidéo de type top-down où le joueur n’est qu’une ombre, il ne peut pas se déplacer dans la lumière. Le joueur devra donc résoudre des énigmes afin de se frayer un chemin et de retrouver sa vitalité.",
    stack: ["Unity", "C#", "GitHub"],
    color: "bg-[#e6d9f0]",
    links: [
      {
        label: "Voir sur GitHub",
        url: "https://github.com/H2024-equipe-01/I-dont-want-to-be-Isekaied",
      },
      {
        label: "Télécharger le jeu",
        url: "https://emeulai.itch.io/i-dont-want-to-be-isekaied",
      },
    ],
    visual: (
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="project-window h-full w-full"
        src="https://www.youtube.com/embed/_BT-JGT0efE"
        title="YouTube video player"
      ></iframe>
    ),
  },
  {
    number: "07",
    type: "Application web",
    title: "MTL Vélo",
    description:
      "Une application web de visualisation de données sur les stations de vélo en libre-service à Montréal, avec intégration d’une API publique et affichage dynamique des données.",
    stack: ["ReactJS", "TypeScript", "TailwindCSS", "Vite"],
    color: "bg-[#d9e6f0]",
    links: [
      {
        label: "Voir sur GitHub",
        url: "https://github.com/svaillancourt98/gti525-e2026-laboratoire",
      },
    ],
    visual: (
      <div className="project-window p-6 text-ink">
        <span className="mb-5 block text-ink/35">
          <Icon name="layers" size={32} />
        </span>
        <p className="font-serif text-xl leading-snug">
          Visualisation de données
          <br />
          sur les stations de vélo
        </p>
      </div>
    ),
  },
];
