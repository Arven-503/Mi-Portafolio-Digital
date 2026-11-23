"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Sparkles, Mail } from "lucide-react";
import { profileData } from "@/data/portfolioData";

export default function HeroSection() {
  const initials = profileData.fullName
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-stone-200/10 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full watercolor-wash-cyan blur-2xl" />
      <div className="pointer-events-none absolute top-16 right-1/4 h-72 w-72 rounded-full watercolor-wash-rose blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-400/10 px-3.5 py-1 text-xs font-medium tracking-wider text-sky-200 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            Portafolio Digital · 10 Semanas de IA &amp; Desarrollo
          </div>

          <h1 className="font-[family-name:var(--font-serif)] text-4xl font-bold leading-tight tracking-tight text-stone-100 sm:text-6xl">
            {profileData.fullName}
          </h1>

          <p className="mt-3 text-lg font-medium text-sky-300 sm:text-xl">
            {profileData.role}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
            {profileData.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-300/40 bg-sky-400/15 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:bg-sky-400/25"
            >
              Explorar Proyectos y Evidencias
              <ArrowDownRight className="h-4 w-4 text-sky-300" />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-200/20 bg-stone-900/60 px-5 py-3 text-sm font-medium text-stone-200 transition hover:border-stone-200/40 hover:text-white"
            >
              <Mail className="h-4 w-4 text-rose-300" />
              Contactar
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 border-t border-stone-200/10 pt-6">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-sky-300"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-sky-300"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex justify-center lg:col-span-4"
        >
          <div className="litho-card relative flex w-full max-w-xs flex-col items-center rounded-2xl p-7 text-center">
            <div className="pointer-events-none absolute -inset-2 rounded-3xl watercolor-wash-amber opacity-60 blur-xl" />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-sky-300/45 bg-gradient-to-br from-sky-500/20 via-rose-500/15 to-amber-500/20 shadow-lg">
              <span className="font-[family-name:var(--font-serif)] text-4xl font-bold tracking-widest text-stone-100">
                {initials}
              </span>
            </div>
            <p className="mt-4 font-mono text-xs tracking-widest text-stone-400 uppercase">
              Lámina de Identidad
            </p>
            <p className="mt-1 font-[family-name:var(--font-serif)] text-xl font-semibold text-stone-100">
              {profileData.location}
            </p>
            <div className="mt-4 w-full border-t border-stone-200/10 pt-3 text-xs text-stone-400">
              React · Next.js · Python · Machine Learning
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
