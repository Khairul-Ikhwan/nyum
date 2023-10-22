import { useState } from "react";
import Navigation from "../components/navigation/Navigation";

export default function PageLayout({ children }) {
  const [navigationVisible, setNavigationVisible] = useState(false);

  const toggleNavigation = () => {
    setNavigationVisible(!navigationVisible);
  };

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
        <div onClick={toggleNavigation} style={{ cursor: "pointer" }}>
          <p>menu</p>
        </div>
      </header>
      {navigationVisible && <Navigation />}

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
