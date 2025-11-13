"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-gradient-to-r from-[#0a0a0a] via-[#1a0a1f] to-[#0a0a0a] shadow-[0_4px_20px_rgba(108,22,157,0.5)]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-10 w-10 mr-3" />
        </div>

      
        <div className="hidden md:flex flex-1 justify-center space-x-14 text-[#d1c5ff] font-medium">
          <Link href="#home">Home</Link>
          <Link href="#about">About Me</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">skills</Link>
        </div>

     
        <div className="hidden md:block">
  <Link href="#contact">
    <button className="bg-gradient-to-r from-[#3a0060] to-[#6C169D] text-white px-4 py-2 rounded font-bold hover:opacity-90 transition">
      Hire Me
    </button>
  </Link>
</div>


     
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-8 h-1 bg-white mb-1"></span>
            <span className="block w-8 h-1 bg-white mb-1"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </button>
        </div>
      </div>

   
      {menuOpen && (
        <div className="md:hidden bg-[#1a0a1f] px-8 py-6 flex flex-col text-white space-y-6 absolute top-full left-0 w-full shadow-lg z-50">
          <Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>About Me</Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#skilles" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="#contact">
       <button className="bg-gradient-to-r from-[#3a0060] to-[#6C169D] text-white px-4 py-2 rounded font-bold hover:opacity-90 transition">
       Hire Me
     </button>
  </Link>
        </div>
      )}
    </nav>
  );
}
