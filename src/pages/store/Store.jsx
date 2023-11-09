import Layout from "../../layouts/userTypes/Layout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import merchantsData from "../../merchants.json";
import StoreView from "../../components/store/StoreView";

export default function Store() {
  const { id } = useParams();
  const [currentMerchant, setCurrentMerchant] = useState("");

  useEffect(() => {
    const findMerchant = merchantsData.merchants.find(
      (merchant) => merchant.id === id
    );
    if (findMerchant) {
      setCurrentMerchant(findMerchant);
    }
  }, [id]);

  return (
    <Layout
      storeLogo={currentMerchant ? currentMerchant.logo : null}
      storeName={currentMerchant ? currentMerchant.name : null}
    >
      {currentMerchant ? (
        <>
          <StoreView currentMerchant={currentMerchant} />
        </>
      ) : (
        <h2>Merchant not found!</h2>
      )}
    </Layout>
  );
}
