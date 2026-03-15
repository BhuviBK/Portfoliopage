import { motion } from "motion/react";

interface FloatProps {
  x: string;
  y: string;
  delay?: number;
  duration?: number;
  amplitude?: number;
  children: React.ReactNode;
  className?: string;
}

function FloatItem({ x, y, delay = 0, duration = 4, amplitude = 14, children, className = "" }: FloatProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none z-10 ${className}`}
      style={{ left: x, top: y }}
      animate={{ y: [0, -amplitude, 0], rotate: [-4, 4, -4] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// Star shape SVG
function StarShape({ size = 36, color = "#D4E877" }: { size?: number; color?: string }) {
  const s = size / 2;
  const points = Array.from({ length: 5 }, (_, i) => {
    const outer = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    const inner = outer + Math.PI / 5;
    return `${s + s * 0.95 * Math.cos(outer)},${s + s * 0.95 * Math.sin(outer)} ${s + s * 0.42 * Math.cos(inner)},${s + s * 0.42 * Math.sin(inner)}`;
  }).join(" ");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon
        points={points}
        fill={color}
        stroke="#2C2C2C"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Blob / rounded diamond
function BlobShape({ size = 44, color = "#7B8C2E" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <path
        d="M25 4 C36 4 46 14 46 25 C46 38 36 46 25 46 C14 46 4 36 4 25 C4 14 14 4 25 4 Z"
        fill={color}
        stroke="#2C2C2C"
        strokeWidth="2.5"
      />
    </svg>
  );
}

// Circle ring
function RingShape({ size = 38, color = "#A8C042" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="15" fill="none" stroke={color} strokeWidth="5" />
      <circle cx="20" cy="20" r="15" fill="none" stroke="#2C2C2C" strokeWidth="5" strokeDasharray="6 3" />
    </svg>
  );
}

// Sparkle
function SparkleShape({ size = 32, color = "#D4E877" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <path d="M16 2 L18 13 L29 16 L18 19 L16 30 L14 19 L3 16 L14 13 Z" fill={color} stroke="#2C2C2C" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

// Triangle
function TriangleShape({ size = 36, color = "#5A6620" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <polygon points="20,4 36,35 4,35" fill={color} stroke="#2C2C2C" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

// Pencil
function PencilShape({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 30 45">
      <rect x="8" y="2" width="14" height="34" rx="2" fill="#FFD93D" stroke="#2C2C2C" strokeWidth="2" />
      <polygon points="8,36 22,36 15,46" fill="#FFAA6C" stroke="#2C2C2C" strokeWidth="1.5" />
      <polygon points="11,42 19,42 15,46" fill="#2C2C2C" />
      <rect x="8" y="2" width="14" height="8" rx="2" fill="#D0D0D0" stroke="#2C2C2C" strokeWidth="1.5" />
    </svg>
  );
}

export function HeroFloatingDecorations() {
  return (
    <>
      <FloatItem x="6%" y="12%" delay={0} duration={4.2} amplitude={16}>
        <StarShape size={42} color="#D4E877" />
      </FloatItem>
      <FloatItem x="88%" y="8%" delay={0.7} duration={3.8} amplitude={12}>
        <SparkleShape size={38} color="#A8C042" />
      </FloatItem>
      <FloatItem x="92%" y="55%" delay={1.2} duration={4.5} amplitude={18}>
        <StarShape size={30} color="#D4E877" />
      </FloatItem>
      <FloatItem x="4%" y="65%" delay={0.4} duration={3.6} amplitude={14}>
        <BlobShape size={48} color="#A8C042" />
      </FloatItem>
      <FloatItem x="78%" y="78%" delay={1.8} duration={5} amplitude={10}>
        <RingShape size={42} color="#7B8C2E" />
      </FloatItem>
      <FloatItem x="15%" y="78%" delay={0.9} duration={4.8} amplitude={12}>
        <SparkleShape size={28} color="#5A6620" />
      </FloatItem>
      <FloatItem x="55%" y="5%" delay={1.5} duration={3.9} amplitude={20}>
        <TriangleShape size={30} color="#D4E877" />
      </FloatItem>
      <FloatItem x="42%" y="88%" delay={0.2} duration={4.1} amplitude={8}>
        <BlobShape size={36} color="#5A6620" />
      </FloatItem>
    </>
  );
}

export function SectionFloatingDecorations({ side = "right" }: { side?: "left" | "right" }) {
  if (side === "right") {
    return (
      <>
        <FloatItem x="85%" y="20%" delay={0} duration={4} amplitude={14}>
          <SparkleShape size={34} />
        </FloatItem>
        <FloatItem x="92%" y="60%" delay={1} duration={5} amplitude={10}>
          <StarShape size={28} />
        </FloatItem>
      </>
    );
  }
  return (
    <>
      <FloatItem x="3%" y="30%" delay={0.5} duration={4.5} amplitude={14}>
        <BlobShape size={36} />
      </FloatItem>
      <FloatItem x="8%" y="70%" delay={1.2} duration={3.8} amplitude={10}>
        <TriangleShape size={28} />
      </FloatItem>
    </>
  );
}
