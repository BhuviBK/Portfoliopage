import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

/** Single CSS glass sphere — mimics the reference image look */
function GlassSphere({
  size,
  style,
}: {
  size: number;
  style: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(
          circle at 32% 28%,
          rgba(255,255,255,0.96) 0%,
          rgba(255,255,255,0.75) 10%,
          rgba(238,242,252,0.35) 32%,
          rgba(185,198,225,0.18) 58%,
          rgba(155,172,208,0.10) 78%,
          transparent 100%
        )`,
        border: "1px solid rgba(255,255,255,0.72)",
        boxShadow: [
          "inset 4px 4px 16px rgba(255,255,255,0.65)",
          "inset -5px -5px 20px rgba(130,152,196,0.22)",
          "0 8px 32px rgba(80,100,145,0.10)",
        ].join(", "),
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

/** Full-page glass backdrop matching the pearl/platinum reference style */
function GlassBackground({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="glass-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {/* ── Base gradient: pearl / platinum silver ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(145deg, #cdd6e2 0%, #d8e2ec 22%, #e4eaf4 45%, #dce6f0 68%, #c8d4e2 100%)",
            }}
          />

          {/* ── Soft diffuse highlight — top-center ── */}
          <div
            style={{
              position: "absolute",
              top: "-5%",
              left: "20%",
              width: 900,
              height: 700,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(255,255,255,0.65) 0%, rgba(245,248,255,0.30) 45%, transparent 72%)",
              filter: "blur(55px)",
            }}
          />

          {/* ── Cool blue-gray shadow — bottom-right ── */}
          <div
            style={{
              position: "absolute",
              bottom: "-8%",
              right: "-10%",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(140,160,200,0.35) 0%, rgba(120,145,190,0.18) 50%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />

          {/* ── Silver-cool bottom-left ── */}
          <div
            style={{
              position: "absolute",
              bottom: "-5%",
              left: "-8%",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(165,182,215,0.30) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* ── Glass spheres — LEFT cluster (like reference image) ── */}
          <GlassSphere size={200} style={{ top: "10%",  left: "-6%"  }} />
          <GlassSphere size={145} style={{ top: "32%",  left: "-3%"  }} />
          <GlassSphere size={110} style={{ top: "52%",  left: "1%"   }} />

          {/* ── Glass spheres — RIGHT cluster ── */}
          <GlassSphere size={175} style={{ top: "8%",   right: "-5%" }} />
          <GlassSphere size={130} style={{ top: "58%",  right: "-3%" }} />

          {/* ── Subtle interior sparkle center-right ── */}
          <div
            style={{
              position: "absolute",
              top: "38%",
              right: "14%",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.55) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExpenseTrackerCaseStudy } from "./components/ExpenseTrackerCaseStudy";

function AppInner() {
  const { isGlass } = useTheme();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        background: isGlass ? "transparent" : "#ffffff",
        overflowX: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      <GlassBackground visible={isGlass} />

      {/* Content sits above the glass backdrop */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
              <Footer />
            </>
          } />
          <Route path="/expense-tracker-case-study" element={<ExpenseTrackerCaseStudy />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </Router>
  );
}
