import { profileData } from "@/data/portfolioData";
import { Language } from "@/types/portfolio";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-[#17191D] bg-[#000000] py-8">
      <div className="mx-auto flex w-full max-w-[1680px] flex-col items-center justify-between gap-4 px-4 font-mono text-xs text-[#777D86] sm:flex-row sm:px-8 lg:px-12">
        <p>
          © 2026 {profileData.fullName.toUpperCase()} ·{" "}
          {lang === "es" ? "PORTAFOLIO DIGITAL" : "DIGITAL PORTFOLIO"}
        </p>
        <p>NEXT.JS · TYPESCRIPT · TAILWIND CSS</p>
      </div>
    </footer>
  );
}
