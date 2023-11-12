import { useParams } from "react-router";
import { useModal } from "../../customHooks/useModal";
import "./productDetails.css";
import AddToCartModal from "./AddToCartModal";

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
  const { isModalVisible, openModal, closeModal } = useModal();
  const currentProduct = currentMerchant.products.find(
    (p) => formatProductName(p.productName) === product
  );

  function handleClick() {
    openModal();
  }

  return (
    <div className="pdt-container">
      <h1>Product details</h1>
      {currentProduct && (
        <div className="productDetails">
          <img
            src={currentProduct.productImage}
            alt={currentProduct.productName}
          />
          {isModalVisible ? (
            <AddToCartModal
              currentProduct={currentProduct}
              closeModal={closeModal}
            />
          ) : (
            <>
              <div className="text-field">
                <h2>{currentProduct.productName}</h2>
                <p>{currentProduct.desc}</p>
                <p className="price">
                  {currentMerchant.currency} {""}
                  {currentProduct.productPrice} {""}
                  {renderUnitType(
                    currentProduct.unitType,
                    currentProduct.unitQty
                  )}
                </p>
                <button onClick={handleClick}>Add to Cart</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
