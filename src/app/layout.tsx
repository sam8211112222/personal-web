import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Chen | Personal Website",
  description: "A responsive static personal website built with Next.js and React.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
        <style jsx global>{`
          :root {
            --cream: #fcfbf4;
            --porcelain: #fff8e8;
            --ink: #1f2520;
            --moss: #596f4f;
            --sage: #a9b99a;
            --clay: #c06f4a;
            --marigold: #e4b04a;
            --dusty-rose: #d7a6a1;
            --line: rgba(31, 37, 32, 0.12);
            --shadow: 0 28px 90px rgba(57, 45, 25, 0.13);
            --max-width: 1180px;
          }

          * {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            min-width: 320px;
            margin: 0;
            color: var(--ink);
            background:
              radial-gradient(circle at 8% 12%, rgba(228, 176, 74, 0.24), transparent 25rem),
              radial-gradient(circle at 88% 0%, rgba(169, 185, 154, 0.34), transparent 28rem),
              linear-gradient(180deg, var(--cream) 0%, #f7f0df 100%);
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }

          body::before {
            position: fixed;
            inset: 0;
            z-index: -1;
            pointer-events: none;
            content: "";
            background-image:
              linear-gradient(rgba(31, 37, 32, 0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(31, 37, 32, 0.035) 1px, transparent 1px);
            background-size: 42px 42px;
            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent 78%);
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}</style>
      </body>
    </html>
  );
}
