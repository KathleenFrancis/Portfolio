import Section from "../components/Section";
import Icon from "../components/Icon";
import { profile } from "../data/profile";

const projects = [
  {
    number: "01",
    type: "Application web",
    title: "Planify",
    description:
      "Un espace collaboratif pour organiser les projets, répartir les tâches et suivre leur progression en équipe.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    color: "bg-[#dce6d5]",
    visual: (
      <div className="project-window text-ink">
        <div className="flex items-center gap-1.5 border-b border-ink/10 p-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a62]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#f4c95d]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#6ca06c]" />
        </div>
        <div className="grid grid-cols-[38px_1fr] gap-3 p-3">
          <div className="space-y-2 border-r border-ink/10">
            <div className="h-5 w-5 rounded-md bg-ink" />
            <div className="h-5 w-5 rounded-md bg-white/70" />
            <div className="h-5 w-5 rounded-md bg-white/70" />
          </div>
          <div>
            <div className="mb-3 h-2 w-20 rounded-full bg-ink/20" />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((column) => (
                <div className="space-y-2" key={column}>
                  <div className="h-2 w-10 rounded-full bg-ink/15" />
                  <div className="h-12 rounded-md bg-white/75 p-2">
                    <div className="h-1.5 w-full rounded-full bg-ink/10" />
                    <div className="mt-2 h-1.5 w-2/3 rounded-full bg-ink/10" />
                  </div>
                  <div className="h-9 rounded-md bg-white/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    type: "Plateforme e-commerce",
    title: "Maison Lune",
    description:
      "Une boutique en ligne pensée pour une navigation fluide, de la découverte des produits jusqu’au paiement.",
    stack: ["React", "Express", "MongoDB", "Stripe"],
    color: "bg-[#f1d8c9]",
    visual: (
      <div className="project-window p-3 text-ink">
        <div className="mb-3 flex items-center justify-between border-b border-ink/10 pb-2">
          <span className="font-serif text-xs italic">maison lune</span>
          <div className="flex gap-2">
            <span className="h-1.5 w-6 rounded-full bg-ink/15" />
            <span className="h-1.5 w-4 rounded-full bg-ink/15" />
          </div>
        </div>
        <div className="grid grid-cols-[1.2fr_1fr] gap-3">
          <div className="flex h-28 items-end bg-[#e9c5b0] p-3">
            <span className="font-serif text-lg leading-none">
              Objets pour
              <br />
              le quotidien.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#eadfd7]" />
            <div className="bg-[#ded6c9]" />
            <div className="bg-[#d8c2b4]" />
            <div className="bg-[#eee8df]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    type: "Dashboard",
    title: "Pulse",
    description:
      "Un tableau de bord analytique qui transforme des données complexes en indicateurs clairs et actionnables.",
    stack: ["TypeScript", "React", "REST API", "Chart.js"],
    color: "bg-[#d9d8ed]",
    visual: (
      <div className="project-window p-3 text-ink">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-2 w-20 rounded-full bg-ink/20" />
          <div className="h-5 w-14 rounded-full bg-white/60" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[62, 48, 76].map((value) => (
            <div className="rounded-md bg-white/55 p-2" key={value}>
              <div className="mb-2 h-1.5 w-8 rounded-full bg-ink/10" />
              <span className="font-serif text-lg">{value}%</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex h-16 items-end gap-2 rounded-md bg-white/55 px-3 pt-3">
          {[35, 55, 40, 75, 58, 88, 70, 95].map((height, i) => (
            <span
              className="flex-1 rounded-t-sm bg-[#65628d]"
              key={i}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    ),
  },
];

function ProjectsSection() {
  return (
    <Section
      id="projets"
      eyebrow="02 · Projets sélectionnés"
      title="Quelques réalisations."
      titleClassName="font-serif text-5xl tracking-tight md:text-7xl"
      description="Des projets d’étude et professionnels qui reflètent mon approche du développement."
      split
    >
      <div className="mt-14 divide-y divide-ink/15 border-y border-ink/15">
        {projects.map((project) => (
          <article
            className="group grid gap-7 py-10 md:grid-cols-[60px_1fr_1.15fr] md:items-center md:gap-10 md:py-14"
            key={project.title}
          >
            <span className="font-serif text-xl text-ink/35">
              {project.number}
            </span>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-coral">
                {project.type}
              </p>
              <h3 className="font-serif text-4xl md:text-5xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-ink/60">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {project.stack.map((item) => (
                  <span className="text-xs font-semibold text-ink/55" key={item}>
                    — {item}
                  </span>
                ))}
              </div>
              <a
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold underline decoration-ink/25 underline-offset-4 transition-colors hover:text-coral"
                href={profile.github}
              >
                Voir sur GitHub <Icon name="external" size={16} />
              </a>
            </div>
            <div
              className={`${project.color} flex aspect-[4/3] items-center p-7 transition-transform duration-500 group-hover:-rotate-1 md:p-10`}
            >
              {project.visual}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
