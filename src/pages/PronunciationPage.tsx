import { Activity, AudioLines, CheckCircle2, Ear, Gauge, Music4, Repeat2, TrendingUp, Volume2, Waves } from "lucide-react";
import { useState } from "react";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import StoreBadges from "../components/StoreBadges";
import { WaveBars } from "../components/WaveBars";

const SENTENCE = [
  { w: "What", p: "wʌt" },
  { w: "would", p: "wʊd" },
  { w: "you", p: "jə" },
  { w: "do", p: "duː" },
  { w: "if", p: "ɪf" },
  { w: "your", p: "jɔːr" },
  { w: "best", p: "best" },
  { w: "friend", p: "frend" },
  { w: "moved", p: "muːvd" },
  { w: "away?", p: "əˈweɪ" },
];

const DIMENSIONS = [
  { icon: Waves, name: "Rhythm", score: 94, tint: "#ff5a3c", desc: "The beat of your speech — which words you stretch, which you shrink." },
  { icon: Ear, name: "Sounds", score: 89, tint: "#f59a2f", desc: "Individual vowels and consonants — the building blocks natives hear first." },
  { icon: Gauge, name: "Stress", score: 91, tint: "#4c9a6c", desc: "Which syllable gets the punch: pho-TO-graph vs PHO-to-graph." },
  { icon: Music4, name: "Intonation", score: 86, tint: "#5b8def", desc: "The rise and fall that makes questions sound like questions." },
];

const SESSION_STEPS = [
  { icon: AudioLines, t: "Hear the line", d: "Natural voice, natural speed — with the transcript glowing along." },
  { icon: Repeat2, t: "Shadow it", d: "Repeat right behind the speaker. Once, twice, until it rolls." },
  { icon: Activity, t: "Record & compare", d: "Your take, next to theirs. The mirror is instant and honest." },
  { icon: CheckCircle2, t: "Fix one thing", d: "AI points at one clear adjustment — not twenty. Small win, next line." },
];

export default function PronunciationPage() {
  const [tapped, setTapped] = useState<number | null>(7);
  const [played, setPlayed] = useState<number | null>(null);

  const tap = (i: number) => {
    setTapped(i);
    setPlayed(i);
    window.setTimeout(() => setPlayed((p) => (p === i ? null : p)), 1200);
  };

  return (
    <>
      {/* Hero + interactive word explorer */}
      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[780px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Eyebrow>Pronunciation studio</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,4.6rem)] font-medium leading-[1.04] tracking-tight">
            Your mouth is a muscle.{" "}
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text italic text-transparent">
              Train it.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] font-medium leading-relaxed text-ink-2">
            Every word in SooFluent is tappable, hearable and recordable — with
            AI feedback that tells you exactly what's off, and what to do about it.
          </p>
        </FadeIn>

        {/* Interactive sentence */}
        <FadeIn delay={0.15} className="mx-auto mt-14 max-w-3xl px-5 sm:px-8">
          <div className="rounded-[2.2rem] bg-ink p-7 text-paper shadow-pop sm:p-10">
            <p className="text-center text-[10.5px] font-bold uppercase tracking-[0.22em] text-paper/50">
              Live demo — tap any word to hear it
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 font-display text-[clamp(1.4rem,4vw,2.2rem)] font-medium">
              {SENTENCE.map((s, i) => (
                <button
                  key={i}
                  onClick={() => tap(i)}
                  className={`relative rounded-xl px-2.5 py-1 transition-all duration-300 ${
                    tapped === i
                      ? "bg-gradient-to-r from-coral to-apricot text-white shadow-card"
                      : "hover:bg-white/10"
                  }`}
                >
                  {s.w}
                  {played === i && (
                    <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2">
                      <span className="absolute h-4 w-4 animate-ping rounded-full bg-coral/70" />
                      <span className="absolute inset-x-[5px] inset-y-[5px] h-1.5 w-1.5 rounded-full bg-coral" />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-7 flex min-h-[86px] items-center justify-between gap-4 rounded-2xl bg-white/8 p-5">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sky text-white shadow-card">
                  <Volume2 size={20} />
                </span>
                <div>
                  <p className="text-[16px] font-extrabold">
                    {tapped === null ? "Pick a word above" : SENTENCE[tapped].w.replace(/\?$/, "")}
                  </p>
                  <p className="mt-0.5 text-[13px] font-semibold text-paper/60">
                    {tapped === null ? "Every word is a mini lesson" : `/${SENTENCE[tapped].p}/ · tap again to replay`}
                  </p>
                </div>
              </div>
              <WaveBars count={18} height={26} barClassName="bg-honey" playing={played !== null} />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Session flow */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <FadeIn className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-[1.06] tracking-tight">
            One honest loop, every line.
          </h2>
        </FadeIn>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SESSION_STEPS.map((s, i) => (
            <StaggerItem key={s.t}>
              <div className="group relative h-full overflow-hidden rounded-[1.8rem] bg-white card-line p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                <span className="font-display text-outline absolute right-5 top-4 text-4xl font-bold">0{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-peach text-coral-deep transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon size={20} strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-[13.5px] font-medium leading-relaxed text-ink-soft">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Feedback dimensions */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <Eyebrow>What AI feedback measures</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-medium leading-[1.06] tracking-tight">
              Not “wrong”. Not “perfect”.{" "}
              <span className="italic text-coral">Specific.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] font-medium leading-relaxed text-ink-2">
              Pronunciation isn't one score. SooFluent listens along four
              dimensions and celebrates what improved — then quietly points at
              the one thing to try next.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#e7f3eb] p-5">
              <TrendingUp size={20} className="shrink-0 text-leaf" />
              <p className="text-[13px] font-bold leading-snug text-ink-2">
                Beta learners' average rhythm score climbed 17 points in their
                first month of daily shadowing.
              </p>
            </div>
          </FadeIn>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {DIMENSIONS.map((d) => (
              <StaggerItem key={d.name}>
                <div className="h-full rounded-[1.8rem] bg-white card-line p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl" style={{ background: `${d.tint}1f`, color: d.tint }}>
                      <d.icon size={19} strokeWidth={2.2} />
                    </span>
                    <span className="font-display text-2xl font-bold" style={{ color: d.tint }}>
                      {d.score}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{d.name}</h3>
                  <div className="mt-2.5 h-2 rounded-full bg-fog">
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${d.score}%`, background: d.tint }} />
                  </div>
                  <p className="mt-3 text-[12.5px] font-medium leading-relaxed text-ink-soft">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Quiet encouragement + CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-28 pt-10 text-center sm:px-8">
        <FadeIn>
          <p className="mx-auto max-w-2xl font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-medium italic leading-relaxed text-ink-2">
            “Nobody was born with a perfect accent. Everybody was born with a
            mouth that loves to rehearse.”
          </p>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-soft">
            Found on a sticky note in the SooFluent studio
          </p>
          <StoreBadges size="lg" align="center" className="mt-10" />
        </FadeIn>
      </section>
    </>
  );
}
