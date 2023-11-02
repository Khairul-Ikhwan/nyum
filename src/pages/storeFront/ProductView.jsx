import SectionContainer from "../../components/heros/SectionContainer";
import { useParams } from "react-router-dom";
import merchantsData from "../../merchants.json";
import { useState } from "react"; // Import useState
import { TailSpin } from "react-loader-spinner";
import AddToCart from "./AddToCard";

export default function ProductView() {
  const { id, productName } = useParams();

  const capitalizeFirstLetter = (str) => {
    return str
      .split(" ")
      .map((word) => {
        return word
          .split("-") // Split hyphenated words
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("-");
      })
      .join(" ");
  };

  const productNameCap = capitalizeFirstLetter(productName);

  // Find the merchant with the matching id
  const merchant = merchantsData.merchants.find((store) => store.id === id);

  // Find the product details that contain the productName
  const matchingProducts = merchant.products.filter((product) =>
    product.productName.toLowerCase().includes(productName.toLowerCase())
  );

  // State to track image loading
  const [imageLoading, setImageLoading] = useState(true);

  // State to control modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  const handleImageLoad = () => {
    // Set imageLoading to false when the image has loaded
    setImageLoading(false);
  };

  // Function to show the modal
  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  // Function to hide the modal

  return (
    <>
      <SectionContainer
        className="productview-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Product Details</h3>
        {matchingProducts.length > 0 && (
          <div
            className="productview-section"
            style={{
              display: "flex",
            }}
          >
            {matchingProducts.map((product, index) => (
              <div
                className="productview-container"
                key={index}
                style={{
                  display: "flex",
                  gap: "20px",
                  height: "fit-content",
                }}
              >
                {imageLoading && (
                  <div style={{ display: "flex", placeContent: "center" }}>
                    <TailSpin color="var(--primary)" height={80} width={80} />
                  </div>
                )}
                <img
                  className="product-view-img"
                  style={{
                    maxWidth: "100%",
                    minHeight: "50px",
                    objectFit: "cover",
                    aspectRatio: "1",
                    objectPosition: "0 50%",
                    display: imageLoading ? "none" : "block",
                    borderRadius: "10px",
                    placeSelf: "center",
                  }}
                  src={product.productImage}
                  onLoad={handleImageLoad} // Event handler for image load
                  onError={() => setImageLoading(false)} // Handle image load error
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    placeContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      maxWidth: "65%",
                      placeSelf: "center",
                    }}
                  >
                    <h4>{productNameCap}</h4>
                    <p style={{ fontSize: ".7rem" }}>
                      {product.purchasedTimes
                        ? `${product.purchasedTimes} purchased`
                        : "New item"}
                    </p>

                    <p style={{ fontSize: "small" }}>{product.desc}</p>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        placeItems: "center",
                      }}
                    >
                      <p>S$ {product.productPrice}</p>
                      <p
                        style={{
                          fontStyle: "italic",
                          fontSize: "small",
                          fontWeight: "300",
                          placeSelf: "flex-end",
                        }}
                      >
                        {product.unitType} {product.unitQty}
                      </p>
                    </div>
                  </div>
                  <button
                    style={{ maxHeight: "100px", placeSelf: "center" }}
                    onClick={showModal} // Show the modal when the button is clicked
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionContainer>
      <AddToCart
        show={isModalVisible}
        hideModal={hideModal}
        merchant={merchant}
        product={matchingProducts[0]}
      />
    </>
  );
}
