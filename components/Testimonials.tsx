"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Thomas Keller",
    company: "Keller Holzbau GmbH, Zug",
    role: "Geschäftsführer",
    quote: "Seit zwei Jahren übernimmt büroassist unsere komplette Buchhaltung und Korrespondenz. Ich habe endlich wieder Zeit für meine Kunden und die Weiterentwicklung des Betriebs. Absolut empfehlenswert!",
    rating: 5
  },
  {
    name: "Elena Rossi",
    company: "Studio Rossi, Zürich",
    role: "Inhaberin & Architektin",
    quote: "Die Flexibilität ist unschlagbar. Mal brauche ich 8 Stunden im Monat, mal 25. Maria und ihr Team passen sich perfekt an. Die Qualität der Arbeit ist auf Top-Niveau.",
    rating: 5
  },
  {
    name: "Markus Brunner",
    company: "Brunner & Partner Treuhand, St. Gallen",
    role: "Partner",
    quote: "Als Treuhänder schätze ich besonders die absolute Zuverlässigkeit und Diskretion. Unsere Mandanten sind begeistert, wenn ich sage, dass wir die Admin-Arbeiten auslagern. Eine echte Win-Win-Situation.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-primary/10">
      <div className="text-center mb-16">
        <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">STIMMEN AUS DER PRAXIS</div>
        <h2 className="section-heading text-6xl tracking-tighter">Was unsere Kunden sagen.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="testimonial-card glass rounded-3xl p-9 flex flex-col h-full border border-white/50"
          >
            <div className="flex mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>

            <blockquote className="text-[17px] leading-relaxed flex-grow text-balance">
              „{testimonial.quote}“
            </blockquote>

            <div className="pt-8 mt-auto border-t border-primary/10 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-lg tracking-tight">{testimonial.name}</div>
                <div className="text-sm text-text-muted">{testimonial.role} • {testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}