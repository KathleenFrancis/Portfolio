import ProjectComponent from "../components/ProjectComponent";
import Section from "../components/Section";
import { Projects } from "../data/Projects";

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
        {Projects.map((project) => (
          <ProjectComponent key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
