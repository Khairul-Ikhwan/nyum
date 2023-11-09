import { useState, useEffect } from "react";
import MenuBobbles from "./MenuBobbles";
import { Link } from "react-router-dom";

export default function MenuDrawer({ className }) {
  // State to control whether the menu drawer is visible or not
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use a setTimeout to trigger the transition after a slight delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    // Clean up the timeout when the component unmounts or when className changes
    return () => clearTimeout(timeout);
  }, [className]);

  return (
    <div className={`menu-drawer ${isVisible ? className : ""}`}>
      <div className="quick-link">
        <MenuBobbles
          menuLink={"/"}
          menuTitle={"Home"}
          menuImg={"/assets/images/ui/home.png"}
        />
        <MenuBobbles
          menuLink={"/store"}
          menuTitle={"Stores"}
          menuImg={"/assets/images/ui/shop.png"}
        />
        <MenuBobbles
          menuLink={"/events"}
          menuTitle={"Events"}
          menuImg={"/assets/images/ui/event.png"}
        />
        <MenuBobbles
          menuLink={"/partner"}
          menuImg={"/assets/images/ui/partner.svg"}
          menuTitle={"Partner"}
        />

        <MenuBobbles
          menuLink={"/faq"}
          menuTitle={"FAQ"}
          menuImg={"/assets/images/ui/faq.svg"}
        />
        <MenuBobbles
          menuLink={"/account"}
          menuTitle={"Account"}
          menuImg={"/assets/images/ui/account.svg"}
        />
      </div>
      <div className="login-cta">
        <Link>
          <p>Login</p>
        </Link>

        <Link>
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  );
}
