import { AnimatePresence, motion } from "framer-motion";
import { AudioLines, Mic, Play, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import { WaveBars } from "../components/WaveBars";

const ANSWER = "Actually really good — I finally tried that new café downtown.";

function RespondDemo() {
  const [step, setStep] = useState(0); // 0 idle, 1 question, 2 recording, 3 answering, 4 feedback
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (step === 1) {
      const t = setTimeout(() => setStep(2), 1300);
      return () => clearTimeout(t);
    }
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 2100);
      return () => clearTimeout(t);
    }
    if (step === 3) {
      if (chars < ANSWER.length) {
        const t = setTimeout(() => setChars((c) => c + 1), 26);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setStep(4), 500);
      return () => clearTimeout(t);
    }
  }, [step, chars]);

  const start = () => {
    setChars(0);
    setStep(1);
  };

  return (
    <div className="relative overflow-hidden rounded-[2.2rem] bg-white card-line p-6 shadow-soft sm:p-9">
      <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-peach/50 blur-3xl" />

      {/* conversation area */}
      <div className="relative flex min-h-[260px] flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot text-white">
            <AudioLines size={15} />
          </span>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
            SooFluent · Respond practice
          </p>
        </div>

        {/* question bubble */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-fog/80 px-4 py-3"
            >
              <p className="font-display text-[17px] font-semibold italic">“How was your weekend?”</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* recording state */}
        <AnimatePresence>
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="ml-auto flex items-center gap-3 rounded-2xl rounded-br-md bg-ink px-4 py-3 text-paper"
            >
              <span className="relative grid h-8 w-8 place-items-center">
                <span className="absolute h-8 w-8 rounded-full bg-coral/40 animate-pulse-ring" />
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot">
                  <Mic size={13} className="text-white" />
                </span>
              </span>
              <WaveBars count={16} height={16} barClassName="bg-honey" />
              <span className="text-[10.5px] font-bold text-paper/60">listening…</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* answer typing */}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-r from-coral to-[#ff7a5c] px-4 py-3 text-white shadow-card"
          >
            <p className="font-display text-[16px] font-medium italic leading-snug">
              {ANSWER.slice(0, chars)}
              {step === 3 && <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-white/90 align-middle" />}
            </p>
          </motion.div>
        )}

        {/* feedback */}
        <AnimatePresence>
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="w-fit rounded-2xl bg-[#e7f3eb] px-4 py-3"
            >
              <p className="flex items-center gap-1.5 text-[13px] font-extrabold text-leaf">
                <Sparkles size={14} /> Sounds natural · 92
              </p>
              <p className="mt-1 max-w-xs text-[12px] font-semibold leading-snug text-ink-2">
                Lovely rhythm. That's exactly how a native speaker would answer.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="relative mt-6 flex justify-center">
        {step === 0 && (
          <button
            onClick={start}
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-coral to-apricot px-7 py-3.5 text-sm font-extrabold text-white shadow-card transition-all duration-300 hover:scale-[1.04] hover:shadow-pop"
          >
            <Play size={15} fill="currentColor" />
            Try the moment
          </button>
        )}
        {step > 0 && step < 4 && (
          <span className="inline-flex items-center gap-2 rounded-full bg-fog/70 px-5 py-3 text-[12px] font-bold text-ink-2">
            <span className="h-2 w-2 animate-ping rounded-full bg-coral" />
            Your turn to respond…
          </span>
        )}
        {step === 4 && (
          <div className="flex items-center gap-3">
            <button
              onClick={start}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[13px] font-extrabold text-paper transition-transform hover:scale-[1.03]"
            >
              <RotateCcw size={14} /> Replay
            </button>
            <p className="text-[12px] font-bold text-ink-soft">In the app, it's your real voice.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Blank() {
  return (
    <section id="blank" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-honey/30 blur-3xl" />

      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Stagger gap={0.16}>
          <StaggerItem>
            <Eyebrow>The moment every learner knows</Eyebrow>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-8 font-display text-[clamp(1.4rem,3vw,2rem)] font-medium leading-relaxed text-ink-2">
              You've studied. You understand almost everything.
              <br className="hidden sm:block" />
              Then someone smiles, looks at you and asks —
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 font-display text-[clamp(2.6rem,7vw,5rem)] font-semibold italic leading-[1.08] tracking-tight text-coral">
              “So… what do you
              <br className="sm:hidden" /> think?”
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-7 font-display text-[clamp(1.6rem,4vw,2.6rem)] font-medium tracking-tight">
              and your mind goes{" "}
              <span className="relative inline-block italic">
                <span className="text-ink/[0.16] blur-[1.2px]">blank.</span>
                <span className="absolute -bottom-2 left-0 right-0 border-b-2 border-dashed border-ink/20" />
              </span>
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-8 max-w-2xl text-[16px] font-medium leading-relaxed text-ink-2">
              It's not that you don't know the words. They're just not there{" "}
              <span className="font-bold text-ink">when it's your turn</span>.
              Because most learning trains your eyes and ears — never your reflex to answer.
            </p>
          </StaggerItem>
        </Stagger>

        <FadeIn delay={0.15} className="mt-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink-soft">
            That's why every SooFluent story ends with
          </p>
          <p className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-tight tracking-tight">
            your turn — <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text italic text-transparent">a real question, answered out loud.</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-2xl text-left">
          <RespondDemo />
        </FadeIn>
      </div>
    </section>
  );
}
