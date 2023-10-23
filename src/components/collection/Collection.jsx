import merchantsData from "../../merchants.json";
import DummyCard from "./DummyCard";
import "./collection.css";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router";

const CollectionCard = lazy(() => import("./CollectionCard"));

export default function Collection() {
  const navigate = useNavigate();
  const buttonClick = () => {
    navigate("/store");
  };

  const stores = merchantsData.merchants;

  return (
    <div className="collection">
      <h2>Recently Added</h2>
      <Suspense fallback={<DummyCard />}>
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
                <button onClick={buttonClick}>Visit Store</button>
              </CollectionCard>
            ))
          )}
        </div>
      </Suspense>
    </div>
  );
}
