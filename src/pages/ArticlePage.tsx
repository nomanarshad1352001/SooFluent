import { ArrowLeft, ArrowRight, Clock3, Quote } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Eyebrow, FadeIn } from "../components/Reveal";
import StoreBadges from "../components/StoreBadges";
import { LogoMark } from "../components/Logo";
import { ARTICLES } from "../data/content";

export default function ArticlePage() {
  const { slug } = useParams();
  const idx = ARTICLES.findIndex((a) => a.slug === slug);
  if (idx === -1) return <Navigate to="/journal" replace />;
  const article = ARTICLES[idx];
  const next = ARTICLES[(idx + 1) % ARTICLES.length];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[720px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            to="/journal"
            className="group inline-flex items-center gap-2 text-[12.5px] font-extrabold text-ink-2 transition-colors hover:text-coral"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Back to the Journal
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Eyebrow>{article.tag} · {article.date}</Eyebrow>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white card-line px-3.5 py-1.5 text-[11px] font-bold text-ink-soft shadow-card">
              <Clock3 size={11} /> {article.minutes} min read
            </span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2rem,5.6vw,3.6rem)] font-semibold leading-[1.08] tracking-tight">
            {article.title}
          </h1>
          <p className="mt-5 text-[16px] font-medium leading-relaxed text-ink-soft">{article.excerpt}</p>
        </FadeIn>

        <FadeIn delay={0.12} className="mx-auto mt-10 max-w-5xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[2.2rem] shadow-soft">
            <img src={article.cover} alt={article.title} className="aspect-[21/9] w-full object-cover" />
          </div>
        </FadeIn>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        {article.body.map((block, bi) => (
          <div key={bi} className={bi === 0 ? "" : "mt-10"}>
            {block.heading && (
              <FadeIn>
                <h2 className="flex items-center gap-4 font-display text-[clamp(1.4rem,3vw,1.9rem)] font-semibold tracking-tight">
                  <span className="h-8 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-coral to-apricot" />
                  {block.heading}
                </h2>
              </FadeIn>
            )}
            <FadeIn delay={0.05}>
              <div className="mt-5 space-y-5">
                {block.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-[15.5px] font-medium leading-[1.9] text-ink-2 first:font-display first:text-[19px] first:font-medium first:leading-[1.75] first:text-ink">
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>
            {/* Pull quote after the middle block */}
            {bi === Math.floor((article.body.length - 1) / 2) && article.pullQuote && (
              <FadeIn className="my-12">
                <blockquote className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-10 text-center shadow-pop sm:px-14">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/20 blur-3xl" />
                  <Quote size={24} className="mx-auto text-honey" fill="currentColor" />
                  <p className="relative mt-4 font-display text-[clamp(1.4rem,3.4vw,2rem)] font-medium italic leading-snug text-paper">
                    “{article.pullQuote}”
                  </p>
                </blockquote>
              </FadeIn>
            )}
          </div>
        ))}

        {/* Author card */}
        <FadeIn className="mt-14">
          <div className="flex items-center gap-4 rounded-3xl bg-white card-line p-6 shadow-card">
            <LogoMark size={52} />
            <div>
              <p className="text-[14.5px] font-extrabold">The SooFluent team</p>
              <p className="mt-0.5 text-[12.5px] font-medium leading-snug text-ink-soft">
                Language learners, teachers and product builders — writing from
                the studio where the app is made.
              </p>
            </div>
          </div>
        </FadeIn>
      </article>

      {/* Next article */}
      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <FadeIn>
          <Link
            to={`/journal/${next.slug}`}
            className="group grid overflow-hidden rounded-[2.2rem] bg-white card-line shadow-card transition-shadow duration-500 hover:shadow-soft sm:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative aspect-[16/9] overflow-hidden sm:aspect-auto">
              <img
                src={next.cover}
                alt={next.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.06]"
              />
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral">Read next</p>
              <h3 className="mt-3 font-display text-[clamp(1.3rem,3vw,1.8rem)] font-semibold leading-snug tracking-tight">
                {next.title}
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-extrabold text-coral">
                Continue reading
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </FadeIn>
        <StoreBadges size="sm" align="center" className="mt-14" />
      </section>
    </>
  );
}
