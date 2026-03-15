import { Menu, X, Download, Sparkles, Paintbrush } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState("Home");
  const { isGlass, toggleTheme }    = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string, label: string) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Background ── */
  const navBg = isGlass
    ? scrolled ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.18)"
    : scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0)";

  const navBorder = isGlass
    ? scrolled ? "1px solid rgba(255,255,255,0.65)" : "1px solid rgba(255,255,255,0.28)"
    : scrolled ? "3px solid #2C2C2C" : "none";

  const navShadow = isGlass
    ? scrolled ? "0 8px 32px rgba(0,0,0,0.08)" : "none"
    : scrolled ? "0 4px 0 #2C2C2C" : "none";

  /* ── Shared active pill ── */
  const activeStyle: React.CSSProperties = isGlass
    ? { background: "rgba(22,26,40,0.78)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.20)", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, boxShadow: "0 4px 14px rgba(0,0,0,0.18)" }
    : { background: "#7B8C2E", border: "2.5px solid #2C2C2C", boxShadow: "3px 3px 0 #2C2C2C", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15 };

  const idleStyle: React.CSSProperties = {
    fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 15,
    color: isGlass ? "#1e2030" : "#2C2C2C",
    background: "transparent", border: "2.5px solid transparent",
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300"
      style={{
        background: navBg,
        backdropFilter: isGlass ? "blur(24px)" : scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isGlass ? "blur(24px)" : scrolled ? "blur(12px)" : "none",
        borderBottom: navBorder,
        boxShadow: navShadow,
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* ── Logo ── */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
          onClick={() => handleNav("#home", "Home")}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={isGlass
              ? { background: "rgba(22,26,40,0.75)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.22)", boxShadow: "0 4px 14px rgba(0,0,0,0.18)" }
              : { background: "#7B8C2E", border: "3px solid #2C2C2C", boxShadow: "3px 3px 0 #2C2C2C" }}
          >
            <span style={{ color: isGlass ? "#e8eaf0" : "#D4E877", fontSize: 18, fontWeight: 900 }}>✦</span>
          </div>
          <span style={{ fontWeight: 900, fontSize: 20, color: isGlass ? "#1e2030" : "#2C2C2C" }}>
            port<span style={{ color: isGlass ? "#3d4258" : "#7B8C2E" }}>folio</span>
          </span>
        </motion.div>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              onClick={() => handleNav(link.href, link.label)}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95, y: 0 }}
              className="px-4 py-2 rounded-xl transition-all duration-150"
              style={active === link.label ? activeStyle : idleStyle}
            >
              {link.label}
            </motion.button>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}
            className="ml-1 px-4 py-2.5 rounded-xl flex items-center gap-2"
            style={isGlass
              ? { fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#1e2030", background: "rgba(255,255,255,0.32)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.60)", boxShadow: "0 4px 15px rgba(0,0,0,0.06)", cursor: "pointer" }
              : { fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#2C2C2C", background: "#F2F6DB", border: "2.5px solid #2C2C2C", boxShadow: "3px 3px 0 #2C2C2C", cursor: "pointer" }}
          >
            <AnimatePresence mode="wait">
              {isGlass ? (
                <motion.span key="paint" initial={{ opacity: 0, rotate: -20 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 20 }} transition={{ duration: 0.2 }} className="flex items-center gap-1.5">
                  <Paintbrush size={14} strokeWidth={2.5} /> Illustration
                </motion.span>
              ) : (
                <motion.span key="glass" initial={{ opacity: 0, rotate: 20 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -20 }} transition={{ duration: 0.2 }} className="flex items-center gap-1.5">
                  <Sparkles size={14} strokeWidth={2.5} /> Glass Mode
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Resume */}
          <motion.button
            onClick={() => window.open("/resume.pdf", "_blank")}
            whileHover={isGlass ? { scale: 1.06, y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.26)" } : { scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95, y: 1 }}
            className="ml-1 px-5 py-2.5 rounded-xl inline-flex items-center gap-2"
            style={isGlass
              ? { fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: "#ffffff", background: "rgba(22,26,40,0.82)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.20)", boxShadow: "0 4px 20px rgba(0,0,0,0.22)", cursor: "pointer" }
              : { fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: "#ffffff", background: "#5A6620", border: "3px solid #2C2C2C", boxShadow: "4px 4px 0 #2C2C2C", cursor: "pointer" }}
          >
            <Download size={15} strokeWidth={3} /> Resume
          </motion.button>
        </div>

        {/* ── Mobile Menu Button ── */}
        <motion.button
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          style={isGlass
            ? { background: "rgba(22,26,40,0.72)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.22)", color: "#ffffff" }
            : { background: "#7B8C2E", border: "3px solid #2C2C2C", boxShadow: "3px 3px 0 #2C2C2C", color: "#ffffff" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0,  height: "auto" }}
            exit={{ opacity: 0, y: -20,   height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-3 rounded-2xl p-4 flex flex-col gap-2"
            style={isGlass
              ? { background: "rgba(255,255,255,0.42)", backdropFilter: "blur(28px)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }
              : { background: "#ffffff", border: "3px solid #2C2C2C", boxShadow: "5px 5px 0 #2C2C2C" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                className="text-left px-4 py-3 rounded-xl"
                style={{
                  fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16,
                  color: active === link.label ? "#ffffff" : (isGlass ? "#1e2030" : "#2C2C2C"),
                  background: active === link.label
                    ? isGlass ? "rgba(22,26,40,0.78)" : "#7B8C2E"
                    : isGlass ? "rgba(255,255,255,0.22)" : "#F2F6DB",
                  border: isGlass ? "1px solid rgba(255,255,255,0.45)" : "2px solid #2C2C2C",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="text-left px-4 py-3 rounded-xl flex items-center gap-2"
              style={{
                fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16,
                color: isGlass ? "#1e2030" : "#2C2C2C",
                background: isGlass ? "rgba(255,255,255,0.22)" : "#F2F6DB",
                border: isGlass ? "1px solid rgba(255,255,255,0.45)" : "2px solid #2C2C2C",
              }}
            >
              {isGlass ? <><Paintbrush size={15} /> Illustration Mode</> : <><Sparkles size={15} /> Glass Mode</>}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
