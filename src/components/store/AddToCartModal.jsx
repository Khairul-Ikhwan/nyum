import { useState } from "react";
import "../ui/css/Modal.css";

export default function AddToCartModal({ currentProduct, closeModal }) {
  const [variantQuantities, setVariantQuantities] = useState(() => {
    // Initialize quantities based on the number of variants or default to the product name
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
    setVariantQuantities((prevQuantities) => ({
      ...prevQuantities,
      [variantName]: Math.max(0, prevQuantities[variantName] - 1),
    }));
  };

  const handleIncrease = (variantName) => {
    setVariantQuantities((prevQuantities) => ({
      ...prevQuantities,
      [variantName]: prevQuantities[variantName] + 1,
    }));
  };

  console.log(variantQuantities);

  return (
    <>
      <div className="text-field ATCmodal">
        <div className="close ATC" onClick={closeModal}>
          <img src="/assets/images/ui/close.svg" alt="Close" />
        </div>
        <h2>Add to Cart</h2>
        <div className="ATC-child">
          {currentProduct.variants ? (
            <div className="prune-the-variants">
              {Object.values(currentProduct.variants).map((variant) => (
                <div key={variant.name} className="variant-child">
                  <p>{variant.name}</p>
                  <div className="buttons">
                    <button onClick={() => handleDecrease(variant.name)}>
                      -
                    </button>
                    <input
                      placeholder="0"
                      value={String(variantQuantities[variant.name])}
                      disabled
                    />
                    <button onClick={() => handleIncrease(variant.name)}>
                      +
                    </button>
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
                >
                  -
                </button>
                <input
                  placeholder="0"
                  value={String(variantQuantities[currentProduct.productName])}
                  disabled
                />
                <button
                  onClick={() => handleIncrease(currentProduct.productName)}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
        <button>Confirm</button>
      </div>
    </>
  );
}
