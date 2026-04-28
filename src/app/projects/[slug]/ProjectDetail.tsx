"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-[var(--mint-bg)]">
      {/* Mountain header */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
          }}
        />

        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L0,80 Q180,30 360,60 Q540,20 720,50 Q900,10 1080,45 Q1260,20 1440,50 L1440,120 Z"
            fill="var(--mint-bg)"
          />
        </svg>

        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-24">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-green-700 transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{project.emoji}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                  {project.name}
                </h1>
                <p className="text-xl text-slate-500 mt-1">{project.tagline}</p>
              </div>
            </div>

            {/* Status badge */}
            <span
              className={`inline-block text-sm font-medium px-3 py-1 rounded-full mt-2 ${
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
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-12 relative">
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 nature-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Description */}
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-10">
            {project.longDescription.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-green-50/50"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <CheckCircle2
                    size={18}
                    className="text-green-600 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-2xl bg-green-50 text-green-800 text-sm font-medium border border-green-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-green-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-800 text-white font-medium hover:bg-green-700 transition-colors mountain-shadow"
              >
                <ExternalLink size={16} />
                Visit Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass-card text-slate-700 font-medium hover:bg-white/80 transition-colors"
              >
                <Code2 size={16} />
                View on GitHub
              </a>
            )}
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="h-24" />
      </div>
    </main>
  );
}
