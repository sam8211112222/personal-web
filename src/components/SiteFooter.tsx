const socialLinks = ["GitHub", "LinkedIn", "Email"];

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="網站頁尾">
      <div>
        <p className="footer-kicker">Personal Web</p>
        <p className="footer-title">用清楚、有溫度的方式呈現專業、作品與隨筆。</p>
      </div>

      <nav className="footer-links" aria-label="社群連結">
        {socialLinks.map((label) => (
          <a href={label === "Email" ? "mailto:hello@example.com" : "#top"} key={label}>
            {label}
          </a>
        ))}
      </nav>

      <p className="copyright">© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>

      <style jsx>{`
        .site-footer {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 1rem;
          overflow: hidden;
          padding: 1.25rem;
          border: 1px solid var(--line);
          border-radius: 1.6rem 1.6rem 0 0;
          background: linear-gradient(135deg, rgba(255, 248, 232, 0.9), rgba(252, 251, 244, 0.76));
          box-shadow: var(--shadow);
          backdrop-filter: blur(18px);
        }

        .site-footer::after {
          position: absolute;
          right: -4rem;
          bottom: -5rem;
          width: 14rem;
          aspect-ratio: 1;
          border-radius: 999px;
          background: rgba(215, 166, 161, 0.28);
          content: "";
        }

        .footer-kicker {
          margin: 0;
          color: var(--moss);
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .footer-title,
        .copyright {
          position: relative;
          z-index: 1;
          margin: 0.35rem 0 0;
          color: rgba(31, 37, 32, 0.66);
        }

        .footer-links {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.45rem;
        }

        .footer-links a {
          padding: 0.62rem 0.84rem;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(252, 251, 244, 0.72);
          font-size: 0.92rem;
          font-weight: 750;
        }

        .footer-links a:hover {
          color: var(--moss);
          background: rgba(169, 185, 154, 0.2);
        }

        @media (min-width: 640px) {
          .site-footer {
            grid-template-columns: 1.2fr 0.8fr;
          }

          .copyright {
            grid-column: 1 / -1;
          }
        }

        @media (min-width: 1024px) {
          .site-footer {
            grid-template-columns: 1fr auto auto;
          }

          .copyright {
            grid-column: auto;
          }
        }
      `}</style>
    </footer>
  );
}
