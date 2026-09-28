import { AnimatePresence, motion } from "framer-motion";
import { BellRing, CheckCircle2, Loader2, X } from "lucide-react";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { CONTACT } from "../config/site";
import { lockScroll } from "../lib/scroll";
import { LogoMark } from "./Logo";

/**
 * Global "Coming soon" waitlist modal.
 * Opened by dispatching the `soofluent:notify` event (see openNotifyModal).
 * Posts to FormSubmit (serverless form backend) — first ever submission
 * triggers a one-time activation email to the inbox.
 */
export default function NotifyModal() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("soofluent:notify", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("soofluent:notify", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    lockScroll(open);
    return () => {
      document.body.style.overflow = "";
      lockScroll(false);
    };
  }, [open]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.support}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          _subject: "SooFluent waitlist — notify me at launch",
          name: fd.get("name"),
          email: fd.get("email"),
          source: "soofluent.com waitlist",
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setState("done");
    } catch {
      setState("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            aria-label="Close"
            className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Join the SooFluent waitlist"
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-paper p-7 shadow-pop"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-coral/25 to-apricot/25 blur-2xl" />
            <button
              onClick={close}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-fog/70 text-ink-2 transition-colors hover:bg-fog"
              aria-label="Close dialog"
            >
              <X size={16} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <LogoMark size={56} />
                <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot text-white shadow-card">
                  <BellRing size={12} strokeWidth={2.6} />
                </span>
              </div>

              {state === "done" ? (
                <>
                  <span className="mt-5 grid h-14 w-14 place-items-center rounded-full bg-[#e7f3eb] text-leaf">
                    <CheckCircle2 size={28} strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold">You're on the list!</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">
                    We'll email you the moment SooFluent lands on the App Store
                    and Google Play. Your voice is about to be free.
                  </p>
                  <button
                    onClick={close}
                    className="mt-6 rounded-full bg-ink px-7 py-3 text-sm font-bold text-paper transition-transform hover:scale-[1.03]"
                  >
                    Lovely — see you at launch
                  </button>
                </>
              ) : (
                <>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-snug">
                    Be first to free your voice.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">
                    SooFluent is <span className="font-bold text-coral">coming soon</span> to the App
                    Store and Google Play. Leave your email and we'll tell you the second it's live.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 w-full space-y-3">
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your first name"
                      className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-medium outline-none transition-shadow focus:ring-2 focus:ring-coral/40"
                    />
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-medium outline-none transition-shadow focus:ring-2 focus:ring-coral/40"
                    />
                    <button
                      disabled={state === "sending"}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-coral to-apricot px-6 py-3.5 text-sm font-extrabold text-white shadow-card transition-all hover:brightness-105 disabled:opacity-70"
                    >
                      {state === "sending" && <Loader2 size={16} className="animate-spin" />}
                      {state === "sending" ? "Saving your spot…" : "Notify me at launch"}
                    </button>
                    {state === "error" && (
                      <p className="text-xs font-semibold text-coral-deep">
                        Something went sideways — please email us directly at{" "}
                        <a href={`mailto:${CONTACT.support}?subject=Notify%20me%20at%20launch`} className="underline">
                          {CONTACT.support}
                        </a>
                      </p>
                    )}
                  </form>

                  <p className="mt-4 text-[11px] font-medium text-ink-soft">
                    One email at launch. No spam, ever. Unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
