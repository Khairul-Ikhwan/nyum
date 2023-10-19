export default function PageLayout({ children }) {
  return (
    <div className="page-wrapper">
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "2%",
          height: "fit-content",
        }}
      >
        <div>
          <p>Logo goes here</p>
        </div>
        <div>
          <p>nav menu goes here</p>
        </div>
      </header>
      {children}
      <footer>hello</footer>
    </div>
  );
}
