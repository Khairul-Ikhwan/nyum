import PageLayout from "../../layouts/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <section
        className="hero"
        style={{
          backgroundColor: "white",
          backgroundImage: "url(assets/images/hero_shop.jpeg)",
        }}
      >
        <div className="hero-container">
          <div className="hero-title">
            <h1 style={{ maxWidth: "22ch" }}>
              Straight from our kitchens to your homes
            </h1>
          </div>
        </div>
      </section>

      <section
        className="hero"
        style={{
          backgroundColor: "white",
          backgroundImage: "url(assets/images/hero_merchantt.jpeg)",
          backgroundPositionY: "30%",
        }}
      >
        <div className="hero-container">
          <div
            className="hero-title"
            style={{ display: "flex", flexDirection: "column", gap: "1em" }}
          >
            <h1 style={{ maxWidth: "22ch" }}>
              Earn extra income by providing good food
            </h1>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section
        className="hero"
        style={{
          backgroundColor: "white",
          backgroundImage: "url(assets/images/hero_merchantt.jpeg)",
          backgroundPositionY: "30%",
        }}
      >
        <div className="hero-container">
          <div
            className="hero-title"
            style={{ display: "flex", flexDirection: "column", gap: "1em" }}
          >
            <h1 style={{ maxWidth: "22ch" }}>
              Earn extra income by providing good food
            </h1>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
