import ProductCard from "../../components/card/ProductCard";
import MainHero from "../../components/hero/MainHero";
import SectionBox from "../../components/ui/SectionBox";
import Layout from "../../layouts/userTypes/Layout";
import merchantData from "../../merchants.json";

export default function HomePage() {
  return (
    <Layout>
      <MainHero backgroundImage={"url(/assets/images/hero_shop.jpeg)"}>
        <div
          style={{
            backgroundColor: "rgba(0,0,0, .3)",
            width: "100%",
            height: "100%",
            padding: "5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <h2 style={{ maxWidth: "28ch" }}>Earn extra income</h2>
          <p style={{ fontSize: ".9rem" }}>by providing good food</p>
          <button>Learn More</button>
        </div>
      </MainHero>

      <h1>Recently Added</h1>
      <SectionBox>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            paddingBottom: "2%",
            paddingLeft: ".5px",
            width: "fit-content",
          }}
        >
          {merchantData.merchants.map((merchant) =>
            merchant.products.map((product, index) => (
              <ProductCard
                key={index}
                productName={product.productName}
                productPrice={product.productPrice}
                productImg={product.productImage}
                storeName={merchant.name}
              />
            ))
          )}
        </div>
      </SectionBox>
    </Layout>
  );
}
