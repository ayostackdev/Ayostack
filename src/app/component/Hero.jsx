// components/HeroSection.jsx
"use client";

import Image from "next/image";
import { 
  FaArrowRight, FaCode, FaReact, FaJs, FaLaptopCode 
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen mt-26 flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-teal-200 to-green-300 bg-clip-text text-transparent animate-text">
              Ayokunle Shittu
            </span>{" "}
            👋
          </h1>

          {/* Roles as Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm">
              <FaCode className="text-blue-400" /> Full-Stack Dev
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm">
              <FaReact className="text-cyan-400" /> Next.js Enthusiast
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm">
              <FaJs className="text-yellow-400" /> JavaScript Lover
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm">
              <FaLaptopCode className="text-pink-400" /> CSS Magician
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 rounded-xl shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              View My Work <FaArrowRight />
            </a>
            <a
              href="https://www.linkedin.com/in/ayokunle-shittu-560a9a162"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-500 hover:border-blue-400 hover:text-blue-400 rounded-xl transition-transform hover:scale-105"
            >
              Let’s Connect
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)]">
            <Image
              src="/toffee-8789.JPG" // replace with your image
              alt="Profile"
              fill
              priority
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
