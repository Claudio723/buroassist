"use client";

import { motion } from 'framer-motion';
import { BookOpen, Mail, Users, Clock } from 'lucide-react';

const featuredService = {
  icon: BookOpen,
  title: "Buchhaltung & Finanzen",
  desc: "Rechnungsstellung, Mahnwesen, Zahlungsverkehr und Jahresabschlussvorbereitung. Wir entlasten Sie bei der Finanzverwaltung – praktisch, zuverlässig und auf Ihre Bedürfnisse abgestimmt.",
  highlight: "Mehr Zeit für Ihr Kerngeschäft"
};

const services = [
  {
    icon: Mail,
    title: "Korrespondenz & Kommunikation",
    desc: "E-Mail-Management, Briefe und Kundenanfragen – professionelle Geschäftskorrespondenz in Ihrem Namen.",
    highlight: "Immer professionell"
  },
  {
    icon: Users,
    title: "Virtuelle Assistenz",
    desc: "Unterstützung bei administrativen Aufgaben. Organisatorisches, das Ihnen den Alltag erleichtert.",
    highlight: "Ihr verlängertes Team"
  },
  {
    icon: Clock,
    title: "Flexible Stundenmodelle",
    desc: "Nach Absprache. Ob stundenweise oder projektbezogen – wir finden das Passende.",
    highlight: "100% flexibel"
  }
];

export default function Services() {
  const FeaturedIcon = featuredService.icon;

  return (
    <section id="leistungen" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">WAS WIR FÜR SIE TUN</div>
        <h2 className="section-heading text-6xl md:text-7xl tracking-tighter mb-6">Leistungen, die entlasten.</h2>
        <p className="max-w-md mx-auto text-xl text-text-muted">Alles, was ein modernes KMU braucht – ohne eigenes Büropersonal.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Service - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-3 service-card group glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 border border-white/60 bg-primary/[0.03]"
        >
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <FeaturedIcon className="w-9 h-9 text-primary" />
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">{featuredService.title}</h3>
            <p className="text-text-muted leading-relaxed max-w-xl">{featuredService.desc}</p>
            <div className="pt-6 mt-auto flex items-center gap-2 text-sm font-medium text-accent">
              {featuredService.highlight}
              <div className="flex-1 h-px bg-accent/30 max-w-[120px]" />
            </div>
          </div>
        </motion.div>

        {/* Standard Services */}
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.05 }}
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
