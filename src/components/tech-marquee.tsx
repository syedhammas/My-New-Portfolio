"use client";

import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
    SiPostgresql, SiSupabase, SiFigma, SiDocker, SiAmazon, SiGraphql, SiRedux, SiMongodb
} from "react-icons/si";

const techs = [
    { name: "React", icon: SiReact, color: "group-hover:text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-blue-600" },
    { name: "Tailwind", icon: SiTailwindcss, color: "group-hover:text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "group-hover:text-blue-300" },
    { name: "Supabase", icon: SiSupabase, color: "group-hover:text-emerald-400" },
    { name: "Figma", icon: SiFigma, color: "group-hover:text-purple-400" },
    { name: "Docker", icon: SiDocker, color: "group-hover:text-blue-500" },
    { name: "AWS", icon: SiAmazon, color: "group-hover:text-yellow-500" },
    { name: "GraphQL", icon: SiGraphql, color: "group-hover:text-pink-500" },
    { name: "Redux", icon: SiRedux, color: "group-hover:text-purple-600" },
    { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-green-400" },
];

export default function TechMarquee() {
    return (
        <section className="py-24 overflow-hidden bg-slate-950 border-t border-slate-900 border-b relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none" />

            <div className="flex relative">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                    className="flex gap-16 px-16 w-max"
                >
                    {/* Duplicate the array to ensure seamless loop */}
                    {[...techs, ...techs].map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 group cursor-pointer"
                        >
                            <tech.icon className={`w-12 h-12 text-slate-400 transition-all duration-300 group-hover:scale-110 ${tech.color} opacity-80 group-hover:opacity-100`} />
                            <span className={`text-xl font-bold text-slate-400 transition-colors opacity-80 group-hover:opacity-100 ${tech.color}`}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
