import merchantsData from "../../merchants.json";
import "./collection.css";
import { lazy, Suspense } from "react";

const CollectionCard = lazy(() => import("./CollectionCard"));

export default function Collection() {
  const merchants = Object.keys(merchantsData).map((storeName) => ({
    storeName,
    products: merchantsData[storeName],
  }));

  return (
    <div className="collection">
      <h2>Recently Added</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="collection-container">
          {merchants.map((merchant) =>
            merchant.products.map((product, productIndex) => (
              <CollectionCard
                key={productIndex}
                storeName={merchant.storeName}
                productName={product.productName}
                productPrice={product.productPrice}
                productImage={product.productImage}
              />
            ))
          )}
        </div>
      </Suspense>
    </div>
  );
}
