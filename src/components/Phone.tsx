import type { ComponentType } from "react";
import {
  AudioLines,
  ChevronLeft,
  ChevronRight,
  Compass,
  Flame,
  Heart,
  Home,
  Lock,
  Mic,
  Play,
  RotateCcw,
  RotateCw,
  Share2,
  Signal,
  SkipBack,
  SkipForward,
  Sparkles,
  UserRound,
  Volume2,
  Wifi,
  X,
  BatteryFull,
} from "lucide-react";
import { IMG, KARAOKE_SENTENCE } from "../data/content";
import { WaveBars } from "./WaveBars";

export type PhoneVariant = "home" | "listen" | "shadow" | "respond" | "levels";

/* ── Chrome ─────────────────────────────────────────────────── */
function StatusBar() {
  return (
    <>
      <div className="absolute left-1/2 top-3 z-30 h-[21px] w-[86px] -translate-x-1/2 rounded-full bg-[#18120c]" />
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-7 pt-3.5 text-ink">
        <span className="text-[11px] font-bold tracking-wide">9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={13} strokeWidth={2.5} />
          <Wifi size={13} strokeWidth={2.5} />
          <BatteryFull size={16} strokeWidth={2.2} />
        </div>
      </div>
    </>
  );
}

function ScreenCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-white card-line p-3 shadow-[0_6px_18px_-10px_rgb(120_66_30/0.25)] ${className}`}>
      {children}
    </div>
  );
}

const Chip = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${className}`}>
    {children}
  </span>
);

