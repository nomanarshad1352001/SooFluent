import type { ReactNode } from "react";

/**
 * Infinite moving rail. Children are rendered twice for a seamless loop;
 * speed is controlled via animationDuration. Pauses on hover.
 */
export default function MarqueeRail({
  children,
  duration = 46,
  reverse = false,
  className = "",
  trackClassName = "",
  pauseOnHover = true,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  trackClassName?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={`mask-fade-x overflow-hidden ${pauseOnHover ? "marquee-paused" : ""} ${
        reverse ? "marquee-reverse" : ""
      } ${className}`}
    >
      <div
        className={`marquee-track flex w-max items-stretch gap-6 pr-6 ${trackClassName}`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex items-stretch gap-6 pr-6">{children}</div>
        <div className="flex items-stretch gap-6 pr-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
