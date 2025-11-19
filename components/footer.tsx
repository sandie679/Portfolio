"use client";


import React from "react";
import { FaGithub, FaLinkedin, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black  text-gray-300  border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
   
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Let us Build Something Great.
          </h2>
          <p className="text-gray-400">
            Turning ideas into scalable and modern software solutions.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white  mb-3">Social</h3>
          <div className="flex items-center space-x-5  text-xl">
            <a href="https://github.com/sandie679" className="hover:text-white  p-3 rounded-full border border-grey "><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sandra-sibanda-491521352" className="hover:text-white p-3 rounded-full border border-grey"><FaLinkedin /></a>
            <a href="https://www.facebook.com/sandra.sibanda.31105" className="hover:text-white p-3 rounded-full border border-grey"><FaFacebookF /></a>
            <a href="https://wa.me/263778122053" className="hover:text-white p-3 rounded-full border border-grey"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 <span className="text-white">Sandra Sibanda</span> — Portfolio
      </div>
    </footer>
  );
}
