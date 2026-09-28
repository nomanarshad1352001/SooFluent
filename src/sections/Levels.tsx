import { AnimatePresence, motion } from "framer-motion";
import { Lock, Play, Quote } from "lucide-react";
import { useState } from "react";
import { Phone } from "../components/Phone";
import { Eyebrow, FadeIn } from "../components/Reveal";
import { LEVELS } from "../data/content";

export default function Levels() {
  const [activeId, setActiveId] = useState<(typeof LEVELS)[number]["id"]>("a2");
  const level = LEVELS.find((l) => l.id === activeId)!;

  return (
    <section id="levels" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-peach/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-24 -z-10 h-96 w-96 rounded-full bg-honey/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-2xl">
          <Eyebrow>Stories for your level</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.05] tracking-tight">
            Meet yourself exactly{" "}
            <span className="italic text-coral">where you are.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[16px] font-medium leading-relaxed text-ink-2">
            Every story is written for a specific CEFR level — gentle at A2,
            rich and fast at B2. You always understand just enough to keep
            going, and always meet something new.
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1} className="mt-10">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white card-line p-1.5 shadow-card">
            {LEVELS.map((l) => (
              <button
                key={l.id}
                onClick={() => setActiveId(l.id)}
                className={`relative flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[13.5px] font-extrabold transition-all duration-500 ${
                  activeId === l.id ? "text-white" : "text-ink-2 hover:text-ink"
                }`}
              >
                {activeId === l.id && (
                  <motion.span
                    layoutId="level-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: `linear-gradient(120deg, ${l.color}, ${l.color}cc)` }}
                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  />
                )}
                <span className={`relative h-2.5 w-2.5 rounded-full ${activeId === l.id ? "bg-white/90" : ""}`} style={activeId === l.id ? {} : { background: l.color }} />
                <span className="relative">{l.code} · {l.name}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Content */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative overflow-hidden rounded-[2.5rem] bg-white card-line p-8 shadow-soft sm:p-11"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{ background: level.color }}
              />
              <div className="flex items-center gap-4">
                <span
                  className="grid h-16 w-16 place-items-center rounded-3xl font-display text-2xl font-bold text-white shadow-card"
                  style={{ background: level.color }}
                >
                  {level.code}
                </span>
                <div>
                  <p className="font-display text-2xl font-semibold">{level.name}</p>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: level.color }}>
                    CEFR {level.code}
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-lg text-[15.5px] font-medium leading-relaxed text-ink-2">
                {level.desc}
              </p>

              <blockquote
                className="relative mt-6 rounded-2xl p-5"
                style={{ background: level.soft }}
              >
                <Quote size={18} className="absolute -left-1.5 -top-1.5 rounded-full bg-white p-0.5 shadow-card" style={{ color: level.color }} />
                <p className="font-display text-[17px] italic leading-snug">{level.line}</p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  You'll hear — and say — lines like this
                </p>
              </blockquote>

              <div className="mt-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                  On the shelf this week
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {level.stories.map((s) => (
                    <div key={s} className="flex items-center gap-2.5 rounded-2xl bg-cream/70 card-line px-3.5 py-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white" style={{ background: level.color }}>
                        <Play size={11} fill="currentColor" />
                      </span>
                      <p className="truncate text-[13px] font-bold">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Phone + floating notes */}
          <FadeIn delay={0.15} className="relative mx-auto w-fit">
            <div className="animate-float">
              <Phone variant="levels" className="rotate-2" />
            </div>
            <div className="absolute -left-6 top-10 z-10 hidden sm:block lg:-left-14">
              <div className="animate-float-late rounded-2xl bg-white card-line p-3 pr-4 shadow-pop">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://images.pexels.com/photos/3885490/pexels-photo-3885490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt=""
                    className="h-10 w-10 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-[12px] font-extrabold leading-tight">Travel English pack</p>
                    <p className="text-[10.5px] font-semibold text-ink-soft">12 stories · A2–B1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-14 z-10 hidden sm:block lg:-right-10">
              <div className="animate-float rounded-2xl bg-ink px-4 py-3 text-paper shadow-pop" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-2">
                  <Lock size={13} className="text-honey" />
                  <p className="text-[12px] font-extrabold">B2 unlocks as you grow</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-sm font-semibold text-ink-soft">
            Not sure where to start? SooFluent helps you find your level inside the app.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
