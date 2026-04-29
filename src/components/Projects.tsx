"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

const filters = [
  { key: "all", label: "All" },
  { key: "live", label: "● Live" },
  { key: "in-development", label: "◌ Building" },
  { key: "concept", label: "○ Concept" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-6">
      {/* Organic background blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 -translate-y-1/2 translate-x-1/3"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: 0.08,
        }}
      />

      <div className="max-w-6xl mx-auto relative">
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
            Projects
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Building AI-powered products that solve real problems across industries.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`filter-pill px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
                activeFilter === f.key ? "active" : ""
              }`}
              style={{
                background: activeFilter === f.key ? "var(--accent)" : "transparent",
                color: activeFilter === f.key ? "white" : "var(--text-secondary)",
                border: `1px solid ${activeFilter === f.key ? "var(--accent)" : "var(--border)"}`,
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.a
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className="glass-card rounded-3xl p-6 h-full transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    boxShadow: "0 4px 16px var(--shadow-color)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 12px 40px var(--shadow-color)";
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 16px var(--shadow-color)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {/* Project thumbnail */}
                  <div
                    className="project-thumb mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
                      color: project.color,
                    }}
                  >
                    <span className="text-5xl relative z-10">{project.emoji}</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="text-xl font-bold transition-colors"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {project.name}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full inline-block mt-1 ${
                          project.status === "live"
                            ? ""
                            : project.status === "in-development"
                            ? ""
                            : ""
                        }`}
                        style={{
                          background:
                            project.status === "live"
                              ? "rgba(34,197,94,0.1)"
                              : project.status === "in-development"
                              ? "rgba(245,158,11,0.1)"
                              : "rgba(148,163,184,0.1)",
                          color:
                            project.status === "live"
                              ? "#16a34a"
                              : project.status === "in-development"
                              ? "#d97706"
                              : "var(--text-tertiary)",
                        }}
                      >
                        {project.status === "live"
                          ? "● Live"
                          : project.status === "in-development"
                          ? "◌ In Development"
                          : "○ Concept"}
                      </span>
                    </div>
                    {project.liveUrl && (
                      <ExternalLink
                        size={16}
                        style={{ color: "var(--text-tertiary)" }}
                        className="transition-colors mt-1"
                      />
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.tagline} — {project.description.slice(0, 100)}
                    {project.description.length > 100 ? "..." : ""}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: "var(--bg-hover)",
                          color: "var(--accent)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span
                        className="text-[11px] px-2.5 py-1 rounded-full"
                        style={{
                          background: "var(--bg-hover)",
                          color: "var(--text-tertiary)",
                        }}
                      >
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
