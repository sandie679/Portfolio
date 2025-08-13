import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 p-4 flex items-center justify-center
      bg-gradient-to-r from-[#0a0a0a] via-[#1a0a1f] to-[#0a0a0a] shadow-[0_4px_20px_rgba(108,22,157,0.5)]"
    >
      <div className="container mx-auto flex justify-between items-center">
    
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
        </div>

        
        <div className="flex-1 flex justify-center space-x-14 text-[#d1c5ff] hover:text-white font-medium transition">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact Me</Link>
        </div>

        
        <div>
          <button className="bg-gradient-to-r from-[#3a0060] to-[#6C169D] text-white px-4 py-2 rounded font-bold hover:opacity-90 transition">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
