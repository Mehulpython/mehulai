"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { typingPhrases } from "@/lib/data";

function useTypingEffect(
  phrases: string[],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800
) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return;
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const typedText = useTypingEffect(typingPhrases);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[680px] overflow-hidden flex items-center justify-center grain"
    >
      {/* ── Sky ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, var(--sky-1) 0%, var(--sky-2) 35%, var(--sky-3) 75%)`,
        }}
      />

      {/* ── Stars (visible in dark mode) ── */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => {
          const seed = i * 137.5;
          const left = (seed * 0.7) % 100;
          const top = ((seed * 1.3) % 55);
          const size = 1 + (i % 3) * 0.5;
          const delay = (i * 0.3) % 4;
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: "var(--star)",
                animation: `twinkle ${3 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* ── Sun / Moon glow ── */}
      <div
        className="absolute top-[14%] left-1/2 -translate-x-1/2 w-80 h-80 rounded-full"
        style={{
          background: `radial-gradient(circle, var(--sun) 0%, transparent 65%)`,
        }}
      />

      {/* ── Mountain Layer 1 (farthest) ── */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        viewBox="0 0 1440 380"
        preserveAspectRatio="none"
      >
        <path
          d="M0,380 L0,310 Q90,270 180,290 Q270,250 360,280 Q450,240 540,270 Q630,230 720,260 Q810,225 900,250 Q990,220 1080,245 Q1170,225 1260,250 Q1350,235 1440,255 L1440,380 Z"
          fill="var(--mtn-1)"
          opacity={0.5}
        />
      </svg>

      {/* ── Mountain Layer 2 ── */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        viewBox="0 0 1440 340"
        preserveAspectRatio="none"
      >
        <path
          d="M0,340 L0,280 Q70,230 150,260 Q220,200 310,240 Q390,180 480,220 Q560,160 650,205 Q740,150 830,195 Q910,145 1010,185 Q1090,150 1180,185 Q1280,160 1360,185 Q1400,180 1440,195 L1440,340 Z"
          fill="var(--mtn-2)"
          opacity={0.55}
        />
      </svg>

      {/* ── Mountain Layer 3 ── */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 L0,250 Q50,170 120,220 Q170,130 240,190 Q290,100 370,160 Q430,80 510,140 Q570,60 660,120 Q720,50 800,110 Q870,70 950,120 Q1020,60 1100,110 Q1180,75 1260,115 Q1340,95 1440,130 L1440,300 Z"
          fill="var(--mtn-3)"
          opacity={0.65}
        />
      </svg>

      {/* ── Mountain Layer 4 (near) ── */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path
          d="M0,260 L0,220 Q40,140 100,190 Q140,90 200,150 Q240,60 310,120 Q360,40 430,100 Q480,30 560,90 Q610,20 690,80 Q750,10 830,70 Q890,30 970,80 Q1040,20 1120,70 Q1190,40 1280,80 Q1360,60 1440,90 L1440,260 Z"
          fill="var(--mtn-4)"
          opacity={0.75}
        />
      </svg>

      {/* ── Mountain Layer 5 (treeline) ── */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 50 }).map((_, i) => {
          const x = i * 29 + Math.sin(i * 2.3) * 8;
          const h = 70 + Math.sin(i * 1.7) * 35 + Math.cos(i * 3.1) * 15;
          const w = 8 + (i % 4) * 2;
          return (
            <polygon
              key={i}
              points={`${x},200 ${x + w},${200 - h} ${x + w * 2},200`}
              fill="var(--tree)"
              opacity={0.7 + (i % 3) * 0.1}
            />
          );
        })}
        <rect x="0" y="175" width="1440" height="25" fill="var(--tree)" opacity={0.85} />
      </svg>

      {/* ── Mist layers ── */}
      <div
        className="absolute bottom-[12%] w-[200%] h-24"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--mist), transparent, var(--mist), transparent)",
          animation: "mist-flow 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[6%] w-[200%] h-16 opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--mist), transparent)",
          animation: "mist-flow 18s ease-in-out infinite reverse",
        }}
      />

      {/* ── Floating particles ── */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + (i % 4)}px`,
            height: `${2 + (i % 4)}px`,
            background: "var(--particle)",
            left: `${(i * 8.3) % 100}%`,
            top: `${25 + (i * 5.2) % 45}%`,
            animation: `float ${8 + (i % 6)}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          className="section-label mb-5"
          style={{ color: "var(--hero-sub)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Software Engineer · AI Builder · Published Researcher
        </motion.p>

        <motion.h1
          className="font-display text-7xl md:text-[9rem] lg:text-[10rem] font-bold tracking-tighter leading-none"
          style={{ color: "var(--hero-text)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Mehul
        </motion.h1>

        <motion.div
          className="text-base md:text-lg font-light tracking-wide min-h-[1.8rem] mt-3"
          style={{ color: "var(--hero-sub)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono">{typedText}</span>
          <span className="typing-cursor" />
        </motion.div>

        <motion.div
          className="mt-10 flex gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#about" className="btn-ghost">
            About Me
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-tertiary)" }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-current to-transparent" />
      </motion.div>
    </section>
  );
}
