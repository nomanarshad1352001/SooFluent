import { useEffect, useRef, useState } from "react";
import { WaveBars } from "./WaveBars";

/**
 * A lightweight, programmatically generated Lottie animation —
 * warm multi-tone voice waveform bars used around CTAs.
 * Falls back to CSS wave bars if anything fails to load.
 */

const W = 148;
const H = 64;
const BAR_W = 12;
const COUNT = 6;

const RAMP: number[][] = [
  [30, 100, 48, 78, 30],
  [64, 34, 96, 44, 64],
  [46, 92, 30, 88, 46],
  [88, 52, 100, 36, 88],
  [36, 84, 56, 96, 36],
  [60, 30, 88, 42, 60],
];

const COLORS: Record<number, number[]> = {
  0: [1, 0.353, 0.235, 1], // coral
  1: [1, 0.698, 0.369, 1], // apricot
  2: [0.91, 0.46, 0.25, 1], // burnt orange
  3: [1, 0.353, 0.235, 1],
  4: [1, 0.698, 0.369, 1],
  5: [0.95, 0.55, 0.32, 1], // clay
};

function ease() {
  return { i: { x: [0.42, 0.42, 0.42], y: [1, 1, 1] }, o: { x: [0.58, 0.58, 0.58], y: [0, 0, 0] } };
}

function buildWaveData() {
  const op = 100;
  const gap = (W - COUNT * BAR_W) / (COUNT + 1);

  const layers = Array.from({ length: COUNT }, (_, i) => {
    const x = gap + BAR_W / 2 + i * (BAR_W + gap);
    const vals = RAMP[i % RAMP.length];
    const kf = vals.map((v, f) => {
      const base: Record<string, unknown> = { t: (f * op) / (vals.length - 1), s: [100, v, 100] };
      if (f < vals.length - 1) {
        base.e = [100, vals[f + 1], 100];
        Object.assign(base, ease());
      }
      return base;
    });

    return {
      ddd: 0,
      ind: i + 1,
      ty: 4,
      nm: `bar-${i}`,
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [x, H / 2, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: kf },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          nm: "group",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [BAR_W, H - 8] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: BAR_W / 2 },
              nm: "rect",
            },
            { ty: "fl", c: { a: 0, k: COLORS[i] }, o: { a: 0, k: 100 }, nm: "fill" },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
              nm: "tr",
            },
          ],
        },
      ],
      ip: 0,
      op,
      st: 0,
      bm: 0,
    };
  });

  return { v: "5.7.4", fr: 30, ip: 0, op, w: W, h: H, nm: "sf-waveform", ddd: 0, assets: [], layers };
}

export default function WaveformLottie({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let anim: { destroy: () => void } | undefined;
    let cancelled = false;

    (async () => {
      try {
        const lottie = (await import("lottie-web")).default as unknown as {
          loadAnimation: (cfg: Record<string, unknown>) => { destroy: () => void };
          setQuality: (q: string) => void;
        };
        if (cancelled || !ref.current) return;
        lottie.setQuality("high");
        anim = lottie.loadAnimation({
          container: ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: buildWaveData(),
        });
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  if (failed) {
    return <WaveBars count={COUNT} height={H} className={className} barClassName="bg-coral" />;
  }

  return <div ref={ref} className={className} style={{ width: W, height: H }} aria-hidden="true" />;
}
