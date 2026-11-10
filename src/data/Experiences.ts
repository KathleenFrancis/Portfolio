export type Experience = {
  date: string;
  role: string;
  company: string;
  text: string;
};

export const Experiences: Experience[] = [
  {
    date: "Janvier — Mai 2026",
    role: "Développeuse full-stack",
    company: "Université de Montréal · Stage 3",
    text: "Développement d’une application d’acquisition et de visualisation de données en temps réel, optimisation d’algorithmes multi-capteurs et intégration avec des systèmes embarqués.",
  },
  {
    date: "Janvier — Août 2025",
    role: "Développeuse web",
    company: "Ubisoft · Stage 2",
    text: "Développement de fonctionnalités web en AngularJS et TypeScript, révision de code et participation aux cycles Scrum au sein d’une équipe agile.",
  },
  {
    date: "Mai — Août 2022",
    role: "Développeuse web",
    company: "C3F Telecom · Stage 1",
    text: "Développement de fonctionnalités web en ReactJS et TypeScript, révision de code et soutien technique aux utilisateurs internes.",
  },
  {
    date: "Mai — Juillet 2021",
    role: "Développeuse web front-end",
    company: "Génération Clik · Stage de fin de DEC",
    text: "Intégration de contenu web et personnalisation de thèmes Shopify et WordPress dans le cadre de refontes de sites.",
  },
];
