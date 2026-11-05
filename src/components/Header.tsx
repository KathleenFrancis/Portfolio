import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import Icon from "./Icon";

const navLinks = [
  { label: "À propos", href: "#a-propos" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
];

function Header() {
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
            {navLinks.map((link) => (
              <a className="nav-link" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
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
            {[...navLinks, { label: "Contact", href: "#contact" }].map(
              (link) => (
                <a
                  className="border-b border-ink/10 py-3"
                  href={link.href}
                  key={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
