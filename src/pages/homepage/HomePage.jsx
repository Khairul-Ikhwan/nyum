import Collection from "../../components/collection/Collection";
import Hero from "../../components/heros/Hero";
import PageLayout from "../../layouts/PageLayout";
import Modal from "../../components/modal/Modal";
//This is a custom hook
import { useModal } from "../../customHooks/useModal";

export default function HomePage() {
  const { isModalVisible, openModal, closeModal } = useModal();

  return (
    <PageLayout>
      <Hero
        backgroundImg="/../assets/images/hero_shop.jpeg"
        backgroundPosition="0 50%"
      >
        <h1 style={{ maxWidth: "22ch" }}>
          Straight from our kitchens to your homes
        </h1>
        <button onClick={openModal}>View Products</button>
      </Hero>

      <Collection />

      <Hero
        backgroundImg="/../assets/images/hero_merchantt.jpeg"
        backgroundPosition="0 30%"
      >
        <h1 style={{ maxWidth: "22ch" }}>
          Earn extra income by providing good food
        </h1>
        <button onClick={openModal}>Learn More</button>
      </Hero>

      {isModalVisible && (
        <Modal showModal={isModalVisible} closeModal={closeModal}>
          <div
            style={{
              padding: "5%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              placeItems: "center",
            }}
          >
            <h2>This feature is not available yet</h2>
            <p>
              Be the first on our platform, follow the link below to register
              your interest!{" "}
            </p>
            <button>Pre-register</button>
          </div>
        </Modal>
      )}
    </PageLayout>
  );
}
