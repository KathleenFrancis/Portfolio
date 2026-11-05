import Section from "../components/Section";
import Icon, { type IconName } from "../components/Icon";

const skills: { icon: IconName; title: string; items: string }[] = [
  {
    icon: "code",
    title: "Front-end",
    items: "React · TypeScript\nHTML · CSS · Tailwind",
  },
  {
    icon: "server",
    title: "Back-end",
    items: "Node.js · Express\nAPI REST · Auth",
  },
  {
    icon: "database",
    title: "Données",
    items: "PostgreSQL · MongoDB\nPrisma · SQL",
  },
  {
    icon: "layers",
    title: "Outils",
    items: "Git · GitHub · Figma\nDocker · Méthode agile",
  },
];

function SkillsSection() {
  return (
    <Section
      eyebrow="04 · Ma boîte à outils"
      title="Technologies & savoir-faire."
      titleClassName="font-serif text-5xl md:text-7xl"
      headingClassName="max-w-2xl"
      bordered={false}
    >
      <div className="grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
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
    </Section>
  );
}

export default SkillsSection;
