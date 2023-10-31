import SectionContainer from "../../components/heros/SectionContainer";
import PageLayout from "../../layouts/PageLayout";

export default function DevRoadmap() {
  return (
    <PageLayout>
      <SectionContainer style={{ display: "flex", flexDirection: "column" }}>
        <h1>Development Roadmap</h1>
        <section
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <h4>Pre-Release 0.1</h4>
          <h5>30 November 2023</h5>
          <p>Hello all, these are the planned features for this update: </p>
          <p>
            <ul>
              <li>Merchant Store</li>
              <li>Dolphins Can Swim</li>
              <li></li>
            </ul>
          </p>
        </section>
      </SectionContainer>
    </PageLayout>
  );
}
