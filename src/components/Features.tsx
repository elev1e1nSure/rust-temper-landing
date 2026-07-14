import { accent, colors } from "../theme";

export function Features() {
  const cardStyle: React.CSSProperties = {
    background: colors.card,
    borderRadius: 16,
    padding: 28,
  };

  const iconWrapStyle: React.CSSProperties = {
    width: 38,
    height: 38,
    borderRadius: 9,
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
      className="features"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "72px 0",
        scrollMarginTop: 72,
      }}
    >
      <div
        className="features-content"
        style={{
          padding: "0 32px",
          maxWidth: 1300,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          className="features-heading"
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2
            className="features-title"
            style={{
              fontSize: 50,
              fontWeight: 600,
              letterSpacing: "-0.025em",
              margin: "0 0 12px",
              color: "#f4f4f5",
            }}
          >
            Что внутри
          </h2>
        </div>

        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
        >
          <div className="feature-card" style={cardStyle}>
            <div className="feature-card-icon" style={iconWrapStyle}>
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
            <div
              className="feature-card-title"
              style={{ fontSize: 21, fontWeight: 600, marginBottom: 12 }}
            >
              Бинды
            </div>
            <p
              className="feature-card-description"
              style={{
                fontSize: 19,
                color: colors.textMuted,
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400,
              }}
            >
              Раскладка клавиатуры прямо на экране: кликаешь клавишу, вводишь
              команду. Поиск, готовый словарь команд Rust и подсветка
              конфликтов.
            </p>
          </div>

          <div className="feature-card" style={cardStyle}>
            <div className="feature-card-icon" style={iconWrapStyle}>
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
            <div
              className="feature-card-title"
              style={{ fontSize: 21, fontWeight: 600, marginBottom: 12 }}
            >
              Твики
            </div>
            <p
              className="feature-card-description"
              style={{
                fontSize: 19,
                color: colors.textMuted,
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400,
              }}
            >
              Переключатели для тюнинга клиента: чистый экран, настройки оружия,
              параметры, влияющие на FPS. Выключил — всё вернулось как было.
            </p>
          </div>

          <div className="feature-card" style={cardStyle}>
            <div className="feature-card-icon" style={iconWrapStyle}>
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
            <div
              className="feature-card-title"
              style={{ fontSize: 21, fontWeight: 600, marginBottom: 12 }}
            >
              Графика
            </div>
            <p
              className="feature-card-description"
              style={{
                fontSize: 19,
                color: colors.textMuted,
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400,
              }}
            >
              Вместо голых цифр в консоли — понятные ползунки: тени, текстуры,
              вода, освещение, трава, облака, сглаживание.
            </p>
          </div>

          <div className="feature-card" style={cardStyle}>
            <div className="feature-card-icon" style={iconWrapStyle}>
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
            <div
              className="feature-card-title"
              style={{ fontSize: 21, fontWeight: 600, marginBottom: 12 }}
            >
              Настройки
            </div>
            <p
              className="feature-card-description"
              style={{
                fontSize: 19,
                color: colors.textMuted,
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400,
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
