import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t, gc } from "../styles/glassStyles";

const socials = [
  { icon: Linkedin, label: "LinkedIn", displayTarget: "Profile", url: "https://www.linkedin.com/in/bhuvaneshkumar-s-745a871a4/", color: "#0A66C2" },
  { icon: Github, label: "GitHub", displayTarget: "BhuviBK", url: "https://github.com/BhuviBK", color: "#2C2C2C" },
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
