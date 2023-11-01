import SectionContainer from "../../components/heros/SectionContainer";
import { useParams } from "react-router-dom";
import merchantsData from "../../merchants.json";
import { useState } from "react"; // Import useState
import { TailSpin } from "react-loader-spinner";

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

  const handleImageLoad = () => {
    // Set imageLoading to false when the image has loaded
    setImageLoading(false);
  };

  return (
    <SectionContainer style={{ display: "flex", flexDirection: "column" }}>
      <h3>Product Details</h3>
      {matchingProducts.length > 0 && (
        <div
          style={{
            display: "flex",
            flexGrow: "1",
            width: "inherit",
            flexWrap: "wrap",
          }}
        >
          {matchingProducts.map((product, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "20px", flexDirection: "column" }}
            >
              {imageLoading && (
                <div style={{ display: "flex", placeContent: "center" }}>
                  <TailSpin color="var(--primary)" height={80} width={80} />
                </div>
              )}
              <img
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  aspectRatio: "2 / 1",
                  objectPosition: "0 50%",
                  display: imageLoading ? "none" : "block",
                  borderRadius: "10px",
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
                  flexGrow: ".5",
                  placeContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.5px",
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
                    <p style={{ fontStyle: "italic", fontSize: "smaller" }}>
                      {product.unitType} {product.unitQty}
                    </p>
                  </div>
                </div>
                <button style={{ maxHeight: "100px", placeSelf: "center" }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
