"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users } from 'lucide-react';

export default function Hero() {
  const scrollToKontakt = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-[100dvh] flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-warm-bg via-white to-warm-bg">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" /> 
            Persönliche Betreuung für kleine Unternehmen
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-tighter font-semibold text-balance">
            Ihre Zeit ist<br /> zu wertvoll.<br /> 
            <span className="text-primary">Wir übernehmen<br /> den Rest.</span>
          </h1>

          <p className="max-w-[520px] text-xl text-text-muted leading-relaxed">
            Praktische Bürohilfe für kleine Unternehmen in der Schweiz. 
            Buchhaltung, Korrespondenz, Organisation und vieles mehr – alles aus einer Hand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button 
              onClick={scrollToKontakt}
              className="cta-button group flex items-center justify-center gap-3 bg-primary hover:bg-primary/95 text-white px-10 py-4 rounded-3xl text-lg font-semibold shadow-xl shadow-primary/30 transition-all active:scale-[0.985]"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
            >
              Jetzt kostenloses Erstgespräch vereinbaren
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </motion.button>

            <motion.button 
              onClick={() => document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-3xl border border-primary/20 hover:bg-white text-lg font-medium transition-all"
              whileHover={{ scale: 1.015 }}
            >
              Leistungen entdecken
            </motion.button>
          </div>

          <div className="flex items-center gap-8 pt-8 text-sm">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-medium">{String.fromCharCode(64+i)}</div>
              ))}
            </div>
            <div className="text-text-muted">
              Vertraut von <span className="font-semibold text-text-dark">vielen kleinen Unternehmen</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="md:col-span-5 relative h-[520px] hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Floating Office Elements */}
            <motion.div 
              className="absolute top-[12%] left-[8%] glass w-40 h-40 rounded-3xl p-6 shadow-2xl"
              animate={{ y: [0, -25, 0], rotate: [-3, 2, -3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-primary/80 mb-3">
                <Calendar className="w-9 h-9" />
              </div>
              <div className="font-semibold text-lg">Termine</div>
              <div className="text-sm text-text-muted mt-1">12 heute</div>
            </motion.div>

            <motion.div 
              className="absolute top-[38%] right-[12%] glass w-48 h-32 rounded-3xl p-6 shadow-2xl"
              animate={{ y: [0, 18, 0], rotate: [2, -4, 2] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="text-accent">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <div className="font-semibold">Team</div>
                  <div className="text-xs text-text-muted">4 Mitglieder</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-[18%] left-[22%] glass w-56 h-36 rounded-3xl p-6 shadow-2xl"
              animate={{ y: [0, -15, 0], rotate: [-1, 3, -1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            >
              <div className="text-primary mb-2 text-sm font-medium">Heutige Aufgaben</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" /> Buchhaltung Q3
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Rechnungen versenden
                </div>
              </div>
            </motion.div>

            {/* Central glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-br from-primary/10 via-accent/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs tracking-[3px] text-text-muted">
        SCROLL TO EXPLORE
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-lg">↓</motion.div>
      </div>
    </section>
  );
}