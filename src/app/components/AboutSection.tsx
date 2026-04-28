
import { motion } from "motion/react";
import { MapPin, Briefcase, Layers, CheckCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t, gc } from "../styles/glassStyles";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import PROFILE_PHOTO from "../../resource/me.jpg";

const BIO_TEXT =
  "I’m a UI Designer with 3+ years of experience designing applications, dashboards, and conversational interfaces that turn complex problems into intuitive, user-friendly experiences. I focus on creating user-centric solutions, building scalable design systems, and crafting high-fidelity interfaces in Figma that are ready for seamless developer handoff. I enjoy experimenting with building real products and have hosted 3+ real-time applications using Vibecode that solve everyday challenges for designers and users.";

const infoCards = [
  { icon: MapPin, label: "Location", value: "Chennai, Tamilnadu" },
  { icon: Briefcase, label: "Experience", value: "4+ Years in UI/UX" },
  { icon: Layers, label: "Specialty", value: "Conversational UX, Vibe coding, Design Systems, AI Tools" },
  { icon: CheckCircle, label: "Status", value: "Available ✦" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

export function AboutSection() {
  const { isGlass } = useTheme();
  const s = t(isGlass);

  return (
    <section
      id="about"
      className="relative py-16 overflow-hidden"
      style={{
        background: isGlass ? "transparent" : "linear-gradient(180deg, #EBF2D0 0%, #E8F0CA 40%, #F2F6DB 100%)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {!isGlass && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #A8C042 1.4px, transparent 1.4px)", backgroundSize: "32px 32px", opacity: 0.18 }} />
      )}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>

          {/* ── Section header ── */}
          <motion.div variants={itemVariants} className="flex flex-col items-start gap-3 mb-10">
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, borderRadius: 10, padding: "3px 14px", ...s.tag }}>
              ✦ Who I Am
            </span>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(30px, 4vw, 48px)", color: "#2C2C2C", lineHeight: 1.2, margin: 0 }}>
              About Me
            </h2>
            <div className="rounded-full" style={{ width: 60, height: 5, ...s.rule }} />
          </motion.div>

          <div className="flex flex-col gap-4">

            {/* ── TOP: Profile Photo + Info Grid ── */}
            <div className="grid lg:grid-cols-3 gap-4 items-stretch">

              {/* Left Column: Profile photo (Spans 1/3) */}
              <motion.div variants={itemVariants} className="lg:col-span-1 h-full">
                <div
                  className="rounded-3xl overflow-hidden h-full"
                  style={{
                    width: "100%",
                    minHeight: 220,
                    maxHeight: 280,
                    border: isGlass ? "1px solid rgba(255,255,255,0.55)" : "4px solid #2C2C2C",
                    boxShadow: isGlass
                      ? "0 16px 48px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.7)"
                      : "8px 8px 0 #2C2C2C",
                    position: "relative",
                    backdropFilter: isGlass ? "blur(4px)" : undefined,
                  }}
                >
                  <ImageWithFallback
                    src={PROFILE_PHOTO}
                    alt="Bhuvanesh — UI Designer"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  />
                </div>
              </motion.div>

              {/* Right Column: Info Cards (Spans 2/3) */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoCards.map((card) => (
                  <motion.div
                    key={card.label}
                    variants={itemVariants}
                    whileHover={isGlass ? { y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" } : { y: -4, boxShadow: "7px 7px 0 #2C2C2C" }}
                    className="rounded-2xl p-4 flex flex-col gap-2"
                    style={{ ...s.card, cursor: "default", transition: "box-shadow 0.2s, transform 0.2s", borderRadius: 16 }}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={s.iconBg}>
                      <card.icon size={16} strokeWidth={2.5} color={isGlass ? gc.mid : "#3D4A18"} />
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: 11, color: "#888", display: "block", marginBottom: 2 }}>{card.label}</span>
                      <span style={{ fontWeight: 800, fontSize: 14, color: "#2C2C2C", lineHeight: 1.3 }}>{card.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── MIDDLE: Bio text card ── */}
            <motion.div variants={itemVariants}>
              <div className="rounded-2xl p-6" style={{ ...s.card, borderRadius: 20 }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: isGlass ? "rgba(80,88,115,0.55)" : "#7B8C2E" }} />
                  <span style={{ fontWeight: 800, fontSize: 12, color: isGlass ? gc.light : "#7B8C2E" }}>
                    Hey there !
                  </span>
                </div>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: 14, color: isGlass ? "#3d4258" : "#444", lineHeight: 1.75, margin: 0 }}>
                  {BIO_TEXT}
                </p>
              </div>
            </motion.div>



          </div>
        </motion.div>
      </div>

      {/* Wave — illustration only */}
      {!isGlass && (
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" width="100%" height="70" style={{ display: "block" }}>
            <path d="M0,30 C300,70 600,0 900,40 C1100,65 1280,15 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </div>
      )}
    </section>
  );
}
