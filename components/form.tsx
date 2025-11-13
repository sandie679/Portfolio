"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaUser,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8392c73a-b407-4a7e-a0fe-925ac2a5e62d", 
        subject: "New message from portfolio",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus(" Failed to send. Try again later.");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 overflow-hidden"
    >
      
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="w-full text-left text-3xl md:text-4xl font-bold mb-10 flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl border-b-4 border-purple-500 pb-1">
            Contact Me
          </span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-start justify-between 
                  border border-purple-500/30 backdrop-blur-md rounded-3xl 
                   shadow-[0_0_50px_rgba(168,85,247,0.3)] p-10 gap-10"
      >
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4 text-purple-300">
            Get In Touch
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I am a results-driven software developer who loves solving
            real-world problems through clean, efficient, and user-focused code.
            If you are looking for someone who can transform ideas into
            impactful digital experiences, let us connect, I am ready to bring
            your vision to life.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />{" "}
              sibandasandra617@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400" /> +263 77 812 2053
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-purple-400" /> +263 778 122 053
            </li>
          </ul>

          <div className="flex gap-6 mt-8 text-3xl">
            {[
              { icon: FaWhatsapp, link: "https://wa.me/263778122053" },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/ropafadzo.talent?igsh=MWxseTl2b3YwcTJhdA==",
              },
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/sandra-sibanda-491521352",
              },
              {
                icon: FaFacebook,
                link: "https://www.facebook.com/sandra.sibanda.31105",
              },
            ].map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                whileHover={{
                  scale: 1.2,
                  color: "#e879f9",
                  rotate: 8,
                }}
                className="text-purple-400 hover:text-fuchsia-400 transition"
                rel="noreferrer"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 space-y-6 ">
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-purple-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-xl  text-white placeholder-gray-300 outline-none border border-purple-500/30 focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-purple-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-xl text-white placeholder-gray-300 outline-none border border-purple-500/30 focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute top-3 left-3 text-purple-400" />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-xl text-white placeholder-gray-300 outline-none border border-purple-500/30 focus:ring-2 focus:ring-purple-500 transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(168,85,247,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold py-3 rounded-xl transition shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-purple-200"
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
