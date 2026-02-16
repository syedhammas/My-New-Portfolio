"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 3000);
    };

    return (
        <section id="contact" className="py-24 px-6 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Contact</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Let&apos;s build something <span className="text-slate-400 italic">extraordinary.</span></h3>
                            <p className="text-slate-400 text-lg max-w-md">
                                I&apos;m currently open to new opportunities and collaborations. Reach out and let&apos;s discuss your vision.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email</p>
                                    <p className="text-white font-medium">hello@aaliyar.dev</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition-all duration-300">
                                    <MessageSquare className="w-5 h-5 text-slate-400 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">LinkedIn</p>
                                    <p className="text-white font-medium">linkedin.com/in/syedaaliyar</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[Github, Linkedin, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className="p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:border-white transition-all">
                                    <Icon className="w-6 h-6" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden"
                    >
                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-600 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-600 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-600 transition-colors"
                                />
                            </div>
                            <button
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${isSuccess ? "bg-green-600 text-white shadow-green-600/20" : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20 group"
                                    }`}
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : isSuccess ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Helper Link component
function Link({ href, children, className }: { href: string; children: React.ReactNode; className: string }) {
    return <a href={href} className={className}>{children}</a>;
}
// Force rebuild
