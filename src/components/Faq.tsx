import { useState } from "react";
import type { Theme } from "../theme";

interface FaqItem {
  q: string;
  a: string;
}

const faqData: FaqItem[] = [
  {
    q: "Это безопасно для аккаунта?",
    a: "Да. RustTemper меняет только client.cfg и настройки графики — то же самое, что ты бы сделал руками в консоли игры.",
  },
  {
    q: "Нужно ли знать консольные команды Rust?",
    a: "Нет. Все команды уже спрятаны за переключателями и ползунками — ты просто нажимаешь кнопки.",
  },
  {
    q: "Какие платформы поддерживаются?",
    a: "Сейчас — только Windows. Приложение собрано на Tauri, поддержка других систем не планируется.",
  },
  {
    q: "Сколько стоит?",
    a: "Ничего. RustTemper распространяется бесплатно под лицензией GPL-3.0, исходный код открыт на GitHub.",
  },
];

interface FaqProps {
  theme: Theme;
}

export function Faq({ theme }: FaqProps) {
  const { accent, corners } = theme;
  const [openIdx, setOpenIdx] = useState(-1);
  const faqRadius = corners === "sharp" ? 4 : 12;

  return (
    <section
      id="faq"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "48px 0",
        scrollMarginTop: 72,
      }}
    >
      <div
        style={{
          padding: "0 32px",
          maxWidth: 720,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.025em",
            margin: "0 0 36px",
            textAlign: "center",
            color: "#f4f4f5",
          }}
        >
          Частые вопросы
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqData.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                style={{
                  background: open ? "#0f0f12" : "#0b0b0d",
                  border: `1px solid ${open ? "#26262b" : "#161619"}`,
                  borderRadius: faqRadius,
                  overflow: "hidden",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
              >
                <button
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    width: "100%",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "20px 22px",
                    color: "#f2f2f3",
                    font: "inherit",
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      color: open ? "#f4f4f5" : "#d8d8db",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      color: open ? accent : "#6a6a70",
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      transition:
                        "transform 0.28s cubic-bezier(0.4,0,0.2,1), color 0.2s ease",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: open ? "1fr" : "0fr",
                    transition:
                      "grid-template-rows 0.34s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div style={{ overflow: "hidden", minHeight: 0 }}>
                    <p
                      style={{
                        margin: 0,
                        padding: "0 22px 20px",
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: "#9a9aa0",
                        fontWeight: 400,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
