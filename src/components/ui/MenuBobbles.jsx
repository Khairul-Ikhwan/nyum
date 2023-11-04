import { Link } from "react-router-dom";

export default function MenuBobbles() {
  return (
    <Link to="/">
      <div className="bobble">
        <img src="/public/assets/images/demo_logo.svg" />
        <p>This is a bobble</p>
      </div>
    </Link>
  );
}
