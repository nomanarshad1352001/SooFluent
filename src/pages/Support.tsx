import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  Loader2,
  Mail,
  Mic,
  Rocket,
  Search,
  Send,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { Eyebrow, FadeIn, Stagger, StaggerItem } from "../components/Reveal";
import { CONTACT } from "../config/site";
import { FAQ_GROUPS } from "../data/content";
import { scrollToId } from "../lib/scroll";

const GROUP_ICONS: Record<string, typeof Rocket> = {
  "getting-started": Rocket,
  account: UserRound,
  subscription: CreditCard,
  recording: Mic,
  technical: Wrench,
};

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl bg-white card-line shadow-card transition-shadow hover:shadow-soft">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-[15px] font-extrabold leading-snug">{q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-500 ${
            open ? "rotate-180 bg-coral text-white" : "bg-fog text-ink-2"
          }`}
        >
          <ChevronDown size={15} />
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-[14px] font-medium leading-relaxed text-ink-2">{a}</p>
      </motion.div>
    </div>
  );
}

function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("_honey")) return; // bot trap
    setState("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.support}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          _subject: `SooFluent support — ${fd.get("topic")}`,
          name: fd.get("name"),
          email: fd.get("email"),
          topic: fd.get("topic"),
          message: fd.get("message"),
          source: "soofluent.com support page",
        }),
      });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="flex h-full min-h-[380px] flex-col items-center justify-center rounded-[2rem] bg-white card-line p-8 text-center shadow-soft">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[#e7f3eb] text-leaf">
          <CheckCircle2 size={30} strokeWidth={2.2} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm font-medium leading-relaxed text-ink-2">
          Thanks for reaching out — a real human (not a bot) will reply to your
          email within one business day.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 rounded-full bg-ink px-6 py-3 text-[13px] font-bold text-paper transition-transform hover:scale-[1.03]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white card-line p-7 shadow-soft sm:p-8"
      aria-label="Contact support"
    >
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-wider text-ink-soft">Name</span>
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-2xl border border-ink/10 bg-cream/50 px-4 py-3 text-sm font-medium outline-none transition-shadow focus:ring-2 focus:ring-coral/40"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-wider text-ink-soft">Email</span>
          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-ink/10 bg-cream/50 px-4 py-3 text-sm font-medium outline-none transition-shadow focus:ring-2 focus:ring-coral/40"
          />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-wider text-ink-soft">Topic</span>
        <select
          name="topic"
          className="w-full appearance-none rounded-2xl border border-ink/10 bg-cream/50 px-4 py-3 text-sm font-medium outline-none transition-shadow focus:ring-2 focus:ring-coral/40"
        >
          {["General question", "Account", "Subscription & billing", "Recording / microphone", "Pronunciation feedback", "Technical issue", "Something else"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-wider text-ink-soft">How can we help?</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us what's happening — include your device and app version if it's a technical issue."
          className="w-full resize-none rounded-2xl border border-ink/10 bg-cream/50 px-4 py-3 text-sm font-medium outline-none transition-shadow focus:ring-2 focus:ring-coral/40"
        />
      </label>
      <button
        disabled={state === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-coral to-apricot px-6 py-4 text-sm font-extrabold text-white shadow-card transition-all hover:brightness-105 disabled:opacity-70"
      >
        {state === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
      {state === "error" && (
        <p className="mt-3 text-center text-xs font-semibold text-coral-deep">
          Something went wrong — please email us directly at{" "}
          <a href={`mailto:${CONTACT.support}`} className="underline">{CONTACT.support}</a>
        </p>
      )}
    </form>
  );
}

export default function Support() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return FAQ_GROUPS.flatMap((g) =>
      g.items
        .filter((it) => it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q))
        .map((it) => ({ ...it, group: g.title }))
    );
  }, [query]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
        <FadeIn className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Eyebrow>Support</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.4rem,6.5vw,4.2rem)] font-medium leading-[1.05] tracking-tight">
            We're here to help you{" "}
            <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text italic text-transparent">
              keep talking.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] font-medium leading-relaxed text-ink-2">
            Answers, account help, microphone wizardry and a friendly human when
            you need one.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-9 max-w-lg">
            <Search size={17} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-ink-soft" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search answers — try “microphone” or “cancel”"
              aria-label="Search help articles"
              className="w-full rounded-full border border-ink/10 bg-white py-4 pl-12 pr-12 text-[14.5px] font-medium shadow-card outline-none transition-shadow focus:ring-2 focus:ring-coral/40"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-fog text-ink-2"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </FadeIn>
      </section>

      {/* Search results */}
      <AnimatePresence mode="wait">
        {results ? (
          <motion.section
            key="results"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl px-5 pb-24 sm:px-8"
          >
            <p className="mb-5 text-[13px] font-bold text-ink-soft">
              {results.length} {results.length === 1 ? "answer" : "answers"} for “{query.trim()}”
            </p>
            <div className="space-y-3">
              {results.map((r) => (
                <div key={r.q}>
                  <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-coral">{r.group}</p>
                  <Accordion q={r.q} a={r.a} />
                </div>
              ))}
              {results.length === 0 && (
                <div className="rounded-3xl bg-white card-line p-10 text-center shadow-card">
                  <p className="font-display text-xl font-semibold">No matches yet</p>
                  <p className="mx-auto mt-2 max-w-sm text-sm font-medium text-ink-2">
                    Try different words — or ask us directly below. We read everything.
                  </p>
                </div>
              )}
            </div>
          </motion.section>
        ) : (
          <motion.div
            key="browse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category cards */}
            <section className="mx-auto max-w-7xl px-5 sm:px-8">
              <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" gap={0.07}>
                {FAQ_GROUPS.map((g) => {
                  const Icon = GROUP_ICONS[g.id] ?? Rocket;
                  return (
                    <StaggerItem key={g.id}>
                      <button
                        onClick={() => scrollToId(`faq-${g.id}`)}
                        className="group h-full w-full rounded-3xl bg-white card-line p-6 text-left shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
                      >
                        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-peach text-coral-deep transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <Icon size={19} strokeWidth={2.2} />
                        </span>
                        <p className="mt-5 text-[15px] font-extrabold leading-tight">{g.title}</p>
                        <p className="mt-1.5 text-[12px] font-medium leading-snug text-ink-soft">{g.blurb}</p>
                        <p className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-extrabold text-coral">
                          {g.items.length} answers
                          <ChevronDown size={13} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                        </p>
                      </button>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </section>

            {/* FAQ groups */}
            <section className="mx-auto max-w-3xl space-y-14 px-5 pb-4 pt-20 sm:px-8">
              {FAQ_GROUPS.map((g) => (
                <FadeIn key={g.id}>
                  <div id={`faq-${g.id}`} className="scroll-mt-28">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-coral to-apricot" />
                      <h2 className="font-display text-2xl font-semibold sm:text-[1.7rem]">{g.title}</h2>
                    </div>
                    <div className="space-y-3">
                      {g.items.map((it) => (
                        <Accordion key={it.q} q={it.q} a={it.a} />
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <Eyebrow>Contact support</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.08] tracking-tight">
              Still stuck?{" "}
              <span className="italic text-coral">Talk to a human.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] font-medium leading-relaxed text-ink-2">
              Send us a message and we'll get you back to practicing. For technical
              issues, including your device model and app version helps us help you faster.
            </p>

            <div className="mt-8 space-y-3.5">
              <a
                href={`mailto:${CONTACT.support}`}
                className="group flex items-center gap-4 rounded-2xl bg-white card-line p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-peach text-coral-deep">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-[14px] font-extrabold">Email us anytime</p>
                  <p className="text-[13px] font-semibold text-coral">{CONTACT.support}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-white card-line p-5 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky/15 text-sky">
                  <Clock3 size={18} />
                </span>
                <div>
                  <p className="text-[14px] font-extrabold">Response time</p>
                  <p className="text-[12.5px] font-semibold text-ink-soft">Usually within one business day · Mon–Fri</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white card-line p-5 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e7f3eb] text-leaf">
                  <Activity size={18} />
                </span>
                <div>
                  <p className="flex items-center gap-2 text-[14px] font-extrabold">
                    System status
                    <span className="relative flex h-2 w-2">
                      <span className="absolute h-2 w-2 animate-ping rounded-full bg-leaf opacity-60" />
                      <span className="h-2 w-2 rounded-full bg-leaf" />
                    </span>
                  </p>
                  <p className="text-[12.5px] font-semibold text-ink-soft">All systems operational · app launching 2026</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
