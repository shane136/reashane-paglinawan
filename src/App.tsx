import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#1F2E2B] font-sans selection:bg-[#C98B80] selection:text-white transition-colors duration-300">
      
      {/* Sticky Header Navigation */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner Section (Overview, What I Do, My Approach) */}
        <Hero onNavigate={scrollToSection} />

        {/* Web-Based Projects & Uploads */}
        <ProjectsSection />

        {/* Education Timeline (MSU-IIT) */}
        <EducationSection />

        {/* Contact & Interactive Inquiry Builder */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={scrollToSection} />

    </div>
  );
}
