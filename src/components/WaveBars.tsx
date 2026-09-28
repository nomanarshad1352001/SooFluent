/**
 * Pure-CSS animated audio waveform bars.
 */
export function WaveBars({
  count = 18,
  className = "",
  barClassName = "bg-coral",
  height = 26,
  playing = true,
}: {
  count?: number;
  className?: string;
  barClassName?: string;
  height?: number;
  playing?: boolean;
}) {
  // Deterministic pseudo-random pattern so the wave looks organic.
  const pattern = Array.from({ length: count }, (_, i) => {
    const v = Math.abs(Math.sin(i * 2.7) * 0.65 + Math.sin(i * 1.3) * 0.35);
    return 0.25 + v * 0.75;
  });

  return (
    <div
      className={`flex items-center justify-center gap-[3px] ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      {pattern.map((v, i) => (
        <span
          key={i}
          className={`wave-bar w-[3px] rounded-full ${barClassName}`}
          style={{
            height: `${v * 100}%`,
            ["--bd" as string]: `${(i % 7) * 0.09}s`,
            ["--bs" as string]: `${0.9 + ((i * 13) % 5) * 0.12}s`,
            animationPlayState: playing ? "running" : "paused",
            transform: playing ? undefined : `scaleY(${Math.max(v, 0.2)})`,
          }}
        />
      ))}
    </div>
  );
}
