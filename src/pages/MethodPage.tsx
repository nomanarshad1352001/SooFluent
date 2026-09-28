import { Ear, Headphones, MessagesSquare, Mic, Repeat2, Route, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { Phone } from "../components/Phone";
import { Counter, Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import StoreBadges from "../components/StoreBadges";
import { WaveBars } from "../components/WaveBars";

const PRINCIPLES = [
  {
    icon: Ear,
    tint: "bg-peach text-coral-deep",
    title: "Meaningful input",
    desc: "Language sticks when it's interesting, understandable and just a step above comfortable. That's why every SooFluent story is level-matched and actually worth hearing.",
  },
  {
    icon: Repeat2,
    tint: "bg-[#fdf0dd] text-[#c07a1c]",
    title: "Output rituals",
    desc: "Speaking is motor skill, not trivia. Shadowing rehearsed out loud turns 'I know this' into 'my mouth can do this' — sound by sound, sentence by sentence.",
  },
  {
    icon: MessagesSquare,
    tint: "bg-[#e7f3eb] text-leaf",
    title: "Retrieval practice",
    desc: "Answering real questions teaches your brain to fetch English on demand. It's the single most neglected skill in self-study — and the whole point of our Respond step.",
  },
  {
    icon: Timer,
    tint: "bg-sky/15 text-sky",
    title: "Tiny, daily doses",
    desc: "Five minutes every day outperforms two hours twice a month. The method is sized to fit your life, so the habit — and the progress — survives reality.",
  },
];

const DEEP_DIVE = [
  {
    n: "01",
    icon: Headphones,
    phone: "listen" as const,
    tint: "bg-peach text-coral-deep",
    grad: "from-coral to-apricot",
    title: "Listen — fall in love with the sound first",
    body: [
      "Every session starts with a short story: a coffee run, a canceled plan, a stranger's apology. Real voices at real pace, but level-matched so you understand enough to relax.",
      "Listening comes first for a reason. Before your mouth can produce the music of English, your ear has to know the melody. Follow the live transcript, notice how words really connect — 'didyou', 'gonna', 'kinda' — and let natural speech become familiar, not frightening.",
    ],
    points: ["Natural-speed native audio", "Level-matched comfort (A2–B2)", "Live transcript with word highlights"],
  },
  {
    n: "02",
    icon: Mic,
    phone: "shadow" as const,
    tint: "bg-[#fdf0dd] text-[#c07a1c]",
    grad: "from-apricot to-honey",
    title: "Shadow — give the language to your mouth",
    body: [
      "Now you repeat. Line by line, you echo the speaker out loud — their rhythm, their stress, their music. It feels like karaoke because it works like karaoke: imitation with instant honesty.",
      "Stuck on a word? Tap it for slow, word-by-word pronunciation. Then record yourself — hearing your own voice next to the original is the fastest mirror a language learner can own.",
    ],
    points: ["Line-by-line repeat practice", "Tap any word to hear it", "Record & compare with original"],
  },
  {
    n: "03",
    icon: MessagesSquare,
    phone: "respond" as const,
    tint: "bg-[#e7f3eb] text-leaf",
    grad: "from-leaf to-[#8BC6A2]",
    title: "Respond — train the moment it's your turn",
    body: [
      "Here's where most apps stop — and where fluency actually starts. Every story ends with a real-life question you answer out loud, in your own words, in your real voice.",
      "It's a rehearsal for the exact moment self-study never prepares you for: someone asks, you answer. Friendly AI feedback scores your response for rhythm and clarity, so every session ends with your voice — a little freer than yesterday.",
    ],
    points: ["Real questions from the story", "Answers in your own voice", "Gentle scores for rhythm & clarity"],
  },
];

const WEEK = [
  { d: "Mon", t: "One story, full loop", m: "10 min" },
  { d: "Tue", t: "Shadow yesterday's best lines", m: "8 min" },
  { d: "Wed", t: "New story at your level", m: "10 min" },
  { d: "Thu", t: "Respond drills — 3 questions", m: "7 min" },
  { d: "Fri", t: "New story + tap new words", m: "10 min" },
  { d: "Sat", t: "Re-record, compare, smile", m: "8 min" },
  { d: "Sun", t: "Rest — or a cozy bonus story", m: "5 min" },
];

export default function MethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[780px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Eyebrow>The SooFluent Method</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,4.8rem)] font-medium leading-[1.04] tracking-tight">
            Why years of study{" "}
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text italic text-transparent">
              never becomes speech.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[16.5px] font-medium leading-relaxed text-ink-2">
            Knowing English and <em className="font-bold not-italic">using</em> English are different
            skills. The SooFluent Method trains all three you actually need —
            in one small, daily loop.
          </p>
        </FadeIn>

        <Stagger className="mx-auto mt-14 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="group h-full rounded-[1.8rem] bg-white card-line p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <span className={`grid h-11 w-11 place-items-center rounded-2xl ${p.tint} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    <p.icon size={19} strokeWidth={2.2} />
                  </span>
                  <span className="font-display text-outline text-3xl font-bold">0{i + 1}</span>
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold">{p.title}</h2>
                <p className="mt-2.5 text-[13px] font-medium leading-relaxed text-ink-soft">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Deep dives */}
      <section className="mx-auto max-w-7xl space-y-20 px-5 py-16 sm:px-8 sm:py-24">
        {DEEP_DIVE.map((d, i) => (
          <div key={d.n} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}>
            <FadeIn className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${d.tint}`}>
                  <d.icon size={20} strokeWidth={2.2} />
                </span>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ink-soft">
                  Step {d.n}
                </p>
                <span className={`h-px flex-1 bg-gradient-to-r ${d.grad} to-transparent opacity-40`} />
              </div>
              <h2 className="mt-6 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.1] tracking-tight">
                {d.title}
              </h2>
              {d.body.map((p, j) => (
                <p key={j} className="mt-4 max-w-xl text-[15.5px] font-medium leading-relaxed text-ink-2">
                  {p}
                </p>
              ))}
              <ul className="mt-7 space-y-2.5">
                {d.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-[14px] font-bold">
                    <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${d.grad}`} />
                    {pt}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.12} className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="relative mx-auto w-fit">
                <div className={`pointer-events-none absolute -inset-12 -z-10 rounded-full bg-gradient-to-br ${d.grad} opacity-15 blur-3xl`} />
                <div className={i % 2 === 1 ? "animate-float-late" : "animate-float"}>
                  <Phone variant={d.phone} className={i % 2 === 1 ? "rotate-2" : "-rotate-2"} />
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </section>

      {/* A week with SooFluent */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <FadeIn className="max-w-2xl">
          <Eyebrow>Make it yours</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-[1.06] tracking-tight">
            What a week with SooFluent feels like.
          </h2>
          <p className="mt-4 max-w-xl text-[15.5px] font-medium leading-relaxed text-ink-2">
            No marathons. Under <Counter to={60} suffix=" min" className="font-display font-bold text-coral" /> total,
            every week, and English starts sounding like something you do — not something you study.
          </p>
        </FadeIn>
        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7" gap={0.06}>
          {WEEK.map((w) => (
            <StaggerItem key={w.d}>
              <div className="group h-full rounded-2xl bg-white card-line p-4 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft lg:text-center">
                <p className="font-display text-lg font-bold text-coral">{w.d}</p>
                <p className="mt-1.5 text-[12px] font-bold leading-snug">{w.t}</p>
                <WaveBars count={10} height={12} className="mt-2.5 hidden justify-center lg:flex" barClassName="bg-apricot" />
                <p className="mt-2 text-[10.5px] font-bold uppercase tracking-wider text-ink-soft">{w.m}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-28 pt-8 text-center sm:px-8">
        <FadeIn>
          <Route className="mx-auto text-coral" size={28} strokeWidth={2.2} />
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-tight">
            Ready to walk the loop{" "}
            <span className="italic text-coral">yourself?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] font-medium text-ink-2">
            See it in the app — <Link to="/stories" className="font-bold text-coral underline decoration-coral/40 underline-offset-4 hover:decoration-coral">browse the story library</Link>.
          </p>
          <StoreBadges size="lg" align="center" className="mt-9" />
        </FadeIn>
      </section>
    </>
  );
}
