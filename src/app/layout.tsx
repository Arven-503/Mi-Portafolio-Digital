import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Portafolio Digital | Inteligencia Artificial y Desarrollo Full-Stack",
  description:
    "Portafolio profesional de proyectos en Inteligencia Artificial, Machine Learning, Algoritmos y Desarrollo Web con Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased litho-grid min-h-screen selection:bg-sky-400/30 selection:text-sky-100">
        {children}
      </body>
    </html>
  );
}
