export default function PageLayout({ children }) {
  return (
    <div className="page-wrapper">
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "white",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 700, fontSize: "var(--logo-text)" }}>Nyum</p>
        </div>
        <div>
          <p>nav menu goes here</p>
        </div>
      </header>
      <div className="children-wrapper">{children}</div>
      <footer style={{ color: "white" }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: "var(--logo-text)" }}>Nyum</p>
          <p style={{ fontWeight: 300, fontSize: "var(--logo-text-small)" }}>
            a platform by Kibar Digtal Pte Ltd
          </p>
        </div>
      </footer>
    </div>
  );
}
