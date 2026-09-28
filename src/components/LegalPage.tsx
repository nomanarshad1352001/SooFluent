import { Mail } from "lucide-react";
import { Eyebrow, FadeIn } from "./Reveal";
import type { LegalSection } from "../data/content";
import { scrollToId } from "../lib/scroll";

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  note,
  sections,
  contactEmail,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  note: string;
  sections: LegalSection[];
  contactEmail: string;
}) {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[700px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] font-medium leading-relaxed text-ink-2">
            {intro}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white card-line px-4 py-2 text-[11.5px] font-bold text-ink-soft shadow-card">
            Last updated: {updated}
          </p>
        </FadeIn>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-dashed border-coral/30 bg-peach/30 p-5 text-[13px] font-semibold leading-relaxed text-ink-2 sm:p-6">
            {note}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                On this page
              </p>
              <nav className="mt-4 space-y-1" aria-label="Table of contents">
                {sections.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToId(`legal-${s.id}`, -110)}
                    className="group flex w-full items-baseline gap-2.5 rounded-xl px-3 py-2 text-left text-[13.5px] font-semibold text-ink-2 transition-colors hover:bg-white hover:text-coral"
                  >
                    <span className="font-display text-[11px] font-bold text-ink-soft/70 transition-colors group-hover:text-coral/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="max-w-3xl space-y-5">
            {sections.map((s, i) => (
              <FadeIn key={s.id} y={18}>
                <article
                  id={`legal-${s.id}`}
                  className="scroll-mt-32 rounded-3xl bg-white card-line p-7 shadow-card sm:p-9"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display bg-gradient-to-r from-coral to-apricot bg-clip-text text-xl font-bold text-transparent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-[clamp(1.25rem,2.4vw,1.6rem)] font-semibold tracking-tight">
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-4 space-y-3.5 lg:pl-12">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-[14.5px] font-medium leading-[1.8] text-ink-2">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}

            {/* contact strip */}
            <FadeIn y={18}>
              <a
                href={`mailto:${contactEmail}`}
                className="group flex items-center justify-between gap-4 rounded-3xl bg-ink p-6 text-paper shadow-pop transition-transform duration-300 hover:-translate-y-0.5 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-honey">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold">Questions about this document?</p>
                    <p className="text-[13.5px] font-semibold text-paper/60">
                      Write to <span className="text-honey underline">{contactEmail}</span>
                    </p>
                  </div>
                </div>
                <span className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-paper/40 sm:block">
                  SooFluent Inc.
                </span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
