/**
 * Shared style tokens for both themes.
 * G = Glass theme  |  I = Illustration (neo-brutalist) theme
 */

export type Theme = "illustration" | "glass";

/** ─── GLASS TOKEN SET ───────────────────────────────────────────────── */
export const G = {
  /** Frosted white card — high translucency */
  card: {
    background: "rgba(255, 255, 255, 0.22)",
    backdropFilter: "blur(28px)",
    WebkitBackdropFilter: "blur(28px)",
    border: "1px solid rgba(255, 255, 255, 0.55)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
  },
  /** Slightly denser frosted card */
  accentCard: {
    background: "rgba(255, 255, 255, 0.14)",
    backdropFilter: "blur(28px)",
    WebkitBackdropFilter: "blur(28px)",
    border: "1px solid rgba(255, 255, 255, 0.40)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.55)",
  },
  /** Primary CTA — dark charcoal glass */
  btnPrimary: {
    background: "rgba(22, 26, 40, 0.80)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
    color: "#ffffff",
  },
  /** Secondary CTA — white glass */
  btnSecondary: {
    background: "rgba(255, 255, 255, 0.30)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.60)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    color: "#1e2030",
  },
  /** Tag/badge — white glass, neutral text */
  tag: {
    background: "rgba(255, 255, 255, 0.35)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.60)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    color: "#3d4258",
  },
  /** Icon background pill */
  iconBg: {
    background: "rgba(255, 255, 255, 0.40)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.60)",
  },
  /** Section transparent passthrough */
  section: { background: "transparent" },
  /** Underline rule — dark charcoal */
  rule: { background: "rgba(40,45,65,0.35)", border: "none", opacity: 1 },
} as const;

/** ─── ILLUSTRATION TOKEN SET ────────────────────────────────────────── */
export const I = {
  card: {
    background: "#ffffff",
    border: "3px solid #2C2C2C",
    boxShadow: "5px 5px 0 #2C2C2C",
  },
  accentCard: {
    background: "#F2F6DB",
    border: "3px solid #2C2C2C",
    boxShadow: "5px 5px 0 #2C2C2C",
  },
  btnPrimary: {
    background: "#7B8C2E",
    border: "3px solid #2C2C2C",
    boxShadow: "5px 5px 0 #2C2C2C",
    color: "#ffffff",
  },
  btnSecondary: {
    background: "transparent",
    border: "3px solid #2C2C2C",
    boxShadow: "5px 5px 0 #2C2C2C",
    color: "#2C2C2C",
  },
  tag: {
    background: "#D4E877",
    border: "3px solid #2C2C2C",
    boxShadow: "3px 3px 0 #2C2C2C",
    color: "#5A6620",
  },
  iconBg: {
    background: "#D4E877",
    border: "2.5px solid #2C2C2C",
  },
  section: {},
  rule: { background: "#7B8C2E", border: "2px solid #2C2C2C" },
} as const;

/** Pick token set by theme */
export function t(isGlass: boolean) {
  return isGlass ? G : I;
}

/**
 * Glass-mode color replacements for all olive/green values.
 * Use: `color: isGlass ? gc.mid : "#7B8C2E"`
 */
export const gc = {
  dark:     "#1e2030",  // replaces #3D4A18 / #5A6620
  mid:      "#3d4258",  // replaces #7B8C2E
  light:    "#5a6278",  // replaces #A8C042
  muted:    "#8890a8",  // replaces secondary greens
  darkBtn:  "rgba(22,26,40,0.80)",
  bar:      "linear-gradient(90deg, rgba(50,55,78,0.70) 0%, rgba(80,86,108,0.50) 100%)",
  barBg:    "rgba(255,255,255,0.20)",
};
