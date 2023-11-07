import SectionBox from "../../components/ui/SectionBox";
import Layout from "../../layouts/userTypes/Layout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import merchantsData from "../../merchants.json";

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

  console.log(currentMerchant.logo);

  return (
    <Layout
      storeLogo={currentMerchant ? currentMerchant.logo : null}
      storeName={currentMerchant ? currentMerchant.name : null}
    >
      <SectionBox>
        {currentMerchant ? (
          <h2>Welcome to the store page for {currentMerchant.name}</h2>
        ) : (
          <h2>Loading...</h2>
        )}
      </SectionBox>
    </Layout>
  );
}
