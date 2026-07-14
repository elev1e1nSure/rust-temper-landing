import { densityPad, radiusBtn } from "../theme";
import type { Theme } from "../theme";

interface HeroProps {
  theme: Theme;
}

export function Hero({ theme }: HeroProps) {
  const { accent, density, corners } = theme;
  const pad = densityPad(density, 60);
  const padBottom = densityPad(density, 44);
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
    rowGap: 28,
  };

  const primaryBtnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: accent,
    color: "#f2f2f3",
    padding: "16px 28px",
    borderRadius: rBtn,
    fontWeight: 700,
    fontSize: 21,
    textDecoration: "none",
    transition: "filter 0.15s ease",
  };

  const telegramBtnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "transparent",
    color: "#f2f2f3",
    padding: "16px 28px",
    borderRadius: rBtn,
    fontWeight: 700,
    fontSize: 21,
    textDecoration: "none",
    transition: "background 0.15s ease",
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
              fontSize: 76,
              lineHeight: 1.1,
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
              fontSize: 25,
              lineHeight: 1.5,
              color: "#9a9aa0",
              maxWidth: 620,
              margin: 0,
              fontWeight: 400,
              letterSpacing: "-0.005em",
            }}
          >
            Твики, бинды и графика без консольных команд и гайдов по форумам —
            понятные переключатели и ползунки вместо консоли.
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "";
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
              href="https://telegram.me/rust_temper"
              target="_blank"
              rel="noreferrer"
              style={telegramBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(242, 242, 243, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M14.8 1.9 1.7 6.95c-.9.36-.9.86-.17 1.09l3.36 1.05 1.3 3.98c.16.45.08.63.56.63.37 0 .53-.17.74-.37l1.63-1.59 3.4 2.51c.63.35 1.08.17 1.23-.58l2.23-10.5c.21-.92-.35-1.34-1.18-1.28ZM5.4 8.85l7.57-4.78c.38-.23.72-.1.43.16L7 10.08l-.25 2.67-1.35-3.9Z" />
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
