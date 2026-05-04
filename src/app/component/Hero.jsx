"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Add Framer Motion
import { FaArrowRight, FaLinkedin, FaNetworkWired } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import styles from './GlowingBorder.module.css'; // Reuse your spinning border!

export default function HeroSection() {
  const techStack = [
    { name: "Next.js", icon: SiNextdotjs, hoverClass: "hover:text-white" },
    { name: "Nest.js", icon: SiNestjs, hoverClass: "hover:text-pink-300" },
    { name: "PostgreSQL", icon: SiPostgresql, hoverClass: "hover:text-blue-300" },
    { name: "Prisma", icon: SiPrisma, hoverClass: "hover:text-sky-100" },
    { name: "Supabase", icon: SiSupabase, hoverClass: "hover:text-emerald-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, hoverClass: "hover:text-cyan-300" },
    { name: "TypeScript", icon: SiTypescript, hoverClass: "hover:text-sky-300" },
  ];

  return (
    <section id="hero" className="w-full pt-25 min-h-screen flex items-center justify-center bg-[#071026] text-white relative overflow-hidden px-6">

      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <p className="inline-flex premium-card-soft px-4 py-2 rounded-full text-blue-300 font-mono tracking-[0.18em] text-[11px] uppercase">Open to High-Impact 2026 Opportunities</p>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-[0_14px_30px_rgba(2,8,20,0.5)]">
            Building Scalable{" "}
            <span className="bg-gradient-to-r from-blue-400 via-teal-200 to-green-300 bg-clip-text text-transparent">
              Full-Stack Web Applications
            </span>{" "}
          </h1>
          <p className="text-base md:text-xl font-semibold text-blue-100/90">Ayokunle Shittu | Full-Stack Developer in Nigeria specializing in Next.js, Nest.js, and PostgreSQL.</p>
  <div className="space-y-6">
  <p className="text-blue-100/70 text-base md:text-lg max-w-2xl leading-relaxed">
    {/* The Vision */}
    <span className="block mb-4">
      I build scalable web applications, REST APIs, and data platforms that help businesses scale efficiently. With expertise in modern full-stack JavaScript, I turn complex requirements into high-performance, maintainable solutions.
    </span>

    {/* The Current Status */}
    <span className="flex items-center gap-3 text-white/90 italic font-medium border-l-4 border-blue-500 pl-4 bg-blue-500/5 py-3 rounded-r-lg">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
      </span>
      Available for freelance projects, contract work, and full-time opportunities
    </span>
  </p>
</div>

          <div className="premium-card-soft rounded-2xl px-5 py-4 w-fit md:w-full max-w-2xl mx-auto md:mx-0">
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300/75 mb-3">Core Technologies</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-5 text-blue-300/65">
              {techStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <span
                    key={tech.name}
                    title={tech.name}
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border border-blue-200/15 bg-[#0b1733]/70 text-blue-300/75 shadow-[0_10px_22px_rgba(2,8,24,0.52),inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_rgba(56,189,248,0)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-300/45 hover:shadow-[0_16px_34px_rgba(2,8,24,0.68),0_0_28px_rgba(56,189,248,0.34)] ${tech.hoverClass}`}
                  >
                    <Icon size={22} className="drop-shadow-[0_0_10px_rgba(125,211,252,0.22)]" />
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href="#projects" className="premium-button premium-shine px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2 transition-all hover:scale-105">
              View Featured Projects <FaArrowRight />
            </a>
            <a href="https://www.linkedin.com/in/ayokunle-shittu-560a9a162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="premium-shine px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2 premium-card-soft">
              <FaLinkedin className="text-blue-400" /> LinkedIn Profile
            </a>
          </div>
        </motion.div>


        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
    
            <div className={`absolute -inset-1 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ${styles.card}`} 
                 style={{ padding: 0, borderRadius: '50%', minHeight: 'auto' }}>
            </div>
            
            <div className="relative w-64 h-66 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[#071026] z-10">
              <Image
                src="/toffee-8789.JPG"
                alt="Ayokunle Shittu"
                fill
                priority
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
