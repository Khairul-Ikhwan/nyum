import { useState } from "react";
import merchantsData from "../../merchants.json";
import CollectionCard from "./CollectionCard";
import "./collection.css";
import { useNavigate } from "react-router";
import { TailSpin } from "react-loader-spinner";

export default function Collection() {
  const navigate = useNavigate();
  const buttonClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  const stores = merchantsData.merchants;
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay for demonstration purposes
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div className="collection">
      <h2>Recently Added</h2>
      {isLoading ? (
        // Show loading spinner while loading
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <TailSpin color="var(--primary)" height={80} width={80} />
        </div>
      ) : (
        // Show the collection-container when loading is complete
        <div className="collection-container">
          {stores.map((store) =>
            store.products.map((product, productIndex) => (
              <CollectionCard
                key={productIndex}
                storeId={store.id}
                storeName={store.name}
                productName={product.productName}
                productPrice={product.productPrice}
                productImage={product.productImage}
              >
                <button onClick={() => buttonClick(store.id)}>
                  Visit Store
                </button>
              </CollectionCard>
            ))
          )}
        </div>
      )}
    </div>
  );
}
