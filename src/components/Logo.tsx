export function LogoMark({ size = 38, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logog" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF5A3C" />
          <stop offset="1" stopColor="#FFB25E" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="17" fill="url(#logog)" />
      <g fill="#FFFDF8">
        <rect x="14.5" y="24" width="5.5" height="16" rx="2.75" />
        <rect x="24" y="17" width="5.5" height="30" rx="2.75" />
        <rect x="33.5" y="27" width="5.5" height="10" rx="2.75" />
        <rect x="43" y="20.5" width="5.5" height="23" rx="2.75" />
      </g>
    </svg>
  );
}

export function Wordmark({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`font-display text-[22px] leading-none font-semibold tracking-tight ${className}`}>
      <span className={dark ? "text-paper" : "text-ink"}>Soo</span>
      <span className="bg-gradient-to-r from-coral to-apricot bg-clip-text text-transparent">
        Fluent
      </span>
    </span>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <Wordmark dark={dark} />
    </span>
  );
}
