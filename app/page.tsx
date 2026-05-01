export default function HomePage() {
  return (
    <div className="page-wrap">

      {/* ── Nav ─────────────────────────────────────── */}
      <nav className="site-nav">
        <a href="/" className="nav-name">Ruqi Sun</a>
        <div className="nav-links">
          <a href="/cv.pdf" target="_blank" rel="noreferrer">CV ↗</a>
        </div>
      </nav>

      {/* ── Intro ───────────────────────────────────── */}
      <div className="intro">
        <div className="intro-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Ricky.jpg" alt="Ruqi Sun" />
        </div>

        <div className="intro-bio">
          <h1>Ruqi Sun</h1>
          <p className="subtitle">Undergraduate Researcher &middot; SUSTech CSE</p>

          <p>
            I&rsquo;m a second-year undergraduate in Computer Science and Engineering at{" "}
            <a href="https://www.sustech.edu.cn/en/" target="_blank" rel="noreferrer">
              Southern University of Science and Technology (SUSTech)
            </a>
            , advised by{" "}
            <a href="https://cse.sustech.edu.cn/faculty/~mayx/" target="_blank" rel="noreferrer">
              Prof. Yuxin Ma
            </a>
            . My research sits at the intersection of human-AI interaction and information
            visualization. You can call me Ricky.
          </p>
          <p>
            Outside the lab, I enjoy musical theatre and reading. My two cats are back home
            in Changchun, keeping my family company.
          </p>

          <p className="bio-links">
            <a href="mailto:sunrq2024@mail.sustech.edu.cn">sunrq2024@mail.sustech.edu.cn</a>
            {" · "}
            <a href="https://github.com/rickysun2006" target="_blank" rel="noreferrer">GitHub</a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/ruqi-%EF%BC%88ricky%EF%BC%89-sun-13161a307/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* ── Research Interests ──────────────────────── */}
      <section id="research">
        <h2>Research Interests</h2>
        <ul className="interests-list">
          <li>Human-AI Interaction</li>
          <li>Information Visualization / Visual Analytics</li>
          <li>AI-augmented creativity and sensemaking</li>
        </ul>
      </section>

      {/* ── News ────────────────────────────────────── */}
      <section id="news">
        <h2>News</h2>
        <table className="news-table">
          <tbody>
            <tr>
              <td className="news-date">Apr 2026</td>
              <td>
                I&rsquo;ll be attending{" "}
                <a href="https://chi2026.acm.org/" target="_blank" rel="noreferrer">
                  ACM CHI 2026
                </a>{" "}
                in Barcelona. Come find me and say hi!
              </td>
            </tr>
            <tr>
              <td className="news-date">Mar 2026</td>
              <td>4 papers submitted to UIST 2026. Good luck to us 🤞</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Education ───────────────────────────────── */}
      <section id="education">
        <h2>Education</h2>
        <ul className="edu-list">
          <li>
            <div className="edu-inst">
              Southern University of Science and Technology (SUSTech)
            </div>
            <div>B.Eng. in Computer Science and Engineering</div>
            <div className="edu-meta">
              Sep 2024 &ndash; Jul 2028 &nbsp;&middot;&nbsp; Advisor:{" "}
              <a href="https://cse.sustech.edu.cn/faculty/~mayx/" target="_blank" rel="noreferrer">
                Prof. Yuxin Ma
              </a>{" "}
              &nbsp;&middot;&nbsp; GPA: 3.70 / 4.00
            </div>
          </li>
          <li>
            <div className="edu-inst">NUS School of Computing Summer Workshop</div>
            <div>Designing Interactive Interfaces: UI/UX in the Digital World</div>
            <div className="edu-meta">
              Jun &ndash; Jul 2025 &nbsp;&middot;&nbsp; 1st place in cluster (A+)
              &nbsp;&middot;&nbsp; Advisor:{" "}
              <a href="https://www.comp.nus.edu.sg/~bimlesh/" target="_blank" rel="noreferrer">
                Prof. Bimlesh Wadhwa
              </a>
            </div>
          </li>
        </ul>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="site-footer">
        <a href="mailto:sunrq2024@mail.sustech.edu.cn">sunrq2024@mail.sustech.edu.cn</a>
      </footer>

    </div>
  );
}
