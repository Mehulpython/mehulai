"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-10 px-6 overflow-hidden">
      {/* Mountain silhouette */}
      <svg
        className="absolute top-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 L0,50 Q180,15 360,40 Q540,8 720,32 Q900,0 1080,24 Q1260,8 1440,32 L1440,80 Z"
          fill="var(--accent)"
          opacity={0.04}
        />
      </svg>

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-xs font-medium mb-6 cursor-pointer transition-colors"
            style={{ color: "var(--text-tertiary)" }}
          >
            <ArrowUp size={12} />
            Back to top
          </button>

          <div className="font-display text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
            Mehul
          </div>
          <p className="text-xs mb-4" style={{ color: "var(--text-tertiary)" }}>
            Software Engineer · AI Builder · Published Researcher
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-colors"
              style={{ color: "var(--text-tertiary)" }}
            >
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-colors"
              style={{ color: "var(--text-tertiary)" }}
            >
              LinkedIn
            </a>
            <a
              href={socials.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-colors"
              style={{ color: "var(--text-tertiary)" }}
            >
              Scholar
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="text-xs font-medium transition-colors"
              style={{ color: "var(--text-tertiary)" }}
            >
              Email
            </a>
          </div>

          <p className="text-[11px]" style={{ color: "var(--text-tertiary)" }}>
            © {new Date().getFullYear()} Mehul · Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
