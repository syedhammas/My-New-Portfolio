"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    content: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CEO at TechFlow",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        content: "Syed is an exceptional engineer. He transformed our MVP into a scalable, production-ready application in record time. His attention to detail and UI/UX instincts are world-class."
    },
    {
        id: 2,
        name: "David Chen",
        role: "CTO at InnovateLabs",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
        content: "Working with Syed was a game-changer for our team. He not only wrote clean, maintainable code but also elevated our entire engineering culture with his best practices."
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Product Manager at StartUp Inc",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
        content: "I've never met a developer who cares so deeply about the end-user experience. Syed's contributions were critical to our successful Series A funding round."
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Testimonials</h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Trusted by <span className="text-slate-400 italic">Innovators.</span>
                    </motion.h3>
                </div>

                <div className="max-w-4xl mx-auto h-[400px] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 md:p-12 rounded-3xl relative h-full flex flex-col justify-center shadow-xl">
                                <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-500/10" />

                                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start pl-4">
                                    <div className="relative w-20 h-20 flex-shrink-0">
                                        <Image
                                            src={TESTIMONIALS[activeIndex].avatar}
                                            alt={TESTIMONIALS[activeIndex].name}
                                            width={80}
                                            height={80}
                                            className="object-cover rounded-full border-2 border-slate-700 shadow-lg"
                                        />
                                    </div>

                                    <div className="flex-1 space-y-6 text-center md:text-left">
                                        <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed italic">
                                            "{TESTIMONIALS[activeIndex].content}"
                                        </p>

                                        <div>
                                            <h4 className="text-lg font-bold text-white">{TESTIMONIALS[activeIndex].name}</h4>
                                            <p className="text-blue-400 text-sm font-medium">{TESTIMONIALS[activeIndex].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {TESTIMONIALS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-blue-500 w-8" : "bg-slate-700 w-3 hover:bg-slate-600"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
