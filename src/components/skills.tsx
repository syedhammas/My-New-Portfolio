"use client";

import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
    SiFramer, SiPostgresql, SiFirebase, SiSupabase, SiFigma
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: <FaReact className="text-blue-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "Framer Motion", icon: <SiFramer className="text-purple-400" /> },
        ]
    },
    {
        title: "Backend & DB",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
            { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
            { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
            { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
            { name: "AWS", icon: <FaAws className="text-yellow-600" /> },
            { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Technical Stack</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        A comprehensive overview of the technologies I use to bring digital ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all group"
                        >
                            <h4 className="text-xl font-bold text-white mb-8 group-hover:text-blue-500 transition-colors">
                                {category.title}
                            </h4>
                            <div className="grid grid-cols-2 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-3 group/skill">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl group-hover/skill:bg-slate-700 transition-colors group-hover/skill:scale-110 duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm font-medium text-slate-400 group-hover/skill:text-white transition-colors text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}