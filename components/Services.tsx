"use client";

import { motion } from 'framer-motion';
import { BookOpen, Mail, Users, Clock } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: "Buchhaltung & Finanzen",
    desc: "Rechnungen schreiben, Mahnungen verschicken, Zahlungen im Blick behalten und den Jahresabschluss vorbereiten. Ich nehme Ihnen die Zahlenarbeit ab.",
    highlight: "Mehr Zeit für Ihr Geschäft",
    featured: true
  },
  {
    icon: Mail,
    title: "Korrespondenz & Kommunikation",
    desc: "E-Mails, Briefe und Kundenanfragen – ich erledige die Korrespondenz in Ihrem Namen, professionell und pünktlich.",
    highlight: "Immer gut vertreten"
  },
  {
    icon: Users,
    title: "Virtuelle Assistenz",
    desc: "Administrative Aufgaben, die den Alltag erleichtern. Organisation, Koordination und alles, was sonst liegen bleibt.",
    highlight: "Unterstützung im Hintergrund"
  },
  {
    icon: Clock,
    title: "Flexible Stundenmodelle",
    desc: "Nach Absprache. Ob stundenweise oder projektbezogen – wir finden eine Lösung, die zu Ihnen passt.",
    highlight: "So flexibel wie nötig"
  }
];

export default function Services() {
  return (
    <section id="leistungen" className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">WAS ICH FÜR SIE TUE</div>
        <h2 className="section-heading text-6xl md:text-7xl tracking-tighter mb-6">Leistungen, die entlasten.</h2>
        <p className="max-w-md mx-auto text-xl text-text-muted">Alles, was ein kleines Unternehmen braucht – ohne eigenes Büropersonal.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isFeatured = service.featured;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`service-card group glass rounded-3xl flex flex-col h-full border border-white/60 ${
                isFeatured ? 'p-10 bg-primary/[0.03] border-primary/10' : 'p-9'
              }`}
            >
              <div className={`rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors ${
                isFeatured ? 'w-20 h-20' : 'w-16 h-16'
              }`}>
                <Icon className={`text-primary ${isFeatured ? 'w-11 h-11' : 'w-9 h-9'}`} />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{service.title}</h3>

              <p className="text-text-muted leading-relaxed flex-grow">{service.desc}</p>

              <div className="pt-8 mt-auto flex items-center gap-2 text-sm font-medium text-accent">
                {service.highlight}
                <div className="flex-1 h-px bg-accent/30" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <p className="text-text-muted">Und mehr – fragen Sie einfach nach, was Sie brauchen.</p>
      </div>
    </section>
  );
}
