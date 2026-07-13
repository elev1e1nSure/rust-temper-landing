interface FooterProps {
  accent: string;
}

export function Footer({ accent }: FooterProps) {
  return (
    <footer style={{ borderTop: "1px solid #17171a" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ fontSize: 16, color: "#8e8e93", fontWeight: 600 }}>
          RustTemper · GPL-3.0
        </div>
        <a
          href="https://github.com/elev1e1nSure/rust-temper"
          style={{
            fontSize: 16,
            color: "#8e8e93",
            fontWeight: 600,
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#8e8e93")}
        >
          github.com/elev1e1nSure/rust-temper
        </a>
      </div>
    </footer>
  );
}
