import { motion, useScroll, useTransform } from "framer-motion";
import anime from "animejs";
import { ChevronDown, Flame, Sparkles, Volume2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { IMG } from "../data/content";
import { scrollToId } from "../lib/scroll";
import ShaderBackground from "../components/ShaderBackground";
import { Phone } from "../components/Phone";
import StoreBadges from "../components/StoreBadges";
import { LAUNCH } from "../config/site";

function SplitChars({ text }: { text: string }) {
  return (
    <span className="hero-word" aria-hidden="true">
      {text.split("").map((c, i) => (
        <span key={i} className="hero-char">
          {c}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });
  const yPhones = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    anime.remove(".hero-char");
    anime({
      targets: ".hero-char",
      translateY: ["115%", "0%"],
      opacity: [0, 1],
      rotate: [5, 0],
      duration: 1050,
      delay: anime.stagger(22, { start: 350 }),
      easing: "easeOutQuint",
    });
    anime.remove(".hero-reveal");
    anime({
      targets: ".hero-reveal",
      translateY: [26, 0],
      opacity: [0, 1],
      duration: 900,
      delay: anime.stagger(110, { start: 1000 }),
      easing: "easeOutCubic",
    });
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-[100svh] overflow-hidden" id="top">
      {/* Three.js silk gradient */}
      <ShaderBackground />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-5 pb-28 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-24">
        {/* ── Copy ── */}
        <motion.div style={{ y: yText, opacity: fade }} className="relative z-10 text-center lg:text-left">
          <div className="hero-reveal opacity-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 card-line px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-2 shadow-card backdrop-blur">
              <span className="flex h-2 w-2">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-coral opacity-60" />
                <span className="h-2 w-2 rounded-full bg-coral" />
              </span>
              {LAUNCH.launchWindow} · iOS & Android
            </span>
          </div>

          <h1
            aria-label="Free your voice. Be SooFluent."
            className="mt-6 font-display text-[clamp(3.1rem,9.5vw,6.2rem)] font-medium leading-[0.98] tracking-tight"
          >
            <SplitChars text="Free" /> <SplitChars text="your" /> <SplitChars text="voice." />
            <br />
            <span className="font-semibold italic">
              <span className="text-ink">Be{" "}</span>
              <span className="bg-gradient-to-r from-coral via-coral to-apricot bg-clip-text text-transparent">
                <SplitChars text="SooFluent." />
              </span>
            </span>
          </h1>

          <p className="hero-reveal mx-auto mt-6 max-w-xl text-[17px] font-medium leading-relaxed text-ink-2 opacity-0 lg:mx-0">
            Train your ear. Practice your pronunciation. Learn to{" "}
            <span className="font-bold text-ink underline decoration-coral decoration-[3px] underline-offset-4">
              respond in English
            </span>{" "}
            — one story at a time.
          </p>

          <div className="hero-reveal mt-9 opacity-0">
            <StoreBadges size="lg" align="center" className="lg:hidden" />
            <StoreBadges size="lg" align="left" className="hidden lg:block" />
          </div>

          <div className="hero-reveal mt-9 flex items-center justify-center gap-4 opacity-0 lg:justify-start">
            <div className="flex -space-x-3">
              {[IMG.avatars.minji, IMG.avatars.lucas, IMG.avatars.amara, IMG.avatars.sofia].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-cream object-cover shadow-card"
                />
              ))}
            </div>
            <p className="max-w-[210px] text-left text-[12.5px] font-semibold leading-snug text-ink-2">
              Join thousands of early learners finding their voice
            </p>
          </div>
        </motion.div>

        {/* ── Phone cluster ── */}
        <motion.div style={{ y: yPhones }} className="relative z-10">
          <div className="relative mx-auto w-fit">
            {/* decorative dashed orbit */}
            <div className="pointer-events-none absolute -inset-12 hidden rounded-full border border-dashed border-ink/12 lg:block animate-spin-slow" style={{ animationDuration: "40s" }} />

            {/* back phone */}
            <div className="absolute -right-3 top-14 z-0 hidden origin-bottom rotate-[7deg] opacity-95 sm:block lg:right-[-4.5rem]">
              <Phone variant="respond" className="scale-[0.82] origin-top" />
            </div>

            {/* main phone */}
            <div className="hero-reveal relative z-10 -rotate-[3.5deg] opacity-0">
              <Phone variant="listen" />
            </div>

            {/* floating chips */}
            <div className="hero-reveal absolute -left-4 top-24 z-20 opacity-0 sm:-left-16 lg:-left-24">
              <div className="animate-float rounded-2xl bg-white card-line p-3.5 pr-4 shadow-pop">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sky/15 text-sky">
                    <Volume2 size={16} />
                  </span>
                  <div>
                    <p className="text-[13px] font-extrabold leading-none">beautiful</p>
                    <p className="mt-1 text-[10.5px] font-semibold text-ink-soft">/ˈbjuː·tɪ·fəl/ — tap to hear</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-reveal absolute -right-2 bottom-28 z-20 opacity-0 sm:-right-8 lg:-right-14">
              <div className="animate-float-late rounded-2xl bg-ink p-3.5 text-paper shadow-pop">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/12">
                    <Sparkles size={15} className="text-honey" />
                  </span>
                  <div>
                    <p className="text-[13px] font-extrabold leading-none">Sounds natural · 92</p>
                    <p className="mt-1 text-[10.5px] font-semibold text-paper/60">AI pronunciation feedback</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-reveal absolute -left-2 bottom-8 z-20 opacity-0 sm:left-6 lg:left-0">
              <div className="animate-float rounded-full bg-white card-line py-2 pl-2.5 pr-4 shadow-pop" style={{ animationDelay: "1.4s" }}>
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-peach text-coral-deep">
                    <Flame size={14} fill="currentColor" />
                  </span>
                  <p className="text-[12px] font-extrabold">7-day streak — keep going!</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <button
        onClick={() => scrollToId("intro")}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll to content"
      >
        <span className="flex flex-col items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-ink-soft">
          Scroll
          <ChevronDown size={16} className="animate-bounce text-coral" />
        </span>
      </button>
    </section>
  );
}
