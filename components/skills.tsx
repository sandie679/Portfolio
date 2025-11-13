"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaGithub, } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript,SiMongodb, SiNodedotjs } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" />, level: 80 },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 80 },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 80 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 60 },
  { name: "HTML/CSS", icon: <FaCss3Alt className="text-blue-300" />, level: 98 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 65 },
  { name: "Git & GitHub", icon: <FaGithub className="text-gray-400" />, level: 70 },
  {name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 40 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="  text-white py-14 px-4 md:px-10 rounded-2xl shadow-lg">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className=" text-4xl border-b-4 border-purple-500 pb-1">
          My Skills
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative bg-[#16161a] rounded-xl p-6  shadow-md border border-transparent hover:border-purple-500/30 transition-all overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
           
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-purple-600/20 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />

           
            <div className="flex justify-between items-center mb-4 relative z-10">
              <div className="flex items-center gap-3 text-lg font-semibold">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  {skill.icon}
                </motion.div>
                {skill.name}
              </div>
              <span className="text-gray-400 text-sm">{skill.level}%</span>
            </div>

          
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-purple-500 h-2 rounded-full shadow-lg shadow-purple-500/50"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