/* ── Screens ────────────────────────────────────────────────── */
function HomeScreen() {
  return (
    <div className="flex h-full flex-col gap-3 px-4 pt-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={IMG.avatars.minji} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white" />
          <div>
            <p className="text-[10px] font-medium text-ink-soft">Good evening,</p>
            <p className="text-[13px] font-extrabold leading-tight">Minji</p>
          </div>
        </div>
        <Chip className="bg-peach text-coral-deep">
          <Flame size={10} strokeWidth={2.6} /> 7 day streak
        </Chip>
      </div>

      {/* Continue card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral to-apricot p-3.5 text-white shadow-card">
        <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/15" />
        <div className="absolute -right-2 bottom-6 h-10 w-10 rounded-full bg-white/10" />
        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/80">Continue listening</p>
        <p className="mt-1 font-display text-[16px] font-semibold leading-tight">The Mystery Package</p>
        <div className="mt-2.5 flex items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-coral shadow-card">
            <Play size={13} fill="currentColor" />
          </span>
          <div className="h-1 flex-1 rounded-full bg-white/30">
            <div className="h-full w-[65%] rounded-full bg-white" />
          </div>
          <span className="text-[9px] font-bold">65%</span>
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] font-extrabold">New this week</p>
          <Chip className="bg-[#e7f3eb] text-leaf">A2</Chip>
        </div>
        {[
          { t: "Ordering coffee", d: "3 min", img: IMG.lifestyle.icedCoffee },
          { t: "Meeting a neighbor", d: "4 min", img: IMG.lifestyle.cityTalk },
          { t: "A rainy morning", d: "3 min", img: IMG.lifestyle.windowSeat },
        ].map((s) => (
          <div key={s.t} className="mb-2 flex items-center gap-2.5 rounded-2xl bg-white p-2 card-line">
            <img src={s.img} alt="" className="h-10 w-10 rounded-xl object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-bold">{s.t}</p>
              <p className="text-[9px] font-medium text-ink-soft">{s.d} · Everyday English</p>
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-peach text-coral">
              <Play size={11} fill="currentColor" />
            </span>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div className="mt-auto -mx-4 flex items-center justify-around border-t border-ink/8 bg-paper/90 px-4 pb-5 pt-2.5 backdrop-blur">
        <Home size={17} className="text-coral" strokeWidth={2.4} />
        <Compass size={17} className="text-ink/35" />
        <span className="-mt-4 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot text-white shadow-pop">
          <AudioLines size={17} strokeWidth={2.4} />
        </span>
        <Mic size={17} className="text-ink/35" />
        <UserRound size={17} className="text-ink/35" />
      </div>
    </div>
  );
}

function ListenScreen() {
  return (
    <div className="flex h-full flex-col gap-3 px-4 pt-14">
      <div className="flex items-center justify-between">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white card-line">
          <ChevronLeft size={15} />
        </span>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-soft">Now listening</p>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white card-line">
          <Share2 size={13} />
        </span>
      </div>

      <div className="relative h-[132px] overflow-hidden rounded-3xl shadow-card">
        <img src={IMG.lifestyle.twoFriends} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="absolute left-2.5 top-2.5 flex gap-1.5">
          <Chip className="bg-white/90 text-ink">A2</Chip>
          <Chip className="bg-white/25 text-white backdrop-blur">3 min</Chip>
        </div>
        <div className="absolute bottom-2.5 left-3 right-3">
          <p className="font-display text-[15px] font-semibold text-white">Coffee Shop Secrets</p>
          <p className="text-[9px] font-medium text-white/80">A story about small kindness</p>
        </div>
      </div>

      <ScreenCard>
        <p className="text-[10px] leading-relaxed text-ink-2">
          “She smelled the fresh{" "}
          <span className="rounded bg-peach px-1 font-semibold text-coral-deep">coffee</span>{" "}
          before she even opened the door…”
        </p>
      </ScreenCard>

      <ScreenCard className="!p-3.5">
        <WaveBars count={26} height={24} />
        <div className="relative mt-2.5 h-1.5 rounded-full bg-fog">
          <div className="absolute left-0 top-0 h-full w-[62%] rounded-full bg-gradient-to-r from-coral to-apricot" />
          <div className="absolute left-[62%] top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-card ring-[3px] ring-coral/30" />
        </div>
        <div className="mt-1 flex justify-between text-[9px] font-bold text-ink-soft">
          <span>1:12</span>
          <Chip className="bg-fog text-ink-2 !text-[8px]">1×</Chip>
          <span>2:03</span>
        </div>
        <div className="mt-2 flex items-center justify-center gap-5">
          <RotateCcw size={16} className="text-ink-2" />
          <SkipBack size={16} className="text-ink-2" />
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot text-white shadow-pop">
            <Play size={16} fill="currentColor" className="ml-0.5" />
          </span>
          <SkipForward size={16} className="text-ink-2" />
          <RotateCw size={16} className="text-ink-2" />
        </div>
      </ScreenCard>

      <div className="mt-auto flex items-center justify-between pb-3">
        <Heart size={15} className="text-coral" fill="currentColor" />
        <p className="text-[9px] font-semibold text-ink-soft">Sentence 2 of 14 · follow along</p>
        <Volume2 size={15} className="text-ink-2" />
      </div>
    </div>
  );
}

function ShadowScreen() {
  const total = KARAOKE_SENTENCE.length;
  return (
    <div className="flex h-full flex-col gap-3 px-4 pt-14">
      <div className="flex items-center justify-between">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white card-line">
          <X size={14} />
        </span>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-soft">Shadowing</p>
        <Chip className="bg-[#e7f3eb] text-leaf">2 / 6</Chip>
      </div>

      <div className="mt-1 rounded-3xl bg-white card-line p-4 text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink-soft">Repeat after the speaker</p>
        <p className="mt-2 font-display text-[17px] font-medium leading-[1.75]">
          {KARAOKE_SENTENCE.map((w, i) => (
            <span key={i} className="karaoke-word" style={{ ["--kd" as string]: `${((i * 9) / total).toFixed(2)}s` }}>
              {w}
            </span>
          ))}
        </p>
        <div className="mx-auto mt-1 w-fit">
          <WaveBars count={14} height={16} barClassName="bg-apricot" />
        </div>
      </div>

      {/* Word popover */}
      <div className="relative mx-auto w-[92%] rounded-2xl bg-white card-line p-3 shadow-card">
        <div className="absolute -top-1.5 left-16 h-3 w-3 rotate-45 bg-white" />
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[12px] font-extrabold">conversations</p>
            <p className="text-[9.5px] font-medium text-ink-soft">/ˌkɑːn·vər·ˈseɪ·ʃənz/ · noun</p>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-sky/15 text-sky">
            <Volume2 size={14} />
          </span>
        </div>
        <p className="mt-1.5 border-t border-dashed border-ink/10 pt-1.5 text-[9px] font-semibold text-coral-deep">
          Tap any word to hear it again
        </p>
      </div>

      {/* Mic */}
      <div className="mt-auto flex flex-col items-center pb-4">
        <div className="relative mb-2 grid place-items-center">
          <span className="absolute h-16 w-16 rounded-full bg-coral/25 animate-pulse-ring" />
          <span className="absolute h-16 w-16 rounded-full bg-coral/20 animate-pulse-ring" style={{ animationDelay: "1.2s" }} />
          <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot text-white shadow-pop">
            <Mic size={24} strokeWidth={2.3} />
          </span>
        </div>
        <p className="text-[10px] font-bold text-ink-2">Hold to record your version</p>
        <div className="mt-2 flex gap-1.5">
          <Chip className="bg-[#e7f3eb] text-leaf">Rhythm 94</Chip>
          <Chip className="bg-[#fdf0dd] text-[#c07a1c]">Clarity 88</Chip>
        </div>
      </div>
    </div>
  );
}

