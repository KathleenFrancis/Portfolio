import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import IntroSection from "./sections/IntroSection";
import JourneySection from "./sections/JourneySection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

// Pour ajouter/retirer une section de la page, ajoute/retire son composant
// ici (et son lien dans Header.tsx si elle doit être accessible depuis la nav).
function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink">
      <Header />
      <main>
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
