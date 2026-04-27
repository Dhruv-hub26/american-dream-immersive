"use client";
import { motion } from "framer-motion";

export default function Scale() {
  const stats = [
    { n: "3M+", t: "SQ. FT.", d: "Engineering Marvel" },
    { n: "40M+", t: "VISITS", d: "Global Epicenter" },
    { n: "TOP 1%", t: "IMPACT", d: "Economic Giant" }
  ];

  return (
    <section className="relative h-screen w-full bg-black flex items-center p-10 md:p-24 overflow-hidden border-y border-zinc-900">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale">
        <source src="/assets/Scale.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <motion.h3 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
            SCALE THAT <br /> <span className="text-zinc-700">DEFINES.</span>
          </motion.h3>
          <p className="text-zinc-500 text-sm italic max-w-xs border-l border-zinc-800 pl-6">
            Positioned at the epicenter of the Tri-State area, a global landmark of ambition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 pt-12 gap-12">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <h4 className="text-6xl font-black text-white mb-2 group-hover:text-[#D4AF37] transition-all italic">{s.n}</h4>
              <p className="text-[#D4AF37] font-bold text-[9px] tracking-[0.3em] uppercase mb-1">{s.t}</p>
              <p className="text-zinc-600 text-xs font-light italic">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}