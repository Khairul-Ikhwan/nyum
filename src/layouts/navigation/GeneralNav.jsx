import MenuDrawer from "../../components/ui/MenuDrawer";
import NavDrawer from "../../components/ui/NavDrawer";
import { useMenuDrawer } from "../../customHooks/useMenuDrawer";
import { Link } from "react-router-dom";

export default function GeneralNav({ storeLogo, storeName }) {
  const { isMenuOpen, closeMenu, toggleMenu } = useMenuDrawer();

  return (
    <>
      <header>
        <div
          style={{
            alignSelf: "center",
            color: "var(--dark)",
            display: "flex",
          }}
        >
          {storeLogo ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <div className="logo">
                <img
                  src={storeLogo}
                  alt="Store Logo"
                  style={{ width: "100%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  {storeName}
                </h2>
                <p
                  style={{
                    fontWeight: "300",
                    fontStyle: "italic",
                    color: "var(--primary)",
                  }}
                >
                  on Nyum
                </p>
              </div>
            </div>
          ) : storeName ? (
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <h1>{storeName}</h1>
                <p
                  style={{
                    fontWeight: "300",
                    fontStyle: "italic",
                    color: "var(--primary)",
                  }}
                >
                  on Nyum
                </p>
              </div>
            </div>
          ) : (
            <Link to="/">
              <h1>Nyum</h1>
            </Link>
          )}
        </div>
        <div className="nav-drawer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img
              style={{ width: "25px" }}
              src="/assets/images/ui/close.svg"
              alt="close menu"
            />
          ) : (
            <NavDrawer fill={"var(--primary)"} width={"30px"} />
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div>
          <MenuDrawer
            onClose={closeMenu}
            className={isMenuOpen ? "open" : ""}
          />
        </div>
      )}
    </>
  );
}
