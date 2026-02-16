"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe2, Rocket } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "5+", icon: <Cpu className="w-5 h-5 text-blue-500" /> },
    { label: "Projects Completed", value: "40+", icon: <Rocket className="w-5 h-5 text-purple-500" /> },
    { label: "Happy Clients", value: "25+", icon: <Globe2 className="w-5 h-5 text-cyan-500" /> },
    { label: "Lines written", value: "100k+", icon: <Code2 className="w-5 h-5 text-blue-400" /> },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">About Me</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                Solving complex problems with <span className="text-slate-400 italic font-serif">elegant solutions.</span>
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4 text-slate-400 text-lg leading-relaxed max-w-2xl"
                        >
                            <p>
                                I am a passionate software engineer specializing in frontend technologies. My journey in tech is driven by a desire to bridge the gap between complex engineering and human-centric design.
                            </p>
                            <p>
                                With half a decade of experience, I&apos;ve worked with startups and enterprises to build scalable web applications that not only look stunning but perform exceptionally. I believe in writing clean, maintainable code and staying ahead of the curve.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center gap-2 group hover:border-blue-500/50 transition-colors"
                                >
                                    {stat.icon}
                                    <p className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">{stat.value}</p>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="aspect-square glass-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative">
                            {/* Aesthetic code snippet or graphic */}
                            <div className="space-y-4 font-mono text-sm">
                                <p className="text-slate-500">// My Tech Philosophy</p>
                                <p className="text-blue-400">const <span className="text-white">philosophy</span> = &#123;</p>
                                <p className="pl-4 text-purple-400">cleanCode: <span className="text-cyan-400">true</span>,</p>
                                <p className="pl-4 text-purple-400">userExperience: <span className="text-cyan-400">&quot;topPriority&quot;</span>,</p>
                                <p className="pl-4 text-purple-400">optimization: <span className="text-cyan-400">&quot;constant&quot;</span>,</p>
                                <p className="pl-4 text-purple-400">continuousLearning: <span className="text-cyan-400">Infinity</span></p>
                                <p className="text-blue-400">&#125;;</p>
                            </div>

                            <div className="mt-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm">
                                Currently exploring the horizons of AI-driven interfaces and WebGL.
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
