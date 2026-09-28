import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Check, Crown, HeartHandshake, Infinity as InfinityIcon, Minus, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import StoreBadges from "../components/StoreBadges";
import { openNotifyModal } from "../config/site";
import { COMPARISON, PLANS } from "../data/content";

const PRICING_FAQ = [
  {
    q: "When do I get charged?",
    a: "Never before launch. Joining the waitlist costs nothing — when the app goes live, subscriptions are billed by the App Store or Google Play through your store account.",
  },
  {
    q: "Can I really use SooFluent for free?",
    a: "Yes. The free tier stays free: a rotating story each week, full listen & shadow practice, and a few AI feedback checks a day. Premium simply removes the limits.",
  },
  {
    q: "What does 'Founding Member' mean?",
    a: "A one-time payment offered to our waitlist before launch: lifetime Premium, a founding badge, your name on the in-app credits wall, and a vote on future story packs. It won't be offered again after launch.",
  },
  {
    q: "Can I cancel a subscription?",
    a: "Anytime, in your App Store or Google Play subscription settings — no emails, no dark patterns. You keep access until the end of the paid period.",
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[780px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,4.6rem)] font-medium leading-[1.04] tracking-tight">
            Simple pricing.{" "}
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text italic text-transparent">
              Serious progress.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[16px] font-medium leading-relaxed text-ink-2">
            These are our launch prices — they go live with the app in 2026.
            Until then, everything is free for waitlist members to preview.
          </p>
        </FadeIn>

        {/* Toggle */}
        <FadeIn delay={0.1} className="mt-10 flex justify-center">
          <div className="relative inline-flex items-center rounded-full bg-white card-line p-1.5 shadow-card">
            {[
              { label: "Monthly", v: false },
              { label: "Yearly — save 38%", v: true },
            ].map((o) => (
              <button
                key={o.label}
                onClick={() => setYearly(o.v)}
                className={`relative rounded-full px-5 py-2.5 text-[13px] font-extrabold transition-colors duration-300 ${
                  yearly === o.v ? "text-white" : "text-ink-2 hover:text-ink"
                }`}
              >
                {yearly === o.v && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  />
                )}
                <span className="relative">{o.label}</span>
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <Stagger className="grid gap-5 lg:grid-cols-3" gap={0.1}>
          {PLANS.map((p) => {
            const price = p.monthly === null ? null : yearly ? p.yearly : p.monthly;
            return (
              <StaggerItem key={p.id} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-[2.2rem] p-8 transition-all duration-500 hover:-translate-y-2 ${
                    p.highlight
                      ? "bg-ink text-paper shadow-pop"
                      : "bg-white card-line shadow-card hover:shadow-soft"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-coral to-apricot px-4 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-white shadow-card">
                      Most loved
                    </span>
                  )}
                  {p.id === "founder" && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-dashed border-coral/50 bg-peach px-4 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-coral-deep shadow-card">
                      Waitlist exclusive
                    </span>
                  )}

                  <div className="flex items-center gap-2.5">
                    <span className={`grid h-9 w-9 place-items-center rounded-xl ${p.highlight ? "bg-white/12 text-honey" : "bg-peach text-coral-deep"}`}>
                      {p.id === "free" ? <HeartHandshake size={16} /> : p.id === "premium" ? <Sparkles size={16} /> : <Crown size={16} />}
                    </span>
                    <h2 className="font-display text-2xl font-semibold">{p.name}</h2>
                  </div>
                  <p className={`mt-1.5 text-[13px] font-semibold ${p.highlight ? "text-paper/60" : "text-ink-soft"}`}>{p.tagline}</p>

                  <div className="mt-7 flex items-end gap-2">
                    {price === null ? (
                      <>
                        <InfinityIcon size={34} className="mb-1 text-coral" strokeWidth={2.4} />
                        <span className="font-display text-3xl font-bold leading-none">once</span>
                      </>
                    ) : (
                      <>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={price}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                            className="font-display text-5xl font-bold leading-none tracking-tight"
                          >
                            ${price}
                          </motion.span>
                        </AnimatePresence>
                        <span className={`text-[13px] font-bold leading-tight ${p.highlight ? "text-paper/60" : "text-ink-soft"}`}>
                          / month
                          {yearly && price !== 0 && <span className="block text-[11px]">billed yearly</span>}
                        </span>
                      </>
                    )}
                  </div>
                  {p.note && (
                    <p className={`mt-2 text-[12px] font-bold ${p.highlight ? "text-honey" : "text-coral"}`}>{p.note}</p>
                  )}
                  {p.id === "founder" && (
                    <p className="mt-2 font-display text-lg font-semibold text-ink">
                      Est. $149 <span className="text-[12px] font-sans font-bold text-ink-soft">one-time, at launch</span>
                    </p>
                  )}

                  <ul className="mt-7 flex-1 space-y-3">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-[13.5px] font-semibold">
                        <Check size={15} strokeWidth={3} className={`mt-0.5 shrink-0 ${p.highlight ? "text-honey" : "text-coral"}`} />
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={openNotifyModal}
                    className={`mt-8 w-full rounded-2xl py-4 text-sm font-extrabold transition-all duration-300 hover:scale-[1.02] ${
                      p.highlight
                        ? "bg-gradient-to-r from-coral to-apricot text-white shadow-card"
                        : "bg-ink text-paper shadow-card"
                    }`}
                  >
                    {p.cta}
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          {["Billed securely via App Store & Google Play", "Cancel anytime in store settings", "No card needed for the waitlist"].map((t) => (
            <span key={t} className="inline-flex items-center gap-2 text-[12.5px] font-bold text-ink-2">
              <ShieldCheck size={14} className="text-leaf" /> {t}
            </span>
          ))}
        </FadeIn>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <FadeIn className="text-center">
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-medium tracking-tight">
            Compare the plans
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10 overflow-hidden rounded-[2rem] bg-white card-line shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-[13.5px]">
              <thead>
                <tr className="border-b border-ink/8">
                  <th className="p-5 font-display text-base font-semibold">What you get</th>
                  <th className="p-5 text-center font-display text-base font-semibold">Free</th>
                  <th className="p-5 text-center font-display text-base font-semibold text-coral">Premium</th>
                  <th className="p-5 text-center font-display text-base font-semibold">Founding</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-dashed border-ink/8 last:border-0 transition-colors hover:bg-cream/60">
                    <td className="p-5 font-bold">{row.feature}</td>
                    {[row.free, row.premium, row.founder].map((v, i) => (
                      <td key={i} className="p-5 text-center">
                        {typeof v === "string" ? (
                          <span className="font-semibold">{v}</span>
                        ) : v ? (
                          <BadgeCheck size={18} className={`mx-auto ${i === 1 ? "text-coral" : "text-leaf"}`} />
                        ) : (
                          <Minus size={16} className="mx-auto text-ink/25" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-3xl px-5 pb-8 sm:px-8">
        <FadeIn>
          <h2 className="text-center font-display text-[clamp(1.9rem,4.5vw,2.8rem)] font-medium tracking-tight">
            Pricing questions
          </h2>
          <div className="mt-10 space-y-3">
            {PRICING_FAQ.map((f) => (
              <details
                key={f.q}
                className="group overflow-hidden rounded-2xl bg-white card-line shadow-card open:shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-[14.5px] font-extrabold">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fog text-ink-2 transition-transform duration-500 group-open:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 text-[13.5px] font-medium leading-relaxed text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 pt-12 text-center sm:px-8">
        <FadeIn>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-medium leading-tight tracking-tight">
            Free your voice.{" "}
            <span className="italic text-coral">Keep your wallet calm.</span>
          </h2>
          <StoreBadges size="lg" align="center" className="mt-9" />
        </FadeIn>
      </section>
    </>
  );
}
