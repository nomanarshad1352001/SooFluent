import { Headphones, HeartHandshake, MessagesSquare, Mic, Quote, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import StoreBadges from "../components/StoreBadges";
import { COMPANY, CONTACT } from "../config/site";
import { IMG } from "../data/content";

const PILLARS = [
  {
    icon: Headphones,
    tint: "bg-peach text-coral-deep",
    title: "Exposure",
    line: "Hear English again and again",
    desc: "Natural, level-matched stories give your brain the repeated, meaningful input it's wired to learn from.",
  },
  {
    icon: Mic,
    tint: "bg-[#fdf0dd] text-[#c07a1c]",
    title: "Voice",
    line: "Say it out loud",
    desc: "Shadowing turns passive understanding into muscle memory — your mouth learns the sounds, rhythm and music of English.",
  },
  {
    icon: MessagesSquare,
    tint: "bg-[#e7f3eb] text-leaf",
    title: "Reflex",
    line: "Practice responding",
    desc: "Real-life questions train the skill learners miss most: reaching for the right words the moment it's your turn.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Eyebrow>About SooFluent</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,4.8rem)] font-medium leading-[1.04] tracking-tight">
            Fluency isn't memorized.
            <br />
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text font-semibold italic text-transparent">
              It's practiced aloud.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[16.5px] font-medium leading-relaxed text-ink-2">
            SooFluent exists for the millions of learners who understand English —
            but deserve to feel at home speaking it.
          </p>
        </FadeIn>
      </section>

      {/* Image collage band */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-3 sm:gap-5">
          {[
            { src: IMG.learn.headphones, cap: "On the way to work", y: "sm:translate-y-10" },
            { src: IMG.learn.sunnyWalk, cap: "Between classes", y: "sm:-translate-y-2" },
            { src: IMG.learn.cityHeadphones, cap: "Anywhere there's five minutes", y: "sm:translate-y-16" },
          ].map((im, i) => (
            <FadeIn key={i} delay={i * 0.1} className="self-start">
              <figure className={`group overflow-hidden rounded-[1.6rem] shadow-card ${im.y}`}>
                <div className="relative aspect-[3/4.2] overflow-hidden">
                  <img
                    src={im.src}
                    alt={im.cap}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-4 left-4 right-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/90 sm:text-[12px]">
                    {im.cap}
                  </figcaption>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Mission quote */}
      <section className="relative mt-24 px-5 py-20 sm:mt-36 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.6rem] bg-ink px-6 py-16 text-center shadow-pop sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/20 blur-3xl" />
          <FadeIn className="relative">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot text-white shadow-card">
              <Quote size={22} fill="currentColor" />
            </span>
            <blockquote className="mx-auto mt-8 max-w-4xl font-display text-[clamp(1.5rem,3.6vw,2.5rem)] font-medium italic leading-[1.35] text-paper">
              “We believe fluency isn't built by memorizing more English. It's built by hearing English
              again and again, saying it out loud, and practicing how to respond in real
              situations.”
            </blockquote>
            <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.22em] text-paper/50">
              The SooFluent mission
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy pillars */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <FadeIn className="max-w-2xl">
          <Eyebrow>How we think about learning</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.06] tracking-tight">
            Three ideas behind every story.
          </h2>
        </FadeIn>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="group h-full rounded-[2rem] bg-white card-line p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <span className={`grid h-[52px] w-[52px] place-items-center rounded-2xl ${p.tint} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    <p.icon size={22} strokeWidth={2.2} />
                  </span>
                  <span className="font-display text-outline text-4xl font-bold">0{i + 1}</span>
                </div>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">{p.title}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{p.line}</h3>
                <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-ink-2">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Company */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid items-center gap-10 rounded-[2.6rem] bg-sand/70 card-line p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white card-line text-coral">
                <HeartHandshake size={20} />
              </span>
              <Eyebrow>The company</Eyebrow>
            </div>
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-[1.1] tracking-tight">
              Built by {COMPANY.name}
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] font-medium leading-relaxed text-ink-2">
              We're a small team of language learners, teachers and product builders.
              Most of us have lived the "mind goes blank" moment ourselves — in
              meetings, airports and first dates. SooFluent is the app we wished
              existed: warm, honest, and focused on the moment that actually matters —
              when it's your turn to speak.
            </p>
            <p className="mt-6 text-sm font-semibold text-ink-soft">
              Questions, partnerships, press —{" "}
              <a href={`mailto:${CONTACT.hello}`} className="font-bold text-coral underline decoration-coral/40 underline-offset-4 hover:decoration-coral">
                {CONTACT.hello}
              </a>
            </p>
          </FadeIn>
          <Stagger className="grid gap-3">
            {[
              { icon: Users, t: "Learner-first", d: "Every decision starts with one question: does this help someone speak sooner?" },
              { icon: Headphones, t: "Real input only", d: "Stories written and recorded the way humans actually talk." },
              { icon: MessagesSquare, t: "Practice over theory", d: "Understanding is step one. The reply is the goal." },
            ].map((f) => (
              <StaggerItem key={f.t}>
                <div className="flex gap-4 rounded-2xl bg-white card-line p-5 shadow-card">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-peach text-coral-deep">
                    <f.icon size={17} />
                  </span>
                  <div>
                    <p className="text-[14.5px] font-extrabold">{f.t}</p>
                    <p className="mt-0.5 text-[12.5px] font-medium leading-snug text-ink-soft">{f.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-28 text-center sm:px-8">
        <FadeIn>
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-tight">
            Come say your first sentence <span className="italic text-coral">with us.</span>
          </h2>
          <StoreBadges size="lg" align="center" className="mt-9" />
          <p className="mt-6 text-sm font-semibold text-ink-soft">
            Curious how it feels? <Link to="/#method" className="font-bold text-coral underline decoration-coral/40 underline-offset-4 hover:decoration-coral">Meet the method</Link>
          </p>
        </FadeIn>
      </section>
    </>
  );
}
