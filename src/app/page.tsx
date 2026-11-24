"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutExperienceSection from "@/components/AboutExperienceSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import SkillsEducationSection from "@/components/SkillsEducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Language } from "@/types/portfolio";

export default function HomePage() {
  const [lang, setLang] = useState<Language>("es");

  return (
    <div className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar lang={lang} onChangeLang={setLang} />
      <main className="flex-1">
        <HeroSection lang={lang} />
        <AboutExperienceSection lang={lang} />
        <ProjectsShowcase lang={lang} />
        <SkillsEducationSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
