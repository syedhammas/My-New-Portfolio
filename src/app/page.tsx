import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about-me";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Services from "@/components/services";
import WorkflowTimeline from "@/components/workflow-timeline";
import Contact from "@/components/contact";
import Footer from "@/app/footer/footer";
import CustomCursor from "@/components/custom-cursor";
import Testimonials from "@/components/testimonials";
import TechMarquee from "@/components/tech-marquee";

export default function Home() {
  return (
    <main className="bg-[#020617] min-h-screen noise-bg">
      <CustomCursor />
      <Navbar />
      <Hero />
      <div className="space-y-32 pb-32">
        <About />
        <Services />
        <Skills />
        <TechMarquee />
        <WorkflowTimeline />
        <Testimonials />
        <Project />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
