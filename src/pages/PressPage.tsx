import { Check, Copy, Mail, Palette, Type } from "lucide-react";
import { useState } from "react";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import { LogoMark, Wordmark } from "../components/Logo";
import { Phone } from "../components/Phone";
import { CONTACT } from "../config/site";
import { BRAND_COLORS, PRESS_FACTS } from "../data/content";

function ColorSwatch({ name, hex }: { name: string; hex: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      onClick={copy}
      className="group relative overflow-hidden rounded-3xl card-line shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
      aria-label={`Copy ${name} ${hex}`}
    >
      <div className="h-28" style={{ background: hex }} />
      <div className="flex items-center justify-between bg-white px-4 py-3">
        <div className="text-left">
          <p className="text-[13px] font-extrabold">{name}</p>
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink-soft">{hex}</p>
        </div>
        <span className={`grid h-8 w-8 place-items-center rounded-full transition-colors ${copied ? "bg-[#e7f3eb] text-leaf" : "bg-fog text-ink-2"}`}>
          {copied ? <Check size={13} /> : <Copy size={13} />}
        </span>
      </div>
    </button>
  );
}

export default function PressPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[740px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Eyebrow>Press & brand</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,4.4rem)] font-medium leading-[1.04] tracking-tight">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text italic text-transparent">
              tell our story.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[16px] font-medium leading-relaxed text-ink-2">
            Boilerplate, brand assets and screenshots. For interviews or
            features, we're quick on email.
          </p>
          <a
            href={`mailto:${CONTACT.hello}?subject=Press%20inquiry%20—%20SooFluent`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-extrabold text-paper shadow-card transition-transform hover:scale-[1.03]"
          >
            <Mail size={15} /> {CONTACT.hello}
          </a>
        </FadeIn>
      </section>

      {/* Boilerplate + facts */}
      <section className="mx-auto max-w-7xl gap-6 px-5 pb-10 sm:px-8 lg:grid lg:grid-cols-[1.15fr_0.85fr]">
        <FadeIn>
          <div className="h-full rounded-[2rem] bg-white card-line p-8 shadow-card sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">Boilerplate</p>
            <div className="mt-5 space-y-4">
              <p className="text-[15px] font-medium leading-[1.85] text-ink-2">
                SooFluent is an English-learning app that helps learners move from understanding English
                to actually speaking it. Built around short, real-life stories, every session follows
                three steps — Listen, Shadow, Respond — combining natural listening practice, shadowing
                with word-by-word pronunciation support, and AI-powered feedback on real spoken answers.
              </p>
              <p className="text-[15px] font-medium leading-[1.85] text-ink-2">
                The app was created by SooFluent Inc. on a simple belief: fluency isn't built by
                memorizing more English, but by hearing it again and again, saying it out loud, and
                practicing how to respond in real situations. SooFluent launches on iOS and Android in 2026.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="h-full rounded-[2rem] bg-ink p-8 shadow-pop sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-paper/50">Fast facts</p>
            <dl className="mt-5 space-y-4">
              {PRESS_FACTS.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3.5 last:border-0">
                  <dt className="text-[12px] font-bold uppercase tracking-wider text-paper/50">{f.k}</dt>
                  <dd className="text-right text-[13.5px] font-extrabold text-paper">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </section>

      {/* Logo kit */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <FadeIn>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-peach text-coral-deep"><Type size={17} /></span>
            <h2 className="font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-semibold tracking-tight">Logo & wordmark</h2>
          </div>
        </FadeIn>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
          <StaggerItem>
            <div className="grid h-44 place-items-center rounded-3xl bg-cream card-line shadow-card">
              <span className="flex items-center gap-2.5"><LogoMark size={44} /><Wordmark /></span>
            </div>
            <p className="mt-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-ink-soft">Primary · on ivory</p>
          </StaggerItem>
          <StaggerItem>
            <div className="grid h-44 place-items-center rounded-3xl bg-ink shadow-card">
              <span className="flex items-center gap-2.5"><LogoMark size={44} /><Wordmark dark /></span>
            </div>
            <p className="mt-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-ink-soft">Reversed · on ink</p>
          </StaggerItem>
          <StaggerItem>
            <div className="grid h-44 place-items-center rounded-3xl bg-gradient-to-br from-coral to-apricot shadow-card">
              <svg width="54" height="54" viewBox="0 0 64 64"><rect width="64" height="64" rx="17" fill="#FFFDF8" opacity="0.16"/><g fill="#FFFDF8"><rect x="14.5" y="24" width="5.5" height="16" rx="2.75"/><rect x="24" y="17" width="5.5" height="30" rx="2.75"/><rect x="33.5" y="27" width="5.5" height="10" rx="2.75"/><rect x="43" y="20.5" width="5.5" height="23" rx="2.75"/></g></svg>
            </div>
            <p className="mt-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-ink-soft">App icon · gradient</p>
          </StaggerItem>
          <StaggerItem>
            <div className="grid h-44 place-items-center rounded-3xl bg-peach card-line shadow-card">
              <span className="font-display text-3xl font-semibold italic text-ink">Free your voice.</span>
            </div>
            <p className="mt-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-ink-soft">Tagline lockup</p>
          </StaggerItem>
        </Stagger>
      </section>

      {/* Colors */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <FadeIn>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-peach text-coral-deep"><Palette size={17} /></span>
            <h2 className="font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-semibold tracking-tight">Brand colors</h2>
          </div>
          <p className="mt-2 text-sm font-semibold text-ink-soft">Tap any swatch to copy its hex.</p>
        </FadeIn>
        <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" gap={0.07}>
          {BRAND_COLORS.map((c) => (
            <StaggerItem key={c.hex}>
              <ColorSwatch name={c.name} hex={c.hex} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Screenshots */}
      <section className="mx-auto max-w-7xl px-5 py-12 pb-28 sm:px-8">
        <FadeIn className="text-center">
          <h2 className="font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-semibold tracking-tight">Product visuals</h2>
          <p className="mt-2 text-sm font-semibold text-ink-soft">The app's three core screens — right from the product story.</p>
        </FadeIn>
        <FadeIn delay={0.12} className="mt-12">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-12">
          {(["listen", "shadow", "respond"] as const).map((v, i) => (
            <div key={v} className={i === 1 ? "sm:translate-y-8" : ""}>
              <div className="mx-auto w-fit">
                <Phone variant={v} className={`${i === 0 ? "-rotate-2" : i === 2 ? "rotate-2" : ""} origin-top scale-[0.94]`} />
              </div>
              <p className="mt-5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                {v === "listen" ? "01 · Listen" : v === "shadow" ? "02 · Shadow" : "03 · Respond"}
              </p>
            </div>
          ))}
        </div>
        </FadeIn>
      </section>
    </>
  );
}
