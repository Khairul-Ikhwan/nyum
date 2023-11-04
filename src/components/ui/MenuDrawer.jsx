import { useState, useEffect } from "react";
import MenuBobbles from "./MenuBobbles";

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
        <MenuBobbles />
        <MenuBobbles />
        <MenuBobbles />
        <MenuBobbles />
        <MenuBobbles />
        <MenuBobbles />
      </div>
      <div className="login-cta">This will be the login CTA</div>
    </div>
  );
}
