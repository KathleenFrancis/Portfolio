import { useEffect, useState, type ReactNode } from "react";

const profile = {
  name: "Kathleen Mboutchouang",
  initials: "KM",
  email: "kathleenfrancismbo@gmail.com",
  city: "Montréal, Canada",
  github: "https://github.com/KathleenFrancis",
  linkedin: "https://www.linkedin.com/in/kathleen-francis-mbo/",
};

type IconName =
  | "arrow"
  | "code"
  | "database"
  | "download"
  | "external"
  | "github"
  | "layers"
  | "linkedin"
  | "mail"
  | "map"
  | "menu"
  | "moon"
  | "server"
  | "sun"
  | "x";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </>
    ),
    download: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m10 14 10-10" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    github: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.5 6.8 6.9A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-5-1.5-5-1.5" />
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.8 5.6a2.3 2.3 0 0 1-2.4 0L2 7" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />,
    server: (
      <>
        <rect width="18" height="8" x="3" y="3" rx="2" />
        <rect width="18" height="8" x="3" y="13" rx="2" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.dataset.theme === "dark",
  );

  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => setIsDark((current) => !current);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
        <nav
          className="page-container flex h-[72px] items-center justify-between"
          aria-label="Navigation principale"
        >
          <a
            className="group flex items-center gap-3"
            href="#accueil"
            onClick={closeMenu}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-xs font-bold tracking-wide text-cream transition-transform group-hover:-rotate-6">
              {profile.initials}
            </span>
            <span className="text-sm font-semibold tracking-tight">
              {profile.name}
            </span>
          </a>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden items-center gap-8 text-sm font-medium md:flex">
              <a className="nav-link" href="#a-propos">
                À propos
              </a>
              <a className="nav-link" href="#projets">
                Projets
              </a>
              <a className="nav-link" href="#parcours">
                Parcours
              </a>
              <a className="button-small" href="#contact">
                Me contacter <Icon name="arrow" size={16} />
              </a>
            </div>

            <button
              aria-label={
                isDark ? "Activer le mode clair" : "Activer le mode sombre"
              }
              className="theme-toggle"
              onClick={toggleTheme}
              type="button"
            >
              <Icon name={isDark ? "sun" : "moon"} size={18} />
            </button>

            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
            >
              <Icon name={menuOpen ? "x" : "menu"} />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-ink/10 bg-cream px-5 py-6 md:hidden">
            <div className="flex flex-col gap-1 text-lg font-medium">
              {[
                ["À propos", "#a-propos"],
                ["Projets", "#projets"],
                ["Parcours", "#parcours"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  className="border-b border-ink/10 py-3"
                  href={href}
                  key={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          className="relative min-h-[820px] pt-32 md:min-h-[760px] md:pt-44"
          id="accueil"
        >
          <div className="hero-grid absolute inset-0 opacity-40" />
          <div className="page-container relative">
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
                <span className="italic text-coral">aux idées</span> par le
                code.
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
          </div>
        </section>

        <section
          className="dark-panel section-space bg-ink text-cream"
          id="a-propos"
        >
          <div className="page-container">
            <div className="section-heading">
              <p className="eyebrow text-coral-light">01 · À propos</p>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Curieuse par nature,
                <br />
                <span className="italic text-coral-light">rigoureuse</span> par
                conviction.
              </h2>
            </div>

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
                  Mes stages et mon alternance m’ont permis de travailler sur
                  des projets concrets, en collaboration avec des designers,
                  développeurs et équipes métier. J’accorde autant d’importance
                  à la qualité du code qu’à l’expérience finale.
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
                    <span className="text-xs text-cream/50">
                      projets réalisés
                    </span>
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
          </div>
        </section>

        <section className="section-space" id="projets">
          <div className="page-container">
            <div className="section-heading md:flex md:items-end md:justify-between">
              <div>
                <p className="eyebrow">02 · Projets sélectionnés</p>
                <h2 className="font-serif text-5xl tracking-tight md:text-7xl">
                  Quelques réalisations.
                </h2>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55 md:mt-0">
                Des projets d’étude et professionnels qui reflètent mon approche
                du développement.
              </p>
            </div>

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
                        <span
                          className="text-xs font-semibold text-ink/55"
                          key={item}
                        >
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
          </div>
        </section>

        <section
          className="journey-section section-space border-y border-ink/10"
          id="parcours"
        >
          <div className="page-container grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
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
                Une formation solide, enrichie par des expériences où j’ai
                appris à transformer les contraintes en solutions.
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
                  <h3 className="font-serif text-2xl">
                    Master Développement Web
                  </h3>
                  <p className="mt-1 text-sm font-bold text-coral">
                    École du numérique · Diplômée
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="page-container">
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow">04 · Ma boîte à outils</p>
              <h2 className="font-serif text-5xl md:text-7xl">
                Technologies &amp; savoir-faire.
              </h2>
            </div>
            <div className="grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "code" as IconName,
                  title: "Front-end",
                  items: "React · TypeScript\nHTML · CSS · Tailwind",
                },
                {
                  icon: "server" as IconName,
                  title: "Back-end",
                  items: "Node.js · Express\nAPI REST · Auth",
                },
                {
                  icon: "database" as IconName,
                  title: "Données",
                  items: "PostgreSQL · MongoDB\nPrisma · SQL",
                },
                {
                  icon: "layers" as IconName,
                  title: "Outils",
                  items: "Git · GitHub · Figma\nDocker · Méthode agile",
                },
              ].map((skill) => (
                <div
                  className="min-h-56 border-b border-r border-ink/15 p-7 transition-colors hover:bg-white/50"
                  key={skill.title}
                >
                  <span className="mb-12 block text-coral">
                    <Icon name={skill.icon} size={30} />
                  </span>
                  <h3 className="font-serif text-2xl">{skill.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-ink/55">
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="accent-panel bg-coral py-20 text-ink md:py-28"
          id="contact"
        >
          <div className="page-container">
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
          </div>
        </section>
      </main>

      <footer className="dark-panel bg-ink py-7 text-cream">
        <div className="page-container flex flex-col gap-3 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. Tous droits réservés.</p>
          <p>Conçu avec attention · Développé avec React</p>
          <a className="text-cream/70 hover:text-cream" href="#accueil">
            Retour en haut ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
