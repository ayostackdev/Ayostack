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
        <h1 className="animate-pulse text-blue-200 text-2xl">Ayostack</h1>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4">
          <Link href="#about" className="text-blue-100 hover:text-white transition">
            About
          </Link>
          <Link href="#projects" className="text-blue-100 hover:text-white transition">
            Project
          </Link>
          <Link href="#skills" className="text-blue-100 hover:text-white transition">
            Skills
          </Link>
          <Link href="#contacts" className="text-blue-100 hover:text-white transition">
            Contact
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
        <nav className="flex flex-col md:hidden bg-[#071026] absolute top-16 right-0 p-4 w-[200px] z-10 gap-4">
          <Link href="#about" className="text-blue-100 hover:text-white transition">
            About
          </Link>
          <Link href="#projects" className="text-blue-100 hover:text-white transition">
            Project
          </Link>
          <Link href="#skills" className="text-blue-100 hover:text-white transition">
            Skills
          </Link>
          <Link href="#contacts" className="text-blue-100 hover:text-white transition">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
} 