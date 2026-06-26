import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <main id="top" className="page-shell">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Designer · Frontend Developer · Storyteller</p>
        <h1 id="hero-title">打造一個簡潔、靈活，能在任何螢幕上好好閱讀的個人網站。</h1>
        <p className="hero-copy">
          這個版面先完成共用的 header 與 footer，並以多段斷點調整間距、字級與導覽排列，後續可直接接上關於我、作品集與聯絡內容。
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
