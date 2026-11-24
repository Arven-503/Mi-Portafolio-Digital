"use client";

import { motion } from "framer-motion";
import { Gamepad2, PenTool, Headphones } from "lucide-react";
import { profileData, experiencesData } from "@/data/portfolioData";
import { Language } from "@/types/portfolio";

interface AboutExperienceSectionProps {
  lang: Language;
}

const personalHobbies = {
  es: [
    {
      icon: Gamepad2,
      code: "MOD // 01",
      title: "Videojuegos",
      text: "Disfruto explorar mundos interactivos, mecánicas estratégicas y narrativas inmersivas que despiertan la creatividad y la resolución de retos.",
    },
    {
      icon: PenTool,
      code: "MOD // 02",
      title: "Escribir",
      text: "La escritura es mi espacio personal para ordenar ideas, plasmar historias y expresar reflexiones con claridad y estilo propio.",
    },
    {
      icon: Headphones,
      code: "MOD // 03",
      title: "Escuchar Música",
      text: "La música acompaña mi día a día, ya sea para concentrarme mientras programo o para desconectar y encontrar inspiración.",
    },
  ],
  en: [
    {
      icon: Gamepad2,
      code: "MOD // 01",
      title: "Video Games",
      text: "I enjoy exploring interactive worlds, strategic mechanics, and immersive stories that spark creativity and problem-solving.",
    },
    {
      icon: PenTool,
      code: "MOD // 02",
      title: "Writing",
      text: "Writing is my personal space to organize ideas, craft stories, and express reflections with clarity and my own voice.",
    },
    {
      icon: Headphones,
      code: "MOD // 03",
      title: "Listening to Music",
      text: "Music accompanies my daily routine, whether to stay focused while coding or to unwind and find fresh inspiration.",
    },
  ],
};

