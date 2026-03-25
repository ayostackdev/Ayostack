"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiNestjs, 
  SiPostgresql, SiPrisma, SiSupabase, SiPython
} from "react-icons/si";

export default function AboutMe() {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 px-6 bg-[#030816] flex flex-col items-center border-t border-white/5">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-3xl w-full text-center space-y-6"
      >
        {/* Live Status Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <span className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Scaling Efficiency @ SunFi
          </span>
        </motion.div>

        {/* Identity & Hook */}
        <div className="space-y-3">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Ayokunle Shittu
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-blue-400 font-semibold">
            Product Engineer: Statistical Science × Fullstack Architecture
          </motion.p>
        </div>

        {/* Concise Bio */}
        <motion.p variants={itemVariants} className="text-blue-100/70 text-lg leading-relaxed max-w-2xl mx-auto">
          I engineer high-performance systems where data meets logic. 
          Currently architecting <strong>LiteWire</strong> and optimizing 
          energy-fintech workflows at <strong>SunFi</strong> using 
          Next.js, NestJS, and PostgreSQL.
        </motion.p>

        {/* Tech Stack - Streamlined */}
        <motion.div variants={itemVariants} className="pt-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-blue-400/50">
            <SiNextdotjs size={26} title="Next.js" className="hover:text-white transition-colors" />
            <SiNestjs size={26} title="NestJS" className="hover:text-red-500 transition-colors" />
            <SiPostgresql size={26} title="PostgreSQL" className="hover:text-blue-300 transition-colors" />
            <SiPrisma size={26} title="Prisma" className="hover:text-white transition-colors" />
            <SiSupabase size={26} title="Supabase" className="hover:text-emerald-400 transition-colors" />
            <SiTailwindcss size={26} title="Tailwind" className="hover:text-cyan-400 transition-colors" />
            <SiPython size={26} title="Python (BI/Analytics)" className="hover:text-yellow-400 transition-colors" />
          </div>
        </motion.div>

        {/* Professional CTA */}
        <motion.div variants={itemVariants} className="pt-8">
          <a 
            href="https://www.linkedin.com/in/ayokunle-shittu-560a9a162"
            className="inline-flex items-center gap-3 bg-blue-200 text-[#030816] px-8 py-3 rounded-full font-bold transition-all hover:bg-blue-600 hover:text-white active:scale-95"
          >
            <FaEnvelope /> Let's Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}