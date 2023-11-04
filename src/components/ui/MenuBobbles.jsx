import { Link } from "react-router-dom";

export default function MenuBobbles() {
  return (
    <Link to="/">
      <div className="bobble">
        <img src="/assets/images/curry_puff.jpeg" />
        <p>This is a bobble</p>
      </div>
    </Link>
  );
}
