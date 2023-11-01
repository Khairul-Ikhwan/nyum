import SectionContainer from "../../components/heros/SectionContainer";
import { useParams } from "react-router-dom";

export default function ProductView() {
  const { id, productName } = useParams();

  return (
    <SectionContainer
      style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
    >
      <h1>Hello I am a product of my generation</h1>
      <p>Store ID: {id}</p>
      <p>Product Name: {productName}</p>
    </SectionContainer>
  );
}
