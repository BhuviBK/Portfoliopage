import { motion } from "motion/react";
import { Figma, Bot, Layers, Code2, MessageSquare, LayoutGrid } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t, gc } from "../styles/glassStyles";

const skills = [
  { icon: Figma, label: "Figma", level: 90, color: "#7B8C2E" },
  { icon: Bot, label: "Vibe Coding - ClaudeAI, Cloudflare", level: 85, color: "#A8C042" },
  { icon: Layers, label: "Prototyping & Wireframing", level: 60, color: "#5A6620" },
  { icon: Code2, label: "Dev- Angular", level: 50, color: "#7B8C2E" },
  { icon: MessageSquare, label: "Conversational UX", level: 88, color: "#A8C042" },
  { icon: LayoutGrid, label: "Design Systems", level: 78, color: "#5A6620" },
];

const toolTags = [
  "Figma", "Angular", "Premiere Pro", "Photoshop",
  "Figma make", "Claude AI", "Vs Code", "Design System",
  "Antigravity", "Protopie",
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

function SkillBar({
  skill,
  index,
  isGlass,
}: {
  skill: (typeof skills)[0];
  index: number;
  isGlass: boolean;
}) {
  const s = t(isGlass);
  return (
    <motion.div
      variants={itemVariants}
      whileHover={isGlass ? { y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" } : { y: -3, boxShadow: "7px 7px 0 #2C2C2C" }}
      className="rounded-2xl p-4"
      style={{ ...s.card, borderRadius: 16, transition: "box-shadow 0.2s, transform 0.2s" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={s.iconBg}>
          <skill.icon size={18} strokeWidth={2.5} color={isGlass ? gc.mid : "#3D4A18"} />
        </div>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: "#2C2C2C", flex: 1 }}>
          {skill.label}
        </span>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 15, color: isGlass ? gc.mid : "#7B8C2E" }}>
          {skill.level}%
        </span>
      </div>

      {/* Track */}
      <div
        className="rounded-full overflow-hidden"
        style={{
          height: 12,
          background: isGlass ? "rgba(255,255,255,0.22)" : "#F2F6DB",
          border: isGlass ? "1px solid rgba(255,255,255,0.40)" : "2.5px solid #2C2C2C",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.08 * index, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: isGlass ? gc.bar : skill.color }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const { isGlass } = useTheme();
  const s = t(isGlass);

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
      style={{ background: isGlass ? "transparent" : "#ffffff", fontFamily: "'Nunito', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>

          {/* Section header */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-14 text-center">
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, borderRadius: 10, padding: "3px 14px", ...s.tag }}>
              ✦ My Toolkit
            </span>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(30px, 4vw, 48px)", color: "#2C2C2C", lineHeight: 1.2, margin: 0 }}>
              Skills & Expertise
            </h2>
            <div className="rounded-full mx-auto" style={{ width: 60, height: 5, ...s.rule }} />
          </motion.div>

          {/* 2-column skill bars */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-4 mb-12">
            {skills.map((skill, i) => (
              <SkillBar key={skill.label} skill={skill} index={i} isGlass={isGlass} />
            ))}
          </motion.div>

          {/* Tools tag cloud */}
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl px-6 py-5" style={{ ...s.accentCard, borderRadius: 24 }}>
              <div className="flex items-center gap-2 mb-4">
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: isGlass ? gc.mid : "#5A6620" }}>
                  🛠 Tools I Use
                </span>
              </div>
              <motion.div variants={containerVariants} className="flex flex-wrap gap-3 items-center justify-center">
                {toolTags.filter(tool => tool !== "Protopie").map((tool, i) => (
                  <motion.span
                    key={tool}
                    variants={itemVariants}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="px-4 py-2 rounded-xl cursor-default"
                    style={isGlass
                      ? {
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 800,
                        fontSize: 14,
                        display: "inline-block",
                        color: "#ffffff",
                        background: "rgba(22,26,40,0.72)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.52)",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                      }
                      : {
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 800,
                        fontSize: 14,
                        display: "inline-block",
                        color: "#ffffff",
                        background: "#7B8C2E",
                        border: "2.5px solid #2C2C2C",
                        boxShadow: "3px 3px 0 #2C2C2C",
                      }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}