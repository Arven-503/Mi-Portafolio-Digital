"use client";

import { useState } from "react";
import {
  FolderGit2,
  Eye,
  X,
  Code2,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Layers,
  Server,
} from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { ProjectItem } from "@/types/portfolio";

const accentStyles: Record<ProjectItem["accentColor"], string> = {
  cyan: "border-sky-300/30 text-sky-200 bg-sky-400/10",
  emerald: "border-emerald-300/30 text-emerald-200 bg-emerald-400/10",
  rose: "border-rose-300/30 text-rose-200 bg-rose-400/10",
  amber: "border-amber-300/30 text-amber-200 bg-amber-400/10",
  indigo: "border-indigo-300/30 text-indigo-200 bg-indigo-400/10",
};

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="proyectos" className="border-b border-stone-200/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs tracking-widest text-rose-300 uppercase">
              03 · Evidencias de las 10 Semanas
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl font-bold text-stone-100 sm:text-4xl">
              Proyectos y Actividades Documentadas
            </h2>
          </div>
          <p className="max-w-md text-sm text-stone-400">
            Selecciona cualquier lámina de proyecto para inspeccionar su código fuente,
            metodología, gráficas de resultados y arquitectura técnica.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="litho-card litho-card-hover flex flex-col justify-between rounded-2xl p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`rounded-full border px-3 py-0.5 text-xs font-medium ${
                      accentStyles[project.accentColor]
                    }`}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-stone-400">
                    {project.evidence.week}
                  </span>
                </div>

                <div className="mt-4 overflow-hidden rounded-xl border border-stone-200/10 bg-stone-950">
                  <img
                    src={project.evidence.images[0]?.src}
                    alt={project.title}
                    className="h-40 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-serif)] text-xl font-bold text-stone-100">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  {project.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.evidence.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-stone-200/10 bg-stone-900/80 px-2 py-0.5 font-mono text-[11px] text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-stone-200/10 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 rounded-lg border border-sky-300/35 bg-sky-400/15 px-3.5 py-2 text-xs font-semibold text-sky-100 transition hover:bg-sky-400/25"
                >
                  <Eye className="h-3.5 w-3.5" />
                  Ver Evidencia y Código
                </button>

                <a
                  href={project.evidence.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir repositorio en GitHub"
                  className="inline-flex items-center gap-1 text-xs text-stone-400 transition hover:text-stone-100"
                >
                  <FolderGit2 className="h-4 w-4" />
                  Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="litho-card relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-stone-200/15 pb-4">
              <div>
                <span className="font-mono text-xs text-sky-300 uppercase">
                  {selectedProject.evidence.week} · {selectedProject.category}
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-serif)] text-2xl font-bold text-stone-100 sm:text-3xl">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar detalle de proyecto"
                className="rounded-lg border border-stone-200/15 p-2 text-stone-300 hover:bg-stone-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {selectedProject.evidence.images.map((img) => (
                <figure
                  key={img.src}
                  className="overflow-hidden rounded-xl border border-stone-200/15 bg-stone-950"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="max-h-72 w-full object-contain"
                  />
                  <figcaption className="border-t border-stone-200/10 px-4 py-2.5 font-mono text-xs text-stone-400">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-stone-200/10 bg-stone-950/60 p-4">
                  <h4 className="text-xs font-semibold tracking-wider text-amber-300 uppercase">
                    Problema que resuelve
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-stone-300">
                    {selectedProject.evidence.problem}
                  </p>
                </div>

                <div className="rounded-xl border border-stone-200/10 bg-stone-950/60 p-4">
                  <h4 className="text-xs font-semibold tracking-wider text-sky-300 uppercase">
                    Objetivo de la actividad
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-stone-300">
                    {selectedProject.evidence.objective}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-stone-200/10 bg-stone-950/60 p-4">
                <h4 className="text-xs font-semibold tracking-wider text-rose-300 uppercase">
                  Explicación de la solución implementada
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  {selectedProject.evidence.solutionExplanation}
                </p>
              </div>

              <div className="rounded-xl border border-stone-200/10 bg-stone-950/60 p-4">
                <h4 className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                  Resultados obtenidos
                </h4>
                <ul className="mt-3 space-y-2">
                  {selectedProject.evidence.results.map((res) => (
                    <li
                      key={res}
                      className="flex items-start gap-2.5 text-sm text-stone-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.evidence.architectureDetails && (
                <div className="space-y-4 rounded-xl border border-indigo-300/25 bg-indigo-950/20 p-5">
                  <div className="flex items-center gap-2 text-indigo-200">
                    <Layers className="h-4 w-4" />
                    <h4 className="text-sm font-semibold">
                      Documentación de Arquitectura Frontend y Backend
                    </h4>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-xs text-sky-300">
                        Estructura del Proyecto Next.js
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-stone-300">
                        {selectedProject.evidence.architectureDetails.projectStructure.map(
                          (item) => (
                            <li key={item}>• {item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <p className="font-mono text-xs text-rose-300">
                        Componentes React Desarrollados
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-stone-300">
                        {selectedProject.evidence.architectureDetails.frontendComponents.map(
                          (item) => (
                            <li key={item}>• {item}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="grid gap-4 border-t border-stone-200/10 pt-3 sm:grid-cols-2">
                    <div>
                      <p className="flex items-center gap-1.5 font-mono text-xs text-emerald-300">
                        <Server className="h-3.5 w-3.5" />
                        Endpoints API REST
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-stone-300">
                        {selectedProject.evidence.architectureDetails.backendEndpoints.map(
                          (item) => (
                            <li key={item}>• {item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <p className="font-mono text-xs text-amber-300">
                        Validaciones y Seguridad
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-stone-300">
                        {selectedProject.evidence.architectureDetails.validations.map(
                          (item) => (
                            <li key={item}>• {item}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="overflow-hidden rounded-xl border border-stone-200/15 bg-[#080a0f]">
                <div className="flex items-center justify-between border-b border-stone-200/10 bg-stone-900/70 px-4 py-2.5">
                  <div className="flex items-center gap-2 font-mono text-xs text-stone-300">
                    <Code2 className="h-4 w-4 text-sky-300" />
                    <span>{selectedProject.evidence.fileName}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(selectedProject.evidence.codeSnippet)}
                    className="inline-flex items-center gap-1.5 rounded-md border border-stone-200/15 px-2.5 py-1 text-xs text-stone-300 hover:bg-stone-800"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-300" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copiar código
                      </>
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-stone-200">
                  <code>{selectedProject.evidence.codeSnippet}</code>
                </pre>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-200/10 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.evidence.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-stone-200/15 px-2.5 py-1 font-mono text-xs text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedProject.evidence.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-sky-300/35 bg-sky-400/15 px-4 py-2 text-xs font-semibold text-sky-100 hover:bg-sky-400/25"
                >
                  Abrir Archivos en GitHub
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
