import { useEffect } from "react";
import ProductCard from "../card/ProductCard";
import SectionBox from "../ui/SectionBox";
import MerchantDetails from "./MerchantDetails";
import "./Store.css";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router";
import ProductDetails from "./ProductDetails";

const formatProductName = (productName) => {
  return productName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export default function StoreView({ currentMerchant }) {
  const products = currentMerchant.products;
  const navigate = useNavigate();

  function handleClick(product, productName) {
    const formattedProductName = formatProductName(productName);
    navigate(`/store/${currentMerchant.id}/${formattedProductName}`, {
      state: {
        product,
      },
    });
  }

  useEffect(() => {}, []);

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <SectionBox>
                <h2>All Products by {currentMerchant.name}</h2>
                <div className="product-shelf">
                  {products.map((product, index) => (
                    <ProductCard
                      key={index}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      productImg={product.productImage}
                      purchasedTimes={product.purchasedTimes}
                      style={{
                        cursor: "pointer",
                        width: "unset",
                        maxWidth: "250px",
                      }}
                      showButton={false}
                      onClick={() => handleClick(product, product.productName)}
                    />
                  ))}
                </div>
              </SectionBox>
              <SectionBox>
                <MerchantDetails currentMerchant={currentMerchant} />
              </SectionBox>
            </>
          }
        />
        <Route
          path="/:product"
          element={
            <>
              <ProductDetails currentMerchant={currentMerchant} />
              <MerchantDetails currentMerchant={currentMerchant} />
            </>
          }
        />
      </Routes>
    </>
  );
}
