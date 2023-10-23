import CollectionCard from "../../components/collection/CollectionCard";
import PageLayout from "../../layouts/PageLayout";
import SectionContainer from "../../components/heros/SectionContainer";
import Hero from "../../components/heros/Hero";

export default function StoreFront() {
  return (
    <PageLayout>
      <SectionContainer style={{ flexDirection: "column" }}>
        <h1 style={{ textAlign: "center", fontWeight: "900" }}>All Products</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <CollectionCard>
            <button>View</button>
          </CollectionCard>
        </div>
      </SectionContainer>
      <Hero
        backgroundImg="assets/images/hero_merchantt.jpeg"
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
