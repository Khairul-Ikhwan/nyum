import { useState } from "react";
import "../ui/css/Modal.css";

export default function AddToCartModal({ currentProduct, closeModal }) {
  const [variantQuantities, setVariantQuantities] = useState(() => {
    const initialQuantities = {};
    if (currentProduct.variants) {
      Object.values(currentProduct.variants).forEach((variant) => {
        initialQuantities[variant.name] = 0;
      });
    } else {
      initialQuantities[currentProduct.productName] = 0;
    }
    return initialQuantities;
  });

  const handleDecrease = (variantName) => {
    setVariantQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [variantName]: Math.max(0, prevQuantities[variantName] - 1),
      };

      return updatedQuantities;
    });
  };

  const handleIncrease = (variantName) => {
    setVariantQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[variantName] + 1;
      const variant = currentProduct.variants[variantName];

      const updatedQuantities = {
        ...prevQuantities,
        [variantName]: newQuantity,
      };

      // Disable increase button when the selection reaches the unit quantity
      if (variant && variant.unitQty && newQuantity >= variant.unitQty) {
        updatedQuantities[variantName] = variant.unitQty;
      }

      return updatedQuantities;
    });
  };

  function handleATC() {
    const qtyString = JSON.stringify(variantQuantities, null);
    alert(qtyString);
  }

  // Calculate the total quantity of variants
  const totalVariantQty = Object.values(variantQuantities).reduce(
    (total, qty) => total + qty,
    0
  );

  return (
    <>
      <div className="text-field ATCmodal">
        <div className="ATC-util">
          <h2>Select Quantity</h2>
          <div className="close ATC" onClick={closeModal}>
            <img src="/assets/images/ui/close.svg" alt="Close" />
          </div>
        </div>
        <div className="ATC-child">
          <div>
            {currentProduct.unitQty
              ? `Select up to ${currentProduct.unitQty}`
              : ""}
          </div>

          {currentProduct.variants ? (
            <div className="prune-the-variants">
              {Object.values(currentProduct.variants).map((variant) => (
                <div key={variant.name} className="variant-child">
                  <p>{variant.name}</p>
                  <div className="buttons">
                    <button
                      onClick={() => handleDecrease(variant.name)}
                      disabled={variantQuantities[variant.name] <= 0}
                    >
                      -
                    </button>
                    <input
                      placeholder="0"
                      value={String(variantQuantities[variant.name])}
                      disabled
                    />
                    {totalVariantQty < currentProduct.unitQty && (
                      <button
                        onClick={() => handleIncrease(variant.name)}
                        disabled={
                          variantQuantities[variant.name] >= variant.unitQty
                        }
                        className={
                          variantQuantities[variant.name] >= variant.unitQty
                            ? "disabled"
                            : ""
                        }
                      >
                        +
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="variant-child">
              <p>{currentProduct.productName}</p>
              <div className="buttons">
                <button
                  onClick={() => handleDecrease(currentProduct.productName)}
                  disabled={variantQuantities[currentProduct.productName] <= 0}
                >
                  -
                </button>
                <input
                  placeholder="0"
                  value={String(variantQuantities[currentProduct.productName])}
                  disabled
                />
                {totalVariantQty >= currentProduct.unitQty ? (
                  <button className="disabled">+</button>
                ) : (
                  <button
                    onClick={() => handleIncrease(currentProduct.productName)}
                    disabled={totalVariantQty >= currentProduct.unitQty}
                    className={
                      totalVariantQty >= currentProduct.unitQty
                        ? "disabled"
                        : ""
                    }
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <button onClick={handleATC}>Confirm</button>
      </div>
    </>
  );
}
