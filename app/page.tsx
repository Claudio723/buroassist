import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function BuroassistLanding() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Benefits />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}