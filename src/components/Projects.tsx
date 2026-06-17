"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const filters = [
  { key: "all", label: "All" },
  { key: "live", label: "Live" },
  { key: "in-development", label: "Building" },
  { key: "concept", label: "Concept" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Projects
          </h2>
          <p className="text-base max-w-lg" style={{ color: "var(--text-secondary)" }}>
            Building AI-powered products that solve real problems across industries.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all"
              style={{
                background: activeFilter === f.key ? "var(--accent)" : "transparent",
                color: activeFilter === f.key ? "white" : "var(--text-secondary)",
                border: `1px solid ${activeFilter === f.key ? "var(--accent)" : "var(--border-strong)"}`,
              }}
            >
              {f.label}
              <span className="ml-1.5 opacity-60">
                {f.key === "all"
                  ? projects.length
                  : projects.filter((p) => p.status === f.key).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const isFeatured = index === 0 && activeFilter === "all";

              return (
                <motion.a
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`group block ${isFeatured ? "md:col-span-2" : ""}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className={`card card-hover overflow-hidden h-full ${isFeatured ? "flex flex-col md:flex-row" : ""}`}>
                    {/* Thumbnail */}
                    <div
                      className={`project-thumb ${isFeatured ? "md:w-1/2 aspect-auto md:min-h-[280px]" : ""}`}
                      style={{
                        background: `linear-gradient(135deg, ${project.color}18, ${project.color}06)`,
                        color: project.color,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="font-display font-bold"
                          style={{
                            fontSize: isFeatured ? "3.5rem" : "2.5rem",
                            color: project.color,
                            opacity: 0.7,
                          }}
                        >
                          {project.name.charAt(0)}
                        </span>
                        <span
                          className="absolute font-display font-bold"
                          style={{
                            fontSize: isFeatured ? "3.5rem" : "2.5rem",
                            color: project.color,
                            opacity: 0.15,
                            transform: "translate(8px, 8px)",
                          }}
                        >
                          {project.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-5 ${isFeatured ? "md:w-1/2 md:p-7" : ""}`}>
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <div>
                          <h3 className="font-display text-lg font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                            {project.name}
                          </h3>
                          {project.status === "live" && (
                            <span className="pill pill-live mt-1.5">
                              <span className="pulse-dot" />
                              Live
                            </span>
                          )}
                          {project.status === "in-development" && (
                            <span className="pill pill-building mt-1.5">In Development</span>
                          )}
                          {project.status === "concept" && (
                            <span className="pill pill-concept mt-1.5">Concept</span>
                          )}
                        </div>
                        <ArrowUpRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                          style={{ color: "var(--accent)" }}
                        />
                      </div>

                      <p
                        className={`text-sm leading-relaxed mb-3 ${isFeatured ? "md:text-base" : ""}`}
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {project.tagline}
                        {isFeatured ? ` — ${project.description}` : ""}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, isFeatured ? 6 : 4).map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > (isFeatured ? 6 : 4) && (
                          <span className="tag" style={{ color: "var(--text-tertiary)" }}>
                            +{project.techStack.length - (isFeatured ? 6 : 4)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
