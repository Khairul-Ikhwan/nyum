import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation-menu">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>FAQ</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <Link to="/development-roadmap">
          <li>Development Roadmap</li>
        </Link>
      </ul>
      {/* <div className="sub-menu">
        <p>Settings</p>
        <p>Account</p>
        <p>Login</p>
      </div> */}
    </div>
  );
}
