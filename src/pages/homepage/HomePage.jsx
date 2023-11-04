import MainHero from "../../components/hero/MainHero";
import General from "../../layouts/userTypes/Layout";

export default function HomePage() {
  return (
    <General>
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
    </General>
  );
}
