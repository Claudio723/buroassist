"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Heart, Award, Zap } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    stat: "38 Std",
    label: "Durchschnittliche Zeitersparnis pro Monat",
    desc: "Mehr Zeit für das, was wirklich zählt: Ihr Kerngeschäft."
  },
  {
    icon: Heart,
    stat: "97 %",
    label: "Kundenzufriedenheit",
    desc: "Unsere Kunden bleiben im Schnitt über 3 Jahre bei uns."
  },
  {
    icon: Award,
    stat: "15+ Jahre",
    label: "Erfahrung in der Büroorganisation",
    desc: "Seit 2009 unterstützen wir Schweizer KMU mit Leidenschaft."
  },
  {
    icon: Zap,
    stat: "4 Std",
    label: "Reaktionszeit bei Anfragen",
    desc: "Schnell, persönlich und immer erreichbar."
  }
];

export default function Benefits() {
  return (
    <section id="warum" className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="text-accent/80 text-sm font-semibold tracking-[2.5px] mb-4">WARUM KLEINE UNTERNEHMEN UNS WÄHLEN</div>
              <h2 className="text-6xl md:text-[68px] leading-none tracking-tighter mb-8">Weil Zeit das neue Gold ist.</h2>
              <p className="text-xl text-white/70 max-w-md">
                Wir sind nicht einfach nur eine Dienstleistung. Wir sind Ihr verlässlicher Partner im Hintergrund.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="glass bg-white/5 border border-white/10 rounded-3xl p-10 group"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="text-7xl font-semibold tracking-tighter text-white/90 tabular-nums">{benefit.stat}</div>
                    <Icon className="w-9 h-9 text-accent group-hover:rotate-12 transition" />
                  </div>
                  <div className="text-2xl font-semibold tracking-tight mb-3 text-white">{benefit.label}</div>
                  <p className="text-white/60 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}