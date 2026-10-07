import { useState } from "react";
const personalInfo = {
  name: "Suveetha",
  role: "AI & Data Science Engineer",
  email: "ssuveethasundarapandi@gmail.com",
  github: "https://github.com/suvii-15?tab=repositories",
  linkedin: "https://www.linkedin.com/in/suveetha-s-38067237b",
  resume: "/resume.pdf",
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

const projects = [
  {
    number: "01",
    title: "AI Career Assistant",
    category: "AI / NLP / FULL STACK",
    description:
      "An intelligent career platform that analyzes resumes, extracts skills, recommends relevant jobs and identifies skill gaps using NLP-based matching.",
    tech: ["Python", "React", "MongoDB", "TF-IDF"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    number: "02",
    title: "Real-Time Drowsiness Detection",
    category: "COMPUTER VISION",
    description:
      "A real-time driver monitoring system that detects eye closure and yawning using YOLOv8 and OpenCV, with automated drowsiness alerts.",
    tech: ["YOLOv8", "OpenCV", "PyTorch", "Python"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    number: "03",
    title: "Movie Recommendation System",
    category: "MACHINE LEARNING",
    description:
      "A personalized movie recommendation platform using TF-IDF, cosine similarity and KNN with an interactive Streamlit interface.",
    tech: ["Python", "TF-IDF", "KNN", "Streamlit"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    number: "04",
    title: "Hospital Management System",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A hospital management application for patients, doctors, appointments and billing, backed by a MySQL database.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    github: "https://github.com/",
    demo: "#",
  },
];

  const skills = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "SQL",
    "MySQL",
    "MongoDB",
    "Power BI",
    "Tableau",
    "Excel",
    "OpenCV",
    "YOLOv8",
    "PyTorch",
    "Git & GitHub",
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a href="#home" className="logo">
          S<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className="nav-actions">

  <a
    href="/resume.pdf"
    download
    className="resume-button"
  >
    Resume ↓
  </a>

  <a href="#contact" className="nav-button">
    Let's Talk <span>↗</span>
  </a>

</div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

  {/* Animated background */}
  <div className="hero-grid"></div>

  <div className="hero-noise"></div>

  <div className="glow glow-one"></div>
  <div className="glow glow-two"></div>
  <div className="glow glow-three"></div>

  {/* Floating particles */}
  <div className="particle particle-1"></div>
  <div className="particle particle-2"></div>
  <div className="particle particle-3"></div>
  <div className="particle particle-4"></div>

  <div className="hero-content">

    <div className="availability hero-reveal">
      <span className="status-dot"></span>
      OPEN TO OPPORTUNITIES
    </div>

    <p className="eyebrow hero-reveal delay-1">
      ARTIFICIAL INTELLIGENCE × DATA SCIENCE
    </p>

    <h1 className="hero-title hero-reveal delay-2">
      Building
      <br />

      <span className="gradient-text">
        intelligent
      </span>

      <br />

      experiences.
    </h1>

    <p className="hero-description hero-reveal delay-3">
      I'm <strong>{personalInfo.name}</strong> — an AI & Data Science Engineer
      who turns ideas into intelligent applications using
      Artificial Intelligence, Computer Vision and Data Analytics.
    </p>

    <div className="hero-actions hero-reveal delay-4">

      <a href="#projects" className="primary-button">
        Explore My Work
        <span>↗</span>
      </a>

      <a
  href={personalInfo.resume}
  download
  className="secondary-button"
>
        Download Resume
        <span>↓</span>
      </a>

    </div>

    <div className="social-links hero-reveal delay-5">

      <a
        href={personalInfo.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>

      <a href={`mailto:${personalInfo.email}`}>
        Email ↗
      </a>

    </div>

  </div>


  {/* ================= AI VISUAL ================= */}

  <div className="hero-orbit">

    <div className="orbit orbit-one"></div>

    <div className="orbit orbit-two"></div>

    <div className="orbit orbit-three"></div>


    {/* Center */}
    <div className="orbit-center">

      <div className="ai-core">

        <div className="ai-core-inner">
          AI
        </div>

      </div>

    </div>


    {/* Floating technologies */}
    <div className="orbit-node node-one">
      <span>PY</span>
    </div>

    <div className="orbit-node node-two">
      <span>ML</span>
    </div>

    <div className="orbit-node node-three">
      <span>SQL</span>
    </div>

    <div className="orbit-node node-four">
      <span>CV</span>
    </div>

    <div className="orbit-node node-five">
      <span>AI</span>
    </div>

  </div>


  <div className="scroll-indicator">
    <span></span>
    SCROLL TO EXPLORE
  </div>

</section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="section-heading">
          <span>01 / ABOUT</span>
          <h2>
            Curious mind.
            <br />
            <em>Builder mentality.</em>
          </h2>
        </div>
<div className="about-content">

  <p className="large-text">
    I build intelligent solutions at the intersection of
    AI, data and software.
  </p>

  <p>
    I'm an Artificial Intelligence and Data Science engineer
    with hands-on experience building AI-powered applications,
    computer vision systems, recommendation systems and
    full-stack platforms.
  </p>

  <p>
    I enjoy transforming real-world problems into practical
    technology — from exploring data and developing machine
    learning solutions to creating user-friendly applications.
  </p>

  <p>
    Currently, I'm working as an AI Trainee Engineer Intern,
    gaining industry experience with Python, React.js,
    OpenCV, YOLO, MongoDB and REST APIs.
  </p>

  <div className="stats">

    <div className="stat">
      <strong>04+</strong>
      <span>Major Projects</span>
    </div>

    <div className="stat">
      <strong>AI</strong>
      <span>Primary Focus</span>
    </div>

    <div className="stat">
      <strong>2026</strong>
      <span>Graduation</span>
    </div>

  </div>

</div>
        
         

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">

        <div className="section-heading centered">
          <span>02 / EXPERTISE</span>

          <h2>
            Tools I use to
            <br />
            <em>build things.</em>
          </h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>0{(index % 9) + 1}</span>
              <strong>{skill}</strong>
            </div>
          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">

  <div className="projects-header">

    <div className="section-heading">
      <span>03 / SELECTED WORK</span>

      <h2>
        Things I've
        <br />
        <em>built.</em>
      </h2>
    </div>

    <p>
      A collection of AI, machine learning, computer vision
      and full-stack projects focused on solving practical problems.
    </p>

  </div>


  <div className="projects-showcase">

    {projects.map((project, index) => (

      <article
        className="premium-project"
        key={project.number}
      >

        {/* PROJECT NUMBER */}

        <div className="project-index">
          <span>{project.number}</span>

          <div className="project-line"></div>

          <span>2026</span>
        </div>


        {/* PROJECT CONTENT */}

        <div className="project-main">

          <div className="project-category">
            {project.category}
          </div>

          <h3>
            {project.title}
          </h3>

          <p>
            {project.description}
          </p>


          {/* TECHNOLOGIES */}

          <div className="tech-list">

            {project.tech.map((item) => (

              <span key={item}>
                {item}
              </span>

            ))}

          </div>


          {/* PROJECT BUTTONS */}

          <div className="project-links">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-button github-button"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-button demo-button"
            >
              <span>Live Demo</span>
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* PROJECT VISUAL */}

        <div className={`project-visual visual-${index + 1}`}>

          <div className="visual-grid"></div>

          <div className="visual-glow"></div>

          <div className="visual-content">

            {index === 0 && (
              <>
                <div className="visual-icon">AI</div>
                <span>RESUME → SKILLS → JOBS</span>
              </>
            )}

            {index === 1 && (
              <>
                <div className="visual-icon">CV</div>
                <span>DETECT → ANALYZE → ALERT</span>
              </>
            )}

            {index === 2 && (
              <>
                <div className="visual-icon">ML</div>
                <span>INPUT → SIMILARITY → RECOMMEND</span>
              </>
            )}

            {index === 3 && (
              <>
                <div className="visual-icon">HMS</div>
                <span>PATIENT → APPOINTMENT → BILL</span>
              </>
            )}

          </div>

        </div>

      </article>

    ))}

  </div>

</section>


      {/* ================= EXPERIENCE ================= */}
<section id="experience" className="section experience-section">

  <div className="section-heading">
    <span>04 / EXPERIENCE</span>

    <h2>
      Learning by
      <br />
      <em>building.</em>
    </h2>
  </div>

  {/* Current Internship */}
  <div className="experience-card">

    <div className="experience-date">
      CURRENT
      <br />
      INTERNSHIP
    </div>

    <div className="experience-main">

      <p className="experience-label">
        DATA SCIENCE / TIME SERIES
      </p>

      <h3>Data Science & Time Series Intern</h3>

      <h4>2026 – Present</h4>

      <p>
        Working on data science and time-series analytics using Python,
        financial market datasets and statistical methods. Performing
        moving average analysis, stationarity testing, ACF/PACF analysis
        and ARIMA-based forecasting.
      </p>

      <div className="experience-tags">
        <span>Python</span>
        <span>Data Science</span>
        <span>Time Series</span>
        <span>ARIMA</span>
        <span>Statistics</span>
        <span>Data Analysis</span>
      </div>

    </div>

  </div>


  {/* Previous Internship */}
  <div className="experience-card">

    <div className="experience-date">
      AI
      <br />
      INTERNSHIP
    </div>

    <div className="experience-main">

      <p className="experience-label">
        ARTIFICIAL INTELLIGENCE / COMPUTER VISION
      </p>

      <h3>AI Trainee Engineer Intern</h3>

      <h4>Inventeron Technologies · Bengaluru · 2026</h4>

      <p>
        Developed AI-powered applications using Python, React.js,
        OpenCV and MongoDB. Worked on real-time computer vision
        projects using YOLOv5 and YOLOv8 and integrated REST APIs
        into full-stack applications.
      </p>

      <div className="experience-tags">
        <span>Python</span>
        <span>React.js</span>
        <span>OpenCV</span>
        <span>YOLOv8</span>
        <span>MongoDB</span>
        <span>REST APIs</span>
      </div>

    </div>

  </div>

</section>

      {/* ================= EDUCATION ================= */}

      <section className="education-strip">

  <div>
    <span>EDUCATION</span>

    <h3>
      B.E. Artificial Intelligence & Data Science
    </h3>

    <p>
      East West Institute of Technology · Bengaluru · 2026
    </p>
  </div>

  <div className="education-mark">
    AI
  </div>

</section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="contact-glow"></div>

        <div className="contact-content">

          <span className="contact-label">
            05 / CONTACT
          </span>

          <h2>
            Have an idea?
            <br />
            <em>Let's build it.</em>
          </h2>

          <p>
            Whether it's an AI project, data problem or software idea,
            I'm always interested in creating something meaningful.
          </p>

          <a
            href="mailto:ssuveethasundarapandi@gmail.com"
            className="contact-button"
          >
            Start a conversation <span>↗</span>
          </a>

          <div className="contact-socials">

            <a href="https://github.com/suvii-15?tab=repositories 
            /" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/suveetha-s-38067237b/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="mailto:ssuveethasundarapandi@gmail.com">
              Email
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>
          © 2026 Suveetha
        </div>

        <div>
          Designed & built with React
        </div>

        <div>
          AI × DATA × CODE
        </div>

      </footer>

    </div>
  );
}

export default App;