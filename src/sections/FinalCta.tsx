import { openNotifyModal } from "../config/site";
import { FadeIn } from "../components/Reveal";
import StoreBadges from "../components/StoreBadges";
import WaveformLottie from "../components/WaveformLottie";
import { LogoMark } from "../components/Logo";

export default function FinalCta() {
  return (
    <section id="download" className="relative scroll-mt-20 pb-28 pt-8 sm:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.6rem] p-[2px]">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#ff5a3c33,#ffb25e22,#ff5a3c44,#ffd9a033,#ff5a3c33)] animate-spin-slow" style={{ animationDuration: "18s" }} />
            <div className="relative overflow-hidden rounded-[2.55rem] bg-paper px-6 py-16 text-center sm:px-12 sm:py-24">
              {/* ambient glows */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-peach/70 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-honey/60 blur-3xl" />

              <div className="pointer-events-none absolute -left-10 bottom-10 hidden opacity-15 lg:block">
                <div className="-rotate-12">
                  <LogoMark size={110} />
                </div>
              </div>
              <div className="pointer-events-none absolute -right-8 top-8 hidden opacity-15 lg:block">
                <div className="rotate-12">
                  <LogoMark size={90} />
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-center">
                  <WaveformLottie />
                </div>

                <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.4rem,6.5vw,4.6rem)] font-medium leading-[1.03] tracking-tight">
                  Ready to become{" "}
                  <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text font-semibold italic text-transparent">
                    SooFluent?
                  </span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[16.5px] font-medium leading-relaxed text-ink-2">
                  Your first story is waiting. Press play, say it back, and answer —
                  that's all it takes to start freeing your voice.
                </p>

                <div className="mt-10">
                  <StoreBadges size="lg" align="center" />
                </div>

                <button
                  onClick={openNotifyModal}
                  className="mt-6 text-sm font-bold text-coral underline decoration-coral/40 decoration-2 underline-offset-4 transition-colors hover:decoration-coral"
                >
                  or join the waitlist to get notified at launch
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
