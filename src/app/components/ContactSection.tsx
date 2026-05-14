import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t, gc } from "../styles/glassStyles";

const BehanceIcon = ({ size = 24, color = "currentColor", ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-10.74-2.822c.677-.282 1.08-.85 1.08-1.614 0-1.246-1.026-2.023-2.616-2.023H3.66v12.92h6.477c1.82 0 2.92-1.002 2.92-2.348 0-.962-.572-1.66-1.797-1.935M8.883 14.864H5.807v-2.18h3.076c.79 0 1.258.337 1.258.98 0 .805-.595 1.2-1.258 1.2m-.265-3.884H5.807V9.068h2.811c.71 0 1.155.305 1.155.885 0 .684-.555.98-1.155 1.027m11.162 2.902h-4.383c.063 1.144 1.01 1.57 1.83 1.57.85 0 1.39-.304 1.63-.83h2.003c-.317 1.503-1.615 2.396-3.616 2.396-2.52 0-3.83-1.785-3.83-4.048 0-2.31 1.34-4.07 3.844-4.07 2.455 0 3.655 1.705 3.655 4.027 0 .34-.033.68-.13 1.028m-4.36-1.482h2.443c-.1-1.023-.834-1.633-1.678-1.633-.907 0-1.583.567-1.678 1.633h.913M14.654 7.42h4.522v1.442h-4.522z" />
  </svg>
);

const socials = [
  { icon: Linkedin, label: "LinkedIn", displayTarget: "Profile", url: "https://www.linkedin.com/in/bhuvaneshkumar-s-745a871a4/", color: "#0A66C2" },
  { icon: Github, label: "GitHub", displayTarget: "BhuviBK", url: "https://github.com/BhuviBK", color: "#2C2C2C" },
  { icon: BehanceIcon, label: "Behance", displayTarget: "Portfolio", url: "https://www.behance.net/bhuvanbhuvan8", color: "#1769FF" },
  { icon: Mail, label: "Email", displayTarget: "Mail to", url: "mailto:bhuvanesh.87.kumar@gmail.com", color: "#7B8C2E" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};



export function ContactSection() {
  const { isGlass } = useTheme();
  const s = t(isGlass);

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: isGlass ? "transparent" : "#ffffff", fontFamily: "'Nunito', sans-serif" }}
    >
      {!isGlass && (
        <>
          <div className="absolute -top-20 -right-20 pointer-events-none rounded-full opacity-20" style={{ width: 400, height: 400, background: "#A8C042", filter: "blur(60px)" }} />
          <div className="absolute -bottom-20 -left-20 pointer-events-none rounded-full opacity-15" style={{ width: 350, height: 350, background: "#D4E877", filter: "blur(60px)" }} />
        </>
      )}

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="flex flex-col items-center gap-10">

          {/* Header */}
          {/* <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 text-center">
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, borderRadius: 10, padding: "3px 14px", ...s.tag }}>
              ✦ Say Hello
            </span>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(30px, 4vw, 52px)", color: "#2C2C2C", lineHeight: 1.2, margin: 0 }}>
              Let's Work Together!
            </h2>
            <div className="rounded-full" style={{ width: 60, height: 5, ...s.rule }} />
          </motion.div> */}



          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-5 w-full">
            <span style={{ fontWeight: 700, fontSize: 14, color: "#888" }}> connect on social </span>
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={isGlass ? { y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.12)" } : { y: -5, boxShadow: "6px 6px 0 #2C2C2C" }}
                  whileTap={{ y: 0 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl no-underline"
                  style={{ ...s.card, borderRadius: 16, transition: "box-shadow 0.15s", textDecoration: "none" }}
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={s.iconBg}>
                    <social.icon size={16} strokeWidth={2.5}
                      color={isGlass && social.label === "Email" ? gc.mid : social.color} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: "#2C2C2C" }}>{social.label}</div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: 12, color: "#888" }}>{social.displayTarget}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
