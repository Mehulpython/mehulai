"use client";

import { motion } from "framer-motion";
import { Code2, Mail, ArrowUp, Heart } from "lucide-react";
import { socials } from "@/lib/data";

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
          fill="var(--accent)"
          opacity="0.06"
        />
      </svg>

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s build something together
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            Always open to new ideas and collaborations.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-3 mb-12">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card transition-all hover:-translate-y-0.5"
              style={{ color: "var(--text-secondary)" }}
            >
              <Code2 size={18} />
              <span className="font-medium text-sm">GitHub</span>
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card transition-all hover:-translate-y-0.5"
              style={{ color: "var(--text-secondary)" }}
            >
              {/* LinkedIn icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="font-medium text-sm">LinkedIn</span>
            </a>
            <a
              href={socials.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card transition-all hover:-translate-y-0.5"
              style={{ color: "var(--text-secondary)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
              <span className="font-medium text-sm">Scholar</span>
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card transition-all hover:-translate-y-0.5"
              style={{ color: "var(--text-secondary)" }}
            >
              <Mail size={18} />
              <span className="font-medium text-sm">Email</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 transition-colors text-sm mb-8 cursor-pointer"
            style={{ color: "var(--text-tertiary)" }}
          >
            <ArrowUp size={14} />
            Back to top
          </button>

          <div className="text-sm" style={{ color: "var(--text-tertiary)" }}>
            &copy; {new Date().getFullYear()} Mehul &middot; Built with{" "}
            <Heart size={12} className="inline" style={{ color: "var(--accent)" }} /> &amp; ☕
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
