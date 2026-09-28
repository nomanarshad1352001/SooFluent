import { AudioLines, Mic, MousePointerClick, Sparkles, Volume2 } from "lucide-react";
import { useState } from "react";
import { Phone } from "../components/Phone";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import { WaveBars } from "../components/WaveBars";

const FEATURES = [
  {
    icon: AudioLines,
    tint: "bg-peach text-coral-deep",
    title: "Listen to natural speech",
    desc: "Every line is recorded the way people actually talk — not slowed-down classroom audio.",
  },
  {
    icon: Mic,
    tint: "bg-[#fdf0dd] text-[#c07a1c]",
    title: "Record yourself shadowing",
    desc: "Say it back in your own voice. Comparing yourself to the original is where the magic happens.",
  },
  {
    icon: MousePointerClick,
    tint: "bg-sky/15 text-sky",
    title: "Tap any word to hear it",
    desc: "Stuck on a word? Tap it for word-by-word pronunciation, phonetics and a slow replay.",
  },
  {
    icon: Sparkles,
    tint: "bg-[#e7f3eb] text-leaf",
    title: "Get instant AI feedback",
    desc: "Friendly scores for rhythm, clarity and stress — plus exactly what to adjust next time.",
  },
];

const TAP_WORDS = [
  { w: "beautiful", p: "ˈbjuː·tɪ·fəl" },
  { w: "want", p: "wɑːnt" },
  { w: "to", p: "tə" },
  { w: "catch", p: "kætʃ" },
  { w: "up", p: "ʌp" },
  { w: "later?", p: "ˈleɪ·tər" },
];

export default function Speech() {
  const [tapped, setTapped] = useState(0);

  return (
    <section id="pronunciation" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Phone side */}
          <FadeIn className="order-2 lg:order-1">
            <div className="relative mx-auto w-fit">
              <div className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-gradient-to-tr from-sky/15 via-peach/50 to-transparent blur-2xl" />
              <div className="animate-float-late">
                <Phone variant="shadow" className="-rotate-2" />
              </div>
              <div className="absolute -right-4 top-16 z-10 hidden sm:block lg:-right-16">
                <div className="animate-float rounded-2xl bg-white card-line p-3 shadow-pop">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">Last try</p>
                  <p className="font-display text-xl font-bold text-coral">98 — nearly perfect</p>
                  <WaveBars count={16} height={14} className="mt-1.5" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Copy side */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <Eyebrow>Pronunciation practice</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.05] tracking-tight">
                Say it. Hear it.{" "}
                <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text text-transparent italic">
                  Fix it.
                </span>
              </h2>
              <p className="mt-5 max-w-lg text-[16px] font-medium leading-relaxed text-ink-2">
                Most apps tell you what English sounds like. SooFluent helps your
                mouth actually make those sounds — one honest recording at a time.
              </p>
            </FadeIn>

            <Stagger className="mt-9 space-y-4">
              {FEATURES.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="group flex gap-4 rounded-3xl bg-white card-line p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${f.tint} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                      <f.icon size={20} strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-[15.5px] font-extrabold">{f.title}</p>
                      <p className="mt-1 text-[13.5px] font-medium leading-relaxed text-ink-soft">{f.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* tap-a-word demo */}
            <FadeIn delay={0.1} className="mt-8">
              <div className="rounded-3xl bg-ink p-6 text-paper shadow-pop">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-paper/50">
                  Try it now — tap a word
                </p>
                <div className="mt-3.5 flex flex-wrap items-center gap-x-1.5 gap-y-2 font-display text-xl font-medium">
                  {TAP_WORDS.map((t, i) => (
                    <button
                      key={t.w}
                      onClick={() => setTapped(i)}
                      className={`rounded-lg px-2 py-1 transition-all duration-300 ${
                        tapped === i
                          ? "bg-gradient-to-r from-coral to-apricot text-white shadow-card"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {t.w}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-white/8 p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-sky text-white">
                      <Volume2 size={17} />
                    </span>
                    <div>
                      <p className="text-[14px] font-extrabold leading-none">{TAP_WORDS[tapped].w}</p>
                      <p className="mt-1 text-[12px] font-semibold text-paper/60">/{TAP_WORDS[tapped].p}/</p>
                    </div>
                  </div>
                  <WaveBars count={14} height={18} barClassName="bg-honey" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
