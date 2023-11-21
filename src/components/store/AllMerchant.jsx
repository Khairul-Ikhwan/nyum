import "./Store.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

export default function AllMerchant() {
  const [merchantData, setMerchantData] = useState([]);

  const navigate = useNavigate();
  const formatStoreName = (storeName) => {
    return storeName.toLowerCase().replace(/\s+/g, "-");
  };
  const handleClick = (storeName) => {
    const formattedStoreName = formatStoreName(storeName);
    navigate(`/store/${formattedStoreName}`);
  };

  const getAllMerchants = async () => {
    try {
      const response = await fetch("/api/merchants/get-all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: $${response.status}`);
      }
      const merchantList = await response.json();
      setMerchantData(merchantList);
    } catch (error) {
      console.log("Error fetching merchant");
    }
  };

  useEffect(() => {
    getAllMerchants();
  }, []);

  useEffect(() => {
    console.log("Merchant Data: ", merchantData);
  }, [merchantData]);

  return (
    <>
      <h1>All Merchants</h1>
      <div className="merchant-list">
        {merchantData.merchants ? (
          merchantData.merchants.map((merchant) => (
            <div
              key={merchant._id}
              className="merchant-item"
              onClick={() => handleClick(merchant.storeName)}
            >
              <img
                src={merchant.logo_url}
                alt={`Logo of ${merchant.storeName}`}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "25px",
                }}
              />
              <p>{merchant.storeName}</p>
            </div>
          ))
        ) : (
          <div className="merchant-list">
            <TailSpin />
          </div>
        )}
      </div>
    </>
  );
}
