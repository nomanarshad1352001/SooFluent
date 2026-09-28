import { AnimatePresence, motion } from "framer-motion";
import { AudioLines, BookOpen, Clock3, MessagesSquare, Mic, PackagePlus, Play, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import StoreBadges from "../components/StoreBadges";
import { CATEGORIES, STORIES, type Story } from "../data/content";

const LEVEL_TINT: Record<Story["level"], string> = {
  A2: "bg-[#e7f3eb] text-leaf",
  B1: "bg-[#fdf0dd] text-[#c07a1c]",
  B2: "bg-[#ffe9e5] text-coral-deep",
};

function StoryCard({ s }: { s: Story }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
      className="group relative overflow-hidden rounded-[1.8rem] bg-white card-line shadow-card transition-shadow duration-500 hover:shadow-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={s.img}
          alt={s.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className={`rounded-full px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider ${LEVEL_TINT[s.level]}`}>
            {s.level}
          </span>
          <span className="rounded-full bg-white/85 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-ink backdrop-blur">
            {s.category}
          </span>
        </div>
        <span className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-full bg-white text-coral shadow-card transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-coral group-hover:to-apricot group-hover:text-white">
          <Play size={15} fill="currentColor" className="ml-0.5" />
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-tight">{s.title}</h3>
          <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-extrabold text-ink-soft">
            <Clock3 size={11} /> {s.minutes} min
          </span>
        </div>
        <p className="mt-2 text-[13px] font-medium leading-relaxed text-ink-soft">{s.blurb}</p>
        <div className="mt-4 flex items-center gap-2 border-t border-dashed border-ink/10 pt-3.5">
          {[
            { icon: AudioLines, label: "Listen" },
            { icon: Mic, label: "Shadow" },
            { icon: MessagesSquare, label: "Respond" },
          ].map((x) => (
            <span key={x.label} className="inline-flex items-center gap-1.5 rounded-full bg-cream px-2.5 py-1 text-[10px] font-extrabold text-ink-2">
              <x.icon size={10} className="text-coral" /> {x.label}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function StoriesPage() {
  const [level, setLevel] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      STORIES.filter(
        (s) => (level === "All" || s.level === level) && (category === "All" || s.category === category)
      ),
    [level, category]
  );

  const Chip = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`relative rounded-full px-5 py-2 text-[12.5px] font-extrabold transition-all duration-300 ${
        active ? "bg-ink text-paper shadow-card" : "bg-white card-line text-ink-2 hover:text-ink"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Eyebrow>The story library</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,4.6rem)] font-medium leading-[1.04] tracking-tight">
            A library of real life,{" "}
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text italic text-transparent">
              five minutes at a time.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] font-medium leading-relaxed text-ink-2">
            No textbook chapters. Each story is a small slice of life — and a
            complete Listen → Shadow → Respond session.
          </p>
        </FadeIn>
      </section>

      {/* Filters */}
      <section className="sticky top-[70px] z-30 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass rounded-[1.6rem] border border-ink/5 p-3.5 shadow-card">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 inline-flex items-center gap-1.5 pl-1 text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-ink-soft">
              <BookOpen size={12} /> Level
            </span>
            {["All", "A2", "B1", "B2"].map((l) => (
              <Chip key={l} label={l === "All" ? "All levels" : l} active={level === l} onClick={() => setLevel(l)} />
            ))}
            <span className="mx-2 hidden h-5 w-px bg-ink/10 sm:block" />
            <span className="mr-1 inline-flex items-center gap-1.5 pl-1 text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-ink-soft">
              Life
            </span>
            {["All", ...CATEGORIES].map((c) => (
              <Chip key={c} label={c} active={category === c} onClick={() => setCategory(c)} />
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8">
        <p className="mb-6 text-[12.5px] font-bold text-ink-soft">
          {filtered.length} {filtered.length === 1 ? "story" : "stories"}
          {level !== "All" || category !== "All" ? " matching your filters" : " in the preview shelf"}
        </p>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="sync">
            {filtered.map((s) => (
              <StoryCard key={s.title} s={s} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && (
          <div className="rounded-3xl bg-white card-line p-12 text-center shadow-card">
            <p className="font-display text-xl font-semibold">Nothing on this shelf yet</p>
            <p className="mt-2 text-sm font-medium text-ink-2">Try a different level or category — new stories land every month.</p>
          </div>
        )}
      </section>

      {/* Monthly packs banner */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <FadeIn>
          <div className="grid items-center gap-8 overflow-hidden rounded-[2.4rem] bg-ink p-8 shadow-pop sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-honey">
                <PackagePlus size={13} /> New packs monthly
              </span>
              <h2 className="mt-5 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-[1.1] text-paper">
                This is just the preview shelf.
              </h2>
              <p className="mt-4 max-w-lg text-[15px] font-medium leading-relaxed text-paper/70">
                At launch the library opens with 100+ stories — and every month
                a new themed pack lands: Airports & arrivals, First days at work,
                Dating & heartbreak, Calling customer service… the whole syllabus of life.
              </p>
            </div>
            <div className="grid gap-3">
              {["Airports & arrivals", "First weeks at work", "Dating, drama & small talk"].map((p) => (
                <div key={p} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-coral to-apricot text-white">
                    <Sparkles size={15} />
                  </span>
                  <p className="text-[13.5px] font-bold text-paper">{p}</p>
                  <span className="ml-auto rounded-full bg-white/10 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-paper/60">
                    Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <Stagger className="mt-16 text-center">
          <StaggerItem>
            <StoreBadges size="lg" align="center" />
          </StaggerItem>
        </Stagger>
      </section>
    </>
  );
}
