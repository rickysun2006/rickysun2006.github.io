export default function HomePage() {
  return (
    <div className="page-wrap">

      {/* ── Nav ─────────────────────────────────────── */}
      <nav className="site-nav">
        <a href="/" className="nav-name">Ruqi Sun</a>
        <div className="nav-links">
          <a href="#intro">Intro</a>
          <a href="#news">News</a>
          <a href="#publications">Publications</a>
          <a href="#education">Education</a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer">CV ↗</a>
        </div>
      </nav>

      {/* ── Intro ───────────────────────────────────── */}
      <div id="intro" className="intro">
        <div className="intro-main">
          <h1>
            Hi, this is <span className="intro-accent">Ruqi Sun</span>.
          </h1>
          <p className="intro-role">Undergraduate Researcher &middot; SUSTech CSE</p>

          <p>
            I&rsquo;m a second-year undergraduate in Computer Science and Engineering at
            Southern University of Science and Technology (SUSTech), advised by{" "}
            <a href="https://cse.sustech.edu.cn/faculty/~mayx/" target="_blank" rel="noreferrer">
              Prof. Yuxin Ma
            </a>
            . I am also working with{" "}
            <a href="https://dongyu.tech/" target="_blank" rel="noreferrer">
              Prof. Dongyu Liu
            </a>{" "}
            at UC Davis. My research sits at the intersection of human-centered AI and
            visualization. You can call me Ricky.
          </p>

          <blockquote className="intro-quote">
            I care about the human consequences of AI: who it serves, how it is used, and
            what kinds of futures it enables.
          </blockquote>

          <p>
            Outside the lab, I enjoy musical theatre and reading. My two cats are back home
            in Changchun, keeping my family company.
          </p>

          <div className="intro-interests">
            <p>My research interests include:</p>
            <ul className="interests-list">
              <li><strong>Human-centered AI</strong></li>
              <li><strong>Visualization</strong></li>
              <li><strong>AI-augmented creativity</strong></li>
            </ul>
          </div>
        </div>

        <aside className="intro-sidebar">
          <div className="intro-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ruqisun.png" alt="Ruqi Sun" />
          </div>

          <div className="contact-block">
            <h3 className="contact-title">Contact Me</h3>
            <ul className="contact-list">
              <li>
                <a href="mailto:sunrq2024@mail.sustech.edu.cn">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  sunrq2024@mail.sustech.edu.cn
                </a>
              </li>
              <li>
                <a href="https://github.com/rickysun2006" target="_blank" rel="noreferrer">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ruqi-sun-13161a307/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* ── News ────────────────────────────────────── */}
      <section id="news">
        <h2>News</h2>
        <table className="news-table">
          <tbody>
            <tr>
              <td className="news-date">Jul 2026</td>
              <td>
                One first-author paper and one fourth-author paper received conditional
                acceptance to{" "}
                <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
                  ACM UIST 2026
                </a>{" "}
                (acceptance rate: 20.1%). Grateful to my collaborators!
              </td>
            </tr>
            <tr>
              <td className="news-date">Jul 2026</td>
              <td>
                Started my research internship at UC Davis, working with{" "}
                <a href="https://dongyu.tech/" target="_blank" rel="noreferrer">
                  Prof. Dongyu Liu
                </a>
                . Hoping to do some cool work this summer!
              </td>
            </tr>
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
              <td>
                4 papers submitted to{" "}
                <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
                  ACM UIST 2026
                </a>
                . Good luck to us 🤞
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Publications ────────────────────────────── */}
      <section id="publications">
        <h2>Publications</h2>
        <p className="pub-legend">
          <strong>Bold</strong> = myself &nbsp;&middot;&nbsp;{" "}
          <span className="pub-corresponding">Underline</span> = corresponding author
        </p>
        <ul className="pub-list">
          <li className="pub-item">
            <div className="pub-visual">
              <span className="pub-badge">UIST 2026</span>
              <div className="pub-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/veriforge.png" alt="VeriForge teaser figure" />
              </div>
            </div>
            <div className="pub-body">
              <div className="pub-title">
                VeriForge: Mitigating Latent Knowledge Gaps in Narrative Drafting via
                Mixed-Initiative Scaffolding
              </div>
              <div className="pub-authors">
                <strong>Ruqi Sun</strong>, Jiaping Li, Wenhui Tao, Ximing Zheng, Yuefeng Tan,
                Jiahao Wei,{" "}
                <span className="pub-corresponding">
                  <a href="https://cse.sustech.edu.cn/faculty/~mayx/" target="_blank" rel="noreferrer">
                    Yuxin Ma
                  </a>
                </span>
              </div>
              <div className="pub-venue">
                Proceedings of the 39th Annual ACM Symposium on User Interface Software and
                Technology (
                <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
                  UIST 2026
                </a>
                ), 2026, to appear.
              </div>
            </div>
          </li>
          <li className="pub-item">
            <div className="pub-visual">
              <span className="pub-badge">UIST 2026</span>
              <div className="pub-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/simusation.png" alt="SiMUSation teaser figure" />
              </div>
            </div>
            <div className="pub-body">
              <div className="pub-title">
                SiMUSation: An Interactive Visitor Experience Simulation Framework to Support
                Museum Exhibition Design
              </div>
              <div className="pub-authors">
                <a href="https://wanghchen.github.io/" target="_blank" rel="noreferrer">
                  Huanchen Wang
                </a>
                , Qiuming Chen, Zhonghao Ji, <strong>Ruqi Sun</strong>,{" "}
                <a href="https://www.cs.cityu.edu.hk/~zhichalu/" target="_blank" rel="noreferrer">
                  Zhichao Lu
                </a>
                ,{" "}
                <span className="pub-corresponding">
                  <a href="https://cse.sustech.edu.cn/faculty/~mayx/" target="_blank" rel="noreferrer">
                    Yuxin Ma
                  </a>
                </span>
              </div>
              <div className="pub-venue">
                Proceedings of the 39th Annual ACM Symposium on User Interface Software and
                Technology (
                <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
                  UIST 2026
                </a>
                ), 2026, to appear.
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* ── Education ───────────────────────────────── */}
      <section id="education">
        <h2>Education</h2>
        <ul className="edu-list">
          <li className="edu-item">
            <div className="edu-logo-wrap edu-logo-wrap--round">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sustech.png" alt="SUSTech" className="edu-logo" />
            </div>
            <div className="edu-body">
              <div className="edu-inst">
                Southern University of Science and Technology (SUSTech)
              </div>
              <div className="edu-degree">B.Eng. in Computer Science and Engineering</div>
              <div className="edu-meta">
                <span>Sep 2024 &ndash; Jul 2028</span>
                <span>
                  Advisor:{"\u00a0"}
                  <a href="https://cse.sustech.edu.cn/faculty/~mayx/" target="_blank" rel="noreferrer">
                    Prof. Yuxin Ma
                  </a>
                </span>
                <span>GPA: 3.74 / 4.00</span>
              </div>
            </div>
          </li>
          <li className="edu-item">
            <div className="edu-logo-wrap edu-logo-wrap--round">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/uc-davis.png" alt="UC Davis" className="edu-logo" />
            </div>
            <div className="edu-body">
              <div className="edu-inst">University of California, Davis</div>
              <div className="edu-degree">Research Intern (Onsite)</div>
              <div className="edu-meta">
                <span>Jul &ndash; Aug 2026</span>
                <span>
                  Advisor:{"\u00a0"}
                  <a href="https://dongyu.tech/" target="_blank" rel="noreferrer">
                    Prof. Dongyu Liu
                  </a>
                </span>
              </div>
            </div>
          </li>
          <li className="edu-item">
            <div className="edu-logo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nus.png" alt="NUS" className="edu-logo edu-logo--contain" />
            </div>
            <div className="edu-body">
              <div className="edu-inst">NUS School of Computing Summer Workshop</div>
              <div className="edu-degree">
                Designing Interactive Interfaces: UI/UX in the Digital World
              </div>
              <div className="edu-meta">
                <span>Jun &ndash; Jul 2025</span>
                <span>1st place in cluster (A+)</span>
                <span>
                  Advisor:{"\u00a0"}
                  <a href="https://www.comp.nus.edu.sg/~bimlesh/" target="_blank" rel="noreferrer">
                    Prof. Bimlesh Wadhwa
                  </a>
                </span>
              </div>
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
