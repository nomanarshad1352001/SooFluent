import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { openNotifyModal, SOCIAL } from "../config/site";
import { lockScroll } from "../lib/scroll";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcons";

const NAV_LINKS = [
  { label: "Method", to: "/method" },
  { label: "Stories", to: "/stories" },
  { label: "Pronunciation", to: "/pronunciation" },
  { label: "Pricing", to: "/pricing" },
  { label: "Journal", to: "/journal" },
];

const MOBILE_GROUPS = [
  {
    label: "Product",
    links: [
      { label: "The Method", to: "/method" },
      { label: "Story Library", to: "/stories" },
      { label: "Pronunciation", to: "/pronunciation" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    label: "Learn more",
    links: [
      { label: "Journal", to: "/journal" },
      { label: "Roadmap", to: "/roadmap" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Press", to: "/press" },
      { label: "Support", to: "/support" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    lockScroll(open);
    return () => lockScroll(false);
  }, [open]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors hover:bg-white ${
      isActive ? "text-coral" : "text-ink-2 hover:text-ink"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-ink/5 py-3 shadow-[0_12px_40px_-24px_rgb(120_66_30/0.35)]" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="SooFluent home" className="transition-transform duration-500 hover:scale-[1.03]">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls}>
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/about" className={linkCls}>
              About
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `hidden rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors md:inline-flex ${
                  isActive ? "text-coral" : "text-ink-2 hover:text-ink"
                }`
              }
            >
              Support
            </NavLink>
            <button
              onClick={openNotifyModal}
              className="group hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[13px] font-bold text-paper shadow-card transition-all duration-300 hover:scale-[1.04] hover:bg-[#171009] sm:inline-flex"
            >
              Get the app
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full bg-white card-line shadow-card lg:hidden"
            >
              <div className="flex w-[18px] flex-col items-center gap-[5px]">
                <span
                  className={`h-[2px] w-full rounded-full bg-ink transition-all duration-300 ${
                    open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full rounded-full bg-ink transition-all duration-300 ${
                    open ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-cream/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.nav
              className="relative mx-auto flex h-full max-w-lg flex-col justify-center gap-8 overflow-y-auto px-9 py-24"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
              aria-label="Mobile"
            >
              {MOBILE_GROUPS.map((g) => (
                <div key={g.label}>
                  <motion.p
                    className="mb-3 text-[10.5px] font-bold uppercase tracking-[0.24em] text-ink-soft"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.19, 1, 0.22, 1] } },
                    }}
                  >
                    {g.label}
                  </motion.p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {g.links.map((l) => (
                      <motion.div
                        key={l.to}
                        variants={{
                          hidden: { opacity: 0, y: 22 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } },
                        }}
                      >
                        <Link
                          to={l.to}
                          className="font-display text-[1.9rem] font-semibold leading-tight text-ink transition-colors hover:text-coral"
                        >
                          {l.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } },
                }}
              >
                <button
                  onClick={() => {
                    setOpen(false);
                    openNotifyModal();
                  }}
                  className="rounded-full bg-gradient-to-r from-coral to-apricot px-8 py-4 text-base font-extrabold text-white shadow-card"
                >
                  Get the app — coming soon
                </button>
                <div className="mt-7 flex gap-3">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full bg-white card-line text-ink-2 shadow-card transition-all hover:text-coral"
                    >
                      <SocialIcon id={s.id} size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
