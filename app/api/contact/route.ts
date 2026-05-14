import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  vorname: z.string().min(2, "Vorname muss mindestens 2 Zeichen haben"),
  nachname: z.string().min(2, "Nachname muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte gültige E-Mail-Adresse eingeben"),
  firma: z.string().min(2, "Firmenname erforderlich"),
  telefon: z.string().optional(),
  nachricht: z.string().min(10, "Ihre Nachricht sollte mindestens 10 Zeichen umfassen"),
  termin: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Hier könnte man z.B. E-Mail versenden (Resend, Nodemailer, etc.)
    // Für Demo: Einfach loggen und Erfolg zurückgeben
    console.log('Neue Anfrage erhalten:', validated);

    // Simuliere Verarbeitungszeit
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({
      success: true,
      message: 'Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' },
      { status: 500 }
    );
  }
}