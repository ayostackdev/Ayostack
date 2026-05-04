"use client"
import { motion } from "framer-motion";
import styles from './GlowingBorder.module.css';

export default function Projects() {
  const projects = [
    { 
      title: "Fellowship Web Platform", 
      desc: "A full-stack community platform built with Next.js and PostgreSQL that connects campus members through real-time event updates, announcements, and member management. Features responsive design and optimized performance.", 
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS","Supabase","Shadcnui"],
      link: "https://cssf-funaab.vercel.app/" 
    },
    /*
    { 
      title: "Real-Time Chat Application", 
      desc: "WebSocket-powered real-time communication platform built with Nest.js backend and React frontend. Implements message encryption, user authentication, and data persistence with PostgreSQL.", 
      tech: ["Nest.js", "React", "WebSocket", "PostgreSQL"],
      link: "#" 
    },
    */
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.985 },
    visible: (i) => ({
      opacity: 1, y: 0, scale: 1,
      transition: { delay: i * 0.14, duration: 0.62, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.68, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className="py-18 px-6 bg-[#071026] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-white tracking-tight"
        >
          Featured <span className="text-blue-400">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
          className="text-blue-200/60 text-center mb-16 max-w-2xl mx-auto"
        >
          A curated selection of recent builds focused on performance, user experience, and scalable architecture.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={index}
              className={styles.card}
            >
              {/* Inner Content Layer - Center Aligned */}
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 bg-blue-500/10 rounded-2xl">
                   <h3 className="text-white font-bold text-2xl tracking-tight">{project.title}</h3>
                </div>
                
                <p className="text-blue-100/80 text-sm leading-relaxed mb-4 flex-grow">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="premium-shine premium-button w-full py-3.5 bg-white/10 hover:bg-blue-600 border border-white/20 hover:border-blue-400 text-white font-semibold rounded-full transition-all duration-300 flex justify-center items-center gap-2 group backdrop-blur-sm"
                >
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}