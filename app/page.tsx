"use client";
import Hero from "@/components/sections/Hero";
import Scale from "@/components/sections/Scale";
import LeasingInteractive from "@/components/sections/LeasingInteractive";
import Dining from "@/components/sections/Dining";
import Attractions from "@/components/sections/Attractions"; // Newly Added
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";
import Section from "@/components/ui/Section";
import DotNavigation from "@/components/ui/DotNavigation";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black selection:bg-[#D4AF37] selection:text-black font-sans">

      {/* 1. Cinematic Hook */}
      <Section id="hero">
        <Hero />
      </Section>

      {/* 2. Magnitude & Data */}
      <Section id="scale">
        <Scale />
      </Section>

      {/* 3. Interactive Leasing Module */}
      <Section id="leasing">
        <LeasingInteractive />
      </Section>

      {/* 4. Lifestyle & Gastronomy */}
      <Section id="dining">
        <Dining />
      </Section>

      {/* 5. Entertainment & Attractions */}
      <Section id="attractions">
        <Attractions />
      </Section>

      {/* 6. Global Events Platform */}
      <Section id="events">
        <Events />
      </Section>

      {/* 7. Lead Generation / Closing */}
      <Section id="contact">
        <Contact />
      </Section>

      {/* Professional Dashboard UI Chrome */}
      <DotNavigation />

      {/* Global Vignette Overlays for Depth */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-50 opacity-60" />
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-50 opacity-60" />

    </main>
  );
}