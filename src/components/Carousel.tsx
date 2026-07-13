import { useState, useCallback, useRef } from "react";
import { densityPad, type Theme } from "../theme";

interface Screenshot {
  src: string;
  label: string;
}

const shots: Screenshot[] = [
  { src: "/assets/screenshot-binds.png", label: "Бинды" },
  { src: "/assets/screenshot-tweaks.png", label: "Твики" },
  { src: "/assets/screenshot-optimization.png", label: "Оптимизация" },
  { src: "/assets/screenshot-graphics.png", label: "Графика" },
  { src: "/assets/screenshot-settings.png", label: "Настройки" },
];

interface CarouselProps {
  theme: Theme;
}

export function Carousel({ theme }: CarouselProps) {
  const { accent, density, corners } = theme;
  const n = shots.length;
  const [idx, setIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragDX, setDragDX] = useState(0);
  const dragStartX = useRef(0);
  const dragMoved = useRef(false);

  const setIndex = useCallback(
    (i: number) => {
      setIdx(((i % n) + n) % n);
    },
    [n],
  );

  const onDragStart = useCallback((e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragMoved.current = false;
    setDragging(true);
    setDragDX(0);
  }, []);

  const onDragMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - dragStartX.current;
      if (Math.abs(dx) > 4) dragMoved.current = true;
      setDragDX(dx);
    },
    [dragging],
  );

  const onDragEnd = useCallback(() => {
    if (!dragging) return;
    const threshold = 55;
    setDragging(false);
    setDragDX(0);
    if (dragDX <= -threshold) setIndex(idx + 1);
    else if (dragDX >= threshold) setIndex(idx - 1);
    setTimeout(() => {
      dragMoved.current = false;
    }, 0);
  }, [dragging, dragDX, idx, setIndex]);

  const imgRadius = corners === "sharp" ? 4 : 14;
  const dx = dragging ? dragDX : 0;
  const ease =
    "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease, filter 0.5s ease";

  const padBottom = densityPad(density, 100);
  const sectionPadStyle: React.CSSProperties = {
    padding: `0 32px ${padBottom}px`,
    maxWidth: 1320,
    margin: "0 auto",
    width: "100%",
  };

  const carouselStageStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    maxWidth: 1340,
    margin: "0 auto",
    aspectRatio: "1600 / 648",
    overflow: "visible",
    touchAction: "pan-y",
    userSelect: "none",
  };

  const arrowStyle: React.CSSProperties = {
    flexShrink: 0,
    width: 46,
    height: 46,
    padding: 0,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#0e0e10",
    color: "#f2f2f3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 8px 24px -8px rgba(0,0,0,0.6)",
    transition: "background 0.15s ease, transform 0.15s ease",
  };

  return (
    <section
      id="screenshot"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "48px 0",
        scrollMarginTop: 72,
        overflowX: "hidden",
      }}
    >
      <div style={sectionPadStyle}>
        <div
          style={carouselStageStyle}
          onPointerDown={onDragStart}
          onPointerMove={onDragMove}
          onPointerUp={onDragEnd}
          onPointerLeave={onDragEnd}
        >
          {shots.map((s, i) => {
            let rel = i - idx;
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;
            const abs = Math.abs(rel);
            const sign = Math.sign(rel);
            const shiftPct = abs === 0 ? 0 : abs === 1 ? sign * 68 : sign * 96;
            const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.62;
            const opacity = abs === 0 ? 1 : abs === 1 ? 0.6 : 0;
            const blur = abs === 0 ? 0 : abs === 1 ? 0.6 : 3;
            const z = abs === 0 ? 30 : abs === 1 ? 20 : 10;
            const isActive = abs === 0;

            const slideStyle: React.CSSProperties = {
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "78%",
              maxWidth: 980,
              aspectRatio: "1600 / 900",
              transform: `translate(-50%,-50%) translateX(${shiftPct}%) translateX(${dx}px) scale(${scale})`,
              opacity,
              zIndex: z,
              filter: `blur(${blur}px)`,
              transition: dragging ? "none" : ease,
              cursor: abs > 1 ? "grab" : abs === 0 ? "grab" : "pointer",
              pointerEvents: abs > 1 ? "none" : "auto",
              willChange: "transform, opacity",
            };

            const imgStyle: React.CSSProperties = {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              borderRadius: imgRadius,
              userSelect: "none",
              border: isActive ? "1px solid #26262b" : "1px solid #1a1a1e",
              boxShadow: isActive
                ? "0 44px 110px -30px rgba(0,0,0,0.75)"
                : "0 24px 60px -24px rgba(0,0,0,0.6)",
            };

            return (
              <div
                key={i}
                style={slideStyle}
                onClick={() => {
                  if (!dragMoved.current) setIndex(i);
                }}
              >
                <img
                  src={s.src}
                  alt={s.label}
                  style={imgStyle}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Arrows + label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginTop: 28,
          }}
        >
          <button
            onClick={() => setIndex(idx - 1)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = accent;
              e.currentTarget.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0e0e10";
              e.currentTarget.style.transform = "";
            }}
            style={arrowStyle}
            aria-label="Предыдущий скриншот"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div
            style={{
              minWidth: 180,
              textAlign: "center",
              fontSize: 20,
              color: "#f2f2f3",
              fontWeight: 700,
            }}
          >
            {shots[idx].label}
          </div>
          <button
            onClick={() => setIndex(idx + 1)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = accent;
              e.currentTarget.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0e0e10";
              e.currentTarget.style.transform = "";
            }}
            style={arrowStyle}
            aria-label="Следующий скриншот"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 18,
          }}
        >
          {shots.map((s, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={s.label}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === idx ? accent : "#2a2a2e",
                transition: "background 0.15s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
