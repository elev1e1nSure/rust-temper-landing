import { useState } from "react";
import { defaultTheme } from "./theme";
import type { Theme } from "./theme";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Carousel } from "./components/Carousel";
import { Features } from "./components/Features";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

export default function App() {
  const [theme] = useState<Theme>(defaultTheme);

  const accent = theme.accent;

  return (
    <div className="app">
      <Nav accent={accent} />
      <Hero theme={theme} />
      <Carousel theme={theme} />
      <Features theme={theme} />
      <Faq theme={theme} />
      <Footer accent={accent} />
    </div>
  );
}
