import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t, gc } from "../styles/glassStyles";

const projects = [
  { id: 1, tag: "Mobile App",  title: "Project Title One",   desc: "[ Add project description — UI/UX case study, user flow, wireframes ]",         chips: ["Figma", "UX Research", "Prototyping"], accent: "#7B8C2E", bg: "#F2F6DB" },
  { id: 2, tag: "Web Design",  title: "Project Title Two",   desc: "[ Add project description — branding, design system, responsive layout ]",      chips: ["Design System", "Branding", "Figma"],   accent: "#5A6620", bg: "#EFF2D8" },
  { id: 3, tag: "Dashboard",   title: "Project Title Three", desc: "[ Add project description — data viz, dashboard, interaction design ]",          chips: ["Data Viz", "Dashboard", "UX"],          accent: "#7B8C2E", bg: "#F2F6DB" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectCard({ project, isGlass }: { project: typeof projects[0]; isGlass: boolean }) {
  const s = t(isGlass);
  return (
    <motion.div
      variants={cardVariants}
      whileHover={isGlass
        ? { y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.14)" }
        : { y: -8, boxShadow: "10px 10px 0 #2C2C2C" }}
      className="rounded-3xl overflow-hidden flex flex-col"
      style={{ ...s.card, borderRadius: 24, transition: "box-shadow 0.22s, transform 0.22s", cursor: "pointer" }}
    >
      {/* Image area */}
      <div
        className="relative flex items-center justify-center"
        style={{
          height: 200,
          background: isGlass ? "rgba(255,255,255,0.14)" : project.bg,
          borderBottom: isGlass ? "1px solid rgba(255,255,255,0.38)" : "3.5px solid #2C2C2C",
        }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 200" preserveAspectRatio="none">
          {[50,100,150].map(y => <line key={y} x1="0" y1={y} x2="300" y2={y} stroke={isGlass ? "#6070a0" : "#7B8C2E"} strokeWidth="1.5" />)}
          {[75,150,225].map(x => <line key={x} x1={x} y1="0" x2={x} y2="200" stroke={isGlass ? "#6070a0" : "#7B8C2E"} strokeWidth="1.5" />)}
        </svg>
        {/* Placeholder */}
        <div className="flex flex-col items-center justify-center rounded-2xl px-6 py-4 z-10"
          style={isGlass
            ? { background: "rgba(255,255,255,0.35)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.60)" }
            : { background: "rgba(255,255,255,0.8)", border: "2.5px dashed #A8C042", backdropFilter: "blur(4px)" }}>
          <span style={{ fontSize: 32 }}>🖼</span>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 12, color: isGlass ? gc.light : "#7B8C2E", marginTop: 4 }}>
            [ Project Screenshot ]
          </span>
        </div>
        {/* Tag pill */}
        <div className="absolute top-3 left-3 rounded-xl px-3 py-1"
          style={isGlass
            ? { background: "rgba(255,255,255,0.50)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.65)", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 12, color: gc.dark }
            : { background: "#D4E877", border: "2.5px solid #2C2C2C", boxShadow: "3px 3px 0 #2C2C2C", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 12, color: "#2C2C2C" }}>
          {project.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 20, color: "#2C2C2C", margin: 0 }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: 13, color: "#888", margin: 0, lineHeight: 1.5 }}>
          {project.desc}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.chips.map((chip) => (
            <span key={chip}
              style={isGlass
                ? { fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 12, color: gc.mid, background: "rgba(255,255,255,0.42)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.58)", borderRadius: 8, padding: "2px 10px" }
                : { fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 12, color: "#5A6620", background: "#F2F6DB", border: "2px solid #A8C042", borderRadius: 8, padding: "2px 10px" }}>
              {chip}
            </span>
          ))}
        </div>

        {/* View button */}
        <div className="mt-auto pt-3">
          <motion.button whileHover={{ x: 3 }}
            className="flex items-center gap-1"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: isGlass ? gc.mid : project.accent, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            View Case Study <ArrowUpRight size={16} strokeWidth={3} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const { isGlass } = useTheme();
  const s = t(isGlass);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
      style={{ background: isGlass ? "transparent" : "#F2F6DB", fontFamily: "'Nunito', sans-serif" }}
    >
      {!isGlass && (
        <div className="absolute inset-0 pointer-events-none opacity-15"
          style={{ backgroundImage: "radial-gradient(circle, #7B8C2E 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
      )}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>

          {/* Header */}
          <motion.div variants={cardVariants} className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div className="flex flex-col gap-3">
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, borderRadius: 10, padding: "3px 14px", display: "inline-block", ...s.tag }}>
                ✦ My Work
              </span>
              <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(30px, 4vw, 48px)", color: "#2C2C2C", lineHeight: 1.2, margin: 0 }}>
                Featured Projects
              </h2>
              <div className="rounded-full" style={{ width: 60, height: 5, ...s.rule }} />
            </div>
            <motion.button
              whileHover={isGlass ? { y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" } : { y: -3, boxShadow: "6px 6px 0 #2C2C2C" }}
              whileTap={isGlass ? { y: 1 } : { y: 1, boxShadow: "2px 2px 0 #2C2C2C" }}
              className="px-6 py-3 rounded-xl"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer", borderRadius: 14, ...s.btnSecondary }}>
              See All →
            </motion.button>
          </motion.div>

          {/* Cards */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} isGlass={isGlass} />
            ))}
          </motion.div>

          {/* Add more placeholder */}
          <motion.div variants={cardVariants} className="mt-6">
            <motion.div
              whileHover={isGlass ? { y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" } : { y: -4, boxShadow: "7px 7px 0 #2C2C2C" }}
              className="rounded-3xl p-6 flex items-center justify-center gap-4 cursor-pointer"
              style={isGlass
                ? { background: "rgba(255,255,255,0.16)", backdropFilter: "blur(14px)", border: "1.5px dashed rgba(255,255,255,0.45)", transition: "box-shadow 0.18s" }
                : { background: "transparent", border: "3px dashed #A8C042", transition: "box-shadow 0.18s" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={s.iconBg}>
                <span style={{ fontSize: 20, color: isGlass ? gc.mid : undefined }}>＋</span>
              </div>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: isGlass ? gc.mid : "#7B8C2E" }}>
                [ Add More Projects Here ]
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
