const NEWS_ITEMS = [
  {
    id: "chi-2027-submit",
    date: "2026.09",
    content: (
      <>
        4 papers submitted to{" "}
        <a href="https://chi2027.acm.org/" target="_blank" rel="noreferrer">
          ACM CHI 2027
        </a>
        . Good luck to us 🤞
      </>
    ),
  },
  {
    id: "somatic-city",
    date: "2026.08",
    content: (
      <>
        Invited by{" "}
        <a
          href="https://designschool.sustech.edu.cn/about/team/faculty/544.html"
          target="_blank"
          rel="noreferrer"
        >
          Prof. Mirna Zordan
        </a>{" "}
        to co-organize the Somatic City Workshop in Chicago with{" "}
        <a href="https://www.fsv-lab.com/" target="_blank" rel="noreferrer">
          FSV Lab
        </a>
        .
      </>
    ),
  },
  {
    id: "uist-acceptance",
    date: "2026.07",
    content: (
      <>
        One first-author paper and one fourth-author paper received conditional acceptance to{" "}
        <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
          ACM UIST 2026
        </a>{" "}
        (acceptance rate: 20.1%). Grateful to my collaborators!
      </>
    ),
  },
  {
    id: "uc-davis-intern",
    date: "2026.07",
    content: (
      <>
        Started my research internship at UC Davis, working with{" "}
        <a href="https://dongyu.tech/" target="_blank" rel="noreferrer">
          Prof. Dongyu Liu
        </a>
        . Hoping to do some cool work this summer!
      </>
    ),
  },
  {
    id: "chi-2026",
    date: "2026.04",
    content: (
      <>
        Attended{" "}
        <a href="https://chi2026.acm.org/" target="_blank" rel="noreferrer">
          ACM CHI 2026
        </a>{" "}
        in Barcelona. Come find me and say hi!
      </>
    ),
  },
  {
    id: "uist-submit",
    date: "2026.03",
    content: (
      <>
        4 papers submitted to{" "}
        <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
          ACM UIST 2026
        </a>
        . Good luck to us 🤞
      </>
    ),
  },
];

export function NewsSection() {
  return (
    <section id="news">
      <h2>News</h2>
      <ul className="news-list">
        {NEWS_ITEMS.map((item) => (
          <li key={item.id} className="news-item">
            <span className="news-date">{item.date}</span>
            <div className="news-content">{item.content}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
