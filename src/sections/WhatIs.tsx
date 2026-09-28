import { AudioLines, Compass, Layers, Timer } from "lucide-react";
import { Counter, Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";

const STATS = [
  {
    icon: Timer,
    tint: "bg-peach text-coral-deep",
    value: 5,
    suffix: " min",
    label: "Average story length — fits a coffee break, a commute, or a walk.",
  },
  {
    icon: Layers,
    tint: "bg-[#e7f3eb] text-leaf",
    value: 3,
    suffix: "",
    label: "Levels, from A2 to B2 — always matched to where you are today.",
  },
  {
    icon: Compass,
    tint: "bg-sky/15 text-sky",
    value: 40,
    suffix: "+",
    label: "Real-life situations to explore — cafés, airports, interviews, small talk.",
  },
  {
    icon: AudioLines,
    tint: "bg-[#fdf0dd] text-[#c07a1c]",
    value: 100,
    suffix: "%",
    label: "Natural, human-sounding English — the way people actually speak.",
  },
];

export default function WhatIs() {
  return (
    <section id="intro" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <FadeIn>
            <Eyebrow>What is SooFluent?</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.06] tracking-tight">
              You already <em className="italic text-coral not-italic font-semibold">understand</em> English.
              <br />
              Now start <span className="italic text-coral">using</span> it.
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-[16.5px] font-medium leading-relaxed text-ink-2">
              SooFluent helps learners move from understanding English to actually speaking it —
              through <span className="font-bold text-ink">short real-life stories</span>, guided
              listening, speaking aloud, pronunciation practice, and{" "}
              <span className="font-bold text-ink">real-life response training</span>.
            </p>
            <p className="mt-4 text-[16.5px] font-medium leading-relaxed text-ink-2">
              No flashcards. No grammar drills at midnight. Just everyday moments, a friendly voice,
              and your turn to answer.
            </p>
          </FadeIn>
        </div>

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="group h-full rounded-3xl bg-white card-line p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${s.tint} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <s.icon size={19} strokeWidth={2.2} />
                </span>
                <p className="mt-5 font-display text-[2.6rem] font-semibold leading-none tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[13px] font-semibold leading-relaxed text-ink-soft">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
