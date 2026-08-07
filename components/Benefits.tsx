"use client";

import { motion } from 'framer-motion';
import { Clock, Heart, Handshake, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Zeit sparen",
    desc: "Administrative Aufgaben landen bei mir. Sie können sich auf das konzentrieren, was Ihr Unternehmen voranbringt."
  },
  {
    icon: Heart,
    title: "Persönlich",
    desc: "Keine Warteschleife, kein Ticket-System. Sie sprechen direkt mit mir – und ich kenne Ihr Geschäft."
  },
  {
    icon: Handshake,
    title: "Zuverlässig",
    desc: "Termine, Fristen und Absprachen werden eingehalten. Darauf können Sie sich verlassen."
  },
  {
    icon: Zap,
    title: "Flexibel",
    desc: "Mal mehr, mal weniger. Der Aufwand richtet sich nach dem, was gerade anfällt – nicht nach einem starren Vertrag."
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
              <h2 className="text-6xl md:text-[68px] leading-none tracking-tighter mb-8">Weil Zeit kostbar ist.</h2>
              <p className="text-xl text-white/70 max-w-md">
                Ich arbeite im Hintergrund, damit Sie vorne mehr erreichen.
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
                  <div className="flex justify-between items-start mb-8">
                    <Icon className="w-9 h-9 text-accent group-hover:rotate-12 transition" />
                  </div>
                  <div className="text-2xl font-semibold tracking-tight mb-3 text-white">{benefit.title}</div>
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
