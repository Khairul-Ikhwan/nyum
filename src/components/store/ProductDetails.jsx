import { useParams } from "react-router";
import "./productDetails.css";

const formatProductName = (productName) => {
  return productName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export default function ProductDetails({ currentMerchant }) {
  const { product } = useParams();
  const currentProduct = currentMerchant.products.find(
    (p) => formatProductName(p.productName) == product
  );

  return (
    <div className="pdt-container">
      <h1>Product details</h1>
      {currentProduct && (
        <div className="productDetails">
          <img src={currentProduct.productImage} />
          <h2>{currentProduct.productName}</h2>
          <p>{currentProduct.desc}</p>
          <p>
            {currentMerchant.currency} {""}
            {currentProduct.productPrice}
          </p>
          <button>Buy Now</button>
        </div>
      )}
    </div>
  );
}
