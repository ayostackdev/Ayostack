"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#17223a] text-white py-4 fixed top-0 left-0 right-0 z-[1000]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 relative">
        {/* Logo */}

  <Image className="rounded-4xl h-18"
  src="/file_0000000034ac622f83b2c662380ff859~2.png"
  alt="Ayostack Logo"
  width={100}
  height={30}
  priority /> 
        <h1 className="text-2xl font-extrabold tracking-[0.08em] premium-gradient-title">Ayostack</h1>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <Link href="#hero" className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#experience" className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors">
            Experience
          </Link>

          <Link href="#skills" className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors">
            Skills
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className={`block md:hidden text-white text-2xl bg-none border-none transition-transform duration-400 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}>
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="flex flex-col md:hidden bg-[#071026]/90 backdrop-blur-xl border border-white/10 rounded-2xl absolute top-16 right-3 p-3 w-[180px] z-10 gap-2 shadow-2xl">
          <Link href="#hero" onClick={() => setIsOpen(false)} className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#experience" onClick={() => setIsOpen(false)} className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors">
            Experience
          </Link>

          <Link href="#skills" onClick={() => setIsOpen(false)} className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors">
            Skills
          </Link>
        </nav>
      )}
    </header>
  );
} 