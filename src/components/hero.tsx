"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden bg-[#020617]">
            {/* Background decoration - Subtle Glows */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="flex flex-col items-start space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 text-sm font-medium"
                    >
                        Available for new projects
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white"
                    >
                        Senior <span className="text-blue-500">Frontend</span> Architect<span className="text-blue-500">.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed"
                    >
                        Hi, I&apos;m <span className="text-white font-bold">Syed Aaliyar</span>. Crafting immersive digital experiences with React, Next.js, and Framer Motion.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="#projects"
                            className="group px-8 py-4 rounded-full bg-blue-600 text-white font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                        >
                            Recent Work
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full border border-slate-800 bg-slate-950/50 text-white font-bold hover:bg-slate-900 transition-all"
                        >
                            Let&apos;s Talk
                        </Link>
                    </motion.div>
                </div>

                {/* Right Side: Image with Circles and Adjusted Position */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end -translate-y-20 translate-x-10"
                >
                    {/* Decorative Circles (Background Effect) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
                        <div className="absolute inset-0 rounded-full border border-white/5 scale-[1]" />
                        <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.8]" />
                        <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.6]" />
                        <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.4]" />
                        <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[80px]" />
                    </div>

                    <div className="relative w-full h-full">
                        <Image
                            src="/hammas.jpeg"
                            alt="Syed Aaliyar"
                            fill
                            className="object-contain object-bottom transition-all duration-700 hover:scale-105"
                            priority
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1, duration: 1 },
                    y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Scroll</span>
            </motion.div>
        </section>
    );
}
