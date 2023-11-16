import { useParams } from "react-router";
import { useModal } from "../../customHooks/useModal";
import "./productDetails.css";
import AddToCartModal from "./AddToCartModal";
import { useNavigate } from "react-router";

const formatProductName = (productName) => {
  return productName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const renderUnitType = (unitType, unitQty) => {
  if (unitQty === 1) {
    return unitType;
  } else if (unitQty > 1) {
    return `${unitType} of ${unitQty}`;
  } else {
    return unitType;
  }
};

export default function ProductDetails({ currentMerchant }) {
  const navigate = useNavigate();
  const { product } = useParams();
  const { isModalVisible, openModal, closeModal } = useModal();
  const currentProduct = currentMerchant.products.find(
    (p) => formatProductName(p.productName) === product
  );

  function handleClick() {
    openModal();
  }

  function handleReturn() {
    navigate(`/store/${currentMerchant.id}`);
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
              currentMerchant={currentMerchant.id}
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    placeSelf: "flex-end",
                  }}
                >
                  <button onClick={handleReturn}>Back to Store</button>
                  <button onClick={handleClick}>Add to Cart</button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
