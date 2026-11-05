import Section from "../components/Section";
import Icon from "../components/Icon";

function AboutSection() {
  return (
    <Section
      id="a-propos"
      className="dark-panel bg-ink text-cream"
      eyebrow="01 · À propos"
      title={
        <>
          Curieuse par nature,
          <br />
          <span className="italic text-coral-light">rigoureuse</span> par
          conviction.
        </>
      }
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        <div className="relative">
          <div className="aspect-[4/3] border border-cream/15 bg-[#242b2d] p-6 md:p-10">
            <div className="flex h-full flex-col justify-between">
              <div className="flex justify-between text-xs uppercase tracking-[0.16em] text-cream/45">
                <span>01 — Design</span>
                <span>02 — Code</span>
              </div>
              <div>
                <div className="mb-5 flex items-center gap-4 text-coral-light">
                  <Icon name="code" size={40} />
                  <span className="h-px flex-1 bg-cream/15" />
                  <Icon name="database" size={40} />
                </div>
                <p className="font-serif text-3xl leading-tight md:text-5xl">
                  Front-end
                  <span className="text-coral-light"> &amp; </span>
                  <br />
                  Back-end
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">
            J’aime comprendre un besoin dans son ensemble pour créer des
            solutions
            <span className="italic text-coral-light">
              {" "}
              simples, durables et humaines.
            </span>
          </p>
          <p className="mt-7 max-w-xl leading-relaxed text-cream/60">
            Mes stages et mon alternance m’ont permis de travailler sur des
            projets concrets, en collaboration avec des designers,
            développeurs et équipes métier. J’accorde autant d’importance à
            la qualité du code qu’à l’expérience finale.
          </p>
          <div className="mt-10 grid grid-cols-3 border-y border-cream/15 py-6">
            <div>
              <strong className="block font-serif text-5xl text-coral-light">
                7+
              </strong>
              <span className="text-xs text-cream/50">expériences</span>
            </div>
            <div>
              <strong className="block font-serif text-3xl text-coral-light">
                1+
              </strong>
              <span className="text-xs text-cream/50">
                expériences en entreprise
              </span>
            </div>
            <div>
              <strong className="block font-serif text-3xl text-coral-light">
                10+
              </strong>
              <span className="text-xs text-cream/50">projets réalisés</span>
            </div>
            <div>
              <strong className="block font-serif text-3xl text-coral-light">
                100%
              </strong>
              <span className="text-xs text-cream/50">passionnée</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
