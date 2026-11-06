"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { C, F, invitation as inv } from "../data";

const shadow = "0 1px 10px rgba(255,253,248,0.9)";
const goldBar = `linear-gradient(to bottom, ${C.gold}, ${C.goldLight}, ${C.gold})`;
const ease = [0.65, 0, 0.35, 1] as const;

export default function Curtain({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  // lock page scroll while the curtain is closed
  useEffect(() => {
    document.documentElement.style.overflow = open ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[600] pointer-events-auto"
          role="dialog"
          aria-label="Tap to open the invitation"
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 1.2 } }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, #FBF8F1, #E9DFCB)" }}
            exit={{ opacity: 0, transition: { duration: 0.9, delay: 0.5 } }}
          />
          <motion.div
            className="absolute left-0 right-0 top-0 z-10 h-3"
            style={{ background: `linear-gradient(to bottom, ${C.gold}, ${C.goldLight}, ${C.gold})`, boxShadow: "0 3px 10px rgba(0,0,0,0.25)" }}
            exit={{ y: -20, transition: { duration: 0.6, delay: 1 } }}
          />

          {/* left drape */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 origin-left overflow-hidden"
            style={{
              background: "repeating-linear-gradient(90deg, #EFE6D3 0px, #FCF8EF 18px, #EFE6D3 36px, #DDD0B4 56px, #EFE6D3 72px)",
              boxShadow: "inset -20px 0 40px rgba(120,95,50,0.16), 0 10px 30px rgba(120,95,50,0.2)",
            }}
            exit={{ x: "-100%", scaleX: 0.6, transition: { duration: 1.4, ease } }}
          >
            <div className="absolute inset-0 opacity-50" style={{ background: "repeating-linear-gradient(90deg, transparent 0px, transparent 50px, rgba(120,95,50,0.08) 54px, transparent 62px)" }} />
            <div className="absolute top-[72%] -right-2 h-24 w-4 -translate-y-1/2 rounded-full" style={{ background: goldBar }} />
          </motion.div>

          {/* right drape */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 origin-right overflow-hidden"
            style={{
              background: "repeating-linear-gradient(90deg, #EFE6D3 0px, #DDD0B4 16px, #EFE6D3 36px, #FCF8EF 54px, #EFE6D3 72px)",
              boxShadow: "inset 20px 0 40px rgba(120,95,50,0.16), 0 10px 30px rgba(120,95,50,0.2)",
            }}
            exit={{ x: "100%", scaleX: 0.6, transition: { duration: 1.4, ease } }}
          >
            <div className="absolute inset-0 opacity-50" style={{ background: "repeating-linear-gradient(90deg, transparent 0px, transparent 50px, rgba(120,95,50,0.08) 54px, transparent 62px)" }} />
            <div className="absolute top-[72%] -left-2 h-24 w-4 -translate-y-1/2 rounded-full" style={{ background: goldBar }} />
          </motion.div>

          {/* centre card */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-6"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.4 } }}
          >
            <div className="pointer-events-auto max-w-sm text-center">
              <div className="mb-5 flex justify-center">
                <motion.span animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                  <Heart className="h-10 w-10 fill-current" style={{ color: C.gold, filter: "drop-shadow(0 2px 6px rgba(150,120,60,0.3))" }} aria-hidden />
                </motion.span>
              </div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.5em]" style={{ fontFamily: F.sans, color: C.gold, textShadow: shadow }}>
                You&apos;re Invited
              </p>
              <h2
                className="mb-3 uppercase leading-[1.05]"
                style={{
                  fontFamily: F.deco,
                  color: C.green,
                  fontSize: "clamp(2rem,7vw,2.9rem)",
                  letterSpacing: "0.06em",
                  textShadow: shadow,
                }}
              >
                <span className="block">{inv.bride}</span>
                <span className="my-0.5 block" style={{ fontFamily: F.script, color: C.gold, textTransform: "none", fontSize: "0.72em", lineHeight: 1 }}>
                  &amp;
                </span>
                <span className="block">{inv.groom}</span>
              </h2>
              <p className="mb-8 text-sm italic" style={{ fontFamily: F.body, color: C.ink, textShadow: shadow }}>
                Request the honour of your presence
              </p>
              <motion.button
                type="button"
                onClick={onOpen}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-9 py-4 text-xs font-semibold uppercase tracking-[0.3em] sm:text-[0.82rem]"
                aria-label="Open invitation"
                style={{
                  fontFamily: F.sans,
                  color: C.green,
                  background: "linear-gradient(135deg, #e6d5ae 0%, #D8BE84 42%, #C7A24B 100%)",
                  boxShadow:
                    "0 16px 38px rgba(150, 120, 60, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 0 0 1px rgba(199, 162, 75, 0.9), 0 0 24px rgba(216, 190, 132, 0.38)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="lv-shine pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)" }}
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-[3px] rounded-full" style={{ border: "1px solid rgba(255, 253, 248, 0.55)" }} />
                <Sparkles className="relative h-4 w-4" aria-hidden />
                <span className="relative">Open Invitation</span>
              </motion.button>
              <p className="mt-6 text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: F.sans, color: C.muted, textShadow: shadow }}>
                Tap to begin
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
