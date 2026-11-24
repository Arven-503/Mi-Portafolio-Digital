"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, User } from "lucide-react";
import { profileData } from "@/data/portfolioData";
import { Language } from "@/types/portfolio";

interface HeroSectionProps {
  lang: Language;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const content = profileData[lang];
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/mi_foto.jpg";
    img.onload = () => setHasPhoto(true);
    img.onerror = () => setHasPhoto(false);
  }, []);

  return (
    <section
      id="inicio"
      className="border-b border-[#17191D] bg-[#000000] pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="wafer-die-grid relative overflow-hidden border border-[#17191D] p-8 sm:p-14 lg:p-20"
        >
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest text-[#777D86] uppercase"
              >
                <span className="h-2 w-7 bg-[#0000DD]" />
                <span>{content.role}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.98] tracking-tight text-[#C8CDD5] sm:text-7xl xl:text-8xl"
              >
                Daniel Alejandro
                <span className="block text-[#AEB4BE]">Amaya</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.38 }}
                className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-[#9DA3AE] sm:text-xl"
              >
                {content.role} — <span className="text-[#D2D6DD]">{content.tagline}</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 bg-[#0000DD] px-6 py-3.5 font-mono text-xs font-medium tracking-wider text-white uppercase transition hover:bg-[#0000ff]"
                >
                  {lang === "es" ? "Explorar Proyectos" : "Explore Projects"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 border border-[#17191D] bg-[#17191D] px-6 py-3.5 font-mono text-xs tracking-wider text-[#D2D6DD] uppercase transition hover:border-[#777D86]"
                >
                  {lang === "es" ? "Conexión Directa" : "Direct Connection"}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.62 }}
                className="mt-12 flex flex-wrap items-center gap-8 border-t border-[#17191D] pt-5 font-mono text-xs text-[#777D86]"
              >
                <span>LOC // {content.location.toUpperCase()}</span>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#D2D6DD]"
                >
                  GITHUB ↗
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#D2D6DD]"
                >
                  LINKEDIN ↗
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.35 }}
              className="border border-[#17191D] bg-[#000000]/95 p-6 lg:col-span-4"
            >
              <div className="flex items-center justify-between border-b border-[#17191D] pb-3 font-mono text-xs tracking-wider text-[#C8CDD5] uppercase">
                <span>{lang === "es" ? "SOBRE MÍ" : "ABOUT ME"}</span>
                <span className="h-2.5 w-2.5 bg-[#0000DD]" />
              </div>

              <div className="my-6 flex justify-center">
                <div className="relative h-48 w-48 overflow-hidden border-2 border-[#0000DD] bg-[#08090B] p-1.5 sm:h-52 sm:w-52">
                  {hasPhoto ? (
                    <img
                      src="/mi_foto.jpg"
                      alt="Daniel Alejandro Amaya"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center border border-dashed border-[#777D86]/40 bg-[#08090B] px-3 text-center">
                      <User className="h-10 w-10 text-[#0000DD]" />
                      <span className="mt-2.5 font-mono text-xs tracking-wider text-[#C8CDD5] uppercase">
                        {lang === "es" ? "ESPACIO PARA FOTO" : "PHOTO PLACEHOLDER"}
                      </span>
                      <span className="mt-1 font-mono text-[11px] text-[#777D86]">
                        public/mi_foto.jpg
                      </span>
                    </div>
                  )}
                  <span className="absolute right-0 bottom-0 h-3 w-3 bg-[#0000DD]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-[#17191D] pt-4 font-mono">
                <div className="border border-[#17191D] bg-[#08090B] p-3">
                  <span className="block text-[11px] text-[#777D86] uppercase">
                    {lang === "es" ? "FECHA DE NACIMIENTO" : "DATE OF BIRTH"}
                  </span>
                  <span className="mt-1 block text-base font-bold text-[#C8CDD5] uppercase">
                    {lang === "es" ? "09 NOV 2007" : "NOV 09, 2007"}
                  </span>
                </div>
                <div className="border border-[#17191D] bg-[#08090B] p-3">
                  <span className="block text-[11px] text-[#777D86] uppercase">
                    {lang === "es" ? "EXPERIENCIA" : "EXPERIENCE"}
                  </span>
                  <span className="mt-1 block text-base font-bold text-[#0000DD] uppercase">
                    FULL-STACK
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
