"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  X,
  Code2,
  ExternalLink,
  Copy,
  Check,
  Layers,
  Server,
} from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { ProjectItem, Language } from "@/types/portfolio";

interface ProjectsShowcaseProps {
  lang: Language;
}

export default function ProjectsShowcase({ lang }: ProjectsShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="proyectos" className="scroll-mt-20 border-b border-[#17191D] bg-[#000000] py-12">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="chip-panel p-7 sm:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#17191D] pb-6">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
                {lang === "es"
                  ? "04 // EVIDENCIAS DE LAS 10 SEMANAS"
                  : "04 // 10-WEEK TECHNICAL EVIDENCE"}
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#C8CDD5] uppercase sm:text-4xl">
                {lang === "es" ? "UNIDADES DE PROCESAMIENTO" : "PROCESSING UNITS"}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-16 bg-[#0000DD]" />
              <span className="h-1.5 w-8 bg-[#17191D]" />
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projectsData.filter((p) => p.id !== "proj-fullstack").map((project, index) => {
              const details = project[lang];
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="chip-hover flex flex-col justify-between border border-[#17191D] bg-[#08090B] p-6"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[#777D86]">
                      <span>
                        {lang === "es" ? "UNIDAD" : "UNIT"} 0{index + 1} ·{" "}
                        {details.week.toUpperCase()}
                      </span>
                      <span>{project.category[lang].toUpperCase()}</span>
                    </div>

                    <div className="mt-3 overflow-hidden border border-[#17191D] bg-[#000000]">
                      <img
                        src={project.imageSources[0]}
                        alt={project.title[lang]}
                        className="h-36 w-full object-cover"
                      />
                    </div>

                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[#D2D6DD] uppercase">
                      {project.title[lang]}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-[#777D86] sm:text-sm">
                      {project.shortDescription[lang]}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#17191D] pt-4">
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#17191D] px-2 py-0.5 font-mono text-[10px] text-[#777D86]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 bg-[#0000DD] px-3.5 py-2 font-mono text-[11px] font-medium text-white uppercase transition hover:bg-[#0000ff]"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        {lang === "es" ? "Ver Evidencia y Código" : "View Evidence & Code"}
                      </button>

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-[#17191D] bg-[#17191D] px-3.5 py-2 font-mono text-[11px] font-medium text-[#C8CDD5] uppercase transition hover:border-[#0000DD] hover:text-white"
                      >
                        {lang === "es" ? "Ver en GitHub" : "View on GitHub"}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mt-8 border border-[#17191D] bg-[#08090B] p-6"
          >
            <p className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
              {lang === "es" ? "RESUMEN TÉCNICO POR UNIDAD" : "TECHNICAL SUMMARY PER UNIT"}
            </p>
            <div className="mt-4 grid gap-4 font-mono text-xs sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col justify-between gap-1 border border-[#17191D] bg-[#000000] p-3.5">
                <span className="text-[10px] text-[#777D86]">
                  {lang === "es" ? "01 // REGRESIÓN LINEAL" : "01 // LINEAR REGRESSION"}
                </span>
                <span className="text-sm font-semibold text-[#C8CDD5]">R² = 0.888</span>
              </div>
              <div className="flex flex-col justify-between gap-1 border border-[#17191D] bg-[#000000] p-3.5">
                <span className="text-[10px] text-[#777D86]">
                  {lang === "es" ? "02 // LABERINTO DFS/BFS" : "02 // DFS/BFS MAZE"}
                </span>
                <span className="text-sm font-semibold text-[#C8CDD5]">27x39 · 60 FPS</span>
              </div>
              <div className="flex flex-col justify-between gap-1 border border-[#17191D] bg-[#000000] p-3.5">
                <span className="text-[10px] text-[#777D86]">03 // K-MEANS + KNN</span>
                <span className="text-sm font-semibold text-[#C8CDD5]">N = 500 · K=3/4</span>
              </div>
              <div className="flex flex-col justify-between gap-1 border border-[#17191D] bg-[#000000] p-3.5">
                <span className="text-[10px] text-[#777D86]">04 // HOTSPOTS GEO-ML</span>
                <span className="text-sm font-semibold text-[#0000DD]">HAVERSINE + LOO</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-[#262930] bg-[#08090B] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-[#17191D] pb-4">
              <div>
                <span className="font-mono text-xs text-[#777D86] uppercase">
                  {selectedProject[lang].week} // {selectedProject.category[lang]}
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-[#C8CDD5] uppercase sm:text-3xl">
                  {selectedProject.title[lang]}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar detalle de proyecto"
                className="border border-[#17191D] bg-[#17191D] p-2 text-[#C8CDD5] hover:border-[#0000DD]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {selectedProject.imageSources.map((src, i) => (
                <figure key={src} className="border border-[#17191D] bg-[#000000]">
                  <img
                    src={src}
                    alt={selectedProject[lang].imageCaptions[i] ?? selectedProject.title[lang]}
                    className="max-h-72 w-full object-contain"
                  />
                  <figcaption className="border-t border-[#17191D] px-4 py-2.5 font-mono text-xs text-[#777D86]">
                    {selectedProject[lang].imageCaptions[i]}
                  </figcaption>
                </figure>
              ))}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-[#17191D] bg-[#000000] p-4">
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-[#777D86] uppercase">
                    {lang === "es" ? "Problema que resuelve" : "Problem Solved"}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#C8CDD5]">
                    {selectedProject[lang].problem}
                  </p>
                </div>

                <div className="border border-[#17191D] bg-[#000000] p-4">
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-[#777D86] uppercase">
                    {lang === "es" ? "Objetivo de la actividad" : "Activity Objective"}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#C8CDD5]">
                    {selectedProject[lang].objective}
                  </p>
                </div>
              </div>

              <div className="border border-[#17191D] bg-[#000000] p-4">
                <h4 className="font-mono text-xs font-semibold tracking-wider text-[#777D86] uppercase">
                  {lang === "es"
                    ? "Explicación de la solución implementada"
                    : "Implemented Solution Explanation"}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#C8CDD5]">
                  {selectedProject[lang].solutionExplanation}
                </p>
              </div>

              <div className="border border-[#17191D] bg-[#000000] p-4">
                <h4 className="font-mono text-xs font-semibold tracking-wider text-[#777D86] uppercase">
                  {lang === "es" ? "Resultados obtenidos" : "Achieved Results"}
                </h4>
                <ul className="mt-3 space-y-2">
                  {selectedProject[lang].results.map((res) => (
                    <li
                      key={res}
                      className="flex items-start gap-2.5 text-sm text-[#C8CDD5]"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#0000DD]" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject[lang].architectureDetails && (
                <div className="space-y-4 border border-[#0000DD] bg-[#000000] p-5">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#C8CDD5] uppercase">
                    <Layers className="h-4 w-4 text-[#0000DD]" />
                    <h4>
                      {lang === "es"
                        ? "Documentación de Arquitectura Frontend y Backend"
                        : "Frontend & Backend Architecture Documentation"}
                    </h4>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-xs text-[#777D86] uppercase">
                        {lang === "es" ? "Estructura del Proyecto" : "Project Structure"}
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-[#C8CDD5]">
                        {selectedProject[lang].architectureDetails!.projectStructure.map(
                          (item) => (
                            <li key={item}>— {item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <p className="font-mono text-xs text-[#777D86] uppercase">
                        {lang === "es" ? "Componentes React" : "React Components"}
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-[#C8CDD5]">
                        {selectedProject[lang].architectureDetails!.frontendComponents.map(
                          (item) => (
                            <li key={item}>— {item}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="grid gap-4 border-t border-[#17191D] pt-3 sm:grid-cols-2">
                    <div>
                      <p className="flex items-center gap-1.5 font-mono text-xs text-[#777D86] uppercase">
                        <Server className="h-3.5 w-3.5 text-[#0000DD]" />
                        {lang === "es" ? "Endpoints API REST" : "REST API Endpoints"}
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-[#C8CDD5]">
                        {selectedProject[lang].architectureDetails!.backendEndpoints.map(
                          (item) => (
                            <li key={item}>— {item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <p className="font-mono text-xs text-[#777D86] uppercase">
                        {lang === "es" ? "Validaciones y Seguridad" : "Validations & Security"}
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-[#C8CDD5]">
                        {selectedProject[lang].architectureDetails!.validations.map(
                          (item) => (
                            <li key={item}>— {item}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="border border-[#17191D] bg-[#000000]">
                <div className="flex items-center justify-between border-b border-[#17191D] bg-[#17191D] px-4 py-2.5">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#C8CDD5]">
                    <Code2 className="h-4 w-4 text-[#0000DD]" />
                    <span>{selectedProject.fileName}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(selectedProject.codeSnippet)}
                    className="inline-flex items-center gap-1.5 border border-[#777D86]/40 bg-[#08090B] px-2.5 py-1 font-mono text-xs text-[#C8CDD5] hover:border-[#0000DD]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#0000DD]" />
                        {lang === "es" ? "COPIADO" : "COPIED"}
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        {lang === "es" ? "COPIAR" : "COPY"}
                      </>
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-[#C8CDD5]">
                  <code>{selectedProject.codeSnippet}</code>
                </pre>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#17191D] pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#17191D] px-2.5 py-1 font-mono text-xs text-[#777D86]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0000DD] px-4 py-2 font-mono text-xs font-medium text-white uppercase hover:bg-[#0000ff]"
                >
                  {lang === "es" ? "Ver en GitHub" : "View on GitHub"}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
