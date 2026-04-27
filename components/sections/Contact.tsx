"use client";
export default function Contact() {
    return (
        <section className="h-screen w-full bg-[#050505] flex items-center justify-center p-10">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase italic leading-none">
                        CONNECT WITH <br /> <span className="text-[#D4AF37]">EXCELLENCE.</span>
                    </h2>
                    <p className="text-zinc-500 italic mb-12">Be part of North America's premier lifestyle destination.</p>
                    <div className="space-y-6 text-zinc-400 text-sm font-mono tracking-widest">
                        <p>LEASING@AMERICANDREAM.COM</p>
                        <p>EAST RUTHERFORD, NEW JERSEY</p>
                    </div>
                </div>
                <div className="bg-zinc-900/50 p-10 rounded-2xl border border-white/5 backdrop-blur-xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="FIRST NAME" className="bg-transparent border-b border-zinc-800 p-4 text-[10px] text-white focus:border-[#D4AF37] outline-none" />
                            <input type="text" placeholder="LAST NAME" className="bg-transparent border-b border-zinc-800 p-4 text-[10px] text-white focus:border-[#D4AF37] outline-none" />
                        </div>
                        <input type="email" placeholder="BUSINESS EMAIL" className="w-full bg-transparent border-b border-zinc-800 p-4 text-[10px] text-white focus:border-[#D4AF37] outline-none" />
                        <textarea placeholder="TELL US ABOUT YOUR BRAND" className="w-full bg-transparent border-b border-zinc-800 p-4 text-[10px] text-white focus:border-[#D4AF37] outline-none h-24" />
                        <button className="w-full py-4 bg-[#D4AF37] text-black font-black text-[10px] tracking-widest uppercase hover:scale-105 transition-transform">
                            Request Prospectus
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}