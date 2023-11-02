import { useEffect } from "react";
import "./storeFront.css";

export default function AddToCart({ show, hideModal }) {
  useEffect(() => {
    if (show) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [show]);

  return (
    <div className={`modal ${show ? "active" : ""}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "inherit",
          placeItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Add To Cart</h3>

        <button onClick={hideModal}>X</button>
      </div>
      <hr />
    </div>
  );
}
