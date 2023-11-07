import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "./productCard.css";

export default function ProductCard({
  productName,
  storeName,
  productPrice,
  productImg,
  id,
}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  const handleClick = () => {
    navigate(`store/${id}`);
  };

  return (
    <div className={`product-card ${isLoading ? "loading" : ""}`}>
      {isLoading ? (
        <div className="loading-spinner">
          <TailSpin color="var(--secondary)" height={50} width={50} />
          <p>Loading Items</p>
        </div>
      ) : (
        <>
          {productImg ? (
            <img src={productImg} alt={`Product: ${productName}`} />
          ) : (
            <img src="/assets/images/curry_puff.jpeg" />
          )}
          <div className="items-container">
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
              <button onClick={handleClick}>View</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
