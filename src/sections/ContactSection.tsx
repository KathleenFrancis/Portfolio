import Form from "../components/Form";
import Icon from "../components/Icon";
import Section from "../components/Section";
import { Profile } from "../data/Profile";

function ContactSection() {
  return (
    <Section
      id="contact"
      spacing={false}
      className="accent-panel bg-coral py-20 text-ink md:py-28"
    >
      <p className="eyebrow">05 · Contact</p>
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div>
          <h2 className="font-serif text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.88] tracking-[-0.05em]">
            Créons quelque
            <br />
            chose <span className="italic">ensemble.</span>
          </h2>
        </div>
      </div>

      <div className="mt-16 grid gap-10 border-t border-ink/20 pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 md:mt-20">
        <div>
          <p className="eyebrow">Mes coordonnées</p>
          <p className="mt-5 max-w-sm leading-relaxed text-ink/70">
            Recrutement, collaboration ou échange, je suis à l’écoute. N’hésitez
            pas à me contacter par e-mail ou via LinkedIn.
          </p>

          <div className="pt-7">
            <div className="flex gap-3">
              <a
                aria-label="GitHub"
                className="social-link"
                href={Profile.github}
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="github" />
              </a>
              <a
                aria-label="LinkedIn"
                className="social-link"
                href={Profile.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="linkedin" />
              </a>
              <a
                aria-label="E-mail"
                className="social-link"
                href={`mailto:${Profile.email}`}
              >
                <Icon name="mail" />
              </a>
            </div>
          </div>
        </div>

        <Form />
      </div>
    </Section>
  );
}

export default ContactSection;
