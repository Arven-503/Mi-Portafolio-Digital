"use client";

import { useState } from "react";
import { Menu, X, Feather } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/10 bg-[#0b0d13]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 text-stone-100 transition hover:text-sky-300"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200/20 bg-stone-900/80 shadow-inner">
            <Feather className="h-4 w-4 text-sky-300 transition-transform group-hover:-rotate-12" />
          </span>
          <span className="font-[family-name:var(--font-serif)] text-xl font-semibold tracking-wide">
            Atelier<span className="text-sky-300">.IA</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-300 transition hover:text-sky-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú de navegación"
          className="rounded-lg border border-stone-200/15 p-2 text-stone-200 hover:bg-stone-800/60 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-stone-200/10 bg-[#0d1018] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1.5 text-sm text-stone-200 hover:bg-stone-800/60 hover:text-sky-300"
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
