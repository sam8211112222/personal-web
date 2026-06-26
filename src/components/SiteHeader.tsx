import Link from "next/link";

const navigationItems = [
  { label: "簡介", href: "/#intro" },
  { label: "隨筆", href: "/#writing" },
  { label: "後台", href: "/editor" },
];

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="網站頁首">
      <Link className="brand" href="/#top" aria-label="回到首頁">
        <span className="brand-mark">AC</span>
        <span className="brand-text">Alex Chen</span>
      </Link>

      <nav className="primary-nav" aria-label="主要導覽">
        {navigationItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="mailto:hello@example.com">
        Say hello
      </a>

      <style>{`
        .site-header {
          position: sticky;
          top: 1rem;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem;
          border: 1px solid var(--line);
          border-radius: 1.35rem;
          background: rgba(255, 248, 232, 0.82);
          box-shadow: var(--shadow);
          backdrop-filter: blur(20px) saturate(1.08);
        }

        .brand,
        .primary-nav {
          display: flex;
          align-items: center;
        }

        .brand {
          gap: 0.75rem;
          font-weight: 850;
          letter-spacing: -0.03em;
        }

        .brand-mark {
          display: grid;
          width: 2.65rem;
          aspect-ratio: 1;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 1rem;
          color: #fffaf0;
          background: linear-gradient(135deg, var(--ink), var(--moss));
          box-shadow: 0 12px 28px rgba(89, 111, 79, 0.26);
          font-size: 0.82rem;
        }

        .brand-text {
          font-size: 1.02rem;
        }

        .primary-nav {
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .primary-nav a,
        .header-cta {
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 750;
          transition: 180ms ease;
          transition-property: color, background, box-shadow, transform;
        }

        .primary-nav a {
          padding: 0.65rem 0.82rem;
          color: rgba(31, 37, 32, 0.66);
        }

        .primary-nav a:hover {
          color: var(--moss);
          background: rgba(169, 185, 154, 0.22);
          transform: translateY(-1px);
        }

        .header-cta {
          justify-self: start;
          padding: 0.76rem 1.08rem;
          color: #fffaf0;
          background: linear-gradient(135deg, var(--clay), #a7573b);
          box-shadow: 0 14px 32px rgba(192, 111, 74, 0.25);
        }

        .header-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 38px rgba(192, 111, 74, 0.32);
        }

        @media (min-width: 480px) {
          .site-header {
            grid-template-columns: 1fr auto;
          }

          .primary-nav {
            grid-column: 1 / -1;
          }

          .header-cta {
            justify-self: end;
          }
        }

        @media (min-width: 768px) {
          .site-header {
            grid-template-columns: auto 1fr auto;
            padding: 1rem 1.1rem;
          }

          .primary-nav {
            grid-column: auto;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