function RespondScreen() {
  const R = 26;
  const C = 2 * Math.PI * R;
  return (
    <div className="flex h-full flex-col gap-3 px-4 pt-14">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-soft">Your turn</p>
        <div className="flex gap-1">
          {[0, 1, 2].map((d) => (
            <span key={d} className={`h-1.5 rounded-full ${d === 0 ? "w-4 bg-coral" : "w-1.5 bg-ink/15"}`} />
          ))}
        </div>
      </div>

      {/* Coach question */}
      <div className="flex items-end gap-2">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot text-white">
          <AudioLines size={13} />
        </span>
        <div className="rounded-2xl rounded-bl-md bg-white card-line p-3 shadow-card">
          <p className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-coral">SooFluent Coach</p>
          <p className="mt-1 text-[12px] font-semibold leading-snug">
            “What would you do if a friend canceled plans at the last minute?”
          </p>
        </div>
      </div>

      {/* User voice answer */}
      <div className="flex justify-end">
        <div className="flex items-center gap-2 rounded-2xl rounded-br-md bg-ink p-3 pr-4 text-paper shadow-card">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15">
            <Play size={11} fill="currentColor" className="ml-0.5" />
          </span>
          <WaveBars count={12} height={15} barClassName="bg-honey" />
          <span className="text-[9px] font-bold text-paper/70">0:08</span>
        </div>
      </div>

      {/* Feedback */}
      <ScreenCard className="!p-3.5">
        <div className="flex items-center gap-3">
          <div className="relative grid place-items-center">
            <svg width="60" height="60" viewBox="0 0 60 60" className="-rotate-90">
              <circle cx="30" cy="30" r={R} fill="none" stroke="#f1e8da" strokeWidth="6" />
              <circle
                cx="30" cy="30" r={R} fill="none" stroke="#ff5a3c" strokeWidth="6"
                strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * 0.08}
              />
            </svg>
            <span className="absolute text-[14px] font-extrabold">92</span>
          </div>
          <div>
            <p className="flex items-center gap-1 text-[12px] font-extrabold">
              <Sparkles size={12} className="text-coral" /> Sounds natural
            </p>
            <p className="mt-0.5 text-[10px] font-medium leading-snug text-ink-soft">
              Great rhythm. Try stressing “<span className="font-bold text-ink">last</span> minute” a little more.
            </p>
          </div>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          <Chip className="bg-peach text-coral-deep">Try: “a bit disappointed”</Chip>
        </div>
      </ScreenCard>

      <div className="mt-auto flex items-center justify-center gap-3 pb-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white card-line text-ink-2">
          <RotateCcw size={15} />
        </span>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-coral to-apricot text-white shadow-pop">
          <Mic size={19} strokeWidth={2.4} />
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white card-line text-ink-2">
          <ChevronRight size={15} />
        </span>
      </div>
    </div>
  );
}

