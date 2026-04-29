"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Code2 } from "lucide-react";
import { socials } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[800px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
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
            Get in Touch
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Have an idea, want to collaborate, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Info side */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card rounded-2xl p-6 nature-shadow space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--bg-hover)" }}
                >
                  <Mail size={20} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Email
                  </p>
                  <a
                    href={`mailto:${socials.email}`}
                    className="text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--bg-hover)" }}
                >
                  <MapPin size={20} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Location
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Harrisburg, PA
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-3 transition-all hover:-translate-y-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                <Code2 size={20} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-3 transition-all hover:-translate-y-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="glass-card rounded-xl p-3 transition-all hover:-translate-y-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div
                className="glass-card rounded-2xl p-8 text-center nature-shadow"
              >
                <div className="text-4xl mb-4">✅</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                action={`https://formsubmit.co/${socials.email}`}
                method="POST"
                className="glass-card rounded-2xl p-6 md:p-8 nature-shadow space-y-5"
                onSubmit={() => setSubmitted(true)}
              >
                {/* FormSubmit config */}
                <input type="hidden" name="_subject" value="New message from mehul.ai" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_next" value="" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "var(--bg-primary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "var(--bg-primary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all"
                    style={{
                      background: "var(--bg-primary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="Tell me about your idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all cursor-pointer mountain-shadow"
                  style={{
                    background: "var(--accent)",
                    color: "white",
                  }}
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
