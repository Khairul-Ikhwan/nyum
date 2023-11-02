import { useState, useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PageLayout({ children, logo, storeName }) {
  const [navigationVisible, setNavigationVisible] = useState(false);

  const toggleNavigation = () => {
    setNavigationVisible(!navigationVisible);
  };

  // Make the user scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

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
          {logo || storeName ? (
            <Link to={`/store/${id}`}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  placeItems: "center",
                  cursor: "pointer",
                }}
              >
                {logo && (
                  <img style={{ width: "45px", height: "45px" }} src={logo} />
                )}
                {storeName && (
                  <div>
                    <p
                      style={{ fontWeight: 700, fontSize: "var(--logo-text)" }}
                    >
                      {storeName}
                    </p>
                    <p style={{ fontWeight: 100, fontSize: ".8rem" }}>
                      on Nyum
                    </p>
                  </div>
                )}
              </div>
            </Link>
          ) : (
            <Link to="/" style={{ cursor: "pointer" }}>
              <p style={{ fontWeight: 700, fontSize: "var(--logo-text)" }}>
                Nyum
              </p>
            </Link>
          )}
        </div>

        <div onClick={toggleNavigation} style={{ cursor: "pointer" }}>
          {navigationVisible ? "close menu" : "menu"}
        </div>
      </header>
      {navigationVisible && <Navigation />}

      <div className="children-wrapper">{children}</div>
      <footer style={{ color: "white" }}>
        <Link to="https://kibar.digital">
          <div style={{ cursor: "pointer" }}>
            <p style={{ fontWeight: 700, fontSize: "var(--logo-text)" }}>
              Nyum
            </p>
            <p style={{ fontWeight: 300, fontSize: "var(--logo-text-small)" }}>
              a platform by Kibar Digtal Pte Ltd
            </p>
          </div>
        </Link>
      </footer>
    </div>
  );
}
