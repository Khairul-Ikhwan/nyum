import "./productCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  backgroundImg,
  productName,
  storeName,
  productPrice,
  productImg,
}) {
  return (
    <div className="product-card" style={{ backgroundImage: backgroundImg }}>
      {productImg ? (
        <img src={productImg} alt={`Product: ${productName}`} />
      ) : (
        <img src="/assets/images/curry_puff.jpeg" />
      )}
      <div className="text-container">
        <div className="product-info">
          <h4>{productName ? productName : "Product"}</h4>
          <p>{storeName ? `by ${storeName}` : "Store Name"}</p>
        </div>
        <div className="price">
          <p style={{ fontWeight: "900" }}>
            {productPrice ? `S$ ${productPrice}` : "Price not available"}
          </p>
        </div>
      </div>
      <div className="button-container">
        <Link to="/">
          <button>View</button>
        </Link>
      </div>
    </div>
  );
}
