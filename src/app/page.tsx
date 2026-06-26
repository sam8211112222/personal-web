import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { articles, writingTracks } from "@/config/content";

export default function Home() {
  const latestArticle = articles[0];

  return (
    <main id="top" className="page-shell">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Software dev · Blog · Notes</p>
        <h1 id="hero-title">寫程式，也寫生活。</h1>
        <p className="hero-copy">
          這裡是 Alex 的個人部落格：主要記錄 software development 的技術文章，偶爾寫心情隨筆，也把旅行日記和照片收進來。
        </p>
        <div className="hero-actions" aria-label="主要操作">
          <a className="primary-action" href="#writing">
            閱讀隨筆
          </a>
          <a className="secondary-action" href="/editor">
            打開後台
          </a>
        </div>
      </section>

      <section id="intro" className="intro-grid" aria-labelledby="intro-title">
        <div className="intro-card featured">
          <p className="eyebrow">About</p>
          <h2 id="intro-title">簡介</h2>
          <p>
            我是一名 software dev，喜歡把複雜問題拆成清楚的介面與穩定的系統。這個網站會更像部落格：技術文章是主軸，生活與旅行是旁支。
          </p>
        </div>
        <div className="intro-card">
          <span>01</span>
          <h3>開發筆記</h3>
          <p>Next.js、前端工程、工具鏈、架構取捨與實作紀錄。</p>
        </div>
        <div className="intro-card">
          <span>02</span>
          <h3>日常隨筆</h3>
          <p>一些工作以外的想法，像是閱讀、心情、生活節奏。</p>
        </div>
      </section>

      <section id="writing" className="writing-section" aria-labelledby="writing-title">
        <div className="section-heading">
          <p className="eyebrow">Writing</p>
          <h2 id="writing-title">隨筆與文章分類</h2>
          <p>首頁先讓讀者知道這是一個部落格，文章可以依技術、心情與旅行進入。</p>
        </div>
        <div className="track-grid">
          {writingTracks.map((track) => (
            <article className="track-card" key={track.title}>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="latest" className="latest-card" aria-labelledby="latest-title">
        <p className="eyebrow">Latest</p>
        <h2 id="latest-title">最新：{latestArticle.title}</h2>
        <p>{latestArticle.summary}</p>
        <small>
          {latestArticle.category} · {latestArticle.date} · {latestArticle.readingTime}
        </small>
      </section>

      <section className="cms-card" aria-labelledby="cms-title">
        <div>
          <p className="eyebrow">Editor</p>
          <h2 id="cms-title">後台要能直接產生 HTML</h2>
          <p>
            編輯器支援標題、分類、照片、字體選擇與內文排版，會輸出一段可貼進內容來源的靜態 HTML，讓 Next.js 直接渲染，不必先接資料庫。
          </p>
        </div>
        <a className="primary-action" href="/editor">
          進入後台
        </a>
      </section>

      <SiteFooter />

      <style>{`
        .page-shell { width: min(100% - 2rem, var(--max-width)); min-height: 100svh; margin-inline: auto; padding-block: 1rem; }
        .hero { display: grid; gap: 1.1rem; max-width: 58rem; padding: clamp(4.5rem, 12vw, 7rem) clamp(0rem, 3vw, 2rem); }
        .eyebrow { margin: 0; color: var(--moss); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.14em; text-transform: uppercase; }
        .hero h1 { max-width: 8ch; margin: 0; font-size: clamp(3.1rem, 11vw, 7.2rem); line-height: 0.96; letter-spacing: -0.085em; }
        .hero-copy, .latest-card p, .cms-card p, .section-heading p, .intro-card p, .track-card p { margin: 0; color: rgba(31, 37, 32, 0.68); font-size: clamp(1rem, 2.2vw, 1.16rem); line-height: 1.75; }
        .hero-copy { max-width: 44rem; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 0.8rem; padding-top: 0.5rem; }
        .primary-action, .secondary-action { display: inline-flex; align-items: center; justify-content: center; min-height: 3rem; padding: 0.82rem 1.18rem; border-radius: 999px; font-weight: 800; }
        .primary-action { color: #fffaf0; background: linear-gradient(135deg, var(--moss), var(--ink)); box-shadow: 0 18px 44px rgba(89, 111, 79, 0.26); }
        .secondary-action { border: 1px solid rgba(89, 111, 79, 0.22); background: rgba(255, 248, 232, 0.68); color: var(--moss); }
        .intro-grid, .track-grid { display: grid; gap: 1rem; }
        .intro-card, .latest-card, .cms-card, .track-card { border: 1px solid var(--line); border-radius: 1.6rem; background: rgba(255, 248, 232, 0.76); box-shadow: var(--shadow); backdrop-filter: blur(18px); }
        .intro-card, .track-card, .latest-card, .cms-card, .section-heading { padding: clamp(1.2rem, 4vw, 1.8rem); }
        .intro-card { display: grid; gap: 0.6rem; }
        .intro-card.featured { background: linear-gradient(135deg, rgba(255, 248, 232, 0.9), rgba(169, 185, 154, 0.24)); }
        .intro-card span { color: var(--clay); font-weight: 900; }
        h2, h3 { margin: 0; letter-spacing: -0.05em; }
        h2 { font-size: clamp(2rem, 5vw, 3.4rem); }
        h3 { font-size: clamp(1.3rem, 3vw, 1.8rem); }
        .writing-section { padding-block: 1rem; }
        .section-heading { display: grid; gap: 0.55rem; max-width: 46rem; }
        .track-card { display: grid; gap: 0.7rem; }
        .latest-card, .cms-card { display: grid; gap: 0.7rem; margin-block: 1rem; }
        .latest-card small { color: rgba(31, 37, 32, 0.52); font-weight: 750; }
        .cms-card { align-items: center; }
        @media (min-width: 760px) { .intro-grid { grid-template-columns: 1.4fr 0.8fr 0.8fr; } .track-grid { grid-template-columns: repeat(3, 1fr); } .cms-card { grid-template-columns: 1fr auto; } }
        @media (min-width: 1024px) { .page-shell { padding-block: 1.5rem; } }
      `}</style>
    </main>
  );
}
