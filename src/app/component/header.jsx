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
        <nav className="hidden md:flex gap-4">
          <Link href="#hero" className="premium-nav-link text-blue-100 hover:text-white transition">
            Home
          </Link>
          <Link href="#experience" className="premium-nav-link text-blue-100 hover:text-white transition">
            Experience
          </Link>
          <Link href="#projects" className="premium-nav-link text-blue-100 hover:text-white transition">
            Projects
          </Link>
          <Link href="#skills" className="premium-nav-link text-blue-100 hover:text-white transition">
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
        <nav className="flex flex-col md:hidden bg-[#071026]/90 backdrop-blur-xl border border-white/10 rounded-2xl absolute top-16 right-3 p-4 w-[200px] z-10 gap-4 shadow-2xl">
          <Link href="#hero" onClick={() => setIsOpen(false)} className="premium-nav-link text-blue-100 hover:text-white transition">
            Home
          </Link>
          <Link href="#experience" onClick={() => setIsOpen(false)} className="premium-nav-link text-blue-100 hover:text-white transition">
            Experience
          </Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="premium-nav-link text-blue-100 hover:text-white transition">
            Projects
          </Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="premium-nav-link text-blue-100 hover:text-white transition">
            Skills
          </Link>
        </nav>
      )}
    </header>
  );
} 