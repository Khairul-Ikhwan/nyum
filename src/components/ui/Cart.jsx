import { useState, useEffect } from "react";

export default function Cart({ className }) {
  const [isVisible, setIsVisible] = useState(false);
  const [retrievedCart, setRetrievedCart] = useState([]);

  function getSessionStorage() {
    const keys = Object.keys(sessionStorage);
    const values = keys.map((key) => {
      const match = key.match(/^cart_(.*)$/);
      const storeName = match ? match[1] : null;
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

  return (
    <div className={`menu-drawer cart ${isVisible ? className : ""}`}>
      <h2>Cart</h2>
      {Object.keys(groupedItems).length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {Object.keys(groupedItems).map((storeName) => (
            <div
              key={storeName}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                border: "1px solid black",
              }}
            >
              <h3>{storeName}</h3>
              {groupedItems[storeName].map((product, index) => (
                <div key={`${product.productName}_${index}`}>
                  <p>{product.productName}</p>
                  <ul>
                    {Object.keys(product.quantities).map(
                      (variant, variantIndex) => (
                        <li key={`${variant}_${variantIndex}`}>
                          {variant}: {product.quantities[variant]}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
