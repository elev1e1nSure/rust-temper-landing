import { densityPad, radiusBtn } from "../theme";
import type { Theme } from "../theme";

interface HeroProps {
  theme: Theme;
}

export function Hero({ theme }: HeroProps) {
  const { accent, density, corners } = theme;
  const pad = densityPad(density, 90);
  const padBottom = densityPad(density, 70);
  const rBtn = radiusBtn(corners);

  const heroPadStyle: React.CSSProperties = {
    padding: `${pad}px 32px ${padBottom}px`,
    maxWidth: 960,
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 28,
  };

  const primaryBtnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: accent,
    color: "#f2f2f3",
    padding: "14px 24px",
    borderRadius: rBtn,
    fontWeight: 700,
    fontSize: 15,
    textDecoration: "none",
    transition: "transform 0.15s ease, filter 0.15s ease",
  };

  const secondaryBtnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#17171a",
    color: "#f2f2f3",
    padding: "14px 24px",
    borderRadius: rBtn,
    fontWeight: 700,
    fontSize: 15,
    textDecoration: "none",
    transition: "background 0.15s ease, transform 0.15s ease",
  };

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        scrollMarginTop: 0,
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            filter: "blur(3px)",
            transform: "scale(1.02)",
          }}
        >
          <img
            src="/uploads/ChatGPT Image Jul 14, 2026, 01_00_26 AM.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(7,7,8,0.72) 0%, rgba(7,7,8,0.85) 55%, #070708 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={heroPadStyle}>
          <h1
            style={{
              fontSize: 40,
              lineHeight: 1.18,
              fontWeight: 600,
              letterSpacing: "-0.025em",
              margin: 0,
              textWrap: "balance",
              color: "#f4f4f5",
            }}
          >
            Все настройки Rust —<br />в одном окне
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "#9a9aa0",
              maxWidth: 480,
              margin: 0,
              fontWeight: 400,
              letterSpacing: "-0.005em",
            }}
          >
            Твики, бинды и графика без консольных команд и гайдов по форумам —
            понятные переключатели и ползунки вместо конфигов.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 8,
              marginBottom: 8,
              flexWrap: "nowrap",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            <a
              href="https://github.com/elev1e1nSure/rust-temper/releases/latest"
              style={primaryBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.12)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "";
                e.currentTarget.style.transform = "";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M0 2.65 6.5 1.76v6.28H0V2.65Zm0 10.7 6.5.9V9.04H0v4.31Zm7.2-4.31v4.42L16 15.6v-6.56H7.2Zm0-6.85V8.04H16V.4L7.2 1.99Z" />
              </svg>
              Скачать для Windows
            </a>
            <a
              href="https://github.com/elev1e1nSure/rust-temper"
              style={secondaryBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1f1f23";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#17171a";
                e.currentTarget.style.transform = "";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
