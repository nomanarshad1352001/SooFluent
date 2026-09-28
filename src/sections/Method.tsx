import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Headphones, MessagesSquare, Mic, Sparkles, Volume2 } from "lucide-react";
import { useRef, useState } from "react";
import { Phone, type PhoneVariant } from "../components/Phone";
import { Eyebrow, FadeIn } from "../components/Reveal";
import { WaveBars } from "../components/WaveBars";

type Step = {
  n: string;
  id: PhoneVariant;
  icon: typeof Headphones;
  label: string;
  tint: string;
  bar: string;
  title: string;
  desc: string;
  visual: () => React.ReactNode;
};

const STEPS: Step[] = [
  {
    n: "01",
    id: "listen",
    icon: Headphones,
    label: "Listen",
    tint: "bg-peach text-coral-deep",
    bar: "from-coral to-apricot",
    title: "Train your ear with stories that sound like life",
    desc: "Short, natural English stories — real voices, real pace, real situations. You learn the melody of English before you ever speak it.",
    visual: () => (
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot text-white">
          <Volume2 size={16} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-extrabold">Coffee Shop Secrets · A2</p>
          <WaveBars count={24} height={18} className="mt-1.5 justify-start" />
        </div>
      </div>
    ),
  },
  {
    n: "02",
    id: "shadow",
    icon: Mic,
    label: "Shadow",
    tint: "bg-[#fdf0dd] text-[#c07a1c]",
    bar: "from-apricot to-honey",
    title: "Repeat it until it rolls off your tongue",
    desc: "Shadow what you hear and practice rhythm, pronunciation and natural speech. Record yourself, tap any word to hear it again, and get instant feedback.",
    visual: () => (
      <div>
        <p className="font-display text-[15px] italic leading-relaxed text-ink-2">
          “Sometimes the smallest{" "}
          <span className="rounded bg-peach px-1 font-semibold not-italic text-coral-deep">
            conversations
          </span>{" "}
          can change everything.”
        </p>
        <p className="mt-2.5 text-[11px] font-bold text-[#c07a1c]">Tap any word to hear it · hold to shadow</p>
      </div>
    ),
  },
  {
    n: "03",
    id: "respond",
    icon: MessagesSquare,
    label: "Respond",
    tint: "bg-[#e7f3eb] text-leaf",
    bar: "from-leaf to-[#8BC6A2]",
    title: "Answer out loud — that's where fluency lives",
    desc: "Real-life questions train your brain to access English when it's your turn to speak. No script, no blanks — just you, answering.",
    visual: () => (
      <div className="space-y-2.5">
        <div className="w-fit max-w-full rounded-2xl rounded-bl-md bg-fog/80 px-3.5 py-2.5 text-[12.5px] font-bold">
          “How was your weekend?”
        </div>
        <div className="flex items-center justify-end gap-2">
          <span className="rounded-2xl rounded-br-md bg-ink px-3.5 py-2.5 text-[12.5px] font-bold text-paper">
            “Honestly? It was exactly what I needed.”
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#e7f3eb] px-2.5 py-1 text-[11px] font-extrabold text-leaf">
            <Sparkles size={11} /> Natural · 94
          </span>
        </div>
      </div>
    ),
  },
];

export default function Method() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 0.65", "end 0.8"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(2, Math.max(0, Math.floor(v * 3)));
    setActive(idx);
  });

  const step = STEPS[active];

  return (
    <section id="method" className="relative scroll-mt-20 py-24 sm:py-32">
      {/* soft band */}
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-cream via-sand/60 to-cream" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <Eyebrow>The SooFluent Method</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.4rem)] font-medium leading-[1.02] tracking-tight">
            Listen. <span className="italic text-coral">Shadow.</span>{" "}
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text text-transparent italic">
              Respond.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] font-medium leading-relaxed text-ink-2">
            Every story takes you through three steps — the same path your brain
            travels when you speak a language for real.
          </p>
        </FadeIn>

        <div ref={wrapRef} className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Sticky phone (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28 flex flex-col items-center">
              {/* progress pills */}
              <div className="mb-10 flex items-center gap-2 rounded-full bg-white card-line p-1.5 shadow-card">
                {STEPS.map((s, i) => (
                  <button
                    key={s.n}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-extrabold transition-all duration-500 ${
                      i === active
                        ? `bg-gradient-to-r ${s.bar} text-white shadow-card`
                        : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <s.icon size={13} />
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-coral/12 via-apricot/12 to-transparent blur-2xl" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 44, scale: 0.95, rotate: -3 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
                    exit={{ opacity: 0, y: -34, scale: 0.97, rotate: 1 }}
                    transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <Phone variant={step.id} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div>
            {STEPS.map((s, i) => (
              <div key={s.n} className="flex min-h-[auto] items-center py-10 lg:min-h-[72vh] lg:py-6">
                <FadeIn className="w-full">
                  <div
                    className={`rounded-[2rem] bg-white p-7 card-line transition-shadow duration-500 sm:p-9 ${
                      i === active ? "shadow-soft" : "shadow-card"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${s.tint}`}>
                        <s.icon size={20} strokeWidth={2.2} />
                      </span>
                      <div className="flex-1">
                        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">
                          Step {s.n}
                        </p>
                      </div>
                      <span className="font-display text-outline text-5xl font-bold">{s.n}</span>
                    </div>
                    <h3 className="mt-5 font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-semibold leading-[1.12] tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3.5 max-w-lg text-[15.5px] font-medium leading-relaxed text-ink-2">
                      {s.desc}
                    </p>
                    <div className="mt-6 rounded-2xl bg-cream/80 card-line p-4">{s.visual()}</div>

                    {/* mobile phone */}
                    <div className="mt-8 flex justify-center lg:hidden">
                      <Phone variant={s.id} className="origin-top scale-[0.9]" />
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