export default function AboutExperienceSection({ lang }: AboutExperienceSectionProps) {
  const about = profileData[lang].about;
  const hobbies = personalHobbies[lang];

  return (
    <section id="sobre-mi" className="scroll-mt-20 border-b border-[#17191D] bg-[#000000] py-12">
      <div className="mx-auto grid w-full max-w-[1680px] gap-6 px-4 sm:px-8 lg:grid-cols-12 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="chip-panel flex flex-col justify-between p-7 sm:p-10 lg:col-span-6"
        >
          <div>
            <div className="flex items-center justify-between border-b border-[#17191D] pb-4">
              <span className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
                {lang === "es" ? "01 // SOBRE MÍ" : "01 // ABOUT ME"}
              </span>
              <span className="h-1.5 w-10 bg-[#0000DD]" />
            </div>

            <div className="mt-6 grid items-center gap-6 sm:grid-cols-12">
              <div className="space-y-4 text-base leading-relaxed text-[#D2D6DD] sm:col-span-8">
                <p>{about.whoAmI}</p>
                <p className="text-sm text-[#9DA3AE]">{about.goals}</p>
              </div>

              <div className="flex justify-center sm:col-span-4">
                <svg viewBox="0 0 180 180" className="h-36 w-36" aria-hidden="true">
                  <rect width="180" height="180" fill="#08090B" />
                  <g stroke="#777D86" strokeWidth="2">
                    <line x1="55" y1="22" x2="55" y2="42" />
                    <line x1="78" y1="22" x2="78" y2="42" />
                    <line x1="102" y1="22" x2="102" y2="42" />
                    <line x1="125" y1="22" x2="125" y2="42" />
                    <line x1="55" y1="138" x2="55" y2="158" />
                    <line x1="78" y1="138" x2="78" y2="158" />
                    <line x1="102" y1="138" x2="102" y2="158" />
                    <line x1="125" y1="138" x2="125" y2="158" />
                    <line x1="22" y1="55" x2="42" y2="55" />
                    <line x1="22" y1="78" x2="42" y2="78" />
                    <line x1="22" y1="102" x2="42" y2="102" />
                    <line x1="22" y1="125" x2="42" y2="125" />
                    <line x1="138" y1="55" x2="158" y2="55" />
                    <line x1="138" y1="78" x2="158" y2="78" />
                    <line x1="138" y1="102" x2="158" y2="102" />
                    <line x1="138" y1="125" x2="158" y2="125" />
                  </g>
                  <rect x="42" y="42" width="96" height="96" fill="#17191D" stroke="#777D86" strokeWidth="2" />
                  <rect x="58" y="58" width="64" height="64" fill="#08090B" stroke="#0000DD" strokeWidth="2" />
                  <rect x="82" y="82" width="16" height="16" fill="#0000DD" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4 border-t border-[#17191D] pt-5">
            <div>
              <p className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
                {lang === "es" ? "FORMACIÓN ACTUAL" : "CURRENT STUDIES"}
              </p>
              <p className="mt-1.5 text-sm text-[#D2D6DD]">{about.studies}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
                  {lang === "es" ? "INTERESES" : "INTERESTS"}
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-[#C8CDD5]">
                  {about.interests.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
                  {lang === "es" ? "FORTALEZAS" : "STRENGTHS"}
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-[#C8CDD5]">
                  {about.strengths.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="experiencia"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="chip-panel scroll-mt-20 flex flex-col justify-between p-7 sm:p-10 lg:col-span-6"
        >
          <div>
            <div className="flex items-center justify-between border-b border-[#17191D] pb-4">
              <span className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
                {lang === "es" ? "02 // TRAYECTORIA" : "02 // EXPERIENCE"}
              </span>
              <span className="font-mono text-xs text-[#0000DD]">02</span>
            </div>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#C8CDD5] uppercase sm:text-3xl">
              {lang === "es"
                ? "ALGUNAS DE MIS EXPERIENCIAS"
                : "SOME OF MY EXPERIENCES"}
            </h2>

            <div className="mt-8 space-y-6">
              {experiencesData.map((exp, idx) => {
                const item = exp[lang];
                return (
                  <motion.article
                    key={exp.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="border-l-2 border-[#17191D] py-2 pl-5 transition hover:border-[#0000DD]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#777D86]">
                      <span>{item.type.toUpperCase()}</span>
                      <span className="text-[#C8CDD5]">{item.period}</span>
                    </div>
                    <h3 className="mt-1.5 text-lg font-bold text-[#D2D6DD] uppercase">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[#9DA3AE]">
                      {item.organization}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="mt-8 border-t border-[#17191D] pt-4 font-mono text-xs text-[#777D86]">
            {lang === "es"
              ? "PARTICIPACIÓN ACTIVA // 2024 – 2026"
              : "ACTIVE PARTICIPATION // 2024 – 2026"}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="chip-panel p-7 sm:p-10 lg:col-span-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#17191D] pb-4">
            <span className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
              {lang === "es" ? "03 // LADO HUMANO" : "03 // HUMAN SIDE"}
            </span>
            <span className="h-1.5 w-10 bg-[#0000DD]" />
          </div>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#C8CDD5] uppercase sm:text-3xl">
                {lang === "es"
                  ? "HOBBIES Y GUSTOS PERSONALES"
                  : "HOBBIES & PERSONAL INTERESTS"}
              </h2>
              <p className="mt-1.5 text-sm text-[#9DA3AE]">
                {lang === "es"
                  ? "Más allá del código y la tecnología, estas son las actividades que forman parte de mi vida diaria."
                  : "Beyond code and technology, these are the activities that shape my everyday life."}
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {hobbies.map((hobby, idx) => {
              const Icon = hobby.icon;
              return (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="chip-hover border border-[#17191D] bg-[#000000] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#777D86]">{hobby.code}</span>
                    <Icon className="h-5 w-5 text-[#0000DD]" />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[#D2D6DD] uppercase">
                    {hobby.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#AEB4BE]">
                    {hobby.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
