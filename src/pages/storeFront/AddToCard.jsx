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
        disabled
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

  // State to manage quantity for variants
  const [variantQuantities, setVariantQuantities] = useState({});

  // Function to handle quantity change for a specific variant
  const handleQuantityChange = (variantKey, newQuantity) => {
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setVariantQuantities((prevQuantities) => ({
        ...prevQuantities,
        [variantKey]: newQuantity,
      }));
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
                width: "100%",
                gap: "10px",
              }}
            >
              <p style={{ fontWeight: "300" }}>Please select quantity</p>
              <hr />
              <div
                style={{
                  width: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {Object.keys(product.variants).map((variantKey) => (
                  <div className="variant-list" key={variantKey}>
                    <h5>{product.variants[variantKey].name}</h5>
                    <QtySelector
                      quantity={variantQuantities[variantKey] || 0}
                      onQuantityChange={(newQuantity) =>
                        handleQuantityChange(variantKey, newQuantity)
                      }
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="variant-selector">
            <h4>{product.productName}</h4>
            <QtySelector
              quantity={variantQuantities["default"] || 0}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange("default", newQuantity)
              }
            />
          </div>
        </>
      );
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Submit the form data with variant quantities
    const formData = {
      productName: product.productName,
      merchantId: merchant.id,
      variantQuantities,
    };
    console.log(formData);
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
        <button onClick={handleFormSubmit}>Add To Cart</button>
      </div>
    </div>
  );
}
