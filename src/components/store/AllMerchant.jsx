import merchantData from "../../merchants.json";
import SectionBox from "../ui/SectionBox";
import "./Store.css";
import { useNavigate } from "react-router";

export default function AllMerchant() {
  const navigate = useNavigate();

  console.log(merchantData);

  function handleClick(storeId) {
    navigate(`/store/${storeId}`);
  }

  return (
    <SectionBox>
      <h1>All Merchants</h1>
      <div className="merchant-list">
        {merchantData.merchants.map((merchant) => (
          <div
            key={merchant.id}
            className="merchant-item"
            onClick={() => handleClick(merchant.id)}
          >
            <img
              src={merchant.logo}
              alt={`Logo of ${merchant.name}`}
              style={{ width: "100px", height: "100px", borderRadius: "25px" }}
            />
            <p>{merchant.name}</p>
          </div>
        ))}
      </div>
    </SectionBox>
  );
}
