import { CheckCircle2, Compass, Eye, Lightbulb, Mail, Megaphone, Rocket, Sparkles } from "lucide-react";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import StoreBadges from "../components/StoreBadges";
import { CONTACT } from "../config/site";
import { ROADMAP } from "../data/content";

const ICONS = [Rocket, Compass, Sparkles, Eye];

export default function RoadmapPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[740px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Eyebrow>Roadmap</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,4.4rem)] font-medium leading-[1.04] tracking-tight">
            Where SooFluent{" "}
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text italic text-transparent">
              is headed.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[16px] font-medium leading-relaxed text-ink-2">
            We're building in the open. Here's the honest map — what we're doing,
            what's next, and what we're dreaming about with you.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
        <div className="relative">
          <span className="absolute bottom-6 left-[26px] top-2 hidden w-px bg-gradient-to-b from-coral via-apricot to-honey sm:block" />
          <Stagger className="space-y-6" gap={0.12}>
            {ROADMAP.map((r, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <StaggerItem key={r.when}>
                  <div className="relative flex gap-6">
                    <div className="hidden flex-col items-center sm:flex">
                      <span
                        className="relative z-10 grid h-[52px] w-[52px] place-items-center rounded-2xl text-white shadow-card"
                        style={{ background: r.tint }}
                      >
                        <Icon size={20} strokeWidth={2.2} />
                      </span>
                    </div>
                    <div className="group flex-1 rounded-[2rem] bg-white card-line p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft sm:p-9">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="font-display text-xl font-bold">{r.when}</p>
                        <span
                          className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em]"
                          style={{ background: `${r.tint}1e`, color: r.tint }}
                        >
                          {r.status}
                        </span>
                      </div>
                      <h2 className="mt-3.5 font-display text-[clamp(1.4rem,3vw,1.9rem)] font-semibold tracking-tight">
                        {r.title}
                      </h2>
                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {r.items.map((it) => (
                          <li key={it} className="flex items-start gap-2.5 rounded-2xl bg-cream/70 card-line px-4 py-3 text-[13px] font-bold">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: r.tint }} />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Suggest */}
      <section className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <FadeIn>
          <div className="grid items-center gap-8 overflow-hidden rounded-[2.4rem] bg-ink p-8 shadow-pop sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-honey">
                <Megaphone size={13} /> Your vote counts
              </span>
              <h2 className="mt-5 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-[1.1] text-paper">
                Tell us what to build next.
              </h2>
              <p className="mt-4 max-w-md text-[15px] font-medium leading-relaxed text-paper/70">
                The roadmap bends around learner feedback more than anything
                else. Founding members get a literal vote — everyone gets an inbox.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT.hello}?subject=Roadmap%20idea%20for%20SooFluent`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-apricot px-6 py-3.5 text-sm font-extrabold text-white shadow-card transition-transform hover:scale-[1.03]"
                >
                  <Mail size={15} /> Send an idea
                </a>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-bold text-paper/80">
                  <Lightbulb size={15} className="text-honey" /> Most requested: conversation mode
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "3.2k", l: "waitlist learners" },
                { v: "40+", l: "languages spoken by our beta group" },
                { v: "121", l: "feature requests logged & answered" },
                { v: "1", l: "voice we're building for — yours" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white/8 p-5 text-center">
                  <p className="font-display text-2xl font-bold text-honey">{s.v}</p>
                  <p className="mt-1 text-[11px] font-bold leading-snug text-paper/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <StoreBadges size="lg" align="center" className="mt-16" />
      </section>
    </>
  );
}
