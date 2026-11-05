import Icon from "./Icon";
import { Profile } from "../data/Profile";
import type { Project } from "../data/Projects";

function ProjectComponent({ project }: { project: Project }) {
  return (
    <article className="group grid gap-7 py-10 md:grid-cols-[60px_1fr_1.15fr] md:items-center md:gap-10 md:py-14">
      <span className="font-serif text-xl text-ink/35">{project.number}</span>
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-coral">
          {project.type}
        </p>
        <h3 className="font-serif text-4xl md:text-5xl">{project.title}</h3>
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
          href={Profile.github}
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
  );
}

export default ProjectComponent;
