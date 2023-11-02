import { useEffect, useState } from "react";
import "./storeFront.css";
import SectionContainer from "../../components/heros/SectionContainer";

function QtySelector({ quantity, onQuantityChange }) {
  return (
    <div className="qty-selector">
      <button onClick={() => onQuantityChange(quantity - 1)}> - </button>
      <input
        type="number"
        value={quantity}
        onChange={(event) => onQuantityChange(parseInt(event.target.value))}
        min="0"
      />
      <button onClick={() => onQuantityChange(quantity + 1)}> + </button>
    </div>
  );
}

export default function AddToCart({ show, hideModal, merchant, product }) {
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

  // State to manage quantity
  const [quantity, setQuantity] = useState(0);

  // Function to handle quantity change
  const handleQuantityChange = (newQuantity) => {
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const renderForm = () => {
    if (product.variants) {
      return (
        <>
          <h4>{product.productName}</h4>
          <div className="variant-selector">
            <section
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Please select an option</label>
              <select>
                {Object.keys(product.variants).map((variantKey) => (
                  <option key={variantKey} value={variantKey}>
                    {product.variants[variantKey].name}
                  </option>
                ))}
              </select>
            </section>

            <QtySelector
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="variant-selector">
            <h4>{product.productName}</h4>
            <QtySelector
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
          </div>
        </>
      );
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`modal ${show ? "active" : ""}`}>
      <div className="modal-header">
        <span>
          <h3>Add To Cart</h3>
          <p className="merchant-info">{merchant.name}</p>
        </span>
        <button className="header-btn" onClick={hideModal}>
          X
        </button>
      </div>
      <div className="modal-container">
        <SectionContainer>
          <form onSubmit={handleFormSubmit}>
            <div>{renderForm()}</div>
          </form>
        </SectionContainer>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
