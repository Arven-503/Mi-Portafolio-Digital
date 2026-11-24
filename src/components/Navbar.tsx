"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Language } from "@/types/portfolio";

interface NavbarProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

const navLabels: Record<Language, { label: string; href: string }[]> = {
  es: [
    { label: "PERFIL", href: "#inicio" },
    { label: "EXPERIENCIA", href: "#experiencia" },
    { label: "PROYECTOS", href: "#proyectos" },
    { label: "SKILLS", href: "#habilidades" },
    { label: "FORMACIÓN", href: "#formacion" },
    { label: "CONTACTO", href: "#contacto" },
  ],
  en: [
    { label: "ABOUT", href: "#inicio" },
    { label: "EXPERIENCE", href: "#experiencia" },
    { label: "PROJECTS", href: "#proyectos" },
    { label: "SKILLS", href: "#habilidades" },
    { label: "EDUCATION", href: "#formacion" },
    { label: "CONTACT", href: "#contacto" },
  ],
};

export default function Navbar({ lang, onChangeLang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const items = navLabels[lang];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[#17191D] bg-[#000000]/92 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1680px] items-center justify-between px-4 py-3.5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase">
          <a
            href="#inicio"
            aria-label="Ir al inicio"
            className="inline-block h-2.5 w-2.5 bg-[#0000DD] transition hover:scale-110"
          />
          <div className="flex items-center gap-2">
            <a
              href="#proyectos"
              className="text-[#777D86] transition hover:text-[#0000DD]"
              title={lang === "es" ? "Ir a Proyectos (04)" : "Go to Projects (04)"}
            >
              SILICON
            </a>
            <span className="text-[#777D86]">/</span>
            <a
              href="#inicio"
              className="text-[#C8CDD5] transition hover:text-[#0000DD]"
              title={lang === "es" ? "Ir a Perfil y Lado Humano (01-03)" : "Go to Profile & Human Side (01-03)"}
            >
              HUMAN
            </a>
          </div>
        </div>

        <nav className="hidden items-center gap-7 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-wider text-[#777D86] transition hover:text-[#E2E6EC]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Selector de idioma"
            className="flex items-center border border-[#17191D] bg-[#08090B] p-0.5 font-mono text-xs"
          >
            <button
              type="button"
              onClick={() => onChangeLang("es")}
              className={`px-2.5 py-1 transition ${
                lang === "es"
                  ? "bg-[#0000DD] font-semibold text-white"
                  : "text-[#777D86] hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onChangeLang("en")}
              className={`px-2.5 py-1 transition ${
                lang === "en"
                  ? "bg-[#0000DD] font-semibold text-white"
                  : "text-[#777D86] hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú de navegación"
            className="border border-[#17191D] bg-[#08090B] p-2 text-[#E2E6EC] hover:border-[#0000DD] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[#17191D] bg-[#08090B] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-2 py-1.5 font-mono text-xs tracking-wider text-[#777D86] hover:bg-[#17191D] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
