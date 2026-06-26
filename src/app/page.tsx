import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { articles } from "@/config/content";

export default function Home() {
  const latestArticle = articles[0];

  return (
    <main id="top" className="page-shell">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Designer · Frontend Developer</p>
        <h1 id="hero-title">用作品與短文，記錄正在做的事。</h1>
        <p className="hero-copy">首頁先保留最重要的介紹、最新文章與新增內容入口，其他內容之後再慢慢補上。</p>
        <div className="hero-actions" aria-label="主要操作">
          <a className="primary-action" href="/editor">
            新增文章
          </a>
          <a className="secondary-action" href="#latest">
            看最新內容
          </a>
        </div>
      </section>

      <section id="latest" className="latest-card" aria-labelledby="latest-title">
        <p className="eyebrow">Latest</p>
        <h2 id="latest-title">{latestArticle.title}</h2>
        <p>{latestArticle.summary}</p>
        <small>{latestArticle.date}</small>
      </section>

      <SiteFooter />

      <style>{`
        .page-shell {
          width: min(100% - 2rem, var(--max-width));
          min-height: 100svh;
          margin-inline: auto;
          padding-block: 1rem;
        }

        .hero {
          display: grid;
          gap: 1.1rem;
          max-width: 54rem;
          padding: clamp(4.5rem, 13vw, 8rem) clamp(0rem, 3vw, 2rem);
        }

        .eyebrow {
          margin: 0;
          color: var(--moss);
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .hero h1 {
          max-width: 12ch;
          margin: 0;
          font-size: clamp(3.1rem, 11vw, 7.2rem);
          line-height: 0.96;
          letter-spacing: -0.085em;
        }

        .hero-copy,
        .latest-card p {
          max-width: 42rem;
          margin: 0;
          color: rgba(31, 37, 32, 0.68);
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          line-height: 1.75;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          padding-top: 0.5rem;
        }

        .primary-action,
        .secondary-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3rem;
          padding: 0.82rem 1.18rem;
          border-radius: 999px;
          font-weight: 800;
        }

        .primary-action {
          color: #fffaf0;
          background: linear-gradient(135deg, var(--moss), var(--ink));
          box-shadow: 0 18px 44px rgba(89, 111, 79, 0.26);
        }

        .secondary-action {
          border: 1px solid rgba(89, 111, 79, 0.22);
          background: rgba(255, 248, 232, 0.68);
          color: var(--moss);
        }

        .latest-card {
          display: grid;
          gap: 0.55rem;
          margin: 0 clamp(0rem, 3vw, 2rem) 2rem;
          padding: clamp(1.2rem, 4vw, 1.8rem);
          border: 1px solid var(--line);
          border-radius: 1.6rem;
          background: rgba(255, 248, 232, 0.76);
          box-shadow: var(--shadow);
          backdrop-filter: blur(18px);
        }

        .latest-card h2 {
          margin: 0;
          font-size: clamp(1.7rem, 4vw, 2.5rem);
          letter-spacing: -0.05em;
        }

        .latest-card small {
          color: rgba(31, 37, 32, 0.52);
          font-weight: 750;
        }

        @media (min-width: 360px) {
          .page-shell {
            width: min(100% - 2.5rem, var(--max-width));
          }
        }

        @media (min-width: 1024px) {
          .page-shell {
            padding-block: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}
