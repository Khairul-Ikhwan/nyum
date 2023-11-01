import { Suspense } from "react";
import { TailSpin } from "react-loader-spinner";

export default function CollectionCard({
  productName,
  storeName,
  productPrice,
  purchasedTimes,
  productImage = "../../assets/images/croissant.jpeg",
  children,
  style,
  className,
}) {
  return (
    <div className={`card ${className}`} style={style}>
      <div className="card-container">
        <Suspense
          fallback={
            <div style={{ display: "flex", placeContent: "center" }}>
              <TailSpin />
            </div>
          }
        >
          <img src={productImage} />
        </Suspense>
        <div className="description">
          <section>
            {productName ? <h3>{productName}</h3> : null}
            {storeName ? (
              <p className="desc-small">by {storeName}</p>
            ) : purchasedTimes ? (
              <p className="desc-small">{purchasedTimes} purchased</p>
            ) : (
              <p className="desc-small">New Item</p>
            )}
          </section>
          <section>
            <p className="price">
              {productPrice ? `S$ ${productPrice}` : null}
            </p>
          </section>
        </div>

        {children}
      </div>
    </div>
  );
}
