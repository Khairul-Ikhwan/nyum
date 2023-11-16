import { useState, useEffect } from "react";
import merchantData from "../../merchants.json";

export default function Cart({ className }) {
  const [isVisible, setIsVisible] = useState(false);
  const [retrievedCart, setRetrievedCart] = useState([]);

  function getSessionStorage() {
    const keys = Object.keys(sessionStorage);
    const values = keys.map((key) => {
      const match = key.match(/^cart_(.*)$/);
      const storeId = match ? match[1] : null;
      const store = merchantData.merchants.find(
        (merchant) => merchant.id === storeId
      );
      const storeName = store ? store.name : null;
      return { storeName, products: JSON.parse(sessionStorage.getItem(key)) };
    });

    setRetrievedCart(values);
  }

  useEffect(() => {
    getSessionStorage();
    setIsVisible(true);
  }, []);

  // Function to group similar items and calculate total quantities
  function groupItems(cart) {
    const groupedItems = {};

    cart.forEach((store) => {
      const { storeName, products } = store;

      if (storeName && products) {
        if (!groupedItems[storeName]) {
          groupedItems[storeName] = [...products]; // Clone products to keep them separate
        } else {
          // Combine products for similar items
          products.forEach((product) => {
            const existingProduct = groupedItems[storeName].find(
              (p) => p.productName === product.productName
            );

            if (existingProduct) {
              // Combine quantities for similar products
              Object.keys(product.quantities).forEach((variant) => {
                existingProduct.quantities[variant] =
                  (existingProduct.quantities[variant] || 0) +
                  product.quantities[variant];
              });
            } else {
              groupedItems[storeName].push({ ...product }); // Clone product to keep them separate
            }
          });
        }
      }
    });

    return groupedItems;
  }

  const groupedItems = groupItems(retrievedCart);

  console.log(groupedItems);

  return (
    <div className={`menu-drawer cart ${isVisible ? className : ""}`}>
      <h2>Cart</h2>
      {Object.keys(groupedItems).length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="cart-items">
          {Object.keys(groupedItems).map((storeName) => (
            <span key={storeName} className="store-list">
              <h3>{storeName}</h3>
              <div className="product-list-container">
                {groupedItems[storeName].map((product, index) => (
                  <div
                    key={`${product.productName}_${index}`}
                    className="product-list"
                  >
                    <h4>{product.productName}</h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "2.5px",
                        }}
                      >
                        {Object.keys(product.quantities).map(
                          (variant, variantIndex) => (
                            <div key={`${variant}_${variantIndex}`}>
                              <p style={{ marginLeft: "10px" }}>
                                {variant}: {product.quantities[variant]} pc
                              </p>
                            </div>
                          )
                        )}
                      </div>
                      <p style={{ fontStyle: "italic", fontWeight: "500" }}>
                        - - ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>
                  Store Total: $
                  {groupedItems[storeName].reduce(
                    (subtotal, product) => subtotal + product.price,
                    0
                  )}
                </p>
                <button>Check Out</button>
              </div>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
