import { NewsSection } from "./news-section";

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
          <a href="#writing">Writing</a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer">CV ↗</a>
        </div>
      </nav>

      {/* ── Intro ───────────────────────────────────── */}
      <div id="intro" className="intro">
        <div className="intro-main">
          <h1>
            Hi, this is <span className="intro-accent">Ruqi Sun</span>.{" "}
            <span className="intro-pronouns">(he/they)</span>
          </h1>
          <p className="intro-role">Undergraduate Researcher &middot; SUSTech CSE</p>

          <p>
            My name is Ruqi Sun, and you can call me Ricky. I am a third-year undergraduate
            student in
            Computer Science and Engineering at the{" "}
            <a href="https://www.sustech.edu.cn/en/" target="_blank" rel="noreferrer">
              Southern University of Science and Technology (SUSTech)
            </a>
            , where I conduct research at the DVA Lab under the supervision of{" "}
            <a href="https://cse.sustech.edu.cn/faculty/~mayx/" target="_blank" rel="noreferrer">
              Prof. Yuxin Ma
            </a>
            . I also work with{" "}
            <a href="https://dongyu.tech/" target="_blank" rel="noreferrer">
              Prof. Dongyu Liu
            </a>{" "}
            at the VIA Lab,{" "}
            <a href="https://www.ucdavis.edu/" target="_blank" rel="noreferrer">
              UC Davis
            </a>
            .
          </p>
          <p>
            My research focuses on Human-AI Interaction in the contexts of visualization and
            creativity support. I am particularly interested in how AI agents shape users&rsquo;
            understanding, agency, and decision-making in complex authoring and analytical
            workflows. I design and study interactive systems that make AI-generated
            decisions more visible, reviewable, and open to human revision.
          </p>

          <div className="intro-interests">
            <p>My research interests include:</p>
            <ul className="interests-list">
              <li>Human-AI Interaction</li>
              <li>Visualization</li>
              <li>Creativity Support Tools</li>
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
              <li>
                <a
                  href="https://scholar.google.com/citations?user=MXMQ21gAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.75-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                    </svg>
                  </span>
                  Google Scholar
                </a>
              </li>
              <li>
                <a href="https://medium.com/@sunruqi10" target="_blank" rel="noreferrer">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 1 1-6.77-6.8 6.8 6.8 0 0 1 6.77 6.8zM16.96 12c0 1.9-1.16 3.5-2.59 3.5s-2.59-1.6-2.59-3.5 1.16-3.5 2.59-3.5 2.59 1.6 2.59 3.5zM22.54 12c0 1.55-.53 2.8-1.18 2.8s-1.18-1.25-1.18-2.8.53-2.8 1.18-2.8S22.54 10.45 22.54 12z" />
                    </svg>
                  </span>
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <NewsSection />

      {/* ── Publications ────────────────────────────── */}
      <section id="publications">
        <h2>Publications</h2>
        <p className="pub-legend">
          <strong>Bold</strong> = myself &nbsp;&middot;&nbsp;{" "}
          <sup className="pub-corresponding-mark">†</sup> = corresponding author &nbsp;&middot;&nbsp;{" "}
          <span className="pub-author-link pub-author-link--sample">Name</span> = homepage
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
                <strong>Ruqi Sun</strong>,{" "}
                <a
                  href="https://scholar.google.com/citations?user=lFjvfd4AAAAJ&hl=en"
                  className="pub-author-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jiaping Li
                </a>
                , Wenhui Tao, Ximing Zheng, Yuefeng Tan, Jiahao Wei,{" "}
                <a
                  href="https://cse.sustech.edu.cn/faculty/~mayx/"
                  className="pub-author-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Yuxin Ma
                  <sup className="pub-corresponding-mark" aria-hidden="true">
                    †
                  </sup>
                </a>
              </div>
              <div className="pub-venue">
                Proceedings of the 39th Annual ACM Symposium on User Interface Software and
                Technology (
                <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
                  UIST 2026
                </a>
                ), 2026.
              </div>
              <div className="pub-links">
                <a
                  href="https://arxiv.org/abs/2608.09698v1"
                  className="pub-link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  arXiv
                </a>
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
                <a
                  href="https://wanghchen.github.io/"
                  className="pub-author-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Huanchen Wang
                </a>
                , Qiuming Chen, Zhonghao Ji, <strong>Ruqi Sun</strong>,{" "}
                <a
                  href="https://www.cs.cityu.edu.hk/~zhichalu/"
                  className="pub-author-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zhichao Lu
                </a>
                ,{" "}
                <a
                  href="https://cse.sustech.edu.cn/faculty/~mayx/"
                  className="pub-author-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Yuxin Ma
                  <sup className="pub-corresponding-mark" aria-hidden="true">
                    †
                  </sup>
                </a>
              </div>
              <div className="pub-venue">
                Proceedings of the 39th Annual ACM Symposium on User Interface Software and
                Technology (
                <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
                  UIST 2026
                </a>
                ), 2026.
              </div>
              <div className="pub-links">
                <a
                  href="https://arxiv.org/abs/2608.16067"
                  className="pub-link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  arXiv
                </a>
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

      {/* ── Writing ─────────────────────────────────── */}
      <section id="writing">
        <h2>Writing</h2>
        <a
          className="writing-card"
          href="https://medium.com/@sunruqi10/i-became-disillusioned-with-hci-i-still-love-it-6e68248b070f"
          target="_blank"
          rel="noreferrer"
        >
          <div className="writing-thumb">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hci-post.jpg" alt="CHI 2026 in Barcelona" />
          </div>
          <div className="writing-body">
            <div className="writing-meta">Sep 2026 &nbsp;&middot;&nbsp; Medium</div>
            <div className="writing-title">
              I Became Disillusioned with HCI. I Still Love It.
            </div>
            <div className="writing-excerpt">
              What a year of HCI research in a Chinese CS department taught me about
              impact, prestige, and the questions I still want to ask.
            </div>
          </div>
        </a>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="site-footer">
        <a href="mailto:sunrq2024@mail.sustech.edu.cn">sunrq2024@mail.sustech.edu.cn</a>
      </footer>

    </div>
  );
}
