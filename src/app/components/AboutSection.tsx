import image_b5f7c65cbf877b7a2a7c3be619c673ad6815429a from 'figma:asset/b5f7c65cbf877b7a2a7c3be619c673ad6815429a.png'
import { motion } from "motion/react";
import { MapPin, Briefcase, Layers, CheckCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t, gc } from "../styles/glassStyles";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PROFILE_PHOTO = "https://images.unsplash.com/photo-1545112969-bdd91ef544c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZGlhbiUyMG1hbGUlMjBwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMGhlYWRzaG90fGVufDF8fHx8MTc3MjQzMTE3NHww&ixlib=rb-4.1.0&q=80&w=1080";

const BIO_TEXT =
  "I'm a UI Designer with 3+ years of experience in building applications, dashboards and conversational UIs with strategies to user-specific solutions, design systems, and creating high-fidelity UI in Figma. My passion lies at the intersection of Product Design and seamless user experiences — from early wireframes all the way to polished, developer-ready design systems.";

const infoCards = [
  { icon: MapPin,       label: "Location",   value: "Creative Tamilnadu" },
  { icon: Briefcase,    label: "Experience", value: "3+ Years in UI/UX"  },
  { icon: Layers,       label: "Specialty",  value: "14+ UI Designs, Graphic Design" },
  { icon: CheckCircle,  label: "Status",     value: "Available ✦"        },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function AboutSection() {
  const { isGlass } = useTheme();
  const s = t(isGlass);

  return (
    <section
      id="about"
      className="relative pt-10 pb-24 overflow-hidden"
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT: Profile photo ── */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Photo card */}
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    width: 300, height: 370,
                    border: isGlass ? "1px solid rgba(255,255,255,0.55)" : "4px solid #2C2C2C",
                    boxShadow: isGlass
                      ? "0 16px 48px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.7)"
                      : "8px 8px 0 #2C2C2C",
                    position: "relative",
                    backdropFilter: isGlass ? "blur(4px)" : undefined,
                  }}
                >
                  <ImageWithFallback
                    src={image_b5f7c65cbf877b7a2a7c3be619c673ad6815429a}
                    alt="Bhuvanesh — UI Designer"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  />

                  {/* Frosted overlay at bottom */}
                  
                </div>

                {/* Floating badge — top-right */}
                

                {/* Experience chip — bottom-left */}
                
              </div>
            </motion.div>

            {/* ── RIGHT: Bio + Info cards ── */}
            <div className="flex flex-col gap-6">

              {/* Bio text card */}
              <motion.div variants={itemVariants}>
                <div className="rounded-2xl p-6" style={{ ...s.card, borderRadius: 20 }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: isGlass ? "rgba(80,88,115,0.55)" : "#7B8C2E" }} />
                    <span style={{ fontWeight: 800, fontSize: 12, color: isGlass ? gc.light : "#7B8C2E" }}>
                      About Me
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: 14, color: isGlass ? "#3d4258" : "#444", lineHeight: 1.75, margin: 0 }}>
                    {BIO_TEXT}
                  </p>
                </div>
              </motion.div>

              {/* Info cards grid */}
              <motion.div variants={containerVariants} className="grid grid-cols-2 gap-3">
                {infoCards.map((card) => (
                  <motion.div
                    key={card.label}
                    variants={itemVariants}
                    whileHover={isGlass ? { y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" } : { y: -4, boxShadow: "7px 7px 0 #2C2C2C" }}
                    className="rounded-2xl p-4 flex flex-col gap-2"
                    style={{ ...s.card, cursor: "default", transition: "box-shadow 0.2s, transform 0.2s", borderRadius: 16 }}
                  >
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={s.iconBg}>
                      <card.icon size={15} strokeWidth={2.5} color={isGlass ? gc.mid : "#3D4A18"} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: 11, color: "#888" }}>{card.label}</span>
                    <span style={{ fontWeight: 800, fontSize: 13, color: "#2C2C2C", lineHeight: 1.3 }}>{card.value}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Download CV */}
              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={isGlass ? { y: -3, boxShadow: "0 8px 28px rgba(0,0,0,0.24)" } : { y: -3, boxShadow: "7px 7px 0 #2C2C2C" }}
                  whileTap={isGlass ? { y: 1 } : { y: 1, boxShadow: "2px 2px 0 #2C2C2C" }}
                  className="w-full py-4 rounded-2xl"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 16, cursor: "pointer", transition: "box-shadow 0.18s, transform 0.18s", borderRadius: 16, ...s.btnPrimary }}
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  Download CV ↓
                </motion.button>
              </motion.div>
            </div>
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
