import { useState, useEffect } from "react";

export function useMenuDrawer () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState)
    }

    useEffect(() => {
        if (isMenuOpen) {
          document.body.classList.add("disable-scroll");
        } else {
          document.body.classList.remove("disable-scroll");
        }
        return () => {
          document.body.classList.remove("disable-scroll");
        };
      }, [isMenuOpen]);

    return {
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
        setIsMenuOpen,
      };
}