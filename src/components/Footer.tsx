import { Link, useLocation, useNavigate } from "react-router-dom";
import { COMPANY, CONTACT, LAUNCH, SOCIAL } from "../config/site";
import { scrollToId } from "../lib/scroll";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcons";
import StoreBadges from "./StoreBadges";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goSection = (hash: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToId(hash), 160);
    } else {
      scrollToId(hash);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-ink/8 bg-[#f7f0e4]">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.85fr_1.4fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs font-display text-xl font-medium italic text-ink-2">
              Free your voice.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Short real-life English stories that train you to listen, speak
              and respond — not just study.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SooFluent on ${s.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white card-line text-ink-2 shadow-card transition-all duration-300 hover:-translate-y-1 hover:text-coral"
                >
                  <SocialIcon id={s.id} size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <nav aria-label="Footer — product">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">Product</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-ink-2">
              <li><Link className="transition-colors hover:text-coral" to="/">Home</Link></li>
              <li><Link className="transition-colors hover:text-coral" to="/method">The Method</Link></li>
              <li><Link className="transition-colors hover:text-coral" to="/stories">Story Library</Link></li>
              <li><Link className="transition-colors hover:text-coral" to="/pronunciation">Pronunciation</Link></li>
              <li><Link className="transition-colors hover:text-coral" to="/pricing">Pricing</Link></li>
              <li><button className="transition-colors hover:text-coral" onClick={() => goSection("blank")}>The Blank Moment</button></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Footer — company">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-ink-2">
              <li><Link className="transition-colors hover:text-coral" to="/about">About SooFluent</Link></li>
              <li><Link className="transition-colors hover:text-coral" to="/journal">Journal</Link></li>
              <li><Link className="transition-colors hover:text-coral" to="/roadmap">Roadmap</Link></li>
              <li><Link className="transition-colors hover:text-coral" to="/press">Press & brand</Link></li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Footer — support">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">Support</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-ink-2">
              <li><Link className="transition-colors hover:text-coral" to="/support">Help center</Link></li>
              <li>
                <a className="transition-colors hover:text-coral" href={`mailto:${CONTACT.support}`}>
                  Contact support
                </a>
              </li>
              <li><Link className="transition-colors hover:text-coral" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="transition-colors hover:text-coral" to="/terms">Terms of Use</Link></li>
            </ul>
          </nav>

          {/* App CTA */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">Get the app</p>
            <div className="mt-4 rounded-3xl bg-white card-line p-5 shadow-card">
              <p className="text-sm font-extrabold">
                {LAUNCH.appLaunched ? "Download SooFluent today" : "SooFluent is almost here"}
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
                {LAUNCH.appLaunched
                  ? "Start your first story in minutes — free on iOS and Android."
                  : "Join the waitlist and we'll let you know the moment it's live."}
              </p>
              <StoreBadges size="sm" align="left" note={false} className="mt-4" />
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="pointer-events-none mt-14 select-none text-center" aria-hidden="true">
          <p className="font-display text-[clamp(3rem,10vw,8.5rem)] font-semibold italic leading-[1.05] text-ink/[0.055]">
            Free your voice.
          </p>
        </div>

        {/* Legal row */}
        <div className="mt-8 border-t border-ink/8 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-[12.5px] font-semibold text-ink-2">{COMPANY.copyright}</p>
            <div className="flex items-center gap-5 text-[12px] font-semibold text-ink-soft">
              <Link to="/privacy" className="transition-colors hover:text-coral">Privacy</Link>
              <span className="h-1 w-1 rounded-full bg-ink/20" />
              <Link to="/terms" className="transition-colors hover:text-coral">Terms</Link>
              <span className="h-1 w-1 rounded-full bg-ink/20" />
              <Link to="/support" className="transition-colors hover:text-coral">Support</Link>
            </div>
          </div>
          <p className="mt-5 text-center text-[10.5px] leading-relaxed text-ink-soft/70 md:text-left">
            Apple, the Apple logo, and App Store are trademarks of Apple Inc., registered in the U.S. and other
            countries. Google Play and the Google Play logo are trademarks of Google LLC. CEFR level references
            are provided as general guidance for learners.
          </p>
        </div>
      </div>
    </footer>
  );
}
