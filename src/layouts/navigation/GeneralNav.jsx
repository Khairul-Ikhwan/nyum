import MenuDrawer from "../../components/ui/MenuDrawer";
import NavDrawer from "../../components/ui/NavDrawer";
import { useMenuDrawer } from "../../customHooks/useMenuDrawer";

export default function GeneralNav() {
  const { isMenuOpen, closeMenu, toggleMenu } = useMenuDrawer();

  return (
    <>
      <header>
        <div style={{ alignSelf: "center", color: "var(--primary)" }}>
          <h1>Nyum</h1>
        </div>
        <div className="nav-drawer" onClick={toggleMenu}>
          <NavDrawer fill={"var(--primary)"} width={"30px"} />
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
