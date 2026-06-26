const socialLinks = ["GitHub", "LinkedIn", "Email"];

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="網站頁尾">
      <div>
        <p className="footer-kicker">Personal Web</p>
        <p className="footer-title">用清楚、有溫度的方式呈現專業與作品。</p>
      </div>

      <nav className="footer-links" aria-label="社群連結">
        {socialLinks.map((label) => (
          <a href={label === "Email" ? "mailto:hello@example.com" : "#top"} key={label}>
            {label}
          </a>
        ))}
      </nav>

      <p className="copyright">© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
    </footer>
  );
}
