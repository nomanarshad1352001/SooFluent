import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function registerLenis(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function scrollToId(id: string, offset = -84) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToTop(immediate = false) {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  }
}

export function lockScroll(locked: boolean) {
  if (!lenisInstance) return;
  if (locked) lenisInstance.stop();
  else lenisInstance.start();
}
