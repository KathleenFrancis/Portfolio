import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="dark-panel bg-ink py-7 text-cream">
      <div className="page-container flex flex-col gap-3 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. Tous droits réservés.</p>
        <p>Conçu avec attention · Développé avec React</p>
        <a className="text-cream/70 hover:text-cream" href="#accueil">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
