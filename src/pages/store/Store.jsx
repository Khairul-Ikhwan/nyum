import Layout from "../../layouts/userTypes/Layout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import merchantsData from "../../merchants.json";
import StoreView from "../../components/store/StoreView";
import AllMerchant from "../../components/store/AllMerchant";

export default function Store() {
  const { id } = useParams();
  const [currentMerchant, setCurrentMerchant] = useState(null);

  useEffect(() => {
    // Check if id is provided
    if (id) {
      const findMerchant = merchantsData.merchants.find(
        (merchant) => merchant.id === id
      );
      if (findMerchant) {
        setCurrentMerchant(findMerchant);
      } else {
        // Handle case where the provided id is not found
        setCurrentMerchant(null);
      }
    } else {
      // Handle case where no id is provided
      setCurrentMerchant(null);
    }
  }, [id]);

  return (
    <Layout
      storeLogo={currentMerchant ? currentMerchant.logo : null}
      storeName={currentMerchant ? currentMerchant.name : null}
    >
      {currentMerchant !== null ? (
        currentMerchant ? (
          <StoreView currentMerchant={currentMerchant} />
        ) : (
          <p>Store doesn&apos;t exist!</p>
        )
      ) : (
        <AllMerchant />
      )}
    </Layout>
  );
}
