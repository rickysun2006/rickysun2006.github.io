export function SiteNav({ home = false }: { home?: boolean }) {
  const to = (hash: string) => (home ? hash : `/${hash}`);

  return (
    <nav className="site-nav">
      <a href="/" className="nav-name">
        Ruqi Sun
      </a>
      <div className="nav-links">
        <a href={to("#intro")}>Intro</a>
        <a href={to("#news")}>News</a>
        <a href={to("#publications")}>Publications</a>
        <a href={to("#education")}>Education</a>
        <a href={to("#writing")}>Writing</a>
        <a href="/misc/">Misc</a>
        <a href="/cv.pdf" target="_blank" rel="noreferrer">
          CV ↗
        </a>
      </div>
    </nav>
  );
}
