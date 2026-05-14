"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const formSchema = z.object({
  vorname: z.string().min(2, "Bitte geben Sie Ihren Vornamen ein"),
  nachname: z.string().min(2, "Bitte geben Sie Ihren Nachnamen ein"),
  email: z.string().email("Bitte gültige E-Mail-Adresse eingeben"),
  firma: z.string().min(2, "Firmenname ist erforderlich"),
  telefon: z.string().optional(),
  nachricht: z.string().min(15, "Ihre Nachricht sollte etwas ausführlicher sein"),
  termin: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    // Create mailto link with prefilled content
    const subject = encodeURIComponent(`Anfrage von ${data.vorname} ${data.nachname} (${data.firma})`);
    const body = encodeURIComponent(
      `Hallo Patrizia,

Mein Name ist ${data.vorname} ${data.nachname}.
Firma: ${data.firma}
E-Mail: ${data.email}
${data.telefon ? `Telefon: ${data.telefon}
` : ''}${data.termin ? `Wunschtermin: ${data.termin}
` : ''}

Nachricht:
${data.nachricht}

Vielen Dank!
${data.vorname} ${data.nachname}`
    );

    // Open default mail client
    window.location.href = `mailto:info@buroassist.ch?subject=${subject}&body=${body}`;

    // Show success animation
    setTimeout(() => {
      setIsSuccess(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
      reset();
      setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 3800);
    }, 600);
  };

  return (
    <section id="kontakt" className="max-w-4xl mx-auto px-6 py-24 md:py-32 border-t border-primary/10">
      <div className="text-center mb-14">
        <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">BEREIT FÜR ENTLASTUNG?</div>
        <h2 className="section-heading text-6xl tracking-tighter mb-5">Lassen Sie uns reden.</h2>
        <p className="text-xl text-text-muted max-w-md mx-auto">Vereinbaren Sie ein unverbindliches 20-Minuten-Gespräch. Wir freuen uns auf Sie.</p>
      </div>

      <div className="glass rounded-3xl p-10 md:p-14 shadow-xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-muted">Vorname</label>
                  <input 
                    {...register('vorname')}
                    className="form-input w-full px-6 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                    placeholder="Anna"
                  />
                  {errors.vorname && <p className="text-red-500 text-sm mt-1.5">{errors.vorname.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-muted">Nachname</label>
                  <input 
                    {...register('nachname')}
                    className="form-input w-full px-6 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                    placeholder="Müller"
                  />
                  {errors.nachname && <p className="text-red-500 text-sm mt-1.5">{errors.nachname.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-muted">E-Mail-Adresse</label>
                  <input 
                    type="email"
                    {...register('email')}
                    className="form-input w-full px-6 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                    placeholder="anna@ihrefirma.ch"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-muted">Firma</label>
                  <input 
                    {...register('firma')}
                    className="form-input w-full px-6 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                    placeholder="Müller & Co. GmbH"
                  />
                  {errors.firma && <p className="text-red-500 text-sm mt-1.5">{errors.firma.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-muted">Telefon (optional)</label>
                  <input 
                    type="tel"
                    {...register('telefon')}
                    className="form-input w-full px-6 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                    placeholder="+41 79 123 45 67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-muted">Wunschtermin (optional)</label>
                  <input 
                    type="date"
                    {...register('termin')}
                    className="form-input w-full px-6 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-muted">Ihre Nachricht</label>
                <textarea 
                  {...register('nachricht')}
                  rows={6}
                  className="form-input w-full px-6 py-4 rounded-3xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60 resize-y min-h-[140px]"
                  placeholder="Hallo Patrizia, ich würde gerne mehr über Ihre Bürohilfe erfahren und einen passenden Termin finden..."
                />
                {errors.nachricht && <p className="text-red-500 text-sm mt-1.5">{errors.nachricht.message}</p>}
              </div>

              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className="cta-button w-full py-4 text-lg font-semibold bg-primary hover:bg-primary/95 disabled:bg-primary/70 text-white rounded-3xl flex items-center justify-center gap-3 mt-4 shadow-xl shadow-primary/40 active:scale-[0.985] transition-all"
                whileHover={{ scale: isSubmitting ? 1 : 1.005 }}
                whileTap={{ scale: 0.985 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...
                  </>
                ) : (
                  "Kostenloses Beratungsgespräch anfragen"
                )}
              </motion.button>

              <p className="text-center text-xs text-text-muted pt-3">Klicken Sie auf „Senden“ – Ihr Standard-Mail-Programm öffnet sich automatisch mit den ausgefüllten Daten.</p>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center"
            >
              <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
                <CheckCircle className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-semibold tracking-tight mb-4">Vielen Dank!</h3>
              <p className="text-xl text-text-muted max-w-sm mx-auto">
                Ihr Mail-Programm sollte sich jetzt geöffnet haben. Wir melden uns schnellstmöglich bei Ihnen.
              </p>
              <div className="mt-8 text-sm text-emerald-600 font-medium">Patrizia Steyskal • büroassist</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}