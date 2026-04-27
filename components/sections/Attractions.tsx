"use client";
import { motion } from "framer-motion";

export default function Attractions() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center border-y border-zinc-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="h-full w-full object-cover opacity-50 transition-opacity duration-1000"
        >
          <source src="/assets/attraction.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <span className="text-[#D4AF37] tracking-[0.5em] text-[10px] font-bold uppercase mb-6 block">
            // World-Class Entertainment
          </span>
          <h2 className="text-7xl md:text-[110px] font-black text-white tracking-tighter mb-10 uppercase italic leading-[0.85]">
            IMMERSIIVE <br /> <span className="text-zinc-600">THRILLS.</span>
          </h2>
          <p className="text-zinc-400 text-xl font-light italic mb-12 border-l-2 border-[#D4AF37] pl-8 leading-relaxed">
            From the Western Hemisphere’s largest indoor theme park to year-round skiing, we redefine what a destination can be.
          </p>

          <div className="flex gap-10">
            <button className="px-10 py-3 bg-white text-black text-[10px] tracking-[0.2em] font-black uppercase hover:bg-[#D4AF37] transition-all">
              Explore Parks
            </button>
            <button className="px-10 py-3 border border-zinc-700 text-white text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black transition-all">
              Partnership Data
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}