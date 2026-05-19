import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | büroassist",
  description: "Impressum und rechtliche Angaben – büroassist, Patrizia Steyskal, Dietikon.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-[60vh] pt-28 pb-20">
      <section className="max-w-3xl mx-auto px-6">
        <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">RECHTLICHES</div>
        <h1 className="section-heading text-6xl tracking-tighter mb-12">Impressum</h1>

        <div className="glass rounded-3xl p-10 md:p-14 shadow-xl space-y-8 text-text-muted leading-relaxed">
          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">Angaben gemäss Schweizer Recht</h2>
            <p>Patrizia Steyskal</p>
            <p>Binzstrasse 3</p>
            <p>8953 Dietikon</p>
            <p>Schweiz</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">Kontakt</h2>
            <p>E-Mail: <a href="mailto:info@bueroassist.ch" className="text-accent hover:underline">info@bueroassist.ch</a></p>
            <p>Telefon: <a href="tel:+41798404449" className="text-accent hover:underline">+41 79 840 44 49</a></p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">Vertretungsberechtigte Person</h2>
            <p>Patrizia Steyskal</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">Unternehmensidentifikation</h2>
            <p>UID: [Noch einzutragen]</p>
            <p>MWST-Nummer: [Falls anwendbar, noch einzutragen]</p>
            <p>Handelsregisternummer: [Noch einzutragen]</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">Haftungsausschluss</h2>
            <p>Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Website erfolgt auf eigene Gefahr.</p>
          </div>

          <div>
            <h2 className="text-text-dark font-semibold text-lg mb-2">Urheberrecht</h2>
            <p>Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen Urheberrecht. Jede Art der Vervielfältigung, Bearbeitung, Verbreitung bedarf der vorherigen schriftlichen Zustimmung des Urhebers.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
