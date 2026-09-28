import { LAUNCH, openNotifyModal } from "../config/site";

/* ── Official-mark SVGs ─────────────────────────────────────── */
export function AppleIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

export function PlayIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  );
}

function Badge({
  store,
  size,
}: {
  store: "ios" | "android";
  size: "sm" | "lg";
}) {
  const launched = LAUNCH.appLaunched;
  const common =
    "group inline-flex items-center gap-3 rounded-2xl bg-ink text-paper shadow-pop transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-20px_rgb(232_69_42/0.5)] hover:bg-[#171009]";
  const sizing = size === "lg" ? "px-5 py-3.5" : "px-4 py-2.5";
  const top =
    "text-[10px] uppercase tracking-[0.14em] text-paper/60 font-semibold leading-none";
  const bottom = size === "lg" ? "text-lg" : "text-base";

  const inner = (
    <>
      <span className="shrink-0 transition-transform duration-500 group-hover:scale-110">
        {store === "ios" ? <AppleIcon size={size === "lg" ? 28 : 24} /> : <PlayIcon size={size === "lg" ? 24 : 21} />}
      </span>
      <span className="text-left leading-tight">
        <span className={`block ${top}`}>
          {launched
            ? store === "ios"
              ? "Download on the"
              : "Get it on"
            : "Coming soon on the"}
        </span>
        <span className={`block ${bottom} font-semibold tracking-tight -mt-0.5`}>
          {store === "ios" ? "App Store" : "Google Play"}
        </span>
      </span>
      {!launched && (
        <span className="absolute -top-2 -right-2 rounded-full bg-gradient-to-r from-coral to-apricot px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-card">
          Soon
        </span>
      )}
    </>
  );

  const rel = "relative";
  if (launched) {
    return (
      <a
        href={LAUNCH.storeLinks[store]}
        target="_blank"
        rel="noopener noreferrer"
        className={`${rel} ${common} ${sizing}`}
        aria-label={store === "ios" ? "Download on the App Store" : "Get it on Google Play"}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={openNotifyModal}
      className={`${rel} ${common} ${sizing} cursor-pointer`}
      aria-label={LAUNCH.comingSoonLabel}
    >
      {inner}
    </button>
  );
}

export default function StoreBadges({
  size = "lg",
  note = true,
  align = "center",
  className = "",
}: {
  size?: "sm" | "lg";
  note?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className={`flex flex-wrap items-center gap-3.5 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <Badge store="ios" size={size} />
        <Badge store="android" size={size} />
      </div>
      {note && (
        <p
          className={`mt-3 text-[12.5px] font-medium text-ink-soft/90 ${
            align === "center" ? "text-center" : "text-left"
          }`}
        >
          {LAUNCH.appLaunched ? "Free to download for iOS & Android" : LAUNCH.comingSoonLabel}
        </p>
      )}
    </div>
  );
}
