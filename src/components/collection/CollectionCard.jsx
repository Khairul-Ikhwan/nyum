export default function CollectionCard({
  productName,
  storeName,
  productPrice,
  purchasedTimes,
  productImage = "assets/images/croissant.jpeg",
  children,
}) {
  return (
    <div className="card">
      <div className="card-container">
        <img src={productImage} />
        <div className="description">
          <section>
            {productName ? <h3>{productName}</h3> : null}
            {storeName
              ? `by ${storeName}`
              : purchasedTimes
              ? `${purchasedTimes} purchased`
              : null}
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
