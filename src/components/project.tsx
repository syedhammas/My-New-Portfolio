"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Rentive",
        description: "A comprehensive rental marketplace platform specializing in property and asset management with seamless user experiences.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2426",
        tags: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
        link: "https://rentive.pk",
        github: "#"
    },
    {
        title: "Tejarify",
        description: "An advanced e-commerce ecosystem designed for modern retail, featuring high-speed performance and intuitive shopping interfaces.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2832",
        tags: ["React", "Shopify", "GraphQL", "Redux"],
        link: "https://tejarify.com",
        github: "#"
    },
    {
        title: "Deal Desk",
        description: "A professional business deal-making platform that facilitates secure transactions and connects entrepreneurs with opportunities.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2070",
        tags: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
        link: "https://dealdesk.pk",
        github: "#"
    }
];

export default function Project() {
    return (
        <section id="projects" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Selected Works</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Case Studies</h3>
                    </div>
                    <p className="text-slate-400 max-w-md leading-relaxed">
                        A selection of real-world projects that showcase my ability to build complex, scalable, and user-centric applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="flex-1 w-full group relative">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                        <Link href={project.link} target="_blank" className="p-4 rounded-full bg-white text-slate-950 hover:scale-110 transition-transform">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </Link>
                                        <Link href={project.github} className="p-4 rounded-full bg-slate-900 border border-slate-700 text-white hover:scale-110 transition-transform">
                                            <Github className="w-6 h-6" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-bold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h4>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="pt-4">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-white font-bold group"
                                    >
                                        Visit Website
                                        <div className="w-8 h-[1px] bg-blue-500 group-hover:w-12 transition-all" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
