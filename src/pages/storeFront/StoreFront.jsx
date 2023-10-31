import CollectionCard from "../../components/collection/CollectionCard";
import PageLayout from "../../layouts/PageLayout";
import SectionContainer from "../../components/heros/SectionContainer";
import Hero from "../../components/heros/Hero";
import { useParams } from "react-router";
import merchantsData from "../../merchants.json";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function StoreFront() {
  const { id } = useParams();
  const store = merchantsData.merchants.find((store) => store.id === id);
  const storeName = store?.name;
  const storeLogo = store?.logo;
  const products = store?.products || [];
  const totalProducts = products.length;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <PageLayout storeName={storeName} logo={storeLogo}>
      <SectionContainer style={{ flexDirection: "column" }}>
        <h1 style={{ textAlign: "center", fontWeight: "900" }}>All Products</h1>
        {loading ? (
          <LoadingIndicator />
        ) : store ? (
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
                  <button style={{ maxWidth: "unset", width: "100px" }}>
                    View
                  </button>
                </CollectionCard>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                placeItems: "center",
                gap: "10px",
              }}
            >
              <p style={{ textAlign: "center" }}>Store doesn&apos;t exist</p>
              <Link to="/">
                <button>Back to Home</button>
              </Link>
            </div>
          </>
        )}
      </SectionContainer>
      <Hero
        backgroundImg="../assets/images/hero_merchantt.jpeg"
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
