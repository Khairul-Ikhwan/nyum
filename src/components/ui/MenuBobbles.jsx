import { Link } from "react-router-dom";

export default function MenuBobbles({
  menuTitle,
  menuImg,
  menuLink,
  setIsVisible,
  setIsMenuOpen,
}) {
  const handleClick = () => {
    setIsVisible(false);
    setIsMenuOpen(false);
  };

  return (
    <Link to={menuLink} className="bobble-group" onClick={handleClick}>
      <div className="bobble">
        <img src={`${menuImg}`} alt={`${menuTitle}`} />
      </div>
      <p>{menuTitle}</p>
    </Link>
  );
}
