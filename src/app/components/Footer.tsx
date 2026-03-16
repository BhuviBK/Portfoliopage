import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { gc } from "../styles/glassStyles";

export function Footer() {
  const { isGlass } = useTheme();

  return (
    <footer
      style={{
        background: isGlass ? "rgba(255,255,255,0.32)" : "#2C2C2C",
        backdropFilter: isGlass ? "blur(28px)" : undefined,
        WebkitBackdropFilter: isGlass ? "blur(28px)" : undefined,
        borderTop: isGlass ? "1px solid rgba(255,255,255,0.55)" : "4px solid #2C2C2C",
        boxShadow: isGlass ? "0 -4px 24px rgba(0,0,0,0.05)" : undefined,
        padding: "40px 24px",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={isGlass
              ? { background: "rgba(22,26,40,0.75)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.22)" }
              : { background: "#7B8C2E", border: "3px solid #D4E877" }}
          >
            <span style={{ color: isGlass ? "#e8eaf0" : "#D4E877", fontSize: 18, fontWeight: 900 }}>✦</span>
          </div>
          <span style={{ fontWeight: 900, fontSize: 18, color: isGlass ? gc.dark : "#ffffff" }}>
            Bhu<span style={{ color: isGlass ? "#3d4258" : "#7B8C2E" }}>vanesh</span>
          </span>
        </div>

        {/* Center */}
        {/* <p style={{ fontWeight: 700, fontSize: 14, color: isGlass ? "#6b7280" : "#888", margin: 0, textAlign: "center" }}>
          Designed with{" "}
          <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ display: "inline-block" }}>
            💚
          </motion.span>{" "}
          &amp; lots of coffee ☕
        </p> */}

        {/* Back to top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={isGlass ? { y: -3, boxShadow: "0 8px 20px rgba(0,0,0,0.14)" } : { y: -3, boxShadow: "4px 4px 0 #D4E877" }}
          whileTap={{ y: 0 }}
          className="px-5 py-2.5 rounded-xl"
          style={isGlass
            ? { fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: gc.dark, background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", cursor: "pointer" }
            : { fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#2C2C2C", background: "#D4E877", border: "3px solid #D4E877", boxShadow: "3px 3px 0 #A8C042", cursor: "pointer" }}
        >
          Back to Top ↑
        </motion.button>
      </div>
    </footer>
  );
}
