import React, { useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectDetailsModal from "./components/ProjectDetailsModal";
import TechStackSection from "./components/TechStackSection";
import DiferenciaisSection from "./components/DiferenciaisSection";
import TransparencySection from "./components/TransparencySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import { Project } from "./types";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative min-h-screen bg-brand-bg-main selection:bg-brand-cyan/20 selection:text-brand-cyan text-brand-white focus-visible:outline-none antialiased">
      
      {/* 1. Cyber background grid and deep lighting */}
      <AnimatedBackground />

      {/* 2. Floating glass responsively resizing Navbar */}
      <Navbar />

      {/* 3. Main Page Blocks */}
      <main className="relative z-10 w-full overflow-x-hidden">
        
        {/* Hero Section */}
        <HeroSection />

        {/* Sobre a ED² Tecnologic & Diferenciais */}
        <AboutSection />

        {/* Serviços Oferecidos */}
        <ServicesSection />

        {/* Galeria de Sistemas & Projetos de Engenharia */}
        <ProjectsSection onSelectProject={handleSelectProject} />

        {/* Tecnologias de Integração & Tech Stack */}
        <TechStackSection />

        {/* Por que escolher a ED² Tecnologic */}
        <DiferenciaisSection />

        {/* Transparência e Credibilidade */}
        <TransparencySection />

        {/* Contato & Chamada ao Cliente */}
        <ContactSection />

      </main>

      {/* 4. Telemetria e Footer */}
      <Footer />

      {/* 5. Details Modal popup with fluid exit animation support */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>

      {/* 6. Aviso de cookies (LGPD) — controla o consentimento do GA4 */}
      <CookieConsent />

    </div>
  );
}
