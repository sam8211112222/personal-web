export const brandColors = {
  cream: "#fcfbf4",
  porcelain: "#fff8e8",
  ink: "#1f2520",
  moss: "#596f4f",
  sage: "#a9b99a",
  clay: "#c06f4a",
  marigold: "#e4b04a",
  dustyRose: "#d7a6a1",
} as const;

export const themeTokens = {
  colors: brandColors,
  line: "rgba(31, 37, 32, 0.12)",
  shadow: "0 28px 90px rgba(57, 45, 25, 0.13)",
  maxWidth: "1180px",
} as const;

export function themeCssVariables() {
  return `
    --cream: ${brandColors.cream};
    --porcelain: ${brandColors.porcelain};
    --ink: ${brandColors.ink};
    --moss: ${brandColors.moss};
    --sage: ${brandColors.sage};
    --clay: ${brandColors.clay};
    --marigold: ${brandColors.marigold};
    --dusty-rose: ${brandColors.dustyRose};
    --line: ${themeTokens.line};
    --shadow: ${themeTokens.shadow};
    --max-width: ${themeTokens.maxWidth};
  `;
}
