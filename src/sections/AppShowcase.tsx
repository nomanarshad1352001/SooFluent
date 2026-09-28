import MarqueeRail from "../components/MarqueeRail";
import { Phone, type PhoneVariant } from "../components/Phone";
import { FadeIn } from "../components/Reveal";

const SCREENS: { v: PhoneVariant; label: string }[] = [
  { v: "home", label: "Your daily home" },
  { v: "listen", label: "Immersive player" },
  { v: "shadow", label: "Shadowing studio" },
  { v: "respond", label: "Respond practice" },
  { v: "levels", label: "Levels & progress" },
];

export default function AppShowcase() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-peach/40 blur-3xl" />

      <FadeIn className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p className="inline-flex items-center gap-2 rounded-full bg-white card-line px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-coral shadow-card">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-coral to-apricot" />
          Inside the app
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.05] tracking-tight">
          Take a peek —{" "}
          <span className="italic text-coral">it feels like home.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15.5px] font-medium text-ink-2">
          Five screens. One quiet goal: make practice feel like a place you want
          to come back to.
        </p>
      </FadeIn>

      <FadeIn delay={0.12} className="mt-14">
        <MarqueeRail duration={44} className="pb-4 pt-2">
          {SCREENS.map((s, i) => (
            <figure key={s.v} className="w-[264px] shrink-0">
              <div className={i % 2 === 0 ? "rotate-[-1.2deg]" : "rotate-[1.2deg]"}>
                <Phone variant={s.v} className="origin-top scale-[0.92]" />
              </div>
              <figcaption className="mt-3 text-center text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink-soft">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </MarqueeRail>
      </FadeIn>
    </section>
  );
}
