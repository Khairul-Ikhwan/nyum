import MenuDrawer from "../../components/ui/MenuDrawer";
import NavDrawer from "../../components/ui/NavDrawer";
import { useMenuDrawer } from "../../customHooks/useMenuDrawer";
import { useCartDrawer } from "../../customHooks/useCartDrawer";
import { Link } from "react-router-dom";
import Cart from "../../components/ui/Cart";

export default function GeneralNav({ storeLogo, storeName }) {
  const { isMenuOpen, setIsMenuOpen, closeMenu, toggleMenu } = useMenuDrawer();
  const { isCartOpen, toggleCart } = useCartDrawer();

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
        <div className="nav-drawer">
          <img
            style={{ width: "35px" }}
            src="/assets/images/ui/cart.png"
            onClick={toggleCart}
          />

          {isMenuOpen ? (
            <img
              style={{ width: "25px" }}
              src="/assets/images/ui/close.svg"
              alt="close menu"
              onClick={toggleMenu}
            />
          ) : (
            <div onClick={toggleMenu}>
              <NavDrawer fill={"var(--primary)"} width={"30px"} />
            </div>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div>
          <MenuDrawer
            onClose={closeMenu}
            setIsMenuOpen={setIsMenuOpen}
            className={isMenuOpen ? "open" : ""}
          />
        </div>
      )}
      {isCartOpen && (
        <div>
          <Cart toggleCart={toggleCart} className={isCartOpen ? "open" : ""} />
        </div>
      )}
    </>
  );
}
