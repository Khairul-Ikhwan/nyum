import { Link } from "react-router-dom";

export default function MenuBobbles({ menuTitle, menuImg, menuLink }) {
  return (
    <Link to={menuLink} className="bobble-group">
      <div className="bobble">
        <img src={`${menuImg}`} alt={`${menuTitle}`} />
      </div>
      <p>{menuTitle}</p>
    </Link>
  );
}
