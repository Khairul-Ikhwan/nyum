import merchantsData from "../../merchants.json";
import "./collection.css";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router";
import { TailSpin } from "react-loader-spinner";

const CollectionCard = lazy(() => import("./CollectionCard"));

export default function Collection() {
  const navigate = useNavigate();
  const buttonClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  const stores = merchantsData.merchants;

  return (
    <div className="collection">
      <h2>Recently Added</h2>
      <Suspense
        fallback={
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
        }
      >
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
      </Suspense>
    </div>
  );
}
