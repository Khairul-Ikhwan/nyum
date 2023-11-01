import SectionContainer from "../../components/heros/SectionContainer";
import PageLayout from "../../layouts/PageLayout";

export default function DevRoadmap() {
  return (
    <PageLayout>
      <SectionContainer
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flexGrow: "1",
          gap: "30px",
          padding: "10%",
        }}
      >
        <h1>Development Roadmap</h1>
        <section
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className="dev-list"
        >
          <h4>Technical Demo 1</h4>
          <h5>15 November 2023</h5>
          <p>These are the planned features for this demo:</p>
          <p>
            <ul>
              <li>Merchant Store</li>
              <li>General Layout</li>
            </ul>
          </p>
        </section>

        <section
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className="dev-list"
        >
          <h4>Pre-Release 0.1</h4>
          <h5>30 November 2023</h5>
          <p>These are the planned features for this update: </p>
          <p>
            <ul>
              <li>Merchant Store</li>
              <li>Customer Carts</li>
              <li>Customer Reviews</li>
              <li>OAuth2 Logins</li>
            </ul>
          </p>
        </section>
      </SectionContainer>
    </PageLayout>
  );
}
