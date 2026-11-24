"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { profileData } from "@/data/portfolioData";
import { Language } from "@/types/portfolio";

interface ContactSectionProps {
  lang: Language;
}

interface ApiResponse {
  ok: boolean;
  message?: string;
  error?: string;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(
    null
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    if (name.trim().length < 2) {
      setStatus({
        type: "error",
        text:
          lang === "es"
            ? "Por favor ingresa tu nombre completo (mínimo 2 caracteres)."
            : "Please enter your full name (at least 2 characters).",
      });
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setStatus({
        type: "error",
        text:
          lang === "es"
            ? "Por favor ingresa un correo electrónico válido."
            : "Please enter a valid email address.",
      });
      return;
    }

    if (message.trim().length < 10) {
      setStatus({
        type: "error",
        text:
          lang === "es"
            ? "El mensaje debe tener al menos 10 caracteres."
            : "Message must be at least 10 characters long.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok || !data.ok) {
        setStatus({
          type: "error",
          text:
            data.error ??
            (lang === "es" ? "Ocurrió un error al enviar." : "Error sending message."),
        });
      } else {
        setStatus({
          type: "success",
          text:
            lang === "es"
              ? `Gracias ${name}, tu mensaje fue recibido por la API.`
              : `Thank you ${name}, your message was received by the API.`,
        });
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setStatus({
        type: "error",
        text:
          lang === "es"
            ? "Error de conexión con el servidor API REST."
            : "Connection error with the REST API server.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="scroll-mt-20 bg-[#000000] py-12">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="chip-panel grid gap-8 p-7 sm:p-10 lg:grid-cols-12"
        >
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#777D86] uppercase">
                {lang === "es" ? "07 // CONTACTO" : "07 // CONTACT"}
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#C8CDD5] uppercase sm:text-4xl">
                {lang === "es" ? "CONEXIÓN DIRECTA" : "DIRECT CONNECTION"}
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#777D86]">
                {lang === "es"
                  ? "Canal directo de comunicación profesional conectado al endpoint backend POST /api/contact."
                  : "Direct professional communication channel connected to the POST /api/contact backend endpoint."}
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs uppercase">
                <a
                  href={`mailto:daniel.amaya.dev.2007@gmail.com`}
                  className="block border border-[#17191D] bg-[#000000] p-3.5 text-[#C8CDD5] transition hover:border-[#0000DD]"
                >
                  EMAIL // {profileData.socials.email}
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-[#17191D] bg-[#000000] p-3.5 text-[#777D86] transition hover:border-[#0000DD] hover:text-[#C8CDD5]"
                >
                  LINKEDIN ↗
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-[#17191D] bg-[#000000] p-3.5 text-[#777D86] transition hover:border-[#0000DD] hover:text-[#C8CDD5]"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-[#17191D] pt-4 font-mono text-[11px] text-[#777D86]">
              API ENDPOINT // POST /api/contact
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 border-t border-[#17191D] pt-6 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-[11px] tracking-widest text-[#777D86] uppercase"
                >
                  {lang === "es" ? "Nombre completo" : "Full Name"}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === "es" ? "EJ. ANA MARÍA LÓPEZ" : "E.G. JOHN DOE"}
                  className="mt-1.5 w-full border border-[#17191D] bg-[#000000] px-4 py-3 font-mono text-xs text-[#C8CDD5] placeholder-[#777D86]/50 focus:border-[#0000DD] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[11px] tracking-widest text-[#777D86] uppercase"
                >
                  {lang === "es" ? "Correo electrónico" : "Email Address"}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === "es" ? "CORREO@EJEMPLO.COM" : "EMAIL@EXAMPLE.COM"}
                  className="mt-1.5 w-full border border-[#17191D] bg-[#000000] px-4 py-3 font-mono text-xs text-[#C8CDD5] placeholder-[#777D86]/50 focus:border-[#0000DD] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[11px] tracking-widest text-[#777D86] uppercase"
              >
                {lang === "es" ? "Mensaje" : "Message"}
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  lang === "es"
                    ? "ESCRIBE TU MENSAJE AQUÍ (MÍNIMO 10 CARACTERES)..."
                    : "WRITE YOUR MESSAGE HERE (AT LEAST 10 CHARACTERS)..."
                }
                className="mt-1.5 w-full border border-[#17191D] bg-[#000000] px-4 py-3 font-mono text-xs text-[#C8CDD5] placeholder-[#777D86]/50 focus:border-[#0000DD] focus:outline-none"
              />
            </div>

            {status && (
              <div
                role="alert"
                className={`border p-3.5 font-mono text-xs ${
                  status.type === "success"
                    ? "border-[#0000DD] bg-[#0000DD]/15 text-[#C8CDD5]"
                    : "border-[#777D86] bg-[#17191D] text-[#C8CDD5]"
                }`}
              >
                {status.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 bg-[#0000DD] px-6 py-3.5 font-mono text-xs font-medium tracking-wider text-white uppercase transition hover:bg-[#0000ff] disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
              {loading
                ? lang === "es"
                  ? "TRANSMITIENDO..."
                  : "TRANSMITTING..."
                : lang === "es"
                ? "ENVIAR MENSAJE"
                : "SEND MESSAGE"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
