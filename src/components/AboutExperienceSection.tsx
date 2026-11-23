"use client";

import { User, Compass, Target, Award, Briefcase, CheckCircle2 } from "lucide-react";
import { profileData, experiencesData } from "@/data/portfolioData";

export default function AboutExperienceSection() {
  return (
    <>
      <section id="sobre-mi" className="border-b border-stone-200/10 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-widest text-sky-300 uppercase">
              01 · Perfil &amp; Visión
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl font-bold text-stone-100 sm:text-4xl">
              Sobre mí
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="litho-card rounded-2xl p-6 sm:p-8 lg:col-span-7">
              <div className="flex items-center gap-2.5 text-sky-300">
                <User className="h-5 w-5" />
                <h3 className="font-semibold text-stone-100">¿Quién soy y qué estudio?</h3>
              </div>
              <p className="mt-4 leading-relaxed text-stone-300">
                {profileData.about.whoAmI}
              </p>
              <p className="mt-3 rounded-xl border border-stone-200/10 bg-stone-950/50 p-4 text-sm text-stone-300">
                <strong className="text-sky-200">Formación actual:</strong>{" "}
                {profileData.about.studies}
              </p>

              <div className="mt-6 flex items-start gap-2.5">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <div>
                  <h4 className="font-semibold text-stone-100">
                    Objetivos personales y profesionales
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-300">
                    {profileData.about.goals}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="litho-card rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-rose-300">
                  <Compass className="h-5 w-5" />
                  <h3 className="font-semibold text-stone-100">Intereses Técnicos</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profileData.about.interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-lg border border-rose-300/20 bg-rose-400/10 px-3 py-1.5 text-xs text-rose-100"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="litho-card rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-emerald-300">
                  <Award className="h-5 w-5" />
                  <h3 className="font-semibold text-stone-100">Fortalezas Clave</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {profileData.about.strengths.map((strength) => (
                    <li
                      key={strength}
                      className="flex items-start gap-2.5 text-sm text-stone-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="border-b border-stone-200/10 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-widest text-emerald-300 uppercase">
              02 · Trayectoria &amp; Práctica
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl font-bold text-stone-100 sm:text-4xl">
              Experiencia Académica y Proyectos
            </h2>
          </div>

          <div className="relative space-y-6 border-l border-stone-200/15 pl-6 sm:pl-8">
            {experiencesData.map((exp) => (
              <article
                key={exp.id}
                className="litho-card litho-card-hover relative rounded-2xl p-6"
              >
                <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-emerald-300 bg-[#0b0d13] sm:-left-[39px]" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-0.5 text-xs font-medium text-emerald-200">
                    <Briefcase className="h-3 w-3" />
                    {exp.type}
                  </span>
                  <span className="font-mono text-xs text-stone-400">{exp.period}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-stone-100">{exp.role}</h3>
                <p className="text-sm font-medium text-sky-300">{exp.organization}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-300">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-1.5 border-t border-stone-200/10 pt-3">
                  {exp.achievements.map((ach) => (
                    <li
                      key={ach}
                      className="flex items-start gap-2 text-xs text-stone-300 sm:text-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
