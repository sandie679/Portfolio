"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Sandra Luxe Suits",
    desc: "Sandra Luxe Suits , A modern e-commerce platform offering premium, custom-tailored suits for men and women. Designed with elegance and usability in mind, it combines sleek visuals, smooth navigation, and a seamless shopping experience that elevates personal style with every click",
    img: "/suits.png",
    live: "https://suits-store.vercel.app/",
    code: "https://github.com/sandie679/suits-store",
  },
  {
    title: "Mosi Oa Tunya High School",
    desc: "Mosi Oa Tunya High School , A modern school website built with React and Tailwind CSS, designed to showcase academic programs, news, and events. It delivers a clean layout, fast performance, and a smooth user experience that connects students, parents, and teachers",
    img: "/mosii-r.png",
    live: "https://mosihighschool.vercel.app/",
    code: "https://github.com/Blessing-T/Mosi",
  },
  {
    title: "Travel Home Blog",
    desc: "A responsive travel blog platform built with Next.js and Tailwind CSS, designed to share travel stories, articles, and culture insights. The project features a clean, modern interface with category filtering, blog post management, and seamless responsiveness across devices",
    img: "/blo.png",
    live: "https://travel-home-snowy.vercel.app/",
    code: "https://github.com/sandie679/travel-home",
  },
  {
    title: "Daily-Bite Restaurant",
    desc: "A modern restaurant eCommerce website built with Next.js and Tailwind CSS, designed for online food ordering and reservations. It features an elegant interface, dynamic menus, and a smooth shopping experience for customers craving convenience and flavor",
    img: "/daily.png",
    live: "https://daily-bite.vercel.app/",
    code: "https://github.com/sandie679/Daily-Bite",
  },
  {
    title: "Nyamatusi",
    desc: "An elegant safari experience brought to life with HTML, CSS, and Bootstrap , this website blends adventure and luxury, showcasing breathtaking wildlife, serene lodges, and immersive travel stories. Designed to capture the heart of Africa with smooth navigation and a responsive, modern feel.",
    img: "/nyamatusi-r.png",
    live: "https://nyamatusi-theta.vercel.app/",
    code: "https://github.com/sandie679/Nyamatusi",
  },
  {
    title: "Jameson",
    desc: "Jameson Website , A sleek and elegant landing page built using HTML, CSS, JavaScript, and Bootstrap, inspired by the refined essence of Jameson whiskey. This project features a responsive layout, smooth scrolling, and interactive UI components that enhance the browsing experience",
    img: "/jamson.png",
    live: "https://jameson-iota.vercel.app/",
    code: "https://github.com/sandie679/Jameson",
  },
  {
    title: "Currency Converter",
    desc: "This Currency Converter allows users to easily convert between different world currencies using real-time exchange rates. It features a clean, responsive design for smooth use on any device and updates instantly as you type. Perfect for travelers, businesses, or anyone needing quick and accurate conversions.",
    img: "/currency.png",
    live: "https://currency-converter-virid-eight.vercel.app/",
    code: "https://github.com/sandie679/Currency-Converter",
  },
  {
    title: "Weather App",
    desc: "The Weather App delivers real-time weather updates with accurate forecasts for any city. Users can quickly search for their location and view the current temperature, weather condition, and hourly forecasts. It is designed for simplicity, providing clear and reliable information to help users plan their day with confidence..",
    img: "/converter.png",
    live: "https://weather-app-pearl-nine-80.vercel.app/",
    code: "https://github.com/sandie679/WeatherApp",
  },
  {
    title: "Calculator App",
    desc: "Smart Calculator — A sleek, modern web-based calculator built for everyday use. It performs both basic and advanced mathematical operations with precision and ease. The clean interface ensures smooth interaction, making it ideal for students, developers, and professionals who value simplicity and accuracy.",
    img: "/cal.png",
    live: "https://calculator-three-vert-43.vercel.app/",
    code: "https://github.com/sandie679/Calculator",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 text-white">
      <h2 className="text-4xl md:text-4xl font-bold text-start mb-10">
        My Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/60 transition-all duration-300 hover:scale-[1.03]"
          >
          
            <div className="relative w-full h-60 md:h-56 overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

           
            <div className="p-5 bg-black/30 backdrop-blur-md rounded-b-2xl">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

              <div className="flex gap-3">
                <Link
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#3a0060] to-[#6C169D] hover:bg-purple-700 transition-all"
                >
                  View Project
                </Link>
                <Link
                  href={project.code}
                  target="_blank"
                  className=" px-4 py-2 rounded-lg border border-purple-500 hover:bg-purple-500/20 transition-all"
                >
                  Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
