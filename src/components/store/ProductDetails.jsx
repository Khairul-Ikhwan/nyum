import { useParams } from "react-router";
import "./productDetails.css";

const formatProductName = (productName) => {
  return productName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const renderUnitType = (unitType, unitQty) => {
  if (unitQty === 1) {
    return unitType;
  } else {
    return `${unitType}s`;
  }
};

export default function ProductDetails({ currentMerchant }) {
  const { product } = useParams();
  const currentProduct = currentMerchant.products.find(
    (p) => formatProductName(p.productName) === product
  );

  return (
    <div className="pdt-container">
      <h1>Product details</h1>
      {currentProduct && (
        <div className="productDetails">
          <img
            src={currentProduct.productImage}
            alt={currentProduct.productName}
          />
          <div className="text-field">
            <h2>{currentProduct.productName}</h2>
            <p>{currentProduct.desc}</p>
            <p className="price">
              {currentMerchant.currency} {""}
              {currentProduct.productPrice} {""}
              {renderUnitType(currentProduct.unitType, currentProduct.unitQty)}
            </p>
            <button>Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
}
