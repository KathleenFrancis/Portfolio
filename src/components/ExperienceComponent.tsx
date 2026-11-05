import type { Experience } from "../data/Experiences";

type ExperienceComponentProps = {
  experience: Experience;
  /** Draws the divider line under the last item of the list. */
  isLast?: boolean;
};

function ExperienceComponent({
  experience,
  isLast = false,
}: ExperienceComponentProps) {
  return (
    <article className="relative border-t border-ink/20 py-8 pl-8 first:pt-0 lg:grid lg:grid-cols-[140px_1fr] lg:gap-8 lg:pl-0">
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
      {isLast && (
        <div className="absolute bottom-0 left-0 h-px w-full bg-ink/20" />
      )}
    </article>
  );
}

export default ExperienceComponent;
