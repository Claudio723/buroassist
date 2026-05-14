"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-white/90 rounded-xl flex items-center justify-center">
              <span className="text-primary font-serif-custom text-2xl font-semibold">b</span>
            </div>
            <div className="font-serif-custom text-3xl tracking-tighter text-white">büroassist</div>
          </div>

          <p className="max-w-sm text-white/70 text-[15px] leading-relaxed">
            Professionelle Büroassistenz für kleine und mittlere Unternehmen. 
            Mit Schweizer Präzision und persönlichem Service seit 2009.
          </p>

          <div className="mt-8 text-xs text-white/50">
            © {new Date().getFullYear()} büroassist • Zürich, Schweiz
          </div>
        </div>

        <div className="md:col-span-3 text-sm">
          <div className="font-semibold text-white mb-5 tracking-wider text-xs">LEISTUNGEN</div>
          <div className="space-y-3 text-white/80">
            <div>Buchhaltung & Finanzen</div>
            <div>Korrespondenz & Kommunikation</div>
            <div>Termin- & Aufgabenmanagement</div>
            <div>Virtuelle Assistenz</div>
            <div>Datenschutz & Compliance</div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="font-semibold text-white mb-5 tracking-wider text-xs">KONTAKT</div>
          
          <div className="space-y-4 text-[15px]">
            <a href="mailto:info@buroassist.ch" className="block hover:text-white transition">info@buroassist.ch</a>
            <a href="tel:+41441234567" className="block hover:text-white transition">+41 41 123 45 67</a>
            
            <div className="pt-4 text-white/60 text-sm leading-relaxed">
              Maria Weber<br />
              Seestrasse 42<br />
              8002 Zürich
            </div>
          </div>

          <div className="mt-10 flex gap-5 text-xs">
            <Link href="#" className="hover:text-white transition">Datenschutz</Link>
            <Link href="#" className="hover:text-white transition">Impressum</Link>
            <Link href="#" className="hover:text-white transition">AGB</Link>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 text-center text-[10px] text-white/40 tracking-[1px]">
        MADE WITH ❤️ FOR SMALL BUSINESSES IN SWITZERLAND
      </div>
    </footer>
  );
}