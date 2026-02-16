"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                        SA<span className="text-blue-500">.</span>
                    </Link>
                    <p className="text-slate-500 text-sm">
                        Designed & Built with ❤️ by Syed Aaliyar
                    </p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-slate-400">
                    <Link href="#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
                    <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                </div>

                <div className="text-slate-500 text-sm">
                    &copy; {currentYear} All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
