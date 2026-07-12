"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Lead Full-Stack Developer & Product Architect",
    company: "C&S Unification Funaab Chapel",
    location: "Abeokuta, Nigeria",
    date: "Sep 2025 - Present",
    link: "https://cssf-funaab.vercel.app",
    highlight:
      "Architected the organization's first centralized digital platform and custom admin dashboard, streamlining content management.",
  },
  {
    role: "Data Infrastructure & Software Intern",
    company: "Sunfi",
    location: "Lagos, Nigeria",
    date: "Mar 2026 - Sep 2026",
    highlight:
      "Engineered automated data sync pipelines between PostgreSQL and Google Sheets, eliminating manual export bottlenecks.",
  },
  {
    role: "Mathematics Teacher",
    company: "New Era Primary School",
    location: "Lagos, Nigeria",
    date: "Sep 2019 - Sep 2020",
    highlight:
      "Taught 40+ students achieving a 95% pass rate through data-driven assessments and personalized instruction.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 px-6 bg-[#071026]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-2 text-center premium-gradient-title"
        >
          Experience
        </motion.h2>
        <p className="text-center text-blue-200/70 max-w-xl mx-auto mb-10">
          A snapshot of roles where I&apos;ve shipped products and solved real problems.
        </p>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-teal-400/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#071026] shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

                <div className="premium-card-soft rounded-xl p-4 md:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-blue-50 font-semibold text-base md:text-lg leading-snug">
                      {exp.role}
                    </h3>
                    <span className="text-blue-300/60 text-xs font-mono whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-blue-300/80 mb-2">
                    <FaBriefcase className="w-3.5 h-3.5 text-blue-400/70" />
                    <span>{exp.company}</span>
                    <span className="text-blue-400/40">|</span>
                    <span className="text-blue-300/60">{exp.location}</span>
                  </div>

                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    {exp.highlight}
                  </p>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors font-mono"
                    >
                      {exp.link.replace("https://", "")} ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
