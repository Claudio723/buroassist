# büroassist

**Professionelle Büroassistenz für kleine und mittlere Unternehmen in der Schweiz**

Eine elegante, hochmoderne Landingpage für die Büroassistenz-Firma von Maria Weber – persönlich, zuverlässig und mit Schweizer Präzision seit 2009.

## ✨ Design-Highlights

- **Swiss Minimalism meets Warm Professionalism**: Warme Off-White-Töne, tiefes Teal (#0F4C5C) und Gold-Akzente (#C9A227)
- **Exklusive Typografie**: Playfair Display (Serif) + Manrope (moderne Sans)
- **Mikro-Animationen**: Floating Elements, Hover-Lifts, Staggered Reveals mit Framer Motion
- **Voll funktionsfähiges Kontaktformular** mit Validierung (Zod), Loading-State und Konfetti-Effekt
- **Vollständig responsiv** mit Glassmorphismus-Navigation

## Tech-Stack

- Next.js 15 (App Router, Turbopack)
- TypeScript
- Tailwind CSS + Custom Design Tokens
- Framer Motion
- React Hook Form + Zod
- Canvas Confetti
- Lucide Icons

## Lokales Starten

```bash
git clone https://github.com/Claudio723/buroassist.git
cd buroassist
npm install
npm run dev
```

Die Seite läuft dann auf http://localhost:3000

## 🚀 Deployment auf Netlify (empfohlen)

### Schnellste Methode (2 Minuten):

1. Gehe zu [netlify.com](https://app.netlify.com) und melde dich an (oder erstelle einen kostenlosen Account)
2. Klicke auf **"Add new site"** → **"Import an existing project"**
3. Wähle **GitHub** und autorisiere Netlify
4. Wähle das Repository `Claudio723/buroassist`
5. Netlify erkennt automatisch, dass es sich um eine Next.js-App handelt
6. Die Einstellungen sind schon perfekt vorkonfiguriert:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Klicke auf **"Deploy site"**

Fertig! Deine Seite ist in ca. 1–2 Minuten live unter einer `.netlify.app` Adresse.

### Wichtige Hinweise:
- Das Kontaktformular funktioniert sofort (Netlify Functions + API-Routes werden automatisch unterstützt)
- SSL-Zertifikat ist automatisch aktiviert
- Du kannst später unter Site settings → Domain management eine eigene Domain (z.B. buroassist.ch) verbinden

## Alternative: Manuelles Deployment

Falls du die Seite selbst bauen und hochladen möchtest:

```bash
npm run build
# Dann den Ordner `.next` bei Netlify hochladen
```

---

**Für Claudio** – Herzlichen Glückwunsch zur neuen Landingpage für die Firma deiner Mutter! 🎉

Falls du Anpassungen wünschst (z.B. echte E-Mail-Integration mit Resend, Terminkalender, Preise etc.), sag einfach Bescheid.