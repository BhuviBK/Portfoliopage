import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../styles/glassStyles";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import expenseTrackerImg from "../../assets/expense_tracker_v2.png";
import grocersImg from "../../assets/grocers.jpg";

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
    link: "/expense-tracker-case-study",
    isWIP: false
  },
  { 
    id: 2, 
    tag: "Mobile App", 
    title: "Grocers", 
    desc: "[ A Grocery app from where user can easily buy a same quantity for a specific dish ]", 
    chips: ["Figma", "Google form", "Claude"], 
    accent: "#7B8C2E", 
    bg: "#F2F6DB",
    image: grocersImg,
    link: "https://docs.google.com/presentation/d/1uy3F9QwAtGHDAp0rN9Zjjd6nkx9-swdl/edit?usp=sharing&ouid=100693791647977722434&rtpof=true&sd=true",
    isWIP: false
  },
  { 
    id: 3, 
    tag: "Dashboard", 
    title: "Project Title Three", 
    desc: "Work in Progress (90% complete)", 
    chips: ["Data Viz", "Dashboard", "UX"], 
    accent: "#7B8C2E", 
    bg: "#F2F6DB",
    image: null,
    link: "#",
    isWIP: true
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

const transitionStyle = "box-shadow 0.22s, transform 0.22s";

function ProjectCard({ project, isGlass }: { project: any, isGlass: boolean }) {
  const s = t(isGlass);
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

        </motion.div>
      </div>
    </section>
  );
}
