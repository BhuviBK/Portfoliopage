import { motion } from "motion/react";

export function DesignerCharacter() {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.45, delay: 0.3 }}
      className="relative flex items-center justify-center"
    >
      {/* Glow blob behind character */}
      <div
        className="absolute rounded-full opacity-30 blur-3xl"
        style={{
          width: 320,
          height: 320,
          background: "radial-gradient(circle, #A8C042 0%, #7B8C2E 60%, transparent 100%)",
        }}
      />

      <motion.svg
        viewBox="0 0 200 275"
        width="300"
        height="380"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 drop-shadow-xl"
        style={{ filter: "drop-shadow(0 12px 24px rgba(90,102,32,0.35))" }}
      >
        {/* Ground shadow */}
        <ellipse cx="100" cy="268" rx="60" ry="9" fill="#A8C042" opacity="0.3" />

        {/* LEGS */}
        <rect x="68" y="218" width="24" height="40" rx="12" fill="#5A6620" stroke="#2C2C2C" strokeWidth="3.5" />
        <rect x="108" y="218" width="24" height="40" rx="12" fill="#5A6620" stroke="#2C2C2C" strokeWidth="3.5" />

        {/* FEET */}
        <ellipse cx="80" cy="256" rx="17" ry="10" fill="#3D4A18" stroke="#2C2C2C" strokeWidth="3" />
        <ellipse cx="120" cy="256" rx="17" ry="10" fill="#3D4A18" stroke="#2C2C2C" strokeWidth="3" />

        {/* BODY */}
        <rect x="54" y="145" width="92" height="86" rx="28" fill="#7B8C2E" stroke="#2C2C2C" strokeWidth="4" />

        {/* BELLY accent */}
        <ellipse cx="100" cy="188" rx="27" ry="33" fill="#A8C042" stroke="#2C2C2C" strokeWidth="2.5" />

        {/* LEFT ARM (raised up waving) */}
        <ellipse
          cx="35"
          cy="158"
          rx="14"
          ry="36"
          fill="#7B8C2E"
          stroke="#2C2C2C"
          strokeWidth="3.5"
          transform="rotate(-30 35 158)"
        />
        {/* Left hand */}
        <circle cx="20" cy="138" r="13" fill="#A8C042" stroke="#2C2C2C" strokeWidth="3" />
        {/* Hand fingers hint */}
        <line x1="12" y1="132" x2="16" y2="127" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="128" x2="20" y2="123" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="129" x2="28" y2="124" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" />

        {/* RIGHT ARM (holding pencil) */}
        <ellipse
          cx="165"
          cy="158"
          rx="14"
          ry="36"
          fill="#7B8C2E"
          stroke="#2C2C2C"
          strokeWidth="3.5"
          transform="rotate(30 165 158)"
        />
        {/* Right hand */}
        <circle cx="180" cy="138" r="13" fill="#A8C042" stroke="#2C2C2C" strokeWidth="3" />

        {/* PENCIL in right hand */}
        <g transform="rotate(-40 185 125)">
          <rect x="182" y="95" width="10" height="46" rx="2" fill="#FFD93D" stroke="#2C2C2C" strokeWidth="2" />
          <polygon points="182,141 192,141 187,154" fill="#FFAA6C" stroke="#2C2C2C" strokeWidth="1.5" />
          <polygon points="184,147 190,147 187,154" fill="#2C2C2C" />
          <rect x="182" y="95" width="10" height="9" rx="2" fill="#D0D0D0" stroke="#2C2C2C" strokeWidth="1.5" />
        </g>

        {/* EARS (behind head) */}
        <circle cx="40" cy="78" r="17" fill="#7B8C2E" stroke="#2C2C2C" strokeWidth="3.5" />
        <circle cx="40" cy="78" r="9" fill="#A8C042" />
        <circle cx="160" cy="78" r="17" fill="#7B8C2E" stroke="#2C2C2C" strokeWidth="3.5" />
        <circle cx="160" cy="78" r="9" fill="#A8C042" />

        {/* HEAD */}
        <circle cx="100" cy="82" r="64" fill="#7B8C2E" stroke="#2C2C2C" strokeWidth="4" />

        {/* FACE AREA (lighter oval) */}
        <ellipse cx="100" cy="88" rx="48" ry="52" fill="#A8C042" />

        {/* EYEBROWS */}
        <path d="M 66 62 Q 80 53 96 62" stroke="#2C2C2C" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 104 62 Q 120 53 134 62" stroke="#2C2C2C" strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {/* EYES white */}
        <circle cx="82" cy="78" r="18" fill="white" stroke="#2C2C2C" strokeWidth="3" />
        <circle cx="118" cy="78" r="18" fill="white" stroke="#2C2C2C" strokeWidth="3" />
        {/* Pupils */}
        <circle cx="85" cy="80" r="11" fill="#2C2C2C" />
        <circle cx="121" cy="80" r="11" fill="#2C2C2C" />
        {/* Eye shine */}
        <circle cx="90" cy="75" r="4.5" fill="white" />
        <circle cx="126" cy="75" r="4.5" fill="white" />
        <circle cx="88" cy="84" r="2" fill="white" />
        <circle cx="124" cy="84" r="2" fill="white" />

        {/* BLUSH */}
        <ellipse cx="66" cy="98" rx="13" ry="9" fill="#C8DE6A" opacity="0.7" />
        <ellipse cx="134" cy="98" rx="13" ry="9" fill="#C8DE6A" opacity="0.7" />

        {/* SMILE */}
        <path d="M 83 112 Q 100 130 117 112" stroke="#2C2C2C" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* Teeth */}
        <path d="M 83 112 Q 100 126 117 112" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.5" />

        {/* BERET / DESIGNER CAP */}
        <ellipse cx="100" cy="24" rx="46" ry="12" fill="#5A6620" stroke="#2C2C2C" strokeWidth="3.5" />
        <ellipse cx="100" cy="18" rx="34" ry="26" fill="#5A6620" stroke="#2C2C2C" strokeWidth="3.5" />
        {/* Beret highlight */}
        <ellipse cx="112" cy="9" rx="10" ry="6" fill="#7B8C2E" opacity="0.5" />
        {/* Beret pompom */}
        <circle cx="100" cy="2" r="7" fill="#D4E877" stroke="#2C2C2C" strokeWidth="2.5" />

        {/* Small star on beret */}
        <path
          d="M 76 18 L 78 13 L 80 18 L 75 15 L 81 15 Z"
          fill="#D4E877"
          stroke="#2C2C2C"
          strokeWidth="1"
        />
      </motion.svg>
    </motion.div>
  );
}
