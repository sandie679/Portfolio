import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="relative h-[110vh] overflow-hidden flex font-lato">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-row items-start justify-start min-h-screen w-full px-8">
        <div className="flex flex-col justify-start items-start mt-48 ml-14 space-y-7 ">
          <p className="text-2xl text-[#959595]">Hi I am</p>
          <h4 className="text-xl text-[#959595] font-semibold">
            Sandra Sibanda
          </h4>
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-[#38014F] via-[#70117C] to-[#70117C] bg-clip-text text-transparent">
            Software Developer
          </h1>
          <div className="flex flex-row space-x-4 mt-2">
            <a
              href="https://www.facebook.com/sandra.sibanda.31105"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 border border-white rounded-full p-3 transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ropafadzo.talent?igsh=MWxseTl2b3YwcTJhdA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 border border-white rounded-full p-3 transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/sandra-sibanda-491521352"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 border border-white rounded-full p-3 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/263778122053"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 border border-white rounded-full p-3 transition-colors duration-200"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className="flex flex-row space-x-7">
            <button className="bg-gradient-to-r from-[#3a0060] to-[#6C169D] text-white px-5 py-2 rounded font-bold hover:opacity-90 transition">
              Hire Me
            </button>
            <a
              href="https://www.canva.com/design/DAGrcFwwpnw/HYXGIL8G0ior5oly8KgRtw/edit?utm_content=DAGrcFwwpnw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[#959595] border-2 px-7 py-2 rounded border-[#959595] hover:bg-[#959595] hover:text-white transition">
                Download CV
              </button>
            </a>
          </div>

          <div className="w-full flex justify-start mt-6 z-20 relative">
            <div className="bg-[#FFFFFF0A] rounded-2xl shadow-lg flex flex-row px-5 py-2 space-x-10 backdrop-blur-md items-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#70117C]">2+</span>
                <span className="text-lg text-[#DFDFDF] mt-2">Years Experience</span>
              </div>
              
              <div className="h-14 w-px bg-[#959595] opacity-40 mx-8" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#70117C]">20+</span>
                <span className="text-lg text-[#DFDFDF] mt-2">Projects Done</span>
              </div>
              
              <div className="h-14 w-px bg-[#959595] opacity-40 mx-8" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#70117C]">15+</span>
                <span className="text-lg text-[#DFDFDF] mt-2">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center ml-20 relative"
          style={{ marginTop: "7rem" }}
        >
          <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#FFFFFF0A] rounded-full z-0" />
          <Image
            src="/image.png"
            alt="Profile"
            width={450}
            height={450}
            className="object-cover shadow-lg relative z-10 rounded-full mb-11"
          />
        </div>
      </div>
    </div>
  );
}
