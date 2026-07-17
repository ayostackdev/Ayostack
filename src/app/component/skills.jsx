"use client";

import { motion } from "framer-motion";
// Consolidated Si Imports
import { 
  SiFastapi,
  SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiGit, SiGithub, SiPostgresql, SiDocker, SiVercel, SiRedis, 
  SiCelery, SiPrisma, SiNestjs, SiSupabase, SiSocketdotio
} from "react-icons/si";

// Consolidated Fa Imports
import { 
  FaNodeJs, FaCubes,
  FaTable, 
} from "react-icons/fa";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Engineering",
      subtitle: "Building responsive, performant user interfaces with Next.js and modern CSS.",
      skills: [
        { name: "TypeScript", level: "Advanced", icon: <SiTypescript className="w-6 h-6" color="#3178C6" /> },
        { name: "Next.js", level: "Advanced", icon: <SiNextdotjs className="w-6 h-6" color="#FFFFFF" /> },
        { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="w-6 h-6" color="#38BDF8" /> },
        { name: "shadcn/ui", level: "Proficient", icon: <FaCubes className="w-6 h-6" color="#A855F7" /> },
      ],
    },
    {
      title: "Backend Engineering",
      subtitle: "Developing scalable REST APIs, microservices, and data layers with Node.js and Nest.js.",
      skills: [
        { name: "FastAPI", level: "Proficient", icon: <SiFastapi className="w-6 h-6" color="#009688" /> },
        { name: "Node.js", level: "Advanced", icon: <FaNodeJs className="w-6 h-6" color="#339933" /> },
        { name: "Nest.js", level: "Advanced", icon: <SiNestjs className="w-6 h-6" color="#E0234E" /> },
        { name: "Supabase", level: "Proficient", icon: <SiSupabase className="w-6 h-6" color="#3ECF8E" /> },
        { name: "Prisma", level: "Advanced", icon: <SiPrisma className="w-6 h-6" color="#3178c6" /> },
        { name: "PostgreSQL", level: "Advanced", icon: <SiPostgresql className="w-6 h-6" color="#4169E1" /> },
        
      ],
    },
    
    {
      title: "DevOps",
      subtitle: "CI/CD pipelines, version control, containerization, and cloud deployment infrastructure.",
      skills: [
        { name: "Git", level: "Advanced", icon: <SiGit className="w-6 h-6" color="#F05032" /> },
        { name: "GitHub", level: "Advanced", icon: <SiGithub className="w-6 h-6" color="#FFFFFF" /> },
        { name: "Vercel", level: "Proficient", icon: <SiVercel className="w-6 h-6" color="#FFFFFF" /> },
        { name: "Docker", level: "Proficient", icon: <SiDocker className="w-6 h-6" color="#2496ED" /> },
      ],
    },
    {
      title: "Real-Time & Messaging",
      subtitle: "Event-driven architectures, caching strategies, and background task processing.",
      skills: [
        { name: "Celery", level: "Proficient", icon: <SiCelery className="w-6 h-6" color="#A3C644" /> },
        { name: "BullMQ", level: "Proficient", icon: <FaCubes className="w-6 h-6" color="#FFFFFF" /> },
        { name: "Redis", level: "Proficient", icon: <SiRedis className="w-6 h-6" color="#DC382D" /> },
        { name: "Socket.IO", level: "Proficient", icon: <SiSocketdotio className="w-6 h-6" color="#FFFFFF" /> },
      ],
    },
  ];

  const certifications = [
    {
      title: "Cloud Infrastructure & Virtualization",
      items: [
        { name: "Ubuntu Linux Professional", issuer: "Canonical" },
        { name: "Docker Foundations", issuer: "Docker, Inc." },
      ],
    },
    {
      title: "Data Engineering & Algorithmic Intelligence",
      items: [
        { name: "Data Engineering Foundations", issuer: "Astronomer" },
        { name: "Machine Learning with Python", issuer: "Anaconda" },
      ],
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 14, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } }
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className="py-12 px-6 bg-[#071026] dark:bg-gray-900"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-2 text-center premium-gradient-title"
      >
        Technical Expertise
      </motion.h2>
      <p className="text-center text-blue-200/70 max-w-2xl mx-auto mb-10">
        A curated snapshot of the tools and technologies I use to design, build, and scale modern digital products.
      </p>

      <div className="space-y-8">
        {categories.map((category, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.04 }}
            viewport={{ once: true, amount: 0.15 }}
            className="premium-card-soft rounded-2xl p-5 md:p-7 shadow-[0_24px_70px_rgba(2,8,24,0.6),0_0_26px_rgba(96,165,250,0.2),inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-semibold mb-1 text-blue-100"
            >
              {category.title}
            </motion.h3>
            <p className="text-blue-300/70 mb-5 text-sm md:text-base">{category.subtitle}</p>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.025, y: -4 }}
                  className="group relative flex flex-col gap-1.5 p-3 rounded-xl border border-blue-200/15 bg-[#0b1733]/70 text-blue-100 font-semibold transform transition-all duration-300 shadow-[0_22px_52px_rgba(2,8,24,0.62),0_0_18px_rgba(59,130,246,0.26),0_0_14px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_40px_84px_rgba(2,8,24,0.82),0_0_38px_rgba(56,189,248,0.4),0_0_28px_rgba(255,255,255,0.18),0_0_72px_rgba(37,99,235,0.3)] hover:border-blue-300/45 hover:bg-[#0f2148]/85"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_8px_16px_rgba(2,8,24,0.45),0_0_6px_rgba(255,255,255,0.08),0_0_0_rgba(56,189,248,0)] group-hover:scale-105 group-hover:shadow-[0_12px_24px_rgba(2,8,24,0.62),0_0_10px_rgba(255,255,255,0.16),0_0_20px_rgba(56,189,248,0.38)] transition-all">
                      {skill.icon ? skill.icon : <FaTable className="w-6 h-6" />}
                    </div>
                  </div>
                  <span className="text-sm md:text-base leading-tight mt-0.5">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center premium-gradient-title">
          Professional Certifications
        </h2>
        <p className="text-center text-blue-200/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Certifications that reflect my focus across infrastructure, distributed systems, data, and applied AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.15 }}
              className="premium-card-soft rounded-2xl p-6 shadow-[0_24px_70px_rgba(2,8,24,0.6),0_0_26px_rgba(96,165,250,0.2),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-100 mb-4">
                {certification.title}
              </h3>
              <ul className="space-y-3 text-blue-200/80 text-sm md:text-base">
                {certification.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.75)]" />
                    <span>
                      {item.name} <span className="text-blue-300">({item.issuer})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}