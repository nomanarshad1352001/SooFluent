# SooFluent — Official Product Website

**Project title:** SooFluent.com — Marketing & Product Showcase Website
**Tagline:** *Free your voice. Be SooFluent.*
**Type:** Multi-page marketing site + product experience for an English-learning mobile app (pre-launch)
**Status:** Production-ready build, launch-switch prepared
**Year:** 2026 · © SooFluent Inc.

---

## 1. What this platform is

The official digital home of **SooFluent**, an English-learning mobile app that teaches learners to move from *understanding* English to *speaking and responding* in it. The website does three jobs at once:

1. **Product storytelling** — communicates the app's Listen → Shadow → Respond method visually, using live-rendered phone mockups (real CSS-built app screens, not flat images), animated demos of karaoke shadowing, tappable word pronunciation, and an interactive "respond" mini-experience.
2. **Conversion & launch engine** — a pre-launch waitlist system ("Coming soon on the App Store and Google Play") that flips to live "Download on the App Store / Get it on Google Play" badges with a single config flag at launch — no redesign needed.
3. **Trust infrastructure** — full Support center with searchable FAQ and working contact flow, Privacy Policy and Terms of Use scaffolding (microphone/voice/AI-feedback aware), Pricing, Press kit, Roadmap, and an educational Journal.

## 2. Page map (13 routes, 18+ views)

| Route | Purpose |
|---|---|
| `/` | Hero (Three.js shader + anime.js type reveal), stats, scroll-driven Method section, app showcase rail, levels, pronunciation, context bento, emotional "mind goes blank" theater + playable respond demo, testimonial marquee rails, final CTA |
| `/method` | Learning-science deep dive, alternating phone walk-throughs, weekly-practice planner |
| `/stories` | Working story library: 15 demo stories, level/category filters with animated reflow, monthly packs banner |
| `/pronunciation` | Tappable-word sentence explorer, 4-step practice loop, AI feedback dimension cards |
| `/pricing` | Monthly/yearly toggle, Free/Premium/Founding plans, comparison table, pricing FAQ |
| `/journal` | Editorial index with featured essay |
| `/journal/:slug` | 5 fully written articles with pull-quotes and "read next" flow |
| `/roadmap` | Public product roadmap timeline + feedback panel |
| `/press` | Boilerplate, facts, logo/brand kit, click-to-copy hex colors, product visuals |
| `/about` | Mission, philosophy pillars, company (SooFluent Inc.) story |
| `/support` | Live FAQ search, 5 categories × 20 answers, accordions, contact form, system status |
| `/privacy` · `/terms` | Legal scaffolds with sticky TOCs and pre-launch disclaimers |

## 3. Target client / buyer

- **Independent app publishers & education startups** launching a consumer mobile app who need an awwwards-grade marketing site instead of a template.
- **EdTech / language-learning brands** (B2C) — this exact vertical: storytelling-driven, learners-not-corporate tone.
- **Founders pre-launch** who must collect waitlist emails, look credible to press/partners, and switch to live store badges on release day without rebuilding.
- **Agencies / freelancers** acquiring a production-grade reference codebase (design system, shader work, animation architecture, route scaffolding).

## 4. Qualities

- **Premium, warm, human** — ivory/cream canvas, coral→apricot brand gradient, Fraunces display serif × Manrope, grain texture, soft warm shadows — luxurious without being dark or cold.
- **Fully animated** — entrance choreography, scroll-driven storytelling, marquees, parallax phones, physics-eased micro-interactions (`cubic-bezier(0.19,1,0.22,1)` everywhere).
- **Product-as-content** — the app UI is hand-built in code (5 phone screens), so screenshots never go stale when the real app ships.
- **Conversion-focused** — badges + waitlist modal reachable from every page, mailto fallbacks, no-dead-end CTAs.
- **Responsive & accessible** — mobile-first, semantic landmarks, aria labels, `prefers-reduced-motion` support, focus rings, lazy-loaded media.
- **Performance-aware** — capped WebGL pixel ratio, shader pauses off-screen/tab-hidden, lazy Lottie, code-lean single route bundle, remote image CDNs.
- **SEO-ready** — meta/OG/Twitter cards, JSON-LD (Organization, WebSite, SoftwareApplication), canonical URLs, semantic headings, custom social card (`/og.jpg`).

## 5. Feature inventory (built & working)

### Experience & animation
- Three.js GLSL silk-gradient shader hero (mouse-reactive, fbm noise)
- anime.js character-stagger headline reveal + animated counters
- Lottie waveform (programmatically generated animation JSON, CSS fallback)
- Framer Motion page transitions, scroll progress sections, layout-animated tabs/filters
- Lenis smooth scrolling with scroll-lock for modal/menu
- Infinite marquee rails (testimonials ×2, phrasal verbs ×2, phone showcase) with hover-pause + direction control
- Karaoke word-glow loop inside phone mockups; mic pulse rings; typing respond demo state machine

### Functional systems
- **Launch switch** (`src/config/site.ts`): `appLaunched: false|true` + store URLs — one edit switches every badge site-wide
- **Waitlist & support forms** via FormSubmit AJAX (serverless; mailto fallback; honeypot spam trap)
- **Live FAQ search** (client-side, cross-category filtering)
- **Pricing billing toggle** with animated price morphs
- **Router + scroll manager**: hash anchors across pages, scroll restoration, 13 routes
- **Clipboard copy** press-kit swatches
- Centralized **content store** (`src/data/content.ts`) — testimonials, stories, FAQs, articles, plans, roadmap, legal — all dummy data, zero database
- Centralized **config store** (`src/config/site.ts`) — launch flags, store links, emails, socials

## 6. Tech stack

| Layer | Technology | Role |
|---|---|---|
| Framework | **React 19 + TypeScript** | Component architecture, type safety |
| Build | **Vite 7** (+ vite-plugin-singlefile) | Dev server, production build, one-file distribution |
| Styling | **Tailwind CSS v4** (@theme design tokens) + custom CSS keyframes | Design system, utilities, responsive |
| Routing | **react-router-dom** | 13 routes, clean URLs, scroll manager |
| 3D / WebGL | **Three.js** | Custom GLSL shader hero background |
| Animation | **anime.js v3** · **Framer Motion 12** · **lottie-web** · **Lenis** · CSS keyframes | Type reveals, counters, physics transitions, Lottie waveform, glossy scrolling |
| Icons & marks | **lucide-react** + hand-drawn brand SVGs (Apple/Google Play/YouTube/Instagram/TikTok) | Iconography, store badges, socials |
| Typography | **Fraunces** (variable serif) · **Manrope** | Display + body system |
| Forms | FormSubmit AJAX endpoint | Serverless waitlist + support inbox |
| Imagery | Pexels stock CDNs (dummy data) + AI-generated OG card | Photography, social preview |
| Data | Local TypeScript modules | No database — marketing-site dummy content |

**Not required:** no backend, no database, no auth, no CMS — by design (pre-launch marketing site). SSL/HTTPS comes from the host; deploy `dist/` to Netlify/Vercel/Cloudflare/Firebase with SPA rewrites (`/* → /index.html`).

## 7. Handover & ownership

- Full source code, design system tokens, and content data files (plain TS, commented).
- Launch runbook: flip `appLaunched`, paste store listing URLs, connect domain, swap stock photos for real app screenshots when ready, replace legal-scaffold text with final counsel-approved policy/terms.
- Forms: confirm FormSubmit activation email once; entries then arrive at `support@soofluent.com`.
