/**
 * ─────────────────────────────────────────────────────────────
 *  SooFluent — Site configuration
 *  Everything launch-related lives here so the site can move from
 *  "Coming soon" to "Live on the App Store / Google Play" instantly.
 * ─────────────────────────────────────────────────────────────
 */

export const LAUNCH = {
  /**
   * →  false  = pre-launch mode. All download areas render
   *              "Coming soon on the App Store and Google Play"
   *              and open the waitlist modal when tapped.
   * →  true   = live mode. The same components automatically
   *              render the official store badges linked to the
   *              app listings below. No other code change needed.
   */
  appLaunched: false,

  /** Paste the live listing URLs here on launch day. */
  storeLinks: {
    ios: "https://apps.apple.com/app/soofluent",
    android: "https://play.google.com/store/apps/details?id=com.soofluent.app",
  },

  /** Shown under the badges while in coming-soon mode. */
  comingSoonLabel: "Coming soon on the App Store and Google Play",
  launchWindow: "Launching 2026",
} as const;

export const CONTACT = {
  support: "support@soofluent.com",
  hello: "hello@soofluent.com",
  privacy: "privacy@soofluent.com",
  /**
   * The notify / contact forms post via FormSubmit (no backend needed).
   * On first submission FormSubmit emails the address once to confirm
   * activation — after that, entries arrive directly in the inbox.
   */
  formsEndpoint: `https://formsubmit.co/support@soofluent.com`,
} as const;

export const SOCIAL = [
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@soofluent" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/soofluent" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@soofluent" },
] as const;

export const COMPANY = {
  name: "SooFluent Inc.",
  tagline: "Free your voice.",
  copyright: `© 2026 SooFluent Inc. All rights reserved.`,
} as const;

/** Notify modal — shared open/close via a tiny event bus so any button can open it. */
export const openNotifyModal = () =>
  window.dispatchEvent(new CustomEvent("soofluent:notify"));
