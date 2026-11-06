"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { C, F } from "../data";

/** Fades + lifts content in once it scrolls into view. */
export function Reveal({ y = 18, delay = 0, ...props }: HTMLMotionProps<"div"> & { y?: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    />
  );
}

export function SectionTitle({ eyebrow, first, accent }: { eyebrow: string; first: string; accent: string }) {
  return (
    <Reveal className="mb-12 text-center sm:mb-16" style={{ textShadow: "0 0 14px rgba(251,248,241,1), 0 0 4px rgba(251,248,241,1)" }}>
      <span className="mb-3 block text-[0.72rem] font-semibold uppercase tracking-[0.34em]" style={{ fontFamily: F.sans, color: "#A8842F" }}>
        {eyebrow}
      </span>
      <h2
        className="leading-tight"
        style={{ fontFamily: F.deco, fontWeight: 600, color: C.green, fontSize: "clamp(1.5rem,3.6vw,2.5rem)", letterSpacing: "0.07em" }}
      >
        {first} <span style={{ color: C.gold }}>{accent}</span>
      </h2>
      <AnimatedDivider />
    </Reveal>
  );
}

export function AnimatedDivider() {
  const t = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };
  return (
    <span className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
      <motion.span
        className="h-px origin-right"
        style={{ width: 52, background: `linear-gradient(90deg, transparent, ${C.gold})` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ ...t, delay: 0.2 }}
      />
      <motion.span
        style={{ color: C.gold, fontSize: 12 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 180 }}
        viewport={{ once: true }}
        transition={{ ...t, delay: 0.45 }}
      >
        ✦
      </motion.span>
      <motion.span
        className="h-px origin-left"
        style={{ width: 52, background: `linear-gradient(-90deg, transparent, ${C.gold})` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ ...t, delay: 0.2 }}
      />
    </span>
  );
}

export function DiamondDivider() {
  return (
    <div className="my-1 flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(90deg, transparent, ${C.gold})` }} />
      <span className="h-[6px] w-[6px] rotate-45 border" style={{ borderColor: C.gold }} />
      <span className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(-90deg, transparent, ${C.gold})` }} />
    </div>
  );
}

/** Shows the photo if provided, otherwise the template's "Your photo" placeholder. */
export function Photo({ src, label = "Your photo", small = false, fit = "cover", alt = "" }: { src: string | null; label?: string; small?: boolean; fit?: "cover" | "contain"; alt?: string }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${fit === "contain" ? "object-contain bg-white p-4" : "object-cover"}`}
      />
    );
  }
  return (
    <div className="grid h-full w-full place-items-center" style={{ background: "linear-gradient(135deg, #FBF8F1, #EAE0C9)" }}>
      <span
        className={`flex flex-col items-center ${small ? "gap-1.5" : "gap-2 text-[0.7rem] uppercase tracking-[0.3em]"}`}
        style={{ fontFamily: F.sans, color: C.gold }}
      >
        <ImageIcon className="h-7 w-7" strokeWidth={1.4} style={{ opacity: small ? 0.55 : 0.6 }} aria-hidden />
        {small ? <span className="text-[0.62rem] uppercase tracking-[0.28em]">{label}</span> : label}
      </span>
    </div>
  );
}

export function RingsIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="9" cy="13" r="6.2" />
      <circle cx="15" cy="13" r="6.2" />
    </svg>
  );
}

export const archCard = {
  background: C.card,
  border: "1px solid rgba(199, 162, 75, 0.3)",
  borderRadius: "999px 999px 18px 18px",
  boxShadow: "0 16px 36px -26px rgba(70,40,30,0.4)",
} as const;
