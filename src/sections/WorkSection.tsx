import ExperienceComponent from "../components/ExperienceComponent";
import Section from "../components/Section";
import { Experiences } from "../data/Experiences";

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
        {Experiences.map((experience, index) => (
          <ExperienceComponent
            experience={experience}
            isLast={index === Experiences.length - 1}
            key={experience.role}
          />
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
