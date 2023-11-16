import { useState, useEffect } from "react";
import "../ui/css/Modal.css";
import { useNavigate } from "react-router";

export default function AddToCartModal({
  currentProduct,
  closeModal,
  currentMerchant,
}) {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const key = `cart_${currentProduct.productName}_${currentMerchant}`;
    const storedCart = sessionStorage.getItem(key);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [currentProduct, currentMerchant]);

  const [variantQuantities, setVariantQuantities] = useState(() => {
    const initialQuantities = {};
    if (currentProduct && currentProduct.variants) {
      Object.values(currentProduct.variants).forEach((variant) => {
        initialQuantities[variant.name] = 0;
      });
    } else if (currentProduct) {
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
      const variant =
        currentProduct && currentProduct.variants
          ? currentProduct.variants[variantName]
          : undefined;

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

  const resetVariantQuantities = () => {
    const initialQuantities = {};
    if (currentProduct && currentProduct.variants) {
      Object.values(currentProduct.variants).forEach((variant) => {
        initialQuantities[variant.name] = 0;
      });
    } else if (currentProduct) {
      initialQuantities[currentProduct.productName] = 0;
    }
    setVariantQuantities(initialQuantities);
  };

  const handleATC = () => {
    // Retrieve the existing cart from sessionStorage
    const existingCart =
      JSON.parse(sessionStorage.getItem(`cart_${currentMerchant}`)) || [];

    const totalPrice = currentProduct.variants
      ? currentProduct.productPrice // If there are variants, set totalPrice to 0 (as it will be calculated separately)
      : currentProduct.productPrice * totalVariantQty;
    // Update the cart with the new item
    const updatedCart = [
      ...existingCart,
      {
        productName: currentProduct.productName,
        quantities: variantQuantities,
        price: totalPrice,
      },
    ];

    // Store the updated cart in sessionStorage
    sessionStorage.setItem(
      `cart_${currentMerchant}`,
      JSON.stringify(updatedCart),
      console.log(updatedCart)
    );

    // Update the state if necessary (you can skip this step if you don't need the cart in state)
    setCart(updatedCart);
    resetVariantQuantities();
  };

  const handleStore = () => {
    closeModal();
    navigate(`store/${currentMerchant}`);
  };

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
            {currentProduct &&
            currentProduct.unitQty &&
            currentProduct.unitQty > 1
              ? `Select up to ${currentProduct.unitQty}`
              : ""}
          </div>

          {currentProduct && currentProduct.variants ? (
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
              <p>{currentProduct && currentProduct.productName}</p>
              <div className="buttons">
                <button
                  onClick={() =>
                    handleDecrease(currentProduct && currentProduct.productName)
                  }
                  disabled={
                    variantQuantities[
                      currentProduct && currentProduct.productName
                    ] <= 0
                  }
                >
                  -
                </button>
                <input
                  placeholder="0"
                  value={String(
                    variantQuantities[
                      currentProduct && currentProduct.productName
                    ]
                  )}
                  disabled
                />
                {totalVariantQty >= currentProduct && currentProduct.unitQty ? (
                  <button className="disabled">+</button>
                ) : (
                  <button
                    onClick={() =>
                      handleIncrease(
                        currentProduct && currentProduct.productName
                      )
                    }
                    disabled={
                      totalVariantQty >= currentProduct &&
                      currentProduct.unitQty
                    }
                    className={
                      totalVariantQty >= currentProduct &&
                      currentProduct.unitQty
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
        <div className="button-group">
          {totalVariantQty >= currentProduct.unitQty && (
            <button onClick={handleATC}>Add To Cart</button>
          )}
          {totalVariantQty < currentProduct.unitQty && (
            <button onClick={handleStore}>Back to Store</button>
          )}
        </div>
      </div>
    </>
  );
}
