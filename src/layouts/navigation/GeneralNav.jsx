import MenuDrawer from "../../components/ui/MenuDrawer";
import NavDrawer from "../../components/ui/NavDrawer";
import { useMenuDrawer } from "../../customHooks/useMenuDrawer";

export default function GeneralNav({ storeLogo, storeName }) {
  const { isMenuOpen, closeMenu, toggleMenu } = useMenuDrawer();

  return (
    <>
      <header>
        <div style={{ alignSelf: "center", color: "var(--dark)" }}>
          {storeLogo ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",

                  borderRadius: "50%",
                }}
              >
                <img
                  src={storeLogo}
                  alt="Store Logo"
                  style={{ width: "inherit" }}
                />
              </div>
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
            <h1>Nyum</h1>
          )}
        </div>
        <div className="nav-drawer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <h3>X</h3>
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
