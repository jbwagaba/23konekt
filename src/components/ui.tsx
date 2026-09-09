import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 28, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.24em] uppercase ${dark ? "text-gold-400" : "text-royal-600"}`}>
      <span className={`h-px w-8 ${dark ? "bg-gold-400" : "bg-gold-500"}`} />
      {children}
      <span className={`h-px w-8 ${dark ? "bg-gold-400" : "bg-gold-500"}`} />
    </span>
  );
}
