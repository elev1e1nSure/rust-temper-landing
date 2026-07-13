interface NavProps {
  accent: string;
}

const navStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  width: "100%",
  background: "rgba(7,7,8,0.35)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const innerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 48px",
  maxWidth: 1200,
  margin: "0 auto",
};

const linksStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 28,
};

export function Nav({ accent }: NavProps) {
  const linkStyle: React.CSSProperties = {
    fontSize: 14,
    color: "#f2f2f3",
    fontWeight: 600,
    transition: "color 0.15s ease",
    textDecoration: "none",
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <div style={linksStyle}>
          <a
            href="#screenshot"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f2f2f3")}
          >
            Интерфейс
          </a>
          <a
            href="#features"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f2f2f3")}
          >
            Возможности
          </a>
          <a
            href="#faq"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f2f2f3")}
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
}
