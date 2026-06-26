"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const storageKey = "personal-web-draft";

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function EditorPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");

  const articleSnippet = useMemo(() => {
    const safeTitle = title.trim() || "新文章標題";
    return `{
  title: "${safeTitle.replaceAll('"', '\\"')}",
  date: "${new Date().toISOString().slice(0, 10)}",
  summary: "${summary.trim().replaceAll('"', '\\"') || "一句話摘要"}",
  slug: "${slugify(safeTitle) || "new-article"}",
}`;
  }, [summary, title]);

  function saveDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem(storageKey, JSON.stringify({ title, summary, body }));
  }

  function loadDraft() {
    const draft = window.localStorage.getItem(storageKey);

    if (!draft) return;

    const parsed = JSON.parse(draft) as { title?: string; summary?: string; body?: string };
    setTitle(parsed.title ?? "");
    setSummary(parsed.summary ?? "");
    setBody(parsed.body ?? "");
  }

  return (
    <main className="editor-shell">
      <Link className="back-link" href="/">
        ← 回首頁
      </Link>
      <section className="editor-hero">
        <p className="eyebrow">Article editor</p>
        <h1>先在這裡寫草稿，再貼到內容設定檔。</h1>
        <p>目前網站是靜態 Next.js，沒有資料庫；這個編輯器會把草稿存在瀏覽器，整理好後把下方產生的物件貼到 <code>src/config/content.ts</code> 的 <code>articles</code> 陣列就能新增文章。</p>
      </section>

      <form className="editor-grid" onSubmit={saveDraft}>
        <label>
          標題
          <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="例如：我的第一篇文章" />
        </label>
        <label>
          摘要
          <input value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="首頁卡片會顯示這句話" />
        </label>
        <label className="full">
          內文草稿
          <textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="支援先用 Markdown 習慣寫草稿。" rows={12} />
        </label>
        <div className="actions full">
          <button type="submit">儲存草稿</button>
          <button type="button" onClick={loadDraft}>載入草稿</button>
        </div>
      </form>

      <section className="snippet-card" aria-labelledby="snippet-title">
        <h2 id="snippet-title">新增到 content.ts</h2>
        <pre>{articleSnippet}</pre>
      </section>

      <style>{`
        .editor-shell {
          width: min(100% - 2rem, 920px);
          margin-inline: auto;
          padding: 2rem 0 4rem;
        }

        .back-link,
        button {
          font-weight: 800;
        }

        .back-link {
          color: var(--moss);
        }

        .editor-hero,
        .editor-grid,
        .snippet-card {
          margin-top: 1.2rem;
          padding: clamp(1.2rem, 4vw, 2rem);
          border: 1px solid var(--line);
          border-radius: 1.6rem;
          background: rgba(255, 248, 232, 0.76);
          box-shadow: var(--shadow);
        }

        .eyebrow {
          margin: 0 0 0.45rem;
          color: var(--moss);
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        h1,
        h2,
        p {
          margin-top: 0;
        }

        h1 {
          max-width: 12ch;
          font-size: clamp(2.6rem, 9vw, 5.5rem);
          line-height: 0.98;
          letter-spacing: -0.08em;
        }

        p {
          color: rgba(31, 37, 32, 0.68);
          line-height: 1.75;
        }

        code,
        pre {
          border-radius: 0.5rem;
          background: rgba(31, 37, 32, 0.08);
        }

        code {
          padding: 0.1rem 0.3rem;
        }

        .editor-grid {
          display: grid;
          gap: 1rem;
        }

        label {
          display: grid;
          gap: 0.45rem;
          color: var(--moss);
          font-weight: 850;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid var(--line);
          border-radius: 1rem;
          padding: 0.9rem 1rem;
          color: var(--ink);
          background: rgba(252, 251, 244, 0.82);
          font: inherit;
        }

        textarea {
          resize: vertical;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        button {
          border: 0;
          border-radius: 999px;
          padding: 0.82rem 1.18rem;
          color: #fffaf0;
          background: linear-gradient(135deg, var(--moss), var(--ink));
          cursor: pointer;
        }

        button[type="button"] {
          border: 1px solid rgba(89, 111, 79, 0.22);
          color: var(--moss);
          background: rgba(252, 251, 244, 0.72);
        }

        pre {
          overflow-x: auto;
          padding: 1rem;
          line-height: 1.6;
        }

        @media (min-width: 760px) {
          .editor-grid {
            grid-template-columns: 1fr 1fr;
          }

          .full {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </main>
  );
}
