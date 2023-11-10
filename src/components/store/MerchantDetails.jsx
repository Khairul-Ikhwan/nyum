import Pills from "../ui/Pills";
import SectionBox from "../ui/SectionBox";
import Reviews from "./Reviews";
import { calculateTimeElapsed } from "../../utility/calculateTimeElapsed";

export default function MerchantDetails({ currentMerchant }) {
  const reviews = currentMerchant.reviews || [];
  return (
    <span style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h3>Store Details</h3>
      <div className="merchant-details">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="logo">
            <img
              style={{ width: "inherit" }}
              src={currentMerchant.logo}
              alt="Store Logo"
            />
          </div>
        </div>
        <div>
          <p>{currentMerchant.name} </p>
          <p>Created: {calculateTimeElapsed(currentMerchant.dateCreated)}</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p>Tags: </p>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          {currentMerchant.tags.map((tag, index) => (
            <Pills key={index} pillText={tag} />
          ))}
        </div>
      </div>

      <SectionBox>
        <h4>Recent Reviews</h4>
        <Reviews reviews={reviews} />
      </SectionBox>
    </span>
  );
}
