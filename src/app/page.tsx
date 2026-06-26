import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const palette = [
  { name: "Warm Cream", value: "#FCFBF4", role: "主底色" },
  { name: "Garden Moss", value: "#596F4F", role: "品牌主色" },
  { name: "Soft Sage", value: "#A9B99A", role: "輔助綠" },
  { name: "Terracotta", value: "#C06F4A", role: "行動按鈕" },
  { name: "Marigold", value: "#E4B04A", role: "亮點" },
  { name: "Dusty Rose", value: "#D7A6A1", role: "溫柔點綴" },
  { name: "Deep Ink", value: "#1F2520", role: "文字" },
];

export default function Home() {
  return (
    <main id="top" className="page-shell">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">Designer · Frontend Developer · Storyteller</p>
          <h1 id="hero-title">在柔和奶油底色上，收藏作品、隨筆與每一次創作的靈感。</h1>
          <p className="hero-copy">
            我將網站改為 CSS in JS，並以 #FCFBF4 為主要底色，搭配苔蘚綠、陶土橘與金盞黃，營造溫暖、安定且帶有手作質感的個人品牌氛圍。
          </p>
          <div className="hero-actions" aria-label="主要操作">
            <a className="primary-action" href="#作品">
              查看作品
            </a>
            <a className="secondary-action" href="#隨筆">
              閱讀隨筆
            </a>
          </div>
        </div>

        <aside className="palette-card" aria-label="網站色系">
          <p className="card-label">Palette</p>
          <h2>網站色系</h2>
          <div className="palette-list">
            {palette.map((color) => (
              <div className="palette-item" key={color.value}>
                <span className="swatch" style={{ backgroundColor: color.value }} />
                <span>
                  <strong>{color.name}</strong>
                  <small>
                    {color.value} · {color.role}
                  </small>
                </span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <SiteFooter />

      <style jsx>{`
        .page-shell {
          width: min(100% - 2rem, var(--max-width));
          min-height: 100svh;
          margin-inline: auto;
          padding-block: 1rem;
        }

        .hero {
          display: grid;
          gap: clamp(2rem, 6vw, 4.5rem);
          padding: clamp(4.5rem, 12vw, 9.5rem) 0;
        }

        .hero-content {
          display: grid;
          gap: 1.2rem;
          max-width: 55rem;
        }

        .eyebrow,
        .card-label {
          margin: 0;
          color: var(--moss);
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .hero h1 {
          max-width: 11ch;
          margin: 0;
          font-size: clamp(3.2rem, 12vw, 8.4rem);
          line-height: 0.94;
          letter-spacing: -0.085em;
        }

        .hero-copy {
          max-width: 46rem;
          margin: 0;
          color: rgba(31, 37, 32, 0.68);
          font-size: clamp(1rem, 2.4vw, 1.32rem);
          line-height: 1.78;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          padding-top: 0.6rem;
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

        .palette-card {
          position: relative;
          overflow: hidden;
          align-self: center;
          padding: clamp(1.2rem, 4vw, 1.8rem);
          border: 1px solid var(--line);
          border-radius: 1.8rem;
          background: rgba(255, 248, 232, 0.76);
          box-shadow: var(--shadow);
          backdrop-filter: blur(18px);
        }

        .palette-card::before {
          position: absolute;
          top: -3.2rem;
          right: -2.6rem;
          width: 11rem;
          aspect-ratio: 1;
          border-radius: 999px;
          background: rgba(228, 176, 74, 0.28);
          content: "";
        }

        .palette-card h2 {
          position: relative;
          margin: 0.3rem 0 1.2rem;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          letter-spacing: -0.05em;
        }

        .palette-list {
          position: relative;
          display: grid;
          gap: 0.72rem;
        }

        .palette-item {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: 0.72rem;
          padding: 0.7rem;
          border: 1px solid rgba(31, 37, 32, 0.08);
          border-radius: 1rem;
          background: rgba(252, 251, 244, 0.64);
        }

        .swatch {
          width: 2.3rem;
          aspect-ratio: 1;
          border: 1px solid rgba(31, 37, 32, 0.12);
          border-radius: 0.8rem;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.38);
        }

        .palette-item strong,
        .palette-item small {
          display: block;
        }

        .palette-item strong {
          font-size: 0.98rem;
        }

        .palette-item small {
          margin-top: 0.16rem;
          color: rgba(31, 37, 32, 0.58);
          font-size: 0.82rem;
        }

        @media (min-width: 360px) {
          .page-shell {
            width: min(100% - 2.5rem, var(--max-width));
          }
        }

        @media (min-width: 640px) {
          .hero {
            padding-inline: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .page-shell {
            padding-block: 1.5rem;
          }

          .hero {
            min-height: 70svh;
            grid-template-columns: minmax(0, 1fr) 23rem;
            align-content: center;
          }
        }

        @media (min-width: 1280px) {
          .page-shell {
            width: min(100% - 4rem, var(--max-width));
          }

          .hero {
            padding-inline: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
