import { motion, useInView } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import anime from "animejs";

export const EASE = [0.19, 1, 0.22, 1] as const;

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  blur = false,
  duration = 0.9,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, ...(blur ? { filter: "blur(10px)" } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.09,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Anime.js powered number counter ───────────────────────── */
export function Counter({
  to,
  suffix = "",
  duration = 1600,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const played = useRef(false);

  useEffect(() => {
    if (!inView || played.current || !ref.current) return;
    played.current = true;
    const obj = { v: 0 };
    anime({
      targets: obj,
      v: to,
      duration,
      round: 1,
      easing: "easeOutExpo",
      update: () => {
        if (ref.current) ref.current.textContent = `${obj.v}${suffix}`;
      },
    });
  }, [inView, to, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/* ── Section heading pattern ───────────────────────────────── */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white card-line px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-coral shadow-card">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-coral to-apricot animate-pulse" />
      {children}
    </span>
  );
}
