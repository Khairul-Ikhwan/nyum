import ProductCard from "../card/ProductCard";
import SectionBox from "../ui/SectionBox";
import "./Store.css";

export default function StoreView({ currentMerchant }) {
  const products = currentMerchant.products;

  return (
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
            style={{ cursor: "pointer", width: "unset", maxWidth: "250px" }}
            showButton={false}
          />
        ))}
      </div>
    </SectionBox>
  );
}
