export type ArticleCategory = "技術文章" | "心情隨筆" | "旅遊日記";

export type Article = {
  title: string;
  date: string;
  summary: string;
  slug: string;
  category: ArticleCategory;
  readingTime: string;
};

export const articles: Article[] = [
  {
    title: "把靈感整理成一篇短文",
    date: "2026-06-26",
    summary: "用 3 個段落記錄最近的設計觀察、開發筆記或生活切片。",
    slug: "first-note",
    category: "心情隨筆",
    readingTime: "3 min read",
  },
  {
    title: "Next.js 靜態頁面與內容後台的想像",
    date: "2026-06-18",
    summary: "把後台輸出的 HTML 交給 Next.js 使用，保留速度也保留寫作彈性。",
    slug: "next-static-html-editor",
    category: "技術文章",
    readingTime: "5 min read",
  },
  {
    title: "週末海邊小旅行",
    date: "2026-06-03",
    summary: "一些照片、路上的風景，以及工作以外重新充電的片刻。",
    slug: "weekend-coast-trip",
    category: "旅遊日記",
    readingTime: "4 min read",
  },
];

export const writingTracks = [
  {
    title: "技術文章",
    description: "software dev 的實作筆記、踩坑紀錄、架構想法與工具心得。",
  },
  {
    title: "心情隨筆",
    description: "工作節奏、生活觀察、閱讀筆記，或只是把腦中想法寫下來。",
  },
  {
    title: "旅遊日記",
    description: "用照片和文字收藏路上的城市、咖啡店、海邊與短暫逃離。",
  },
] as const;
