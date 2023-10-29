import Collection from "../../components/collection/Collection";
import Hero from "../../components/heros/Hero";
import PageLayout from "../../layouts/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero
        backgroundImg="assets/images/hero_shop.jpeg"
        backgroundPosition="0 50%"
      >
        <h1 style={{ maxWidth: "22ch" }}>
          Straight from our kitchens to your homes
        </h1>
        <button> View Products</button>
      </Hero>

      <Collection />

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
