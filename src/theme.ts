export type Density = "tight" | "regular" | "roomy";
export type Corners = "sharp" | "rounded";

export interface Theme {
  accent: string;
  density: Density;
  corners: Corners;
}

export const defaultTheme: Theme = {
  accent: "#ce3f27",
  density: "regular",
  corners: "rounded",
};

export function densityPad(density: Density, base: number): number {
  return Math.round(
    base * (density === "roomy" ? 1.35 : density === "tight" ? 0.75 : 1),
  );
}

export function radius(corners: Corners): number {
  return corners === "sharp" ? 4 : 16;
}

export function radiusSm(corners: Corners): number {
  return corners === "sharp" ? 3 : 9;
}

export function radiusBtn(corners: Corners): number {
  return corners === "sharp" ? 4 : 8;
}

export const colors = {
  bg: "#070708",
  card: "#0e0e10",
  cardBorder: "#17171a",
  border: "#17171a",
  text: "#f2f2f3",
  textDim: "#9a9aa0",
  textMuted: "#8e8e93",
  btnSecondary: "#17171a",
  btnSecondaryHover: "#1f1f23",
  navBg: "rgba(7,7,8,0.35)",
  faqClosed: "#0b0b0d",
  faqClosedBorder: "#161619",
  faqOpen: "#0f0f12",
  faqOpenBorder: "#26262b",
  carouselDot: "#2a2a2e",
  cardIconBg: "#17171a",
} as const;
