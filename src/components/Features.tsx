import { densityPad, radius, radiusSm, type Theme, colors } from "../theme";

interface FeaturesProps {
  theme: Theme;
}

export function Features({ theme }: FeaturesProps) {
  const { accent, density, corners } = theme;
  const pad = densityPad(density, 28);
  const r = radius(corners);
  const rs = radiusSm(corners);

  const cardStyle: React.CSSProperties = {
    background: colors.card,
    border: `1px solid ${colors.cardBorder}`,
    borderRadius: r,
    padding: pad,
  };

  const iconWrapStyle: React.CSSProperties = {
    width: 38,
    height: 38,
    borderRadius: rs,
    background: colors.cardIconBg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    color: accent,
  };

  return (
    <section
      id="features"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "32px 0",
        scrollMarginTop: 72,
      }}
    >
      <div
        style={{
          padding: "0 32px",
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              margin: "0 0 12px",
            }}
          >
            Что внутри
          </h2>
          <p
            style={{
              fontSize: 22,
              color: colors.textMuted,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Четыре страницы вместо десятка гайдов и конфигов
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
        >
          <div style={cardStyle}>
            <div style={iconWrapStyle}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="6" width="20" height="13" rx="2" />
                <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
              </svg>
            </div>
            <div style={{ fontSize: 25, fontWeight: 700, marginBottom: 12 }}>
              Бинды
            </div>
            <p
              style={{
                fontSize: 19,
                color: colors.textMuted,
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Раскладка клавиатуры прямо на экране: кликаешь клавишу, вводишь
              команду. Поиск, готовый словарь команд Rust и подсветка
              конфликтов.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconWrapStyle}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h0M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" />
              </svg>
            </div>
            <div style={{ fontSize: 25, fontWeight: 700, marginBottom: 12 }}>
              Твики
            </div>
            <p
              style={{
                fontSize: 19,
                color: colors.textMuted,
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Переключатели для популярных фишек client.cfg: прирост FPS, чистый
              экран, настройки оружия. Выключил — всё вернулось как было.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconWrapStyle}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <div style={{ fontSize: 25, fontWeight: 700, marginBottom: 12 }}>
              Графика
            </div>
            <p
              style={{
                fontSize: 19,
                color: colors.textMuted,
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Вместо голых цифр в конфиге — понятные ползунки: тени, текстуры,
              вода, освещение, трава, облака, сглаживание.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconWrapStyle}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h0a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </div>
            <div style={{ fontSize: 25, fontWeight: 700, marginBottom: 12 }}>
              Настройки
            </div>
            <p
              style={{
                fontSize: 19,
                color: colors.textMuted,
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 500,
              }}
            >
              RustTemper сам находит папку с игрой через Steam. Не нашёл —
              укажешь путь вручную.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
