"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import SkillsSection from "../components/skills";
import ProjectsSection from "../components/project";
import FormSection from "../components/form";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden font-lato">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>

        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-0"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start min-h-screen w-full px-4 md:px-8 text-center md:text-left">
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start mt-24 md:mt-48 md:ml-14 space-y-7 w-full md:w-auto">
              <p className="text-2xl text-[#959595]">Hello!</p>
              <h4 className="text-5xl text-[#959595] font-semibold">
                l'm Sandra Sibanda
              </h4>
              <h1 className="text-3xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#38014F] via-[#70117C] to-[#70117C] bg-clip-text text-transparent">
                Software Developer
              </h1>
              <p className="text-xl  text-[#959595]">
                I'm a growing software developer dedicated to learning, 
                building, <br /> and solving real-world problems through code. Every <br />
                project I create brings me closer to mastering my craft.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-7 w-full md:w-auto">
                
                <a
                  href="https://www.canva.com/design/DAGrcFwwpnw/HYXGIL8G0ior5oly8KgRtw/edit?utm_content=DAGrcFwwpnw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className=  " bg-gradient-to-r from-[#3a0060] to-[#6C169D] text-white  px-7 py-2 rounded border-[#959595] hover:bg-[#959595] hover:text-white transition w-full sm:w-auto">
                    Download CV
                  </button>
                </a>
              </div>

              <div className="flex justify-center md:justify-start flex-row space-x-3 ">
                <a
                  href="https://www.facebook.com/sandra.sibanda.31105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 border border-white rounded-full p-3 transition-colors duration-200"
                >
                  <FaFacebookF />
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

              

              
            </div>

            <div className="relative flex items-center justify-center md:ml-20 mt-10 md:mt-48 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 bg-[#FFFFFF0A] rounded-full z-0" />
              <div className="relative w-60 h-full rounded-full overflow-hidden z-10">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover object-center rounded-full shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row min-h-[700px] md:h-[700px] justify-start items-center md:items-start px-4 md:px-24">
            <div className="w-full flex flex-col items-center md:items-start">
              <div className="object-cover shadow-lg relative z-0 rounded-full mt-12 sm:mt-16 md:mt-20 w-56 sm:w-72 md:w-[450px] h-56 sm:h-72 md:h-[450px]">
                <video
                  src="/vedio.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-full w-full h-full"
                ></video>
              </div>

              <div className="object-cover z-10 shadow-lg relative rounded-full w-14 sm:w-20 md:w-[150px] h-14 sm:h-20 md:h-[150px] animate-bounce  mt-6 sm:mt-8 md:-mt-25">
                <img
                  src="/Ellipse 111.png"
                  alt="Decor"
                  className="rounded-full w-full h-full"
                />
              </div>
            </div>

            <div
              id="about"
              className="flex flex-col w-full mt-12 md:mt-48 items-center md:items-start text-center md:text-left"
            >
              <h1 className="text-white font-semibold font-lato text-4xl sm:text-6xl md:text-8xl mb-6 md:relative md:right-[250px] md:top-[-140px]">
                About <br /> me
              </h1>

              <div className="w-full flex justify-center sm:justify-end mb-4 md:mb-0 md:relative md:top-[-260px]">
                <FaArrowRight className="text-4xl sm:text-5xl md:text-7xl text-[#70117C]" />
              </div>

              <div className="relative md:top-[-270px] flex w-full justify-center md:justify-start">
                <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-md sm:max-w-lg md:max-w-none">
                  I am a passionate full-stack developer with a strong focus on
                  building clean, user-friendly, and efficient digital
                  solutions. I enjoy turning ideas into real products, whether
                  it is designing intuitive interfaces or developing robust
                  backend systems. With skills in modern web technologies, I am
                  always eager to learn, adapt, and take on new challenges that
                  help me grow as a developer. My goal is to create software
                  that not only works seamlessly but also makes a meaningful
                  impact for users.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-8 md:relative md:bottom-[280px]">
                <Link href="#contact">
                  <button className="bg-gradient-to-r from-[#3a0060] to-[#6C169D] text-white px-5 py-2 rounded font-bold hover:opacity-90 transition w-full sm:w-auto">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="-mt-5  md:-mt-24 px-10">
            <SkillsSection />
          </div>

          <div className="-mt-16 px-10">
            <ProjectsSection />
          </div>

          <div className="-mt-16">
            <FormSection />
          </div>

          <Footer/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
