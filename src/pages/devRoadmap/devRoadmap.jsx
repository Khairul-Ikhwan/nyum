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
          <h5>Scheduled for : 15 November 2023</h5>
          <p>
            In this demo, we&apos;ll showcase the initial version of our app.
            Users will be able to explore merchant stores and get a feel for the
            general layout and design. It&apos;s a sneak peek of what&apos;s to
            come.
          </p>
        </section>

        <section
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className="dev-list"
        >
          <h4>Pre-Release 0.1</h4>
          <h5>Scheduled for : 30 November 2023</h5>
          <p>
            We&apos;re excited to bring more features to our app! In this
            update, we&apos;re introducing the ability for customers to add
            products to their shopping carts, leave reviews for their favorite
            merchants, and log in using their preferred social media accounts.
            The app is taking shape! This update will allow users to start using
            the marketplace.
          </p>
        </section>
      </SectionContainer>
    </PageLayout>
  );
}
