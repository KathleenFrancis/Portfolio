import Section from "../components/Section";
import Icon from "../components/Icon";
import { profile } from "../data/profile";

function ContactSection() {
  return (
    <Section
      id="contact"
      spacing={false}
      className="accent-panel bg-coral py-20 text-ink md:py-28"
    >
      <p className="eyebrow">05 · Un projet en tête ?</p>
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div>
          <h2 className="font-serif text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.88] tracking-[-0.05em]">
            Créons quelque
            <br />
            chose <span className="italic">ensemble.</span>
          </h2>
          <a
            className="mt-10 inline-flex items-center gap-3 border-b-2 border-ink pb-2 text-lg font-bold transition-gap hover:gap-5 md:text-2xl"
            href={`mailto:${profile.email}`}
          >
            {profile.email} <Icon name="arrow" />
          </a>
        </div>
        <div className="border-t border-ink/20 pt-7">
          <p className="mb-5 text-sm leading-relaxed text-ink/70">
            Je suis à l’écoute d’une première opportunité en CDI et de
            projets qui ont du sens.
          </p>
          <div className="flex gap-3">
            <a
              aria-label="GitHub"
              className="social-link"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              <Icon name="github" />
            </a>
            <a
              aria-label="LinkedIn"
              className="social-link"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Icon name="linkedin" />
            </a>
            <a
              aria-label="E-mail"
              className="social-link"
              href={`mailto:${profile.email}`}
            >
              <Icon name="mail" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
