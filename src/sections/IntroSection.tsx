import Icon from "../components/Icon";
import Section from "../components/Section";
import { profile } from "../data/profile";

function IntroSection() {
  return (
    <Section
      id="accueil"
      spacing={false}
      className="relative min-h-[820px] pb-0 pt-32 md:min-h-[760px] md:pb-0 md:pt-44"
      containerClassName="relative"
    >
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
        <span className="h-2 w-2 rounded-full bg-[#16d412]" />
        Disponible pour une opportunité
      </div>

      <div className="max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-coral">
          Développeuse web full stack
        </p>
        <h1 className="font-serif text-[clamp(3.6rem,12vw,8.5rem)] leading-[0.85] tracking-[-0.055em]">
          Je donne vie
          <br />
          <span className="italic text-coral">aux idées</span> par le code.
        </h1>
      </div>

      <div className="mt-10 flex flex-col gap-8 md:ml-auto md:mt-14 md:max-w-xl">
        <p className="text-lg leading-relaxed text-ink/70 md:text-xl">
          Fraîchement diplômée, je conçois des expériences web utiles et
          soignées, du premier composant jusqu’à la base de données.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="button-primary" href="#projets">
            Découvrir mes projets <Icon name="arrow" />
          </a>
          <a
            className="button-secondary"
            download
            href="/public/cv/cv-fr-kathleen-mboutchouang-dev.pdf"
          >
            <Icon name="download" size={18} /> Télécharger mon CV
          </a>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-ink/15 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-ink/55 md:mt-20">
        <span className="flex items-center gap-2">
          <Icon name="map" size={15} /> {profile.city}
        </span>
        <span className="hidden sm:block">Scroll pour explorer</span>
        <span>2026</span>
      </div>
    </Section>
  );
}

export default IntroSection;
