import { Star } from "lucide-react";
import MarqueeRail from "../components/MarqueeRail";
import { FadeIn } from "../components/Reveal";
import { TESTIMONIALS, type Testimonial } from "../data/content";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex w-[330px] shrink-0 flex-col rounded-3xl bg-white card-line p-6 shadow-card transition-shadow duration-500 hover:shadow-soft sm:w-[380px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" aria-label="5 star review">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className="fill-apricot text-apricot" />
          ))}
        </div>
        <span className="rounded-full bg-peach px-2.5 py-1 text-[10px] font-extrabold text-coral-deep">
          {t.level}
        </span>
      </div>
      <blockquote className="mt-4 flex-1 text-[14.5px] font-medium leading-relaxed text-ink-2">
        “{t.quote}”
      </blockquote>
      <footer className="mt-5 flex items-center gap-3 border-t border-dashed border-ink/10 pt-4">
        <img src={t.img} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
        <div>
          <p className="text-[13.5px] font-extrabold leading-tight">{t.name}</p>
          <p className="text-[11.5px] font-semibold text-ink-soft">{t.place}</p>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const rowA = TESTIMONIALS.slice(0, 5);
  const rowB = TESTIMONIALS.slice(5);

  return (
    <section id="testimonials" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white card-line px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-coral shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-coral to-apricot" />
            Voices from the waitlist
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.05] tracking-tight">
            Learners finding{" "}
            <span className="italic text-coral">their voice.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-relaxed text-ink-2">
            Thousands of learners are already practicing with early versions of
            the method. Here's what they say.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.15} className="mt-14 space-y-5">
        <MarqueeRail duration={62}>
          {rowA.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </MarqueeRail>
        <MarqueeRail duration={74} reverse>
          {rowB.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </MarqueeRail>
      </FadeIn>
    </section>
  );
}
