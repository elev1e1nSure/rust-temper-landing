import { useState, useCallback, useRef } from "react";
import { accent } from "../theme";

interface Screenshot {
  src: string;
  label: string;
}

const shots: Screenshot[] = [
  { src: "./assets/screenshot-binds.png", label: "Бинды" },
  { src: "./assets/screenshot-tweaks.png", label: "Твики" },
  { src: "./assets/screenshot-optimization.png", label: "Оптимизация" },
  { src: "./assets/screenshot-graphics.png", label: "Графика" },
  { src: "./assets/screenshot-settings.png", label: "Настройки" },
];

export function Carousel() {
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

  const imgRadius = 14;
  const dx = dragging ? dragDX : 0;
  const ease =
    "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease, filter 0.5s ease";

  const sectionPadStyle: React.CSSProperties = {
    padding: "0 32px 60px",
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
    width: 56,
    height: 56,
    padding: 0,
    borderRadius: "50%",
    background: "transparent",
    color: "#9a9aa0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "color 0.15s ease, transform 0.15s ease",
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
        padding: "20px 0",
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
            gap: 20,
            marginTop: 72,
          }}
        >
          <button
            onClick={() => setIndex(idx - 1)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = accent;
              e.currentTarget.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9a9aa0";
              e.currentTarget.style.transform = "";
            }}
            style={arrowStyle}
            aria-label="Предыдущий скриншот"
          >
            <svg
              width="22"
              height="22"
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
              minWidth: 220,
              textAlign: "center",
              fontSize: 26,
              color: "#f2f2f3",
              fontWeight: 700,
            }}
          >
            {shots[idx].label}
          </div>
          <button
            onClick={() => setIndex(idx + 1)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = accent;
              e.currentTarget.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9a9aa0";
              e.currentTarget.style.transform = "";
            }}
            style={arrowStyle}
            aria-label="Следующий скриншот"
          >
            <svg
              width="22"
              height="22"
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
            gap: 10,
            marginTop: 30,
          }}
        >
          {shots.map((s, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={s.label}
              style={{
                width: 10,
                height: 10,
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
