"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Organic background shape */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            About
          </h2>
        </motion.div>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 nature-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              Hey, I&apos;m{" "}
              <strong style={{ color: "var(--text-primary)" }}>Mehul</strong> — a
              Software Engineer at{" "}
              <strong style={{ color: "var(--text-primary)" }}>Vanguard</strong>{" "}
              building things with AI in my spare time.
            </p>
            <p>
              Based in{" "}
              <strong style={{ color: "var(--text-primary)" }}>Harrisburg, PA</strong>,
              I spend my days working on enterprise software and my nights building
              AI-powered products from scratch — full stack, end to end.
            </p>
            <p>
              I believe in building complete products, not just prototypes. Every
              project here ships with real APIs, databases, authentication, and
              payment systems. From negotiation platforms to baby face generators —
              if it&apos;s interesting, I build it.
            </p>
          </div>

          {/* Skills grid */}
          <div
            className="mt-8 pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="text-sm font-medium mb-4 uppercase tracking-wider"
              style={{ color: "var(--text-tertiary)" }}
            >
              Tech I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-tag px-4 py-2 rounded-2xl text-sm font-medium cursor-default transition-all"
                  style={{
                    background: "var(--bg-hover)",
                    color: "var(--accent)",
                    border: "1px solid var(--border)",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
