"use client";
import { motion } from "framer-motion";

export default function Dining() {
    return (
        <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center border-y border-zinc-900">
            {/* Background Cinematic Video Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2s]"
                >
                    {/* Using your local asset: public/assets/dining.mp4 */}
                    <source src="/assets/dining.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-24">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl"
                >
                    <span className="text-[#D4AF37] tracking-[0.5em] text-[10px] font-bold uppercase mb-6 block drop-shadow-lg">
            // Gastronomy & Global Flavors
                    </span>
                    <h2 className="text-7xl md:text-[110px] font-black text-white tracking-tighter mb-10 uppercase italic leading-[0.85]">
                        CULINARY <br /> <span className="text-zinc-600">MASTERY.</span>
                    </h2>
                    <p className="text-zinc-400 text-xl font-light italic mb-12 border-l-2 border-[#D4AF37] pl-8 leading-relaxed max-w-lg">
                        From Michelin-starred excellence to globally inspired fast-casual, we curate a stage for the world’s most sought-after culinary concepts.
                    </p>

                    <div className="flex gap-12 items-center">
                        <div>
                            <p className="text-white text-5xl font-black italic tracking-tighter italic">100+</p>
                            <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mt-2 underline underline-offset-4">Dining Concepts</p>
                        </div>
                        <div className="h-16 w-[1px] bg-zinc-800" />
                        <div>
                            <p className="text-white text-5xl font-black italic tracking-tighter italic">Top 5</p>
                            <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mt-2 underline underline-offset-4">Global Rank</p>
                        </div>
                    </div>

                    <button className="mt-16 px-12 py-4 border border-zinc-700 text-white font-black hover:bg-white hover:text-black transition-all duration-500 text-[11px] tracking-[0.3em] uppercase backdrop-blur-sm">
                        Explore Portfolio
                    </button>
                </motion.div>
            </div>

            {/* Subtle Bottom Accent */}
            <div className="absolute bottom-12 right-12 hidden lg:block opacity-30">
                <p className="text-[9px] text-white uppercase tracking-[0.5em] rotate-90 origin-right">The Dining Collective</p>
            </div>
        </section>
    );
}