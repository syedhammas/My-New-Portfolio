"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Brush, Code2, Rocket } from "lucide-react";
import { useRef } from "react";

const steps = [
    {
        title: "Discovery & Strategy",
        description: "Deep dive into project goals, target audience, and technical feasibility to create a robust roadmap.",
        icon: <Brain className="w-6 h-6" />,
        color: "blue"
    },
    {
        title: "System Design & UI/UX",
        description: "Crafting modular design systems and intuitive user interfaces that ensure consistency and accessibility.",
        icon: <Brush className="w-6 h-6" />,
        color: "purple"
    },
    {
        title: "Agile Development",
        description: "Iterative building with clean, type-safe code and continuous integration for maximum reliability.",
        icon: <Code2 className="w-6 h-6" />,
        color: "cyan"
    },
    {
        title: "Deployment & Scaling",
        description: "Production-ready launch with automated pipelines, performance monitoring, and server-side optimizations.",
        icon: <Rocket className="w-6 h-6" />,
        color: "blue"
    }
];

export default function WorkflowTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="workflow" className="py-24 px-6 relative overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Methodology</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Development Workflow</h3>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2">
                        <motion.div
                            style={{ scaleY: pathLength }}
                            className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        />
                    </div>

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700 transition-colors backdrop-blur-sm group">
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h4>
                                        <p className="text-slate-400 leading-relaxed text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute left-4 md:left-1/2 w-10 h-10 -ml-5 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center z-10 shadow-xl group-hover:border-blue-500 transition-colors">
                                    <div className="text-blue-500 group-hover:scale-110 transition-transform">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Spacer for empty side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
