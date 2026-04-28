"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   Hero — full-viewport with layered Smoky Mountain parallax,
   floating particles, and mist effect.
   ──────────────────────────────────────────────────────────── */

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
    >
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #BAE6FD 0%, #E0F2FE 30%, #F0FDF4 70%, #DCFCE7 100%)",
        }}
      />

      {/* Sun glow */}
      <div
        className="absolute top-[15%] left-[50%] -translate-x-1/2 w-64 h-64 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.5) 0%, rgba(251,191,36,0) 70%)",
        }}
      />

      {/* ─── Mountain Layer 1 (Far — Blue Ridge) ─── */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,400 L0,280 Q120,180 240,220 Q360,160 480,200 Q600,120 720,180 Q840,100 960,160 Q1080,80 1200,140 Q1320,100 1440,160 L1440,400 Z"
          fill="#94A3B8"
          opacity="0.4"
        />
      </svg>

      {/* ─── Mountain Layer 2 (Mid — Smoky Blue) ─── */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        viewBox="0 0 1440 350"
        preserveAspectRatio="none"
      >
        <path
          d="M0,350 L0,250 Q100,180 200,220 Q300,160 420,200 Q540,130 660,180 Q780,100 900,160 Q1020,120 1140,170 Q1260,130 1380,180 L1440,160 L1440,350 Z"
          fill="#64748B"
          opacity="0.55"
        />
      </svg>

      {/* ─── Mountain Layer 3 (Near — Forest Green) ─── */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 L0,220 Q80,170 160,200 Q240,140 360,180 Q480,110 600,160 Q720,80 840,140 Q960,100 1080,150 Q1200,110 1320,160 L1440,140 L1440,300 Z"
          fill="#15803D"
          opacity="0.7"
        />
      </svg>

      {/* ─── Treeline (Foreground trees) ─── */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        {/* Pine tree silhouettes */}
        {Array.from({ length: 40 }).map((_, i) => {
          const x = i * 37 + Math.sin(i * 3) * 10;
          const h = 80 + Math.sin(i * 2.5) * 40;
          return (
            <polygon
              key={i}
              points={`${x},200 ${x + 10},${200 - h} ${x + 20},200`}
              fill="#166534"
              opacity={0.6 + (i % 3) * 0.15}
            />
          );
        })}
        <rect x="0" y="180" width="1440" height="20" fill="#166534" opacity="0.8" />
      </svg>

      {/* ─── Mist layers ─── */}
      <div
        className="absolute bottom-[10%] w-[200%] h-32 opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(240,253,244,0.8), transparent, rgba(220,254,231,0.6), transparent)",
          animation: "mist-flow 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[5%] w-[200%] h-24 opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent, rgba(240,253,244,0.5), transparent)",
          animation: "mist-flow 15s ease-in-out infinite reverse",
        }}
      />

      {/* ─── Floating particles (pollen/fireflies) ─── */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-green-300/40"
          style={{
            width: `${3 + Math.random() * 5}px`,
            height: `${3 + Math.random() * 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${30 + Math.random() * 50}%`,
            animation: `float ${6 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* ─── Content ─── */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-4 tracking-tight">
            Mehul
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-slate-600 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Software Engineer · AI Builder · Creator
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-green-800/90 text-white font-medium hover:bg-green-700 transition-colors mountain-shadow"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-2xl glass-card text-slate-700 font-medium hover:bg-white/80 transition-colors"
          >
            About Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-400"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
