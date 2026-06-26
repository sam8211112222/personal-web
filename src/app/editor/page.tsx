"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const storageKey = "personal-web-html-draft";
const fontOptions = [
  { label: "系統無襯線", value: "Inter, ui-sans-serif, system-ui, sans-serif" },
  { label: "閱讀襯線", value: "Georgia, 'Times New Roman', serif" },
  { label: "等寬技術感", value: "'SFMono-Regular', Consolas, monospace" },
];
const categoryOptions = ["技術文章", "心情隨筆", "旅遊日記"];

function slugify(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function bodyToHtml(body: string) {
  return body
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replaceAll("\n", "<br />")}</p>`)
    .join("\n  ");
}

export default function EditorPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categoryOptions[0]);
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [fontFamily, setFontFamily] = useState(fontOptions[0].value);

  const generatedHtml = useMemo(() => {
    const safeTitle = escapeHtml(title.trim() || "新文章標題");
    const safeSummary = escapeHtml(summary.trim() || "一句話摘要");
    const safeCategory = escapeHtml(category);
    const safeCaption = escapeHtml(caption.trim());
    const safeCoverUrl = escapeHtml(coverUrl.trim());
    const imageHtml = safeCoverUrl
      ? `\n  <figure>\n    <img src="${safeCoverUrl}" alt="${safeTitle}" />${safeCaption ? `\n    <figcaption>${safeCaption}</figcaption>` : ""}\n  </figure>`
      : "";

    return `<article class="blog-post" style="font-family: ${fontFamily};">\n  <header>\n    <p class="post-category">${safeCategory}</p>\n    <h1>${safeTitle}</h1>\n    <p class="post-summary">${safeSummary}</p>\n  </header>${imageHtml}\n  ${bodyToHtml(body) || "<p>從這裡開始寫你的文章。</p>"}\n</article>`;
  }, [body, caption, category, coverUrl, fontFamily, summary, title]);

  const articleSnippet = useMemo(() => {
    const safeTitle = title.trim() || "新文章標題";
    return `{
  title: "${safeTitle.replaceAll('"', '\\"')}",
  date: "${new Date().toISOString().slice(0, 10)}",
  summary: "${(summary.trim() || "一句話摘要").replaceAll('"', '\\"')}",
  slug: "${slugify(safeTitle) || "new-article"}",
  category: "${category}",
  readingTime: "3 min read",
  html: \`${generatedHtml.replaceAll("`", "\\`")}\`,
}`;
  }, [category, generatedHtml, summary, title]);

  function saveDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem(storageKey, JSON.stringify({ title, category, summary, body, coverUrl, caption, fontFamily }));
  }

  function loadDraft() {
    const draft = window.localStorage.getItem(storageKey);
    if (!draft) return;
    const parsed = JSON.parse(draft) as Partial<Record<"title" | "category" | "summary" | "body" | "coverUrl" | "caption" | "fontFamily", string>>;
    setTitle(parsed.title ?? "");
    setCategory(parsed.category ?? categoryOptions[0]);
    setSummary(parsed.summary ?? "");
    setBody(parsed.body ?? "");
    setCoverUrl(parsed.coverUrl ?? "");
    setCaption(parsed.caption ?? "");
    setFontFamily(parsed.fontFamily ?? fontOptions[0].value);
  }

  return (
    <main className="editor-shell">
      <Link className="back-link" href="/">← 回首頁</Link>
      <section className="editor-hero">
        <p className="eyebrow">Blog CMS</p>
        <h1>能放照片、改字體，並直接產生 HTML 的後台。</h1>
        <p>這裡先做成無資料庫的靜態內容後台：草稿存在瀏覽器，輸出的 HTML 可以貼到內容檔，Next.js 就能直接使用這段靜態頁面。</p>
      </section>

      <form className="editor-grid" onSubmit={saveDraft}>
        <label>標題<input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="例如：我的第一篇技術筆記" /></label>
        <label>分類<select value={category} onChange={(event) => setCategory(event.target.value)}>{categoryOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="full">摘要<input value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="首頁卡片會顯示這句話" /></label>
        <label>封面照片 URL<input value={coverUrl} onChange={(event) => setCoverUrl(event.target.value)} placeholder="https://... 或 /images/photo.jpg" /></label>
        <label>照片說明<input value={caption} onChange={(event) => setCaption(event.target.value)} placeholder="旅行地點或圖片描述" /></label>
        <label className="full">文章字體<select value={fontFamily} onChange={(event) => setFontFamily(event.target.value)}>{fontOptions.map((font) => <option key={font.value} value={font.value}>{font.label}</option>)}</select></label>
        <label className="full">內文<textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="用空行分段；換行會保留成 <br />。" rows={12} /></label>
        <div className="actions full"><button type="submit">儲存草稿</button><button type="button" onClick={loadDraft}>載入草稿</button></div>
      </form>

      <section className="snippet-card" aria-labelledby="html-title">
        <h2 id="html-title">產生的靜態 HTML</h2>
        <pre>{generatedHtml}</pre>
      </section>
      <section className="snippet-card" aria-labelledby="snippet-title">
        <h2 id="snippet-title">可貼到內容來源的物件</h2>
        <pre>{articleSnippet}</pre>
      </section>

      <style>{`
        .editor-shell { width: min(100% - 2rem, 980px); margin-inline: auto; padding: 2rem 0 4rem; }
        .back-link, button { font-weight: 800; } .back-link { color: var(--moss); }
        .editor-hero, .editor-grid, .snippet-card { margin-top: 1.2rem; padding: clamp(1.2rem, 4vw, 2rem); border: 1px solid var(--line); border-radius: 1.6rem; background: rgba(255, 248, 232, 0.78); box-shadow: var(--shadow); }
        .eyebrow { margin: 0 0 0.45rem; color: var(--moss); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.14em; text-transform: uppercase; }
        h1, h2, p { margin-top: 0; } h1 { max-width: 13ch; font-size: clamp(2.5rem, 8vw, 5rem); line-height: 0.98; letter-spacing: -0.08em; } p { color: rgba(31, 37, 32, 0.68); line-height: 1.75; }
        .editor-grid { display: grid; gap: 1rem; } label { display: grid; gap: 0.45rem; color: var(--moss); font-weight: 850; }
        input, textarea, select { width: 100%; border: 1px solid var(--line); border-radius: 1rem; padding: 0.9rem 1rem; color: var(--ink); background: rgba(252, 251, 244, 0.86); font: inherit; } textarea { resize: vertical; }
        .actions { display: flex; flex-wrap: wrap; gap: 0.75rem; } button { border: 0; border-radius: 999px; padding: 0.82rem 1.18rem; color: #fffaf0; background: linear-gradient(135deg, var(--moss), var(--ink)); cursor: pointer; } button[type="button"] { border: 1px solid rgba(89, 111, 79, 0.22); color: var(--moss); background: rgba(252, 251, 244, 0.72); }
        pre { overflow-x: auto; padding: 1rem; border-radius: 0.8rem; background: rgba(31, 37, 32, 0.08); line-height: 1.6; white-space: pre-wrap; }
        @media (min-width: 760px) { .editor-grid { grid-template-columns: 1fr 1fr; } .full { grid-column: 1 / -1; } }
      `}</style>
    </main>
  );
}
