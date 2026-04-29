"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { typingPhrases } from "@/lib/data";

function useTypingEffect(phrases: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
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
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
    >
      {/* Sky gradient */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: `linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 30%, var(--sky-bottom) 70%, var(--bg-primary) 100%)`,
        }}
      />

      {/* Sun glow */}
      <div
        className="absolute top-[15%] left-[50%] -translate-x-1/2 w-64 h-64 rounded-full opacity-30"
        style={{
          background: `radial-gradient(circle, var(--sun-glow) 0%, transparent 70%)`,
        }}
      />

      {/* Mountain Layer 1 (Far) */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,400 L0,280 Q120,180 240,220 Q360,160 480,200 Q600,120 720,180 Q840,100 960,160 Q1080,80 1200,140 Q1320,100 1440,160 L1440,400 Z"
          fill="var(--mountain-far)"
          opacity="0.4"
        />
      </svg>

      {/* Mountain Layer 2 (Mid) */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        viewBox="0 0 1440 350"
        preserveAspectRatio="none"
      >
        <path
          d="M0,350 L0,250 Q100,180 200,220 Q300,160 420,200 Q540,130 660,180 Q780,100 900,160 Q1020,120 1140,170 Q1260,130 1380,180 L1440,160 L1440,350 Z"
          fill="var(--mountain-mid)"
          opacity="0.55"
        />
      </svg>

      {/* Mountain Layer 3 (Near) */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 L0,220 Q80,170 160,200 Q240,140 360,180 Q480,110 600,160 Q720,80 840,140 Q960,100 1080,150 Q1200,110 1320,160 L1440,140 L1440,300 Z"
          fill="var(--mountain-near)"
          opacity="0.7"
        />
      </svg>

      {/* Treeline */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 40 }).map((_, i) => {
          const x = i * 37 + Math.sin(i * 3) * 10;
          const h = 80 + Math.sin(i * 2.5) * 40;
          return (
            <polygon
              key={i}
              points={`${x},200 ${x + 10},${200 - h} ${x + 20},200`}
              fill="var(--tree-fill)"
              opacity={0.6 + (i % 3) * 0.15}
            />
          );
        })}
        <rect x="0" y="180" width="1440" height="20" fill="var(--tree-fill)" opacity="0.8" />
      </svg>

      {/* Mist layers */}
      <div
        className="absolute bottom-[10%] w-[200%] h-32 opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--mist-color), transparent, var(--mist-color), transparent)",
          animation: "mist-flow 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[5%] w-[200%] h-24 opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--mist-color), transparent, var(--mist-color), transparent)",
          animation: "mist-flow 15s ease-in-out infinite reverse",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${3 + (i % 5) * 1.2}px`,
            height: `${3 + (i % 5) * 1.2}px`,
            background: "var(--particle-color)",
            left: `${(i * 7.3) % 100}%`,
            top: `${30 + (i * 4.7) % 50}%`,
            animation: `float ${6 + (i % 8)}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1
            className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--hero-text)" }}
          >
            Mehul
          </h1>
        </motion.div>

        <motion.div
          className="text-lg md:text-xl font-light tracking-wide min-h-[2rem]"
          style={{ color: "var(--hero-text-sub)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <span>{typedText}</span>
          <span className="typing-cursor" />
        </motion.div>

        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl font-medium transition-all mountain-shadow hover:opacity-90"
            style={{
              background: "var(--accent)",
              color: "white",
            }}
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-2xl glass-card font-medium transition-all"
            style={{ color: "var(--text-secondary)" }}
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
          style={{ color: "var(--text-tertiary)" }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
