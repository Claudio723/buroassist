"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(localStorage.getItem('cookie-consent') === 'true');
    setMounted(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setAccepted(true);
  };

  if (!mounted || accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-primary/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
          Diese Website verwendet ein technisch notwendiges Cookie zur Speicherung Ihrer Präferenz. Kein Tracking, keine Analyse.{' '}
          <Link href="/datenschutz" className="underline text-accent hover:text-primary transition-colors">
            Mehr erfahren
          </Link>
        </p>
        <button
          onClick={accept}
          className="px-8 py-2.5 bg-primary hover:bg-primary/95 text-white text-sm font-semibold rounded-2xl whitespace-nowrap transition-all active:scale-[0.985] shadow-lg shadow-primary/20"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
