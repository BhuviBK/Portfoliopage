import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t, gc } from "../styles/glassStyles";

const EASE = [0.22, 1, 0.36, 1] as const;

const statData = [
  { value: "4+", label: "Years Exp" },
  { value: "10", label: "Projects" },
  { value: "4", label: "Clients" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function DesignMockup({ isGlass }: { isGlass: boolean }) {
  const s = t(isGlass);
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
      className="relative w-full max-w-[420px] mx-auto"
    >
      {/* Main artboard card */}
      <div className="rounded-3xl overflow-hidden" style={{ ...s.card, borderRadius: 24 }}>
        {/* Header bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={isGlass
            ? { background: "rgba(255,255,255,0.18)", borderBottom: "1px solid rgba(255,255,255,0.40)" }
            : { background: "#F2F6DB", borderBottom: "3px solid #2C2C2C" }}
        >
          <div className="flex gap-1.5">
            {["#FF6B6B", "#FFD93D", isGlass ? "#a0a8bc" : "#7B8C2E"].map((c) => (
              <div key={c} className="w-3 h-3 rounded-full"
                style={{ background: c, border: isGlass ? "none" : "1.5px solid #2C2C2C", opacity: isGlass ? 0.75 : 1 }} />
            ))}
          </div>
          <div className="flex-1 h-5 rounded-md ml-2"
            style={isGlass
              ? { background: "rgba(255,255,255,0.30)", border: "none" }
              : { background: "#DDE8AC", border: "1.5px solid #B5C86A" }} />
        </div>

        {/* Wireframe body */}
        <div className="p-5 flex flex-col gap-3">
          {/* Toolbar */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-16 rounded-md"
              style={{ background: isGlass ? "rgba(60,65,80,0.45)" : "#7B8C2E", opacity: isGlass ? 1 : 0.8 }} />
            <div className="flex gap-2 ml-auto">
              {[40, 36, 44, 38].map((w, i) => (
                <div key={i} className="h-3 rounded-md"
                  style={{ background: isGlass ? "rgba(255,255,255,0.32)" : "#D4E877", width: w, border: isGlass ? "none" : "1.5px solid #A8C042" }} />
              ))}
            </div>
          </div>

          {/* Content card */}
          <div className="rounded-2xl p-4 flex flex-col gap-2.5"
            style={isGlass
              ? { background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.38)" }
              : { background: "#F2F6DB", border: "2px solid #C8DE6A" }}>
            <div className="h-3 rounded-full" style={{ background: isGlass ? "rgba(55,60,80,0.40)" : "#7B8C2E", width: "55%" }} />
            <div className="h-5 rounded-full" style={{ background: isGlass ? "rgba(30,32,48,0.55)" : "#2C2C2C", width: "80%" }} />
            <div className="h-5 rounded-full" style={{ background: isGlass ? "rgba(30,32,48,0.45)" : "#2C2C2C", width: "65%" }} />
            <div className="h-3 rounded-full mt-1" style={{ background: isGlass ? "rgba(100,108,135,0.35)" : "#A8C042", width: "90%" }} />
            <div className="h-3 rounded-full" style={{ background: isGlass ? "rgba(100,108,135,0.28)" : "#A8C042", width: "75%" }} />
            <div className="flex gap-2 mt-2">
              <div className="h-9 w-28 rounded-xl"
                style={{ background: isGlass ? "rgba(22,26,40,0.72)" : "#7B8C2E", border: isGlass ? "none" : "2px solid #2C2C2C" }} />
              <div className="h-9 w-24 rounded-xl"
                style={{ background: isGlass ? "rgba(255,255,255,0.32)" : "#D4E877", border: isGlass ? "none" : "2px solid #2C2C2C" }} />
            </div>
          </div>

          {/* Bottom mini cards */}
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl p-3 flex flex-col gap-1.5"
                style={isGlass
                  ? { background: "rgba(255,255,255,0.20)", border: "1px solid rgba(255,255,255,0.40)" }
                  : { background: i % 2 === 0 ? "#F2F6DB" : "#ffffff", border: "2px solid #C8DE6A" }}>
                <div className="w-6 h-6 rounded-lg"
                  style={{ background: isGlass ? "rgba(80,88,115,0.30)" : "#A8C042", border: isGlass ? "none" : "1.5px solid #7B8C2E" }} />
                <div className="h-2 rounded-full" style={{ background: isGlass ? "rgba(50,55,75,0.40)" : "#7B8C2E", width: "80%" }} />
                <div className="h-2 rounded-full" style={{ background: isGlass ? "rgba(180,185,205,0.40)" : "#C8DE6A", width: "60%" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Swatch chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.7 }}
        className="absolute -bottom-6 -left-8 rounded-2xl p-3 flex items-center gap-2.5"
        style={{ ...s.card, borderRadius: 16 }}
      >
        <div className="flex gap-1">
          {(isGlass
            ? ["#3d4258", "#5a6278", "#8890a8", "#c8cdd8", "#1e2030"]
            : ["#7B8C2E", "#A8C042", "#D4E877", "#F2F6DB", "#2C2C2C"]
          ).map((c) => (
            <div key={c} className="w-5 h-5 rounded-md"
              style={{ background: c, border: isGlass ? "none" : "1.5px solid #2C2C2C" }} />
          ))}
        </div>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 12, color: isGlass ? "#1e2030" : "#2C2C2C", whiteSpace: "nowrap" }}>
          Design System
        </span>
      </motion.div>

      {/* Annotation tag */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.85 }}
        className="absolute -top-5 -right-4 rounded-xl px-3 py-2"
        style={isGlass
          ? { background: "rgba(255,255,255,0.50)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.70)", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: gc.dark }
          : { background: "#D4E877", border: "3px solid #2C2C2C", boxShadow: "4px 4px 0 #2C2C2C", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: "#3D4A18" }}
      >
        UI / UX Designer ✦
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const { isGlass } = useTheme();
  const s = t(isGlass);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: isGlass ? "transparent" : "linear-gradient(175deg, #ffffff 0%, #f5f9e8 55%, #EFF4D6 100%)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {!isGlass && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #A8C042 1.4px, transparent 1.4px)", backgroundSize: "32px 32px", opacity: 0.18 }} />
      )}

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-28 pb-32 flex flex-col lg:flex-row items-center gap-14 lg:gap-8">

        {/* ── LEFT ── */}
        <div className="flex-1 flex flex-col items-start gap-7">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, borderRadius: 12, padding: "4px 16px", display: "inline-flex", alignItems: "center", gap: 6, ...s.tag }}>
              ✦ UI Designer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 1.1, color: "#2C2C2C", margin: 0 }}
          >
            Hey! I'm{" "}
            <span style={{ color: isGlass ? gc.mid : "#7B8C2E", display: "inline-block", position: "relative" }}>
              Bhuvanesh
              <svg style={{ position: "absolute", bottom: -5, left: 0, width: "100%" }} viewBox="0 0 200 10" preserveAspectRatio="none" height="8">
                <path d="M0 7 Q50 1 100 6 Q150 11 200 5"
                  stroke={isGlass ? "rgba(80,88,115,0.35)" : "#D4E877"}
                  strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            👋
          </motion.h1>

          {/* Tagline */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.3 }} className="w-full max-w-lg">

          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: EASE, delay: 0.42 }} className="flex flex-wrap gap-4">
            <motion.button
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 17, borderRadius: 14, padding: "13px 32px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, ...s.btnPrimary }}
              whileHover={isGlass ? { y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.28)" } : { y: -3, boxShadow: "7px 7px 0 #2C2C2C" }}
              whileTap={isGlass ? { y: 1 } : { y: 1, boxShadow: "2px 2px 0 #2C2C2C" }}
              onClick={() => scrollToSection("projects")}
            >
              View Work ✦
            </motion.button>
            <motion.button
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 17, borderRadius: 14, padding: "13px 32px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, ...s.btnSecondary }}
              whileHover={isGlass ? { y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" } : { y: -3, boxShadow: "7px 7px 0 #2C2C2C" }}
              whileTap={isGlass ? { y: 1 } : { y: 1, boxShadow: "2px 2px 0 #2C2C2C" }}
              onClick={() => scrollToSection("about")}
            >
              About Me →
            </motion.button>
          </motion.div>


          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: EASE, delay: 0.54 }} className="flex gap-4 flex-wrap">
            {statData.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.6 + i * 0.08 }}
                className="flex flex-col items-center justify-center px-5 py-3 rounded-2xl"
                style={{ ...s.card, minWidth: 80, borderRadius: 16 }}
              >
                <span style={{ fontWeight: 900, fontSize: 22, color: isGlass ? gc.mid : "#7B8C2E" }}>{stat.value.replace(/^(\d)(?=\D|$)/, "0$1")}</span>
                <span style={{ fontWeight: 700, fontSize: 11, color: "#666", marginTop: 2 }}>{stat.label}</span>
              </motion.div>
            ))}

          </motion.div>
        </div>

        {/* ── RIGHT: Mockup ── */}
        <div className="flex-1 flex justify-center lg:justify-end items-center pb-6">
          <DesignMockup isGlass={isGlass} />
        </div>
      </div>

      {/* Wave */}
      {!isGlass && (
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" width="100%" height="90" style={{ display: "block" }}>
            <path d="M0,45 C200,90 400,10 600,50 C800,90 1050,15 1440,55 L1440,90 L0,90 Z" fill="#EBF2D0" />
          </svg>
        </div>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-30"
        onClick={() => scrollToSection("about")}
      >
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 12, color: isGlass ? gc.muted : "#7B8C2E" }}>
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={isGlass
            ? { ...s.btnPrimary, width: 32, height: 32, borderRadius: "50%" }
            : { background: "#7B8C2E", border: "3px solid #2C2C2C", boxShadow: "3px 3px 0 #2C2C2C" }}
        >
          <ChevronDown size={16} color="#fff" strokeWidth={3} />
        </motion.div>
      </motion.div>
    </section>
  );
}