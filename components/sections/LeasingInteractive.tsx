"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TIERS = [
  { id: 1, type: "Luxury Flagship", roi: "0.1% Yield", desc: "For brands defining the retail future.", vid: "/assets/Leasing.mp4" },
  { id: 2, type: "Global Events", roi: "40M+ Reach", desc: "The world's most active activation stage.", vid: "/assets/global events.mp4" }
];

export default function LeasingInteractive() {
  const [sel, setSel] = useState(TIERS[0]);

  return (
    <section className="h-screen w-full bg-black flex items-center justify-center p-4 md:p-10">
      <div className="max-w-[1300px] w-full h-[80vh] grid grid-cols-1 lg:grid-cols-2 bg-[#0a0a0a] rounded-sm overflow-hidden border border-white/5 shadow-2xl">

        <div className="p-12 md:p-20 flex flex-col justify-center bg-black border-r border-white/5">
          <h2 className="text-white text-5xl md:text-[65px] font-black mb-16 tracking-tighter leading-none uppercase italic">
            YOUR STAGE. <br /> <span className="text-[#D4AF37]">OUR WORLD.</span>
          </h2>

          <div className="space-y-6 max-w-sm">
            {TIERS.map(t => (
              <button key={t.id} onClick={() => setSel(t)}
                className="group relative w-full text-left overflow-hidden transition-all duration-500"
              >
                <div className={`absolute left-0 top-0 h-full w-[2px] transition-all duration-500 ${sel.id === t.id ? 'bg-[#D4AF37] h-full' : 'bg-zinc-800 h-0 group-hover:h-full'}`} />
                <div className={`p-6 transition-all duration-500 ${sel.id === t.id ? 'bg-white/5 pl-10' : 'pl-6 hover:bg-white/5'}`}>
                  <span className={`block font-bold uppercase tracking-[0.2em] text-xs mb-1 ${sel.id === t.id ? 'text-[#D4AF37]' : 'text-zinc-600'}`}>
                    Tier 0{t.id}
                  </span>
                  <span className={`font-black uppercase tracking-tight text-2xl italic ${sel.id === t.id ? 'text-white' : 'text-zinc-700'}`}>
                    {t.type}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-full bg-zinc-950">
          <AnimatePresence mode="wait">
            <motion.div key={sel.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
              <video key={sel.vid} autoPlay muted loop playsInline className="h-full w-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000">
                <source src={sel.vid} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent p-12 flex flex-col justify-end">
            <p className="text-[#D4AF37] font-bold text-[9px] tracking-[0.4em] uppercase mb-4 border-b border-[#D4AF37]/20 pb-2 w-fit">Metric Projection</p>
            <p className="text-white text-6xl font-black italic tracking-tighter mb-4">{sel.roi}</p>
            <p className="text-zinc-400 text-sm font-light italic max-w-[280px] leading-relaxed opacity-80">{sel.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}