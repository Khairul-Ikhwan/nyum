import { useEffect, useState } from "react";
import "./storeFront.css";
import SectionContainer from "../../components/heros/SectionContainer";
import { useModal } from "../../customHooks/useModal";
import Modal from "../../components/modal/Modal";

function QtySelector({ quantity, onQuantityChange }) {
  return (
    <div className="qty-selector">
      <button type="button" onClick={() => onQuantityChange(quantity - 1)}>
        {" "}
        -{" "}
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(event) => onQuantityChange(parseInt(event.target.value))}
        min="0"
        disabled
      />
      <button type="button" onClick={() => onQuantityChange(quantity + 1)}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default function AddToCart({ show, hideModal, merchant, product }) {
  const { isModalVisible, openModal, closeModal } = useModal();

  useEffect(() => {
    if (show) {
      document.body.classList.add("atcdisable-scroll");
    } else {
      document.body.classList.remove("atcdisable-scroll");
    }

    return () => {
      document.body.classList.remove("atcdisable-scroll");
    };
  }, [show]);

  // State to manage quantity for variants
  const [variantQuantities, setVariantQuantities] = useState({});

  // Function to handle quantity change for a specific variant
  const handleQuantityChange = (variantKey, newQuantity) => {
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setVariantQuantities((prevQuantities) => ({
        ...prevQuantities,
        [variantKey]: newQuantity,
      }));
    }
  };

  const renderForm = () => {
    if (product.variants) {
      return (
        <>
          <h4>{product.productName}</h4>
          <div className="variant-selector">
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "10px",
              }}
            >
              <p style={{ fontWeight: "300" }}>Please select quantity</p>
              <hr />
              <div
                style={{
                  width: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {Object.keys(product.variants).map((variantKey) => (
                  <div className="variant-list" key={variantKey}>
                    <h5>{product.variants[variantKey].name}</h5>
                    <QtySelector
                      quantity={variantQuantities[variantKey] || 0}
                      onQuantityChange={(newQuantity) =>
                        handleQuantityChange(variantKey, newQuantity)
                      }
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="variant-selector">
            <h4>{product.productName}</h4>
            <QtySelector
              quantity={variantQuantities["default"] || 0}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange("default", newQuantity)
              }
            />
          </div>
        </>
      );
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Submit the form data with variant quantities
    const formData = {
      productName: product.productName,
      merchantId: merchant.id,
      variantQuantities,
    };
    console.log(formData);
    hideModal();
  };

  return (
    <>
      <div className={`atcmodal ${show ? "active" : ""}`}>
        <div className="atcmodal-header">
          <span>
            <h3>Add To Cart</h3>
            <p className="atcmerchant-info">{merchant.name}</p>
          </span>
          <button className="atcheader-btn" onClick={hideModal}>
            X
          </button>
        </div>
        <div className="atcmodal-container">
          <SectionContainer>
            <form onSubmit={handleFormSubmit}>
              <div>{renderForm()}</div>
            </form>
          </SectionContainer>
          <button onClick={openModal}>Add To Cart</button>
        </div>
      </div>

      {isModalVisible && (
        <Modal showModal={isModalVisible} closeModal={closeModal}>
          <div
            style={{
              padding: "5%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              placeItems: "center",
            }}
          >
            <h2>This feature is not available yet</h2>
            <p>
              Be the first on our platform, follow the link below to register
              your interest!{" "}
            </p>
            <button>Pre-register</button>
          </div>
        </Modal>
      )}
    </>
  );
}
