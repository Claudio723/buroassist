import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | büroassist",
  description: "Allgemeine Geschäftsbedingungen von büroassist – Patrizia Steyskal, Zürich.",
};

export default function AGBPage() {
  return (
    <main className="min-h-[60vh] pt-28 pb-20">
      <section className="max-w-3xl mx-auto px-6">
        <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">RECHTLICHES</div>
        <h1 className="section-heading text-6xl tracking-tighter mb-4">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-text-muted mb-12">Stand: Mai 2026</p>

        <div className="glass rounded-3xl p-10 md:p-14 shadow-xl space-y-8 text-text-muted leading-relaxed">
          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">1. Geltungsbereich</h2>
            <p>Diese AGB gelten für sämtliche Dienstleistungen von büroassist, Patrizia Steyskal, Binzstrasse 3, 8953 Zürich. Abweichende Vereinbarungen bedürfen der Schriftform.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">2. Vertragsgegenstand</h2>
            <p>büroassist erbringt Bürodienstleistungen wie Korrespondenz, Buchhaltung, Terminmanagement, virtuelle Assistenz und weitere administrative Unterstützung. Der genaue Leistungsumfang wird individuell vereinbart.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">3. Vergütung</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Die Abrechnung erfolgt nach Aufwand zu einem vorab vereinbarten Stundensatz</li>
              <li>Rechnungen sind innerhalb von 30 Tagen nach Erhalt zahlbar</li>
              <li>Alle Preise verstehen sich in Schweizer Franken (CHF), zuzüglich MWST falls anwendbar</li>
            </ul>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">4. Mitwirkungspflichten</h2>
            <p>Der Auftraggeber stellt büroassist alle für die Auftragserfüllung notwendigen Informationen und Unterlagen rechtzeitig zur Verfügung.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">5. Vertraulichkeit</h2>
            <p>büroassist verpflichtet sich zur strikten Vertraulichkeit über alle Geschäfts- und Betriebsgeheimnisse des Auftraggebers. Diese Verpflichtung gilt auch über die Vertragsdauer hinaus.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">6. Haftung</h2>
            <p>büroassist haftet nur für Vorsatz und grobe Fahrlässigkeit. Jede weitergehende Haftung ist ausgeschlossen, soweit gesetzlich zulässig.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">7. Kündigung</h2>
            <p>Einzelaufträge können jederzeit eingestellt werden. Laufende Verträge sind mit einer Frist von 30 Tagen auf Ende eines Monats kündbar.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">8. Gerichtsstand</h2>
            <p>Gerichtsstand ist Zürich. Es gilt ausschliesslich Schweizer Recht.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