function LevelsScreen() {
  const rows = [
    { c: "#4c9a6c", soft: "#e7f3eb", code: "A2", name: "Everyday English", pct: "72%" },
    { c: "#f59a2f", soft: "#fdf0dd", code: "B1", name: "Real-life flow", pct: "34%" },
    { c: "#ff5a3c", soft: "#ffe9e5", code: "B2", name: "Nuanced & fast", pct: "6%" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 px-4 pt-14">
      <div>
        <p className="font-display text-[17px] font-semibold">Choose your level</p>
        <p className="text-[10px] font-medium text-ink-soft">Stories that match where you are today</p>
      </div>

      {rows.map((r, i) => (
        <ScreenCard key={r.code} className={`!p-3 ${i === 0 ? "!bg-gradient-to-r !from-white !to-[#e7f3eb]/60" : ""}`}>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl font-display text-[13px] font-bold text-white" style={{ background: r.c }}>
              {r.code}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-[11.5px] font-extrabold">{r.name}</p>
                {i === 2 ? <Lock size={11} className="text-ink-soft" /> : <ChevronRight size={12} className="text-ink-soft" />}
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-fog">
                <div className="h-full rounded-full" style={{ width: r.pct, background: r.c }} />
              </div>
              <p className="mt-1 text-[8.5px] font-bold text-ink-soft">{r.pct} complete</p>
            </div>
          </div>
        </ScreenCard>
      ))}

      <div>
        <p className="mb-1.5 text-[11px] font-extrabold">This week for you</p>
        <div className="grid grid-cols-2 gap-2">
          {[IMG.lifestyle.friendsCafe, IMG.travel.benchWait].map((src, i) => (
            <div key={i} className="relative h-[74px] overflow-hidden rounded-2xl">
              <img src={src} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <Chip className="absolute left-1.5 top-1.5 bg-white/90 text-ink !text-[8px]">A2</Chip>
              <p className="absolute bottom-1.5 left-2 right-2 truncate text-[9.5px] font-bold text-white">
                {i === 0 ? "Catching up" : "Waiting like a local"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-auto pb-3 text-center text-[9px] font-medium text-ink-soft">
        Switch levels anytime — progress is saved
      </p>
    </div>
  );
}

const SCREENS: Record<PhoneVariant, ComponentType> = {
  home: HomeScreen,
  listen: ListenScreen,
  shadow: ShadowScreen,
  respond: RespondScreen,
  levels: LevelsScreen,
};

/* ── Device shell ───────────────────────────────────────────── */
export function Phone({
  variant,
  className = "",
}: {
  variant: PhoneVariant;
  className?: string;
}) {
  const Screen = SCREENS[variant];
  return (
    <div
      className={`relative w-[278px] select-none rounded-[46px] bg-[#17100b] p-[9px] shadow-[0_50px_100px_-30px_rgb(120_42_20/0.45),0_25px_50px_-25px_rgb(0_0_0/0.5)] ${className}`}
    >
      {/* side buttons */}
      <span className="absolute -left-[2.5px] top-24 h-9 w-[3px] rounded-l-md bg-[#3a2f26]" />
      <span className="absolute -left-[2.5px] top-[150px] h-12 w-[3px] rounded-l-md bg-[#3a2f26]" />
      <span className="absolute -right-[2.5px] top-[132px] h-14 w-[3px] rounded-r-md bg-[#3a2f26]" />

      <div className="relative aspect-[9/19.2] overflow-hidden rounded-[38px] bg-cream">
        <StatusBar />
        <Screen />
        {/* home indicator */}
        <span className="absolute bottom-1.5 left-1/2 z-30 h-[4px] w-24 -translate-x-1/2 rounded-full bg-ink/30" />
      </div>
    </div>
  );
}
