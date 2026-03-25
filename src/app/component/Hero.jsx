"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Add Framer Motion
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import styles from './GlowingBorder.module.css'; // Reuse your spinning border!

export default function HeroSection() {
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
          <p className="text-blue-400 font-mono tracking-widest text-sm uppercase">Available for 2026 Opportunities</p>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-teal-200 to-green-300 bg-clip-text text-transparent">
              Ayokunle
            </span>{" "}
          </h1>
          <p className="text-blue-100/70 text-lg md:text-xl max-w-xl leading-relaxed">
  Engineering high-performance systems where <span className="text-white">Statistical Science</span> meets <span className="text-white">Fullstack Architecture</span>.
  <br /><br />
  Mastering the core of <span className="font-mono">Next.js • NestJS • PostgreSQL</span> to build data-driven solutions.
  <br /><br />
  <span className="text-white/90 italic font-medium border-l-2 border-blue-400 pl-4">
    Currently scaling efficiency as a Data & BI Intern @ SunFi
  </span>
</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2 transition-all hover:scale-105">
              View Projects <FaArrowRight />
            </a>
            <a href="https://www.linkedin.com/in/ayokunle-shittu-560a9a162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <FaLinkedin className="text-blue-400" /> LinkedIn
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
