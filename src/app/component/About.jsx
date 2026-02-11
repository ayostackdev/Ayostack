"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaPalette, FaEnvelope, FaCode } from "react-icons/fa";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiNestjs, SiPostgresql, SiPrisma,
  SiPython, SiFramer
} from "react-icons/si";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-24 px-6 bg-[#071026] flex flex-col items-center">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-4xl w-full text-center space-y-8"
      >
        {/* Professional Status Badge */}
        <motion.span 
          variants={itemVariants}
          className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium inline-block mb-4"
        >
          🚀 Building LiteWire • Open for Collaborations
        </motion.span>

        {/* Intro */}
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Ayokunle Shittu
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-xl text-blue-300 font-medium">
          Solutions Architect & Full-Stack Developer
        </motion.p>

        {/* About text */}
        <motion.p variants={itemVariants} className="text-blue-200/70 text-lg leading-relaxed max-w-2xl mx-auto">
          I specialize in building scalable, real-time applications using <strong>Next.js</strong> and <strong>NestJS</strong>. Currently focused on architecting <strong>LiteWire</strong>, a high-performance communication platform designed for the Nigerian tech ecosystem.
        </motion.p>

        {/* Tech stack organized by Category */}
        <motion.div variants={itemVariants} className="pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-bold mb-6">Core Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-blue-400/80">
            {/* Frontend Group */}
            <div className="flex gap-6 border-r border-blue-500/20 pr-6">
              <SiNextdotjs title="Next.js" className="hover:text-white transition-colors cursor-help" size={32} />
              <SiReact title="React" className="hover:text-blue-400 transition-colors cursor-help" size={32} />
              <SiTailwindcss title="Tailwind" className="hover:text-cyan-400 transition-colors cursor-help" size={32} />
            </div>
            
            {/* Backend Group */}
            <div className="flex gap-6 border-r border-blue-500/20 pr-6">
              <SiNestjs title="Nest.js" className="hover:text-red-500 transition-colors cursor-help" size={32} />
              <SiNodedotjs title="Node.js" className="hover:text-green-500 transition-colors cursor-help" size={32} />
              <SiPostgresql title="PostgreSQL" className="hover:text-blue-300 transition-colors cursor-help" size={32} />
              <SiPrisma title="Prisma" className="hover:text-white transition-colors cursor-help" size={32} />
            </div>

            {/* Others */}
            <div className="flex gap-6">
              <SiPython title="Python" className="hover:text-yellow-400 transition-colors cursor-help" size={32} />
              <SiFramer title="Framer Motion" className="hover:text-pink-400 transition-colors cursor-help" size={32} />
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="pt-10">
          <a 
            href="https://www.linkedin.com/in/ayokunle-shittu-560a9a162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
          >
            <FaEnvelope /> Let's Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}