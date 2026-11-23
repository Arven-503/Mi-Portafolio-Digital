import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (name.length < 2) {
      return NextResponse.json(
        {
          ok: false,
          error: "El nombre debe tener al menos 2 caracteres.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Ingresa un correo electrónico con formato válido.",
        },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          error: "El mensaje debe contener al menos 10 caracteres.",
        },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? "sin-configurar@local";

    return NextResponse.json(
      {
        ok: true,
        message: `Gracias ${name}, tu mensaje fue validado y registrado correctamente.`,
        meta: {
          timestamp: new Date().toISOString(),
          routedTo: recipient,
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "No se pudo procesar la solicitud JSON en el servidor.",
      },
      { status: 400 }
    );
  }
}
