"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="ueber-uns" className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-accent text-sm font-semibold tracking-[2px] mb-4">DIE GESCHICHTE HINTER BÜROASSIST</div>
          
          <h2 className="text-6xl tracking-tighter leading-none mb-10">Gegründet mit Herz und Präzision.</h2>
          
          <div className="space-y-7 text-xl text-text-muted leading-relaxed">
            <p>
              Hallo, ich bin <span className="font-semibold text-text-dark">Maria Weber</span>. 
              Als Mutter von zwei Kindern und langjährige Büroleiterin weiss ich genau, wie kostbar jede Stunde ist – besonders wenn man ein eigenes Unternehmen führt.
            </p>
            <p>
              2009 habe ich büroassist gegründet, weil ich gesehen habe, wie viele kleine Firmen an administrativen Aufgaben ersticken. Heute unterstütze ich mit meinem Team viele kleine Unternehmen in der ganzen Schweiz – mit persönlichem Service, der sich anfühlt wie ein verlässlicher Kollege im Nebenbüro.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="px-5 py-2 rounded-2xl bg-primary/10 text-primary text-sm font-medium">Zürich & Umgebung</div>
            <div className="px-5 py-2 rounded-2xl bg-primary/10 text-primary text-sm font-medium">Familienbetrieb</div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-[120px] font-serif-custom font-bold tracking-tighter opacity-40">M</div>
              <div className="-mt-8 text-4xl font-semibold tracking-tight">Maria Weber</div>
              <div className="text-white/70 mt-1">Gründerin & Geschäftsführerin</div>
            </div>
          </div>
          
          {/* Subtle office details */}
          <div className="absolute bottom-8 right-8 text-white/40 text-xs tracking-[3px]">SEIT 2009 • ZÜRICH</div>
        </motion.div>
      </div>
    </section>
  );
}