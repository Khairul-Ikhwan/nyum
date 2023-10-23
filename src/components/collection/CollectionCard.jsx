export default function CollectionCard({
  productName,
  storeName,
  productPrice,
  productImage = "assets/images/croissant.jpeg",
}) {
  return (
    <div className="card">
      <div className="card-container">
        <img src={productImage} />
        <div className="description">
          <section>
            <h3>{productName}</h3>
            <p className="storeName">by {storeName}</p>
          </section>
          <section>
            <p className="price">S${productPrice}</p>
          </section>
        </div>

        <button>Visit Store</button>
      </div>
    </div>
  );
}
