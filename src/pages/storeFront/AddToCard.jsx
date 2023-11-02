import { useEffect } from "react";
import "./storeFront.css";
import SectionContainer from "../../components/heros/SectionContainer";

export default function AddToCart({ show, hideModal, merchant, product }) {
  useEffect(() => {
    console.log(product);
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
        className="modal-header"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "inherit",
          placeItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>
          <h3>Add To Cart</h3>
          <p
            style={{
              fontWeight: "100",
              fontSize: ".75rem",
              fontStyle: "italic",
            }}
          >
            {merchant.name}
          </p>
        </span>

        <button className="header-btn" onClick={hideModal}>
          X
        </button>
      </div>

      <div className="modal-container">
        <SectionContainer>
          <form>
            <div>
              <h4>{product.productName}</h4>
              <select>
                {Object.keys(product.variants).map((variantKey) => (
                  <option key={variantKey} value={variantKey}>
                    {product.variants[variantKey].name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </SectionContainer>
        <button>Add another</button>
      </div>
    </div>
  );
}
