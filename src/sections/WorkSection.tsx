import Section from "../components/Section";

const experiences = [
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

function WorkSection() {
  return (
    <Section
      id="parcours"
      className="work-section border-y border-ink/10"
      containerClassName="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
    >
      <div>
        <p className="eyebrow">03 · Mon parcours</p>
        <h2 className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
          Apprendre.
          <br />
          <span className="italic text-coral">Pratiquer.</span>
          <br />
          Évoluer.
        </h2>
        <p className="mt-7 max-w-sm leading-relaxed text-ink/60">
          Une formation solide, enrichie par des expériences où j’ai appris à
          transformer les contraintes en solutions.
        </p>
      </div>

      <div>
        {experiences.map((experience, index) => (
          <article
            className="relative border-t border-ink/20 py-8 pl-8 first:pt-0 lg:grid lg:grid-cols-[140px_1fr] lg:gap-8 lg:pl-0"
            key={experience.role}
          >
            <span className="absolute left-0 top-9 h-2.5 w-2.5 rounded-full bg-coral first:top-1 lg:hidden" />
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-ink/45 lg:mb-0">
              {experience.date}
            </p>
            <div>
              <h3 className="font-serif text-2xl">{experience.role}</h3>
              <p className="mt-1 text-sm font-bold text-coral">
                {experience.company}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-ink/60">
                {experience.text}
              </p>
            </div>
            {index === experiences.length - 1 && (
              <div className="absolute bottom-0 left-0 h-px w-full bg-ink/20" />
            )}
          </article>
        ))}

        <article className="grid py-8 pl-8 lg:grid-cols-[140px_1fr] lg:gap-8 lg:pl-0">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-ink/45 lg:mb-0">
            2022 — 2025
          </p>
          <div>
            <h3 className="font-serif text-2xl">Master Développement Web</h3>
            <p className="mt-1 text-sm font-bold text-coral">
              École du numérique · Diplômée
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}

export default WorkSection;
