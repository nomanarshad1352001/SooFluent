import { ArrowUpRight, PackagePlus } from "lucide-react";
import MarqueeRail from "../components/MarqueeRail";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import { openNotifyModal } from "../config/site";
import { PHRASAL_VERBS, SITUATIONS } from "../data/content";

const GLOSSES = [
  { phrase: "“Let's catch up soon.”", gloss: "to talk again after time apart" },
  { phrase: "“I ran into an old friend.”", gloss: "met by chance" },
  { phrase: "“Can we put it off until Friday?”", gloss: "postpone" },
  { phrase: "“I'll figure it out.”", gloss: "to solve or understand" },
  { phrase: "“Looking forward to it!”", gloss: "excited about the future" },
  { phrase: "“Drop by anytime.”", gloss: "visit casually" },
];

export default function ContextEnglish() {
  const [featured, ...rest] = SITUATIONS;

  return (
    <section id="real-english" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-peach/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <Eyebrow>Real English in context</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.05] tracking-tight">
            Not vocabulary lists.{" "}
            <span className="italic text-coral">Real life.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] font-medium leading-relaxed text-ink-2">
            Phrasal verbs, expressions and fast natural speech — learned inside
            short stories and everyday situations, the way you'd actually meet them.
          </p>
        </FadeIn>

        {/* Bento grid */}
        <Stagger className="mt-14 grid auto-rows-[200px] grid-flow-dense grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4" gap={0.08}>
          {/* featured */}
          <StaggerItem className="col-span-2 row-span-2">
            <article className="group relative h-full w-full overflow-hidden rounded-[1.8rem] shadow-card">
              <img
                src={featured.img}
                alt={featured.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-ink backdrop-blur">
                {featured.tag}
              </span>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{featured.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold text-white/70">“So what's new with you?”</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-all duration-500 group-hover:bg-coral group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </article>
          </StaggerItem>

          {/* CTA tile */}
          <StaggerItem className="col-span-2">
            <button
              onClick={openNotifyModal}
              className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-coral to-apricot p-6 text-left shadow-card transition-all duration-500 hover:shadow-pop"
            >
              <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/15 transition-transform duration-700 group-hover:scale-125" />
              <p className="w-fit rounded-full bg-white/20 px-3 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-white">
                Inside the app
              </p>
              <div className="flex items-end justify-between gap-4">
                <p className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                  50+ real conversation starters
                </p>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-coral transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </button>
          </StaggerItem>

          {/* remaining photo tiles */}
          {rest.map((s) => (
            <StaggerItem key={s.title}>
              <article className="group relative h-full w-full overflow-hidden rounded-[1.8rem] shadow-card">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <span className="absolute left-3.5 top-3.5 rounded-full bg-white/85 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-ink backdrop-blur">
                  {s.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                  <h3 className="font-display text-lg font-semibold leading-tight text-white">{s.title}</h3>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-all duration-500 group-hover:bg-coral group-hover:rotate-45">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}

          {/* utility tile */}
          <StaggerItem>
            <div className="group flex h-full w-full flex-col justify-between rounded-[1.8rem] bg-ink p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-honey">
                <PackagePlus size={18} />
              </span>
              <p className="font-display text-lg font-semibold leading-tight text-paper">
                New situation packs
                <span className="block text-paper/50">every month</span>
              </p>
            </div>
          </StaggerItem>
        </Stagger>

        {/* Phrasal verb rails */}
        <FadeIn className="mt-16">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.24em] text-ink-soft">
            The expressions textbooks skip — but life doesn't
          </p>
        </FadeIn>

        <div className="mt-7 space-y-4">
          <MarqueeRail duration={34} pauseOnHover>
            {PHRASAL_VERBS.map((v) => (
              <span
                key={v}
                className="whitespace-nowrap rounded-full bg-ink px-7 py-3.5 font-display text-lg font-semibold italic text-paper shadow-card"
              >
                {v}
              </span>
            ))}
          </MarqueeRail>
          <MarqueeRail duration={46} reverse pauseOnHover>
            {GLOSSES.map((g) => (
              <span
                key={g.phrase}
                className="flex items-center gap-3 whitespace-nowrap rounded-full bg-white card-line px-6 py-3.5 shadow-card"
              >
                <span className="font-display text-[15px] font-semibold">{g.phrase}</span>
                <span className="text-[12.5px] font-semibold text-ink-soft">{g.gloss}</span>
              </span>
            ))}
          </MarqueeRail>
        </div>
      </div>
    </section>
  );
}
