"use client";

import { motion } from 'framer-motion';
import { BookOpen, Mail, Users, Clock } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: "Buchhaltung & Finanzen",
    desc: "Rechnungsstellung, Mahnwesen und Jahresabschlussvorbereitung.",
    highlight: "Stunden pro Monat sparen"
  },
  {
    icon: Mail,
    title: "Korrespondenz & Kommunikation",
    desc: "E-Mail-Management, Briefe, Kundenanfragen und professionelle Geschäftskorrespondenz in Ihrem Namen.",
    highlight: "Immer professionell"
  },
  {
    icon: Users,
    title: "Virtuelle Assistenz",
    desc: "Persönliche Unterstützung bei administrativen Aufgaben.",
    highlight: "Ihr verlängertes Team"
  },
  {
    icon: Clock,
    title: "Flexible Stundenmodelle",
    desc: "Nach Absprache.",
    highlight: "100% flexibel"
  }
];

export default function Services() {
  return (
    <section id="leistungen" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">WAS WIR FÜR SIE TUN</div>
        <h2 className="section-heading text-6xl md:text-7xl tracking-tighter mb-6">Leistungen, die entlasten.</h2>
        <p className="max-w-md mx-auto text-xl text-text-muted">Alles, was ein modernes KMU braucht – ohne eigenes Büropersonal.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="service-card group glass rounded-3xl p-9 flex flex-col h-full border border-white/60"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-9 h-9 text-primary" />
              </div>
              
              <h3 className="text-3xl font-semibold tracking-tight mb-4 pr-8">{service.title}</h3>
              
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
        <p className="text-text-muted">Und vieles mehr – fragen Sie einfach nach Ihrem individuellen Paket.</p>
      </div>
    </section>
  );
}