import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SILICON / HUMAN · Portafolio Digital",
  description:
    "Portafolio profesional minimalista inspirado en arquitectura de silicio, inteligencia artificial y desarrollo Full-Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased bg-black text-[#F4F5F7] min-h-screen selection:bg-[#0000DD] selection:text-white">
        {children}
      </body>
    </html>
  );
}
