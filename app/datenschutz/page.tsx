import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | büroassist",
  description: "Datenschutzerklärung von büroassist – wie wir Ihre Daten schützen.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-[60vh] pt-28 pb-20">
      <section className="max-w-3xl mx-auto px-6">
        <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">RECHTLICHES</div>
        <h1 className="section-heading text-6xl tracking-tighter mb-4">Datenschutzerklärung</h1>
        <p className="text-text-muted mb-12">Stand: Mai 2026</p>

        <div className="glass rounded-3xl p-10 md:p-14 shadow-xl space-y-8 text-text-muted leading-relaxed">
          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">1. Verantwortliche Stelle</h2>
            <p>Patrizia Steyskal, Binzstrasse 3, 8953 Dietikon, Schweiz</p>
            <p>E-Mail: <a href="mailto:info@bueroassist.ch" className="text-accent hover:underline">info@bueroassist.ch</a></p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">2. Welche Daten wir erheben</h2>
            <p>Wenn Sie unser Kontaktformular nutzen, speichern wir:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Vorname und Nachname</li>
              <li>E-Mail-Adresse und Telefonnummer</li>
              <li>Firmenname</li>
              <li>Ihre Nachricht und Ihren Wunschtermin</li>
            </ul>
            <p className="mt-3">Beim Besuch der Website werden automatisch technische Daten wie IP-Adresse, Browsertyp und Zugriffszeitpunkt erfasst (Server-Logfiles).</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">3. Zweck der Datenverarbeitung</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bearbeitung Ihrer Kontaktanfrage</li>
              <li>Kundenkommunikation und Angebotserstellung</li>
              <li>Technische Bereitstellung und Sicherheit der Website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">4. Cookies</h2>
            <p>Diese Website verwendet ein technisch notwendiges Cookie zur Speicherung Ihrer Cookie-Präferenz. Darüber hinaus werden keine Tracking- oder Analyse-Cookies eingesetzt.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">5. Hosting</h2>
            <p>Diese Website wird über Netlify gehostet. Netlify kann Zugriffsdaten in Server-Logfiles speichern. Die Datenschutzerklärung von Netlify finden Sie unter <a href="https://www.netlify.com/privacy/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">netlify.com/privacy</a>.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">6. Speicherdauer</h2>
            <p>Kontaktanfragen werden für die Dauer der Geschäftsbeziehung und gemäss gesetzlicher Aufbewahrungspflichten (10 Jahre) gespeichert. Server-Logfiles werden nach 30 Tagen gelöscht.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">7. Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten (soweit keine gesetzliche Aufbewahrungspflicht besteht)</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
            <p className="mt-3">Kontaktieren Sie uns unter <a href="mailto:info@bueroassist.ch" className="text-accent hover:underline">info@bueroassist.ch</a>.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">8. Änderungen</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version finden Sie stets auf dieser Seite.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
