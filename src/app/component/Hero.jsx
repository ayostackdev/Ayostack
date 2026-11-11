"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaCode, FaServer, FaDatabase, FaLightbulb, FaCubes } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiTypescript,
  SiCelery,
  SiDocker,
  SiRedis,
  SiGit,
  SiFastapi,
  SiReact,
} from "react-icons/si";
import styles from './GlowingBorder.module.css';

const highlights = [
  {
    icon: <FaCode className="w-5 h-5" />,
    title: "Frontend Craft",
    description: "Pixel-perfect interfaces with Next.js, TypeScript, and Tailwind CSS — performance and polish in every component.",
  },
  {
    icon: <FaServer className="w-5 h-5" />,
    title: "Backend Systems",
    description: "RESTful APIs and distributed task processing built with FastAPI and Celery, designed for reliability and scale.",
  },
  {
    icon: <FaDatabase className="w-5 h-5" />,
    title: "Data Infrastructure",
    description: "PostgreSQL schemas, automated pipelines, and real-time sync layers that keep products running smoothly.",
  },
  {
    icon: <FaLightbulb className="w-5 h-5" />,
    title: "Product Thinking",
    description: "I don't just write code — I architect solutions that align with business goals and user needs.",
  },
];



const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", hoverClass: "hover:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", hoverClass: "hover:text-sky-300" },
  { name: "Celery", icon: SiCelery, color: "#37814A", hoverClass: "hover:text-green-400" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", hoverClass: "hover:text-teal-300" },
  { name: "Python", icon: FaPython, color: "#3776AB", hoverClass: "hover:text-blue-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", hoverClass: "hover:text-blue-300" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", hoverClass: "hover:text-emerald-400" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", hoverClass: "hover:text-red-400" },
  { name: "React", icon: SiReact, color: "#61DAFB", hoverClass: "hover:text-cyan-300" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", hoverClass: "hover:text-sky-400" },
  { name: "Git", icon: SiGit, color: "#F05032", hoverClass: "hover:text-orange-400" },
  { name: "shadcn/ui", icon: FaCubes, color: "#A855F7", hoverClass: "hover:text-purple-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", hoverClass: "hover:text-cyan-300" },
];

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
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
            <p className="inline-flex premium-card-soft px-4 py-2 rounded-full text-blue-300 font-mono tracking-[0.18em] text-[11px] uppercase">Open to High-Impact 2027 Opportunities</p>

            <p className="text-lg sm:text-xl text-blue-200/80 font-medium">
              Hi, I&apos;m <span className="text-white font-semibold">Ayokunle Shittu</span>
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-[0_14px_30px_rgba(2,8,20,0.5)]">
              Building Scalable{" "}
              <span className="bg-gradient-to-r from-blue-400 via-teal-200 to-green-300 bg-clip-text text-transparent">
                Full-Stack Web Applications
              </span>{" "}
            </h1>

            <div className="space-y-6">
              <p className="text-blue-100/70 text-base md:text-lg max-w-2xl leading-relaxed">
                <span className="block mb-4">
                  I architect full-stack systems from concept to production — designing resilient backends, crafting polished frontends, and building the data layers in between. Every project I touch is built to scale, perform, and last.
                </span>

                <span className="flex items-center gap-3 text-white/90 italic font-medium border-l-4 border-blue-500 pl-4 bg-blue-500/5 py-3 rounded-r-lg">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  Available for freelance projects, contract work, and full-time opportunities
                </span>
              </p>
            </div>

            <div className="premium-card-soft rounded-2xl px-6 py-5 w-fit md:w-full max-w-2xl mx-auto md:mx-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-blue-300/80 font-semibold">Core Technologies</p>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-3.5">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      title={tech.name}
                      className={`group relative inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-blue-200/10 bg-gradient-to-br from-[#0d1b3a]/80 to-[#071026]/90 text-blue-300/70 shadow-[0_8px_24px_rgba(2,8,24,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/30 hover:shadow-[0_12px_32px_rgba(2,8,24,0.7),0_0_20px_rgba(56,189,248,0.15),inset_0_1px_0_rgba(255,255,255,0.08)] ${tech.hoverClass}`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-300">
                        <Icon size={17} color={tech.color} className="drop-shadow-[0_0_6px_rgba(125,211,252,0.15)]" />
                      </div>
                      <span className="text-[13px] font-medium tracking-wide">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a href="https://www.linkedin.com/in/ayokunle-shittu-560a9a162?utm_source=share&utm_campaign=share_via&utm_content&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="premium-shine px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2 premium-card-soft">
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
                  src="/toffee-3514~2.jpg"
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

      {/* About — below hero */}
      <section id="about" className="py-14 px-6 bg-[#071026]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="premium-card-soft rounded-xl p-4 border border-blue-200/15 bg-[#0b1733]/70 text-blue-100 shadow-[0_22px_52px_rgba(2,8,24,0.62),0_0_18px_rgba(59,130,246,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-400/20 flex items-center justify-center text-blue-400 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-blue-200/60 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
