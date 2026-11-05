export type Experience = {
  date: string;
  role: string;
  company: string;
  text: string;
};

export const Experiences: Experience[] = [
  {
    date: "2024 — 2025",
    role: "Développeuse full stack",
    company: "Studio Digital · Alternance",
    text: "Développement de fonctionnalités métier, création d’API et participation aux choix techniques au sein d’une équipe agile.",
  },
  {
    date: "2024",
    role: "Développeuse front-end",
    company: "Agence Web · Stage",
    text: "Intégration d’interfaces responsives et accessibles, connexion aux API et optimisation de l’expérience utilisateur.",
  },
  {
    date: "2023",
    role: "Développeuse web",
    company: "Startup SaaS · Stage",
    text: "Conception d’un outil interne, de la modélisation des données jusqu’au déploiement de l’interface.",
  },
];
