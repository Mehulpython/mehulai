"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      {/* Organic background blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 -translate-y-1/2 translate-x-1/3"
        style={{
          background:
            "radial-gradient(circle, rgba(21,128,61,0.3), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Projects
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Building AI-powered products that solve real problems across
            industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="glass-card rounded-3xl p-6 h-full hover:shadow-lg hover:shadow-green-100 transition-all duration-300 group-hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.emoji}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-700 transition-colors">
                        {project.name}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          project.status === "live"
                            ? "bg-green-100 text-green-700"
                            : project.status === "in-development"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {project.status === "live"
                          ? "● Live"
                          : project.status === "in-development"
                          ? "◌ In Development"
                          : "○ Concept"}
                      </span>
                    </div>
                  </div>
                  {project.liveUrl && (
                    <ExternalLink
                      size={16}
                      className="text-slate-400 group-hover:text-green-600 transition-colors mt-1"
                    />
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.tagline} — {project.description.slice(0, 120)}
                  {project.description.length > 120 ? "..." : ""}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-green-50 text-green-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-50 text-slate-500">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
