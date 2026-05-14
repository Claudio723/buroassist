import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function BuroassistLanding() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}