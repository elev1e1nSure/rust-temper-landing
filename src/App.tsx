import { useEffect } from "react";
import Lenis from "lenis";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Carousel } from "./components/Carousel";
import { Features } from "./components/Features";
import { Faq } from "./components/Faq";

export default function App() {
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
      <Nav />
      <Hero />
      <Carousel />
      <Features />
      <Faq />
    </div>
  );
}
