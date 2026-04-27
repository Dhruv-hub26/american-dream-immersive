"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-60 scale-100">
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-[1000px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="text-[#D4AF37] tracking-[0.6em] text-[9px] mb-6 block font-bold uppercase">
            The North American Icon
          </span>
          <h1 className="text-[8vw] md:text-[100px] font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase italic">
            AMERICAN <span className="text-zinc-500">DREAM</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-300 text-base md:text-lg font-light italic leading-relaxed mb-12 opacity-90">
            A global stage where elite retail meets pure adrenaline. Experience the scale of ambition.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <button className="px-10 py-3 bg-white text-black text-[10px] tracking-[0.2em] font-black uppercase hover:bg-[#D4AF37] transition-colors duration-500">
              Leasing Access
            </button>
            <button className="px-10 py-3 border border-white/20 text-white text-[10px] tracking-[0.2em] font-bold uppercase backdrop-blur-md hover:bg-white hover:text-black transition-all">
              The Vision
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}