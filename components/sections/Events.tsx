"use client";
import { motion } from "framer-motion";

export default function Events() {
    return (
        <section className="relative h-screen w-full bg-black overflow-hidden flex items-center p-10 md:p-24 border-y border-zinc-900">
            <div className="absolute inset-0 z-0">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-30 grayscale">
                    <source src="/assets/global events.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            </div>
            <div className="relative z-10 max-w-4xl">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                    <span className="text-[#D4AF37] tracking-[0.4em] text-[10px] font-bold uppercase mb-6 block">// The Platform</span>
                    <h2 className="text-7xl md:text-[110px] font-black text-white tracking-tighter mb-10 uppercase italic leading-none">
                        GLOBAL <br /> <span className="text-zinc-700">EXPERIENCE.</span>
                    </h2>
                    <p className="text-zinc-400 text-xl font-light italic mb-12 max-w-md border-l border-zinc-800 pl-8">
                        From world-class venues to iconic activations, we don't just host events—we create culture.
                    </p>
                    <button className="px-12 py-4 border border-zinc-800 text-white text-[11px] tracking-[0.3em] font-black uppercase hover:bg-white hover:text-black transition-all">
                        Inquire Venue
                    </button>
                </motion.div>
            </div>
        </section>
    );
}