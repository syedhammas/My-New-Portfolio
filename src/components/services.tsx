"use client";

import { motion } from "framer-motion";
import { Code2, Figma, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react";

const services = [
    {
        title: "Premium Web Development",
        description: "Architecting high-performance, SEO-optimized applications using the latest Next.js 15 and React 19 features.",
        icon: <Code2 className="w-8 h-8 text-blue-500" />,
        color: "blue"
    },
    {
        title: "UI/UX Engineering",
        description: "Bridging the gap between design and engineering with pixel-perfect implementations and smooth interactions.",
        icon: <Figma className="w-8 h-8 text-purple-500" />,
        color: "purple"
    },
    {
        title: "Performance Optimization",
        description: "Specializing in Core Web Vitals, speed optimization, and efficient data fetching strategies.",
        icon: <Zap className="w-8 h-8 text-amber-500" />,
        color: "amber"
    },
    {
        title: "Scalable Architecture",
        description: "Designing modular, maintainable, and testable codebases that grow with your business needs.",
        icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
        color: "emerald"
    },
    {
        title: "Animation & Immersive UX",
        description: "Creating engaging digital experiences with Framer Motion, GSAP, and Three.js-style interactions.",
        icon: <Sparkles className="w-8 h-8 text-cyan-500" />,
        color: "cyan"
    },
    {
        title: "Rapid Protoptyping",
        description: "From concept to deployment in record time without compromising on code quality or user experience.",
        icon: <Rocket className="w-8 h-8 text-rose-500" />,
        color: "rose"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Services</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">How I can help you</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Leveraging years of experience to deliver top-tier digital products that stand out.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all hover:bg-slate-900/80 relative overflow-hidden"
                        >
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>

                            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
