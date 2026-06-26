const navigationItems = ["關於", "作品", "經歷", "聯絡"];

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="網站頁首">
      <a className="brand" href="#top" aria-label="回到首頁">
        <span className="brand-mark">AC</span>
        <span className="brand-text">Alex Chen</span>
      </a>

      <nav className="primary-nav" aria-label="主要導覽">
        {navigationItems.map((item) => (
          <a href={`#${item}`} key={item}>
            {item}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="mailto:hello@example.com">
        Say hello
      </a>
    </header>
  );
}
