import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ExpenseTrackerCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const screens = [
    {
      num: "01",
      label: "Home Dashboard",
      title: "Your daily command centre",
      sub: "At a glance — no switching apps",
      points: [
        { h: "Unified Overview", d: "Tasks and recent expenses visible on one screen — no context switching needed." },
        { h: "Today's Tasks Panel", d: "Instantly see pending work and add new tasks with a single click." },
        { h: "Recent Expenses Widget", d: "Live expense feed shows categories and amounts — total ₹7,652 visible immediately." },
        { h: "Smart Sidebar Navigation", d: "Groups Tasks, Wellbeing, and Account cleanly for one-click access to any module." }
      ],
      insight: "💡 One dashboard replaces 4+ separate apps for daily life management."
    },
    {
      num: "02",
      label: "Todo & Kanban",
      title: "Visual task tracking that keeps you on top",
      sub: "List view or Kanban — your workflow, your choice",
      points: [
        { h: "Dual View Modes", d: "Switch between List View and Kanban Board for flexible task management." },
        { h: "Kanban Workflow", d: "Move tasks across To Do → In Progress → Done in a visual drag-and-drop board." },
        { h: "Daily Reminders", d: "Automated 6 AM push reminders ensure no task slips through the cracks." },
        { h: "Motivation Banner", d: "Daily motivational quote keeps users engaged and focused on completing tasks." }
      ],
      insight: "💡 Kanban view mirrors professional PM tools — right inside your browser."
    },
    {
      num: "03",
      label: "Transactions & Budget",
      title: "Keep every penny accounted for",
      sub: "Categorized tracking for smarter spending",
      points: [
        { h: "Expense Categorization", d: "Sort spending into categories like Food, Rent, Fun for detailed reports." },
        { h: "Live Budget Meter", d: "Instantly see how much is left in your monthly budget with visual progress bars." },
        { h: "Statistical Insights", d: "Don't just track, understand. Identify your biggest spending leaks automatically." },
        { h: "Multi-Currency Support", d: "Record transactions in multiple currencies with live conversion rates." }
      ],
      insight: "💡 Users track 30% more of their spending when logging is this easy."
    },
    {
      num: "04",
      label: "Exercise Tracker",
      title: "Move more, feel better",
      sub: "Simple logging for your daily movement",
      points: [
        { h: "Quick Log", d: "Record your steps, gym sets, or yoga minutes in under 5 seconds." },
        { h: "Visual Progress", d: "Weekly bar charts show your activity trends and help you stay consistent." },
        { h: "Historical Archive", d: "Scroll back through months of workout history with detailed summaries." },
        { h: "Activity Goals", d: "Set daily movement targets and earn badges for reaching milestones." }
      ],
      insight: "💡 Physical health is the foundation of high productivity."
    },
    {
      num: "05",
      label: "Mood Journaling",
      title: "Check in with your mind",
      sub: "A safe space for reflection",
      points: [
        { h: "Mood Rating", d: "Choose a daily emoji that represents your current state of mind." },
        { h: "Journal Entries", d: "Rich text editor to add notes about your day, wins, or challenges." },
        { h: "Trend Spotting", d: "Automatic mood charts help you identify lifestyle patterns and triggers." },
        { h: "Safe & Private", d: "Local storage and encryption keep your private thoughts secure." }
      ],
      insight: "💡 5 minutes of journaling a day reduces stress levels by up to 25%."
    },
    {
      num: "06",
      label: "Account Settings",
      title: "Your app, your way",
      sub: "Customization and synchronization",
      points: [
        { h: "Cloud Backup", d: "Securely sync your data across devices so you never lose your progress." },
        { h: "Theme Selection", d: "Choose from Light, Dark, or System modes for the best visual experience." },
        { h: "Reminder Control", d: "Custom notifications for tasks, budget alerts, and wellbeing check-ins." },
        { h: "Export Data", d: "Take your data with you. Export logs to CSV or JSON formats anytime." }
      ],
      insight: "💡 Personalization ensures the app fits into your life, not the other way around."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F7F3] text-[#111A15] font-sans leading-relaxed selection:bg-[#52B788] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        :root {
          --green-dark:  #1B4332;
          --green-mid:   #2D6A4F;
          --green-bright:#52B788;
          --green-light: #95D5B2;
          --green-pale:  #D8F3DC;
          --green-bg:    #F1F7F3;
          --white:       #FFFFFF;
          --ink:         #111A15;
          --ink-mid:     #3D5A4F;
          --ink-light:   #6B8F7E;
          --serif: 'Fraunces', Georgia, serif;
          --sans:  'DM Sans', sans-serif;
        }

        .case-study-container {
          font-family: var(--sans);
        }

        .serif-font {
          font-family: var(--serif);
        }

        /* ── HERO ──────────────────────────────── */
        .hero {
          min-height: 100vh;
          background: var(--green-dark);
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
        }
        .hero__blob {
          position: absolute; width: 700px; height: 700px; border-radius: 50%;
          background: var(--green-mid); opacity: .3;
          top: -200px; right: -200px; pointer-events: none;
        }
        .hero__blob2 {
          position: absolute; width: 400px; height: 400px; border-radius: 50%;
          background: var(--green-bright); opacity: .1;
          bottom: -100px; left: 80px; pointer-events: none;
        }
        .hero__left {
          display: flex; flex-direction: column; justify-content: center;
          padding: 80px 60px; position: relative; z-index: 2;
        }
        .hero__eyebrow {
          font-family: var(--sans);
          font-size: 11px; font-weight: 600;
          letter-spacing: 4px; text-transform: uppercase;
          color: var(--green-bright); margin-bottom: 24px;
        }
        .hero__title {
          font-family: var(--serif); font-size: clamp(48px, 5vw, 72px); font-weight: 900;
          color: var(--white); line-height: 1.05; margin-bottom: 20px;
        }
        .hero__title em { font-style: italic; color: var(--green-light); }
        .hero__sub {
          font-size: 16px; color: var(--green-light); max-width: 420px;
          margin-bottom: 40px; font-weight: 300;
        }
        .hero__tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .tag {
          border: 1px solid var(--green-bright); color: var(--green-bright);
          font-size: 11px; font-weight: 500; letter-spacing: 1px;
          padding: 6px 14px; border-radius: 999px; text-transform: uppercase;
        }
        .hero__right {
          display: flex; align-items: center; justify-content: center;
          padding: 60px 40px 60px 0; position: relative; z-index: 2;
        }
        .hero__badge-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 380px;
        }
        .hero__badge {
          background: rgba(255, 255, 255, .06); border: 1px solid rgba(149, 213, 178, .2);
          border-radius: 16px; padding: 24px 20px;
        }
        .hero__badge-num {
          font-family: var(--serif); font-size: 42px; font-weight: 900;
          color: var(--green-bright); line-height: 1;
        }
        .hero__badge-label { font-size: 12px; color: var(--green-light); margin-top: 4px; }

        /* ── SECTION WRAPPER ───────────────────── */
        .section { padding: 100px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .section-label {
          font-size: 10px; letter-spacing: 5px; font-weight: 600; text-transform: uppercase;
          color: var(--green-bright); margin-bottom: 16px;
        }
        .section-title {
          font-family: var(--serif); font-size: clamp(32px, 3.5vw, 52px); font-weight: 900;
          line-height: 1.1; margin-bottom: 16px;
        }
        .section-sub {
          font-size: 16px; color: var(--ink-mid); max-width: 600px; font-weight: 300;
        }

        /* ── PROBLEM ───────────────────────────── */
        .problem-cards {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 60px;
        }
        .pcard {
          background: var(--white); border-radius: 20px; padding: 36px 28px;
          border-top: 4px solid var(--green-bright);
          box-shadow: 0 4px 32px rgba(27, 67, 50, .07);
        }
        .pcard__icon { font-size: 36px; margin-bottom: 16px; }
        .pcard__title { font-family: var(--serif); font-size: 22px; font-weight: 700; margin-bottom: 10px; color: var(--green-dark); }
        .pcard__desc { font-size: 14px; color: var(--ink-mid); line-height: 1.7; }

        .solution-banner {
          background: var(--green-mid); border-radius: 20px;
          padding: 32px 40px; margin-top: 48px;
          display: flex; align-items: center; gap: 20px;
          color: white;
        }

        /* ── SCREEN SECTIONS ───────────────────── */
        .screen-section { padding: 80px 0; border-bottom: 1px solid rgba(27, 67, 50, .08); }
        .screen-section:nth-child(even) .screen-layout { direction: rtl; }
        .screen-section:nth-child(even) .screen-layout > * { direction: ltr; }

        .screen-layout { display: grid; grid-template-columns: 1fr 1.55fr; gap: 64px; align-items: center; }
        .screen-content__badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green-pale); color: var(--green-dark);
          font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px; margin-bottom: 20px;
        }
        .screen-content__title { font-family: var(--serif); font-size: clamp(28px, 3vw, 40px); font-weight: 900; color: var(--green-dark); margin-bottom: 10px; line-height: 1.15; }
        .screen-content__sub { font-size: 14px; color: var(--ink-light); margin-bottom: 32px; font-style: italic; }
        .screen-points { list-style: none; display: flex; flex-direction: column; gap: 18px; margin-bottom: 32px; padding: 0; }
        .screen-point { display: flex; gap: 14px; align-items: flex-start; }
        .screen-point__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--green-bright); flex-shrink: 0; margin-top: 7px; }
        .screen-point__heading { font-weight: 600; font-size: 14px; color: var(--green-dark); margin-bottom: 2px; }
        .screen-point__detail { font-size: 13px; color: var(--ink-mid); }

        .insight-box {
          background: var(--green-dark); color: var(--white);
          border-radius: 12px; padding: 16px 20px;
          font-size: 13px; font-weight: 500;
          display: flex; gap: 10px; align-items: flex-start;
          line-height: 1.6;
        }

        .screen-frame {
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 20px 80px rgba(27, 67, 50, .18), 0 4px 16px rgba(27, 67, 50, .1);
          border: 1px solid rgba(27, 67, 50, .08);
          aspect-ratio: 16/9; background: #eee;
          position: relative;
        }
        .screen-frame img {
          width: 100%; height: 100%; object-fit: cover; object-position: top left; display: block;
        }

        .back-btn {
          position: fixed; top: 100px; left: 20px; z-index: 110;
          background: var(--white); color: var(--green-dark);
          padding: 10px 20px; border-radius: 12px; font-weight: 800;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          text-decoration: none; transition: transform 0.2s;
        }
        .back-btn:hover { transform: translateX(-4px); }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(27,67,50,.92); backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 56px; color: white;
          border-bottom: 1px solid rgba(149, 213, 178, .1);
        }
        .nav__logo { font-family: var(--serif); font-weight: 900; display: flex; align-items: center; gap: 10px; }
        .nav__links { display: flex; gap: 28px; }
        .nav__links a { font-size: 12px; color: var(--green-light); text-decoration: none; transition: color .2s; }
        .nav__links a:hover { color: var(--white); }

        .divider {
          height: 2px; background: linear-gradient(90deg, transparent, var(--green-bright), transparent);
          margin: 0;
        }

        @media(max-width:900px){
          .hero { grid-template-columns: 1fr; }
          .hero__right { padding: 40px; }
          .problem-cards, .screen-layout { grid-template-columns: 1fr; gap: 32px; }
          .screen-section:nth-child(even) .screen-layout { direction: ltr; }
          .back-btn { top: 70px; left: 10px; padding: 6px 12px; font-size: 12px; }
          nav { padding: 0 24px; }
          .container { padding: 0 24px; }
        }
      `}</style>

      <div className="case-study-container text-left">
        <Link to="/" className="back-btn">
          <ArrowLeft size={18} /> Back
        </Link>

        {/* NAV */}
        <nav>
          <div className="nav__logo">
            <span className="bg-[#52B788] w-7 h-7 rounded-full flex items-center justify-center text-[#1B4332] text-sm font-bold">✓</span> 
            Everyday Task
          </div>
          <div className="nav__links">
            <a href="#problem">Problem</a>
            <a href="#screens">Screens</a>
            <a href="#outcome">Outcome</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero__blob"></div>
          <div className="hero__blob2"></div>
          <div className="hero__left">
            <p className="hero__eyebrow">Case Study · 2026</p>
            <h1 className="hero__title">Everyday Task<br/><em>All-in-One</em><br/>Life Companion</h1>
            <p className="hero__sub">A unified web app that replaces 6 separate tools — tasks, budget, expenses, exercise, mood, and more — in a single clean interface.</p>
            <div className="hero__tags">
              <span className="tag">Productivity</span>
              <span className="tag">Wellbeing</span>
              <span className="tag">Finance</span>
              <span className="tag">Vibecoded</span>
            </div>
          </div>
          <div className="hero__right">
            <div className="hero__badge-grid">
              <div className="hero__badge">
                <div className="hero__badge-num">6</div>
                <div className="hero__badge-label">Modules Built</div>
              </div>
              <div className="hero__badge">
                <div className="hero__badge-num">1</div>
                <div className="hero__badge-label">Unified Platform</div>
              </div>
              <div className="hero__badge col-span-2">
                <div className="hero__badge-num text-3xl">Zero</div>
                <div className="hero__badge-label">Apps to switch between — everything lives here</div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* PROBLEM */}
        <section className="section bg-white" id="problem">
          <div className="container">
            <p className="section-label">The Problem</p>
            <h2 className="section-title text-[#1B4332]">People juggle too many<br/>disconnected apps every day.</h2>
            <p className="section-sub">Daily life management is fragmented across dozens of apps — none of them talk to each other, and the mental overhead is exhausting.</p>

            <div className="problem-cards text-left">
              {[
                { icon: "📋", title: "Task Overload", desc: "To-do lists, reminders, and deadlines are scattered across Notion, Reminders, sticky notes — with no single source of truth." },
                { icon: "💸", title: "Expense Blindness", desc: "Tracking spending requires switching between banking apps and spreadsheets, causing users to lose context and overspend." },
                { icon: "🧠", title: "Wellbeing Neglect", desc: "Mood, exercise, and meditation tools are siloed across separate apps — making it impossible to spot lifestyle patterns." }
              ].map((card, i) => (
                <div key={i} className="pcard">
                  <div className="pcard__icon">{card.icon}</div>
                  <div className="pcard__title">{card.title}</div>
                  <div className="pcard__desc">{card.desc}</div>
                </div>
              ))}
            </div>

            <div className="solution-banner mt-12 bg-[#2D6A4F] p-8 rounded-2xl flex items-center gap-5">
              <span className="text-3xl">💡</span>
              <p className="text-lg text-white"><strong>Everyday Task</strong> solves all three — combining tasks, finances, and wellbeing into one beautifully designed web app.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* SCREENS */}
        <div id="screens">
          {screens.map((screen, idx) => (
            <section key={idx} className={`screen-section ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F1F7F3]'}`}>
              <div className="container">
                <div className="screen-layout">
                  <div className="screen-content text-left">
                    <span className="screen-content__badge">
                      <span className="font-black text-[#52B788] mr-2">{screen.num}</span> {screen.label}
                    </span>
                    <h3 className="screen-content__title">{screen.title}</h3>
                    <p className="screen-content__sub">{screen.sub}</p>
                    <ul className="screen-points">
                      {screen.points.map((p, i) => (
                        <li key={i} className="screen-point">
                          <div className="screen-point__dot"></div>
                          <div>
                            <div className="screen-point__heading">{p.h}</div>
                            <div className="screen-point__detail">{p.d}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {screen.insight && <div className="insight-box">{screen.insight}</div>}
                  </div>
                  <div className="screen-frame">
                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold bg-[#eee]">
                      [ Screen Placeholder {screen.num} ]
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}