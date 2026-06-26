"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, ExternalLink, GraduationCap, ShieldCheck } from "lucide-react";
import { publications, conferences, education, certifications, socials } from "@/lib/data";

export default function Research() {
  const featuredPub = publications[0];
  const otherPubs = publications.slice(1);
  const maxCitations = Math.max(...publications.map((p) => p.citations));

  return (
    <section id="research" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Academic</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Research & Education
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Before tech, I spent years in medicine and clinical research — publishing in top journals and
            presenting at national conferences.
          </p>
        </motion.div>

        {/* Education */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-7"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2 rounded-lg" style={{ background: "var(--bg-subtle)" }}>
              <GraduationCap size={20} style={{ color: "var(--accent)" }} />
            </div>
            <h3 className="font-display text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              Education
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className="card card-hover p-5"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="text-2xl mb-3">{edu.emoji}</div>
                <h4 className="text-sm font-bold mb-1 leading-snug" style={{ color: "var(--text-primary)" }}>
                  {edu.degree}
                </h4>
                <p className="text-xs font-medium mb-1" style={{ color: "var(--accent)" }}>
                  {edu.institution}
                </p>
                <p className="text-[11px] mb-3" style={{ color: "var(--text-tertiary)" }}>
                  {edu.period}
                </p>
                {edu.details && (
                  <ul className="space-y-1">
                    {edu.details.map((d, j) => (
                      <li
                        key={j}
                        className="text-[12px] flex items-start gap-1.5 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-7"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2 rounded-lg" style={{ background: "var(--bg-subtle)" }}>
              <BookOpen size={20} style={{ color: "var(--accent)" }} />
            </div>
            <h3 className="font-display text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              Publications
            </h3>
            <div className="ml-auto flex items-center gap-4">
              <a
                href="https://scholar.google.com/citations?user=fObzCLIAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                style={{ color: "var(--accent)" }}
              >
                Google Scholar
                <ExternalLink size={12} />
              </a>
              <a
                href={socials.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                style={{ color: "var(--accent)" }}
              >
                ResearchGate
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* Featured publication */}
          <motion.div
            className="card card-hover p-6 mb-4"
            style={{ borderColor: "var(--accent)", boxShadow: "var(--shadow-md)" }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="pill pill-live">
                <span className="pulse-dot" />
                Most Cited
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1">
                <h4 className="text-base font-bold mb-2 leading-snug" style={{ color: "var(--text-primary)" }}>
                  {featuredPub.link ? (
                    <a href={featuredPub.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {featuredPub.title}
                    </a>
                  ) : (
                    featuredPub.title
                  )}
                </h4>
                <p className="text-sm mb-1" style={{ color: "var(--accent)" }}>
                  {featuredPub.journal} · {featuredPub.year}
                </p>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  {featuredPub.authors}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="font-display text-4xl font-bold" style={{ color: "var(--accent)" }}>
                  {featuredPub.citations}
                </div>
                <div className="text-[10px] uppercase tracking-wider font-medium" style={{ color: "var(--text-tertiary)" }}>
                  citations
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other publications */}
          <div className="space-y-2.5">
            {otherPubs.map((pub, i) => (
              <motion.div
                key={pub.title}
                className="card card-hover p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="flex items-center gap-4">
                  {/* Mini citation bar */}
                  <div className="flex-shrink-0 w-12 flex flex-col items-center">
                    <div
                      className="w-1.5 rounded-full mb-1"
                      style={{
                        height: `${(pub.citations / maxCitations) * 40 + 4}px`,
                        background: "var(--accent)",
                        opacity: 0.6 + (pub.citations / maxCitations) * 0.4,
                      }}
                    />
                    <span className="text-[10px] font-bold" style={{ color: "var(--text-tertiary)" }}>
                      {pub.citations}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold leading-snug mb-0.5" style={{ color: "var(--text-primary)" }}>
                      {pub.link ? (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h4>
                    <p className="text-xs" style={{ color: "var(--accent)" }}>
                      {pub.journal} · {pub.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conferences */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2 rounded-lg" style={{ background: "var(--bg-subtle)" }}>
              <Award size={20} style={{ color: "var(--accent)" }} />
            </div>
            <h3 className="font-display text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              Conference Presentations
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {conferences.map((conf, i) => (
              <motion.div
                key={conf.title}
                className="card p-4"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <h4 className="text-[13px] font-semibold mb-1 leading-snug" style={{ color: "var(--text-primary)" }}>
                  {conf.title}
                </h4>
                <p className="text-[11px]" style={{ color: "var(--text-tertiary)" }}>
                  {conf.venue} · {conf.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2 rounded-lg" style={{ background: "var(--bg-subtle)" }}>
              <ShieldCheck size={20} style={{ color: "var(--accent)" }} />
            </div>
            <h3 className="font-display text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              Certifications
            </h3>
            <span className="pill" style={{ background: "var(--bg-subtle)", color: "var(--text-tertiary)" }}>
              {certifications.length} total
            </span>
          </motion.div>

          {/* AWS group */}
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-2.5" style={{ color: "var(--accent-secondary)" }}>
            ☁️ Amazon Web Services (7)
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {certifications.filter((c) => c.category === "aws").map((cert, i) => (
              <motion.div
                key={cert.name}
                className="card p-3"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <span className="text-[13px] font-medium block" style={{ color: "var(--text-primary)" }}>
                  {cert.name}
                </span>
                <span className="text-[10px] block mt-0.5" style={{ color: "var(--text-tertiary)" }}>
                  {cert.detail}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Other certs */}
          <div className="flex flex-wrap gap-2">
            {certifications.filter((c) => c.category !== "aws").map((cert, i) => (
              <motion.div
                key={cert.name}
                className="rounded-lg px-3 py-2"
                style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i + 7) * 0.03 }}
              >
                <span className="text-[12px] font-medium block" style={{ color: "var(--text-primary)" }}>
                  {cert.name}
                </span>
                <span className="text-[10px] block mt-0.5" style={{ color: "var(--text-tertiary)" }}>
                  {cert.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
