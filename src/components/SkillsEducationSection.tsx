"use client";

import { motion } from "framer-motion";
import { skillsData, educationData } from "@/data/portfolioData";
import { Language } from "@/types/portfolio";

interface SkillsEducationSectionProps {
  lang: Language;
}

export default function SkillsEducationSection({ lang }: SkillsEducationSectionProps) {
  return (
    <>
      <section id="habilidades" className="scroll-mt-20 border-b border-[#17191D] bg-[#000000] py-12">
        <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="chip-panel p-7 sm:p-10"
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#17191D] pb-5">
              <div>
                <span className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
                  {lang === "es"
                    ? "05 // MATRIZ DE TRANSISTORES"
                    : "05 // TRANSISTOR MATRIX"}
                </span>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#C8CDD5] uppercase sm:text-4xl">
                  SKILLS
                </h2>
              </div>
              <span className="font-mono text-xs text-[#777D86]">
                {lang === "es" ? "06 MÓDULOS INTEGRADOS" : "06 INTEGRATED MODULES"}
              </span>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skillsData.map((group, idx) => (
                <motion.div
                  key={group.category.es}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex flex-col items-center"
                >
                  <span className="mb-2 font-mono text-[10px] tracking-widest text-[#777D86] uppercase">
                    {lang === "es" ? "COMPONENTE" : "COMPONENT"} 0{idx + 1}
                  </span>

                  <div className="relative flex w-full items-center justify-center px-2">
                    <div className="flex flex-col gap-2">
                      <span className="h-1 w-3 bg-[#777D86]" />
                      <span className="h-1 w-3 bg-[#777D86]" />
                      <span className="h-1 w-3 bg-[#777D86]" />
                      <span className="h-1 w-3 bg-[#777D86]" />
                    </div>

                    <div className="transistor-pin-box w-full p-5">
                      <div className="flex items-center justify-between border-b border-[#17191D] pb-2.5">
                        <h3 className="font-mono text-xs font-semibold text-[#D2D6DD] uppercase">
                          {group.category[lang]}
                        </h3>
                        <span className="h-2 w-2 bg-[#0000DD]" />
                      </div>

                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="border border-[#17191D] bg-[#17191D] px-2.5 py-1 font-mono text-[11px] text-[#C8CDD5]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="h-1 w-3 bg-[#777D86]" />
                      <span className="h-1 w-3 bg-[#777D86]" />
                      <span className="h-1 w-3 bg-[#777D86]" />
                      <span className="h-1 w-3 bg-[#777D86]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 border-t border-[#17191D] pt-4 text-center font-mono text-[11px] tracking-[0.25em] text-[#777D86] uppercase">
              {lang === "es"
                ? "MATRIZ DE COMPETENCIAS VERIFICADAS"
                : "VERIFIED COMPETENCY MATRIX"}
            </p>
          </motion.div>
        </div>
      </section>

      <section id="formacion" className="scroll-mt-20 border-b border-[#17191D] bg-[#000000] py-12">
        <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="chip-panel p-7 sm:p-10"
          >
            <div className="border-b border-[#17191D] pb-5">
              <span className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
                {lang === "es" ? "06 // BASE ACADÉMICA" : "06 // ACADEMIC BACKGROUND"}
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#C8CDD5] uppercase sm:text-4xl">
                {lang === "es" ? "FORMACIÓN ACADÉMICA" : "EDUCATION"}
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {educationData.map((edu, idx) => {
                const item = edu[lang];
                return (
                  <motion.article
                    key={edu.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="chip-hover flex flex-col justify-between border border-[#17191D] bg-[#08090B] p-6"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-[#777D86]">
                        <span className="border border-[#0000DD] px-2 py-0.5 text-[#C8CDD5]">
                          {item.status.toUpperCase()}
                        </span>
                        <span>{item.period}</span>
                      </div>

                      <h3 className="mt-4 font-[family-name:var(--font-display)] text-base font-bold text-[#D2D6DD] uppercase">
                        {item.degree}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-[#777D86]">
                        {item.institution}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-2 border-t border-[#17191D] pt-4">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs leading-relaxed text-[#777D86]"
                        >
                          — {h}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
