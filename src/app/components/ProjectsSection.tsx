import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../styles/glassStyles";
import { Link } from "react-router-dom";
import { ArrowUpRight, Lock, ShieldCheck, RefreshCw, MessageSquareText, UserRoundCheck } from "lucide-react";
import expenseTrackerImg from "../../assets/expense_tracker_v2.png";
import grocersImg from "../../assets/grocers.jpg";

const enterpriseBullets = [
  { icon: ShieldCheck, text: "Some of my recent UI/UX work cannot be displayed publicly due to client confidentiality agreements." },
  { icon: RefreshCw, text: "This portfolio is Old and currently being updated with public case studies." },
  { icon: MessageSquareText, text: "I'd be happy to walk you through my latest enterprise dashboards, design systems, and end-to-end product design process during a short conversation." },
  { icon: UserRoundCheck, text: "Looking forward to connecting with you." },
];

const projects = [
  {
    id: 1,
    tag: "Tracker",
    title: "Expense Tracker",
    desc: "[ Everyday Task All-in-One Life Companion - Build with AI-Vibecode with Supabase Backend ]",
    chips: ["Figma", "Vibe code", "Supabase", "Loveable ai"],
    accent: "#7B8C2E",
    bg: "#F2F6DB",
    image: expenseTrackerImg,
    link: "https://docs.google.com/presentation/d/1Oo1qjhkbqx6CsZR3PA6mVx0CQ5jM7uPv/edit?slide=id.p1#slide=id.p1",
    isWIP: false,
    isDummy: false
  },
  {
    id: 2,
    tag: "UX research",
    title: "Dashboard",
    desc: "[Enterprise PMO Dashboard – A centralized dashboard designed to help Project Management Offices (PMOs) monitor overall project health, track pending and urgent tasks, and improve operational visibility. ]",
    chips: ["Figma", "User interviews", "Wireframe", "Usablility Testing"],
    accent: "#7B8C2E",
    bg: "#F2F6DB",
    image: grocersImg,
    link: "https://www.figma.com/slides/tkYgE9Z0wU6xVJ8MVgXj1X",
    isWIP: false,
    isDummy: false
  },
  {
    id: 3,
    tag: "Dashboard",
    title: "Enterprise Projects",
    desc: "",
    chips: [],
    accent: "#7B8C2E",
    bg: "#F2F6DB",
    image: null,
    link: "#",
    isWIP: false,
    isDummy: true
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

const transitionStyle = "box-shadow 0.22s, transform 0.22s";

/* ── Lock icon SVG with decorative sparkles ── */
function LockIcon() {
  return (
    <div className="flex flex-col items-center justify-center" style={{ position: "relative" }}>
      {/* Sparkle dots */}
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)" }}>
        <circle cx="18" cy="22" r="2.5" fill="#CADB7F" />
        <circle cx="82" cy="22" r="2.5" fill="#CADB7F" />
        <circle cx="50" cy="6" r="2" fill="#CADB7F" />
        {/* small lines */}
        <line x1="14" y1="38" x2="8" y2="44" stroke="#CADB7F" strokeWidth="2" strokeLinecap="round" />
        <line x1="86" y1="38" x2="92" y2="44" stroke="#CADB7F" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <Lock size={56} strokeWidth={1.6} color="#7B8C2E" style={{ opacity: 0.85 }} />
    </div>
  );
}

/* ── Dummy / Enterprise card ── */
function DummyCard({ project, isGlass }: { project: any; isGlass: boolean }) {
  const s = t(isGlass);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={isGlass
        ? { y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.14)" }
        : { y: -8, boxShadow: "10px 10px 0 #2C2C2C" }}
      className="rounded-3xl overflow-hidden border-2 h-full flex flex-col"
      style={{
        ...s.card,
        borderRadius: 32,
        transition: transitionStyle,
        borderColor: isGlass ? "rgba(255,255,255,0.2)" : "#2C2C2C",
        background: isGlass ? "rgba(255,255,255,0.05)" : "#F8FAF0",
      }}
    >
      {/* Top – lock illustration */}
      <div
        className="relative w-full flex items-center justify-center border-b-2 shrink-0"
        style={{
          height: 200,
          borderColor: isGlass ? "rgba(255,255,255,0.1)" : "#2C2C2C",
          background: isGlass ? "rgba(202,219,127,0.08)" : "#F2F6DB",
        }}
      >
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <div className="relative">
            {!isGlass && <div className="absolute inset-0 translate-x-1 translate-y-1 bg-[#2C2C2C] rounded-full" />}
            <span className="relative px-4 py-1.5 rounded-full text-sm font-black border-2 border-[#2C2C2C] bg-[#CADB7F] text-[#2C2C2C]">
              {project.tag}
            </span>
          </div>
        </div>
        <LockIcon />
      </div>

      {/* Bottom – title + bullets */}
      <div className="p-6 flex flex-col flex-grow gap-3" style={{ background: isGlass ? "transparent" : "white" }}>
        <h3
          className="text-2xl font-black text-[#2C2C2C] mb-1"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {project.title}
        </h3>

        <div className="flex flex-col gap-3">
          {enterpriseBullets.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border px-4 py-3"
                style={{
                  borderColor: isGlass ? "rgba(255,255,255,0.12)" : "#E8ECDA",
                  background: isGlass ? "rgba(255,255,255,0.04)" : "#FAFCF2",
                }}
              >
                <div
                  className="shrink-0 flex items-center justify-center rounded-lg"
                  style={{ width: 32, height: 32, background: "#F2F6DB", border: "1.5px solid #CADB7F" }}
                >
                  <Icon size={16} color="#7B8C2E" strokeWidth={2} />
                </div>
                <p className="text-sm text-gray-600 font-medium leading-snug m-0" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, isGlass }: { project: any, isGlass: boolean }) {
  const s = t(isGlass);

  /* Render the dummy enterprise card */
  if (project.isDummy) {
    return <DummyCard project={project} isGlass={isGlass} />;
  }

  const isExternal = project.link.startsWith('http');

  const innerContent = (
    <motion.div
      variants={cardVariants}
      whileHover={isGlass
        ? { y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.14)" }
        : { y: -8, boxShadow: "10px 10px 0 #2C2C2C" }}
      className="rounded-3xl overflow-hidden cursor-pointer border-2 h-full flex flex-col"
      style={{
        ...s.card,
        borderRadius: 32,
        transition: transitionStyle,
        borderColor: isGlass ? "rgba(255,255,255,0.2)" : "#2C2C2C",
        background: isGlass ? "rgba(255,255,255,0.05)" : "white"
      }}
    >
      {/* Top Section */}
      <div className="relative h-64 w-full overflow-hidden bg-[#F2F6DB] flex items-center justify-center border-b-2 shrink-0"
        style={{ borderColor: isGlass ? "rgba(255,255,255,0.1)" : "#2C2C2C" }}>
        {project.isWIP ? (
          <div className="flex flex-col items-center gap-2">
            <span style={{ fontSize: 48 }}>🚧</span>
          </div>
        ) : (
          project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        )}

        {/* Tag Overlay */}
        <div className="absolute top-4 left-4">
          <div className="relative">
            {!isGlass && <div className="absolute inset-0 translate-x-1 translate-y-1 bg-[#2C2C2C] rounded-full" />}
            <span className="relative px-4 py-1.5 rounded-full text-sm font-black border-2 border-[#2C2C2C] bg-[#CADB7F] text-[#2C2C2C]">
              {project.tag}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-8 flex flex-col flex-grow gap-4">
        <h3 className="text-3xl font-black text-[#2C2C2C]" style={{ fontFamily: "'Nunito', sans-serif" }}>
          {project.title}
        </h3>

        <p className="text-gray-500 font-medium leading-relaxed">
          {project.desc}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.chips.map((chip: string) => (
              <span key={chip} className="px-4 py-1.5 rounded-2xl text-xs font-bold border-2 border-[#CADB7F] bg-[#F2F6DB] text-[#7B8C2E]">
                {chip}
              </span>
            ))}
          </div>

          {!project.isWIP && (
            <div className="flex items-center gap-2 font-black text-[#7B8C2E] text-lg hover:gap-3 transition-all">
              View Case Study <ArrowUpRight size={22} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return isExternal ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="h-full block" style={{ textDecoration: 'none' }}>
      {innerContent}
    </a>
  ) : (
    <Link to={project.link} target="_blank" rel="noopener noreferrer" className="h-full block" style={{ textDecoration: 'none' }}>
      {innerContent}
    </Link>
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
            <div className="flex flex-col items-start gap-3">
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, borderRadius: 10, padding: "3px 14px", display: "inline-block", ...s.tag }}>
                ✦ My Work
              </span>
              <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(30px, 4vw, 48px)", color: "#2C2C2C", lineHeight: 1.2, margin: 0 }}>
                Featured Projects
              </h2>
              <div className="rounded-full" style={{ width: 60, height: 5, ...s.rule }} />
            </div>
            {/* <motion.button
              whileHover={isGlass ? { y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" } : { y: -3, boxShadow: "6px 6px 0 #2C2C2C" }}
              whileTap={isGlass ? { y: 1 } : { y: 1, boxShadow: "2px 2px 0 #2C2C2C" }}
              className="px-6 py-3 rounded-xl"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer", borderRadius: 14, ...s.btnSecondary }}>
              See All →
            </motion.button> */}
          </motion.div>

          {/* Cards */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} isGlass={isGlass} />
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
