import { useState, useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import { Link } from "react-router-dom";

export default function PageLayout({ children, logo, storeName }) {
  const [navigationVisible, setNavigationVisible] = useState(false);

  const toggleNavigation = () => {
    setNavigationVisible(!navigationVisible);
  };

  // Make the user scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {logo && storeName ? (
            <p style={{ fontWeight: 700, fontSize: "var(--logo-text)" }}>
              {storeName}
            </p>
          ) : (
            <Link to="/" style={{ cursor: "pointer" }}>
              <p style={{ fontWeight: 700, fontSize: "var(--logo-text)" }}>
                Nyum
              </p>
            </Link>
          )}{" "}
        </div>

        <div onClick={toggleNavigation} style={{ cursor: "pointer" }}>
          {navigationVisible ? "close menu" : "menu"}
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
