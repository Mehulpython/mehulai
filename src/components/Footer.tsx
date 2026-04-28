"use client";

import { motion } from "framer-motion";
import { Code2, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Mountain footer silhouette */}
      <svg
        className="absolute top-0 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 L0,60 Q180,20 360,50 Q540,10 720,40 Q900,0 1080,30 Q1260,10 1440,40 L1440,100 Z"
          fill="#15803D"
          opacity="0.1"
        />
      </svg>

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Let&apos;s build something together
          </h2>
          <p className="text-slate-500 mb-8">
            Always open to new ideas and collaborations.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/Mehulpython"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card hover:bg-white/80 transition-all text-slate-600 hover:text-green-700"
            >
              <Code2 size={18} />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="mailto:mehulkanadiya@gmail.com"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card hover:bg-white/80 transition-all text-slate-600 hover:text-green-700"
            >
              <Mail size={18} />
              <span className="font-medium">Email</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-green-600 transition-colors text-sm mb-8 cursor-pointer"
          >
            <ArrowUp size={14} />
            Back to top
          </button>

          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Mehul · Built with 🌿
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
