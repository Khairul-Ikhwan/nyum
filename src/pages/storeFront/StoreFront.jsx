import CollectionCard from "../../components/collection/CollectionCard.jsx";
import PageLayout from "../../layouts/PageLayout";
import SectionContainer from "../../components/heros/SectionContainer";
import Hero from "../../components/heros/Hero";
import { useParams } from "react-router";
import merchantsData from "../../merchants.json";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

export default function StoreFront() {
  const { id } = useParams();
  const store = merchantsData.merchants.find((store) => store.id === id);
  const storeName = store?.name;
  const products = store?.products || [];

  const [loading, setLoading] = useState(true);

  const totalProducts = products.length;

  useEffect(() => {
    // Make it feel like it's loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <PageLayout storeName={storeName}>
      <SectionContainer style={{ flexDirection: "column" }}>
        <h1 style={{ textAlign: "center", fontWeight: "900" }}>All Products</h1>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <p style={{ textAlign: "center" }}>
              {totalProducts} products found
            </p>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "10px",
                placeContent: "center",
              }}
            >
              {products.map((product, productIndex) => (
                <CollectionCard
                  className={"storeFront"}
                  key={productIndex}
                  storeId={id}
                  productName={product.productName}
                  productPrice={product.productPrice}
                  productImage={product.productImage}
                  purchasedTimes={product.purchasedTimes}
                >
                  <button>View</button>
                </CollectionCard>
              ))}
            </div>
          </div>
        )}
      </SectionContainer>
      <Hero
        backgroundImg="../../assets/images/hero_merchantt.jpeg"
        backgroundPosition="0 30%"
      >
        <h1 style={{ maxWidth: "22ch" }}>
          Earn extra income by providing good food
        </h1>
        <button>Learn More</button>
      </Hero>
    </PageLayout>
  );
}

function LoadingIndicator() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
      }}
    >
      <TailSpin color="var(--primary)" height={80} width={80} />
    </div>
  );
}
