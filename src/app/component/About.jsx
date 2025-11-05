// components/AboutMe.jsx
"use client";

import { FaLaptopCode, FaRocket, FaPalette, FaEnvelope } from "react-icons/fa";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiNestjs, SiPostgresql, SiSocketdotio, 
  SiFastapi,
  SiPython
} from "react-icons/si";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-[#071026] dark:bg-gray-900 flex flex-col justify-center items-center"
    >
      <div className="max-w-3xl w-full text-center space-y-6">
        {/* Intro */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-200 flex items-center justify-center gap-2">
          <FaLaptopCode className="text-blue-400" /> 
          I'm Ayokunle Shittu | Full-Stack Developer
        </h2>

        <p className="text-blue-200 dark:text-gray-300 text-lg flex items-center justify-center gap-2">
          <FaRocket className="text-yellow-400" /> Tech Enthusiast 
          <span className="mx-1">|</span>
          <FaPalette className="text-pink-400" /> UI Lover
        </p>

        {/* About text */}
        <p className="text-blue-200 dark:text-gray-300 leading-relaxed">
          I turn ideas into sleek, modern web apps. I build with cutting-edge tools, creating smooth, user-friendly experiences that people love to use.
        </p>

        {/* Tech stack with icons */}
        <div className="flex flex-wrap justify-center gap-6 text-blue-300 text-2xl">
          <SiReact title="React" />
          <SiNextdotjs title="Next.js" />
          <SiTailwindcss title="Tailwind CSS" />
          <SiNodedotjs title="Node.js" />
          <SiExpress title="Express.js" />
          <SiFastapi  title="FastApi"/>
          <SiPostgresql title="PostgreSQL" />
          <SiPython title="Python" />
        </div>

        {/* Closing line */}
        <p className="text-blue-200 dark:text-gray-300 text-lg flex items-center justify-center gap-2">
          🌟 Always learning, experimenting, and bringing creative solutions to life.
        </p>
        <p className="text-blue-200 dark:text-gray-300 text-lg flex items-center justify-center gap-2">
          <FaEnvelope className="text-green-400" /> Let’s connect and build something amazing together!
        </p>
      </div>
    </section>
  );
}
