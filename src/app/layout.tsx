import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "@/components/page-scroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Syed Hammas | Senior Frontend Architect",
  description: "Senior Software Engineer specializing in high-performance React & Next.js applications.",
};

import BackToTop from "@/components/back-to-top";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-slate-950 text-slate-50 antialiased`}>
        <ScrollProgressBar />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}
