export type Article = {
  title: string;
  date: string;
  summary: string;
  slug: string;
};

export const articles: Article[] = [
  {
    title: "把靈感整理成一篇短文",
    date: "2026-06-26",
    summary: "用 3 個段落記錄最近的設計觀察、開發筆記或生活切片。",
    slug: "first-note",
  },
];
