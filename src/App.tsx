import { useEffect, useState } from "react";
import Lenis from "lenis";
import { defaultTheme } from "./theme";
import type { Theme } from "./theme";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Carousel } from "./components/Carousel";
import { Features } from "./components/Features";
import { Faq } from "./components/Faq";

export default function App() {
  const [theme] = useState<Theme>(defaultTheme);

  const accent = theme.accent;

  useEffect(() => {
    const lenis = new Lenis({ anchors: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Nav accent={accent} />
      <Hero theme={theme} />
      <Carousel theme={theme} />
      <Features theme={theme} />
      <Faq theme={theme} />
    </div>
  );
}
