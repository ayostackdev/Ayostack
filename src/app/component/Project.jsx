"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./GlowingBorder.module.css";

export default function Projects() {
  const project = {
    title: "Fellowship Web Platform",
    desc: "A full-stack community platform that connects campus members through real-time event updates, announcements, and member management. Built with a focus on performance, responsive design, and a clean admin experience.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Supabase", "shadcn/ui"],
    live: "https://cssf-funaab.vercel.app/",
    github: "https://github.com/Ayostack-web",
    image: "/CSSF-FUNAAB-LOGO.jpg",
  };

  return (
    <section id="projects" className="py-14 px-6 bg-[#071026]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-2 text-center premium-gradient-title"
        >
          Featured Project
        </motion.h2>
        <p className="text-center text-blue-200/70 max-w-xl mx-auto mb-10">
          A closer look at one of my recent builds.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.card}
        >
          <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-center lg:items-stretch">
            {/* Screenshot */}
            <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden border border-blue-200/10 bg-[#0b1733]/60">
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
              <h3 className="text-white font-bold text-2xl tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-blue-100/70 text-sm leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-blue-500/15 text-blue-300 px-2.5 py-1 rounded-full border border-blue-200/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-shine premium-button inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all"
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-shine inline-flex items-center gap-2 px-6 py-2.5 border border-white/15 bg-white/5 hover:bg-white/10 text-blue-100 text-sm font-semibold rounded-full transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
