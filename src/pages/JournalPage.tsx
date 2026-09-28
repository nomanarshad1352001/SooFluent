import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import { ARTICLES } from "../data/content";

export default function JournalPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[740px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Eyebrow>The SooFluent Journal</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,4.4rem)] font-medium leading-[1.04] tracking-tight">
            Field notes on{" "}
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text italic text-transparent">
              finding your voice.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[16px] font-medium leading-relaxed text-ink-2">
            Short, honest essays on the psychology and craft of speaking a
            second language — written for learners, by people who've been there.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        {/* Featured */}
        <FadeIn>
          <Link
            to={`/journal/${featured.slug}`}
            className="group grid gap-0 overflow-hidden rounded-[2.2rem] bg-white card-line shadow-card transition-shadow duration-500 hover:shadow-soft lg:grid-cols-2"
          >
            <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto">
              <img
                src={featured.cover}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex items-center gap-2.5">
                <span className="rounded-full bg-peach px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-coral-deep">
                  Featured · {featured.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink-soft">
                  <Clock3 size={11} /> {featured.minutes} min read
                </span>
              </div>
              <h2 className="mt-5 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold leading-[1.15] tracking-tight">
                {featured.title}
              </h2>
              <p className="mt-4 text-[14.5px] font-medium leading-relaxed text-ink-soft">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-extrabold text-coral">
                Read the essay
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </Link>
        </FadeIn>

        {/* Grid */}
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2" gap={0.1}>
          {rest.map((a) => (
            <StaggerItem key={a.slug}>
              <Link
                to={`/journal/${a.slug}`}
                className="group block h-full overflow-hidden rounded-[2rem] bg-white card-line shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={a.cover}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink backdrop-blur">
                    {a.tag}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-[11px] font-bold text-ink-soft">
                    <BookOpen size={12} className="text-coral" />
                    {a.date} · {a.minutes} min read
                  </div>
                  <h3 className="mt-3 font-display text-[1.35rem] font-semibold leading-snug tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[13.5px] font-medium leading-relaxed text-ink-soft">
                    {a.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-extrabold text-coral">
                    Read
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-16 text-center">
          <p className="text-sm font-semibold text-ink-soft">
            New essays every month once we launch — warm, short, and always about the speaking part.
          </p>
        </FadeIn>
      </section>
    </>
  );
}
