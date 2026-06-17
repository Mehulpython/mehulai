"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { socials } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Contact</p>
          <h2
            className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s build
            <br />
            something{" "}
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>real</span>.
          </h2>

          <p className="text-lg max-w-md mb-10" style={{ color: "var(--text-secondary)" }}>
            Have an idea, want to collaborate, or just want to say hi? My inbox is always open.
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:${socials.email}`}
            className="inline-flex items-center gap-2 group mb-12"
          >
            <span
              className="font-display text-2xl md:text-3xl font-semibold border-b-2 pb-1 transition-colors"
              style={{ color: "var(--text-primary)", borderColor: "var(--border-strong)" }}
            >
              {socials.email}
            </span>
            <ArrowUpRight
              size={24}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: "var(--accent)" }}
            />
          </a>

          {/* Info + Socials */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-tertiary)" }}>
              <MapPin size={14} />
              Harrisburg, PA
            </div>

            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-tertiary)" }}>
              <Mail size={14} />
              Usually responds within 24h
            </div>

            <div className="w-px h-4" style={{ background: "var(--border-strong)" }} />

            <div className="flex gap-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover px-3.5 py-2 flex items-center gap-1.5 text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover px-3.5 py-2 flex items-center gap-1.5 text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href={socials.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover px-3.5 py-2 flex items-center gap-1.5 text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Scholar
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
