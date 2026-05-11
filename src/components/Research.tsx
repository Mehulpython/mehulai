"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, ExternalLink, GraduationCap, Languages, ShieldCheck } from "lucide-react";
import { publications, conferences, education, certifications, languages } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="relative py-24 px-6 overflow-hidden">
      {/* Background shape */}
      <div
        className="absolute -right-32 top-1/3 w-[500px] h-[500px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      <div className="max-w-5xl mx-auto relative space-y-20">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Research & Education
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Before tech, I spent years in medicine and clinical research — publishing
            in top journals and presenting at national conferences.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2.5 rounded-xl" style={{ background: "var(--bg-hover)" }}>
              <GraduationCap size={22} style={{ color: "var(--accent)" }} />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              Education
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className="glass-card rounded-2xl p-6 nature-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl mb-3">{edu.emoji}</div>
                <h4 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                  {edu.degree}
                </h4>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--accent)" }}>
                  {edu.institution}
                </p>
                <p className="text-xs mb-4" style={{ color: "var(--text-tertiary)" }}>
                  {edu.period}
                </p>
                {edu.details && (
                  <ul className="space-y-1.5">
                    {edu.details.map((d, j) => (
                      <li
                        key={j}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
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
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2.5 rounded-xl" style={{ background: "var(--bg-hover)" }}>
              <BookOpen size={22} style={{ color: "var(--accent)" }} />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              Peer-Reviewed Publications
            </h3>
            <a
              href="https://scholar.google.com/citations?user=fObzCLIAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "var(--accent)" }}
            >
              Google Scholar
              <ExternalLink size={14} />
            </a>
          </motion.div>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                className="glass-card rounded-2xl p-5 md:p-6 nature-shadow group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Citation count badge */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl"
                    style={{
                      background: "var(--bg-hover)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="text-xl font-bold"
                        style={{ color: "var(--accent)" }}
                      >
                        {pub.citations}
                      </div>
                      <div
                        className="text-[10px] uppercase tracking-wider font-medium"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        cites
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-base font-bold mb-1.5 leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline transition-colors"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h4>
                    <p className="text-sm mb-1" style={{ color: "var(--accent)" }}>
                      {pub.journal} · {pub.year}
                    </p>
                    <p
                      className="text-xs truncate"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {pub.authors}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conference Presentations */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2.5 rounded-xl" style={{ background: "var(--bg-hover)" }}>
              <Award size={22} style={{ color: "var(--accent)" }} />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              Conference Presentations
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conferences.map((conf, i) => (
              <motion.div
                key={conf.title}
                className="glass-card rounded-xl p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <h4
                  className="text-sm font-semibold mb-1 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {conf.title}
                </h4>
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  {conf.venue} · {conf.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2.5 rounded-xl" style={{ background: "var(--bg-hover)" }}>
                <ShieldCheck size={22} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                Certifications
              </h3>
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="glass-card rounded-xl px-4 py-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  title={cert.detail}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.name}
                  </span>
                  <span
                    className="block text-[11px]"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {cert.detail}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2.5 rounded-xl" style={{ background: "var(--bg-hover)" }}>
                <Languages size={22} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                Languages
              </h3>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {languages.map((lang, i) => (
                <motion.span
                  key={lang}
                  className="px-5 py-2.5 rounded-2xl text-sm font-medium"
                  style={{
                    background: "var(--bg-hover)",
                    color: "var(--accent)",
                    border: "1px solid var(--border)",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
