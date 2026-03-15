import { motion } from "motion/react";
import { Mail, Linkedin, Twitter, Github, Send } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { t, gc } from "../styles/glassStyles";

const socials = [
  { icon: Linkedin, label: "LinkedIn", handle: "@yourhandle", color: "#0A66C2" },
  { icon: Twitter,  label: "Twitter",  handle: "@yourhandle", color: "#1DA1F2" },
  { icon: Github,   label: "GitHub",   handle: "@yourhandle", color: "#2C2C2C" },
  { icon: Mail,     label: "Email",    handle: "hello@you.com", color: "#7B8C2E" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/** Reusable frosted input placeholder */
function FakeField({ isGlass, height = 12 }: { isGlass: boolean; height?: number }) {
  return (
    <div style={isGlass
      ? { height, borderRadius: 12, background: "rgba(255,255,255,0.30)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.55)" }
      : { height, borderRadius: 12, background: "#ffffff", border: "2.5px solid #A8C042" }} />
  );
}

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
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 text-center">
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, borderRadius: 10, padding: "3px 14px", ...s.tag }}>
              ✦ Say Hello
            </span>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(30px, 4vw, 52px)", color: "#2C2C2C", lineHeight: 1.2, margin: 0 }}>
              Let's Work Together!
            </h2>
            <div className="rounded-full" style={{ width: 60, height: 5, ...s.rule }} />
            <p style={{ fontWeight: 600, fontSize: 16, color: "#666", maxWidth: 480, lineHeight: 1.6, margin: 0 }}>
              [ Add your contact intro — available for freelance, collaborations, or full-time roles ]
            </p>
          </motion.div>

          {/* Contact form wireframe */}
          <motion.div variants={itemVariants} className="w-full rounded-3xl p-8" style={{ ...s.accentCard, borderRadius: 24 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ background: isGlass ? "rgba(80,88,115,0.55)" : "#7B8C2E" }} />
              <span style={{ fontWeight: 800, fontSize: 13, color: isGlass ? gc.light : "#7B8C2E" }}>
                [ Contact Form — Add form fields ]
              </span>
            </div>

            {/* Name + Email row */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {["Name", "Email"].map((f) => (
                <div key={f} className="flex flex-col gap-2">
                  <div className="h-3 w-16 rounded-full" style={{ background: isGlass ? "rgba(130,138,165,0.45)" : "#A8C042" }} />
                  <FakeField isGlass={isGlass} height={48} />
                </div>
              ))}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2 mb-4">
              <div className="h-3 w-20 rounded-full" style={{ background: isGlass ? "rgba(130,138,165,0.45)" : "#A8C042" }} />
              <FakeField isGlass={isGlass} height={48} />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 mb-6">
              <div className="h-3 w-20 rounded-full" style={{ background: isGlass ? "rgba(130,138,165,0.45)" : "#A8C042" }} />
              <FakeField isGlass={isGlass} height={128} />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={isGlass ? { y: -3, boxShadow: "0 8px 28px rgba(0,0,0,0.26)" } : { y: -3, boxShadow: "7px 7px 0 #2C2C2C" }}
              whileTap={isGlass ? { y: 1 } : { y: 1, boxShadow: "2px 2px 0 #2C2C2C" }}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 16, cursor: "pointer", borderRadius: 16, ...s.btnPrimary }}>
              <Send size={18} strokeWidth={2.5} />
              Send Message
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-5 w-full">
            <span style={{ fontWeight: 700, fontSize: 14, color: "#888" }}>or connect on social ↓</span>
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
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
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: 12, color: "#888" }}>{social.handle}</div>
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
