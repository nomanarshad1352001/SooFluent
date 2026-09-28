import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotifyModal from "./components/NotifyModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import MethodPage from "./pages/MethodPage";
import StoriesPage from "./pages/StoriesPage";
import PronunciationPage from "./pages/PronunciationPage";
import PricingPage from "./pages/PricingPage";
import JournalPage from "./pages/JournalPage";
import ArticlePage from "./pages/ArticlePage";
import RoadmapPage from "./pages/RoadmapPage";
import PressPage from "./pages/PressPage";
import { registerLenis, scrollToId, scrollToTop } from "./lib/scroll";

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    registerLenis(lenis);
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      registerLenis(null);
    };
  }, []);
}

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const t = window.setTimeout(() => scrollToId(location.hash.slice(1)), 320);
      return () => window.clearTimeout(t);
    }
    scrollToTop(true);
  }, [location.pathname, location.hash]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/method" element={<MethodPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/pronunciation" element={<PronunciationPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<ArticlePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  useLenis();
  return (
    <BrowserRouter>
      <div className="grain">
        <ScrollManager />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <NotifyModal />
      </div>
    </BrowserRouter>
  );
}
