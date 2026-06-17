"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      {/* Header with brand gradient */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${project.color}12, ${project.color}04)`,
          }}
        />

        {/* Mountain footer transition */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 L0,60 Q180,20 360,50 Q540,10 720,40 Q900,0 1080,30 Q1260,10 1440,40 L1440,100 Z"
            fill="var(--bg-base)"
          />
        </svg>

        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-20">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors mb-10"
            style={{ color: "var(--text-tertiary)" }}
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Project initial badge */}
            <div
              className="font-display text-6xl md:text-7xl font-bold mb-4 leading-none"
              style={{ color: project.color, opacity: 0.8 }}
            >
              {project.name.charAt(0)}
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              {project.name}
            </h1>
            <p className="text-lg mt-2" style={{ color: "var(--text-secondary)" }}>
              {project.tagline}
            </p>

            {/* Status badge */}
            <div className="mt-4">
              {project.status === "live" && (
                <span className="pill pill-live">
                  <span className="pulse-dot" />
                  Live
                </span>
              )}
              {project.status === "in-development" && (
                <span className="pill pill-building">In Development</span>
              )}
              {project.status === "concept" && (
                <span className="pill pill-concept">Concept</span>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 relative">
        <motion.div
          className="card-elevated p-7 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Description */}
          <div className="space-y-4 text-base leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
            {project.longDescription.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl"
                  style={{ background: "var(--bg-subtle)" }}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-6 divider">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={15} />
                Visit Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Code2 size={15} />
                View on GitHub
              </a>
            )}
          </div>
        </motion.div>

        <div className="h-24" />
      </div>
    </main>
  );
}
