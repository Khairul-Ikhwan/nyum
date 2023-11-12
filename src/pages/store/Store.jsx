import Layout from "../../layouts/userTypes/Layout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import merchantsData from "../../merchants.json";
import StoreView from "../../components/store/StoreView";
import AllMerchant from "../../components/store/AllMerchant";
import { TailSpin } from "react-loader-spinner";

export default function Store() {
  const { id } = useParams();
  const [currentMerchant, setCurrentMerchant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      const findMerchant = merchantsData.merchants.find(
        (merchant) => merchant.id === id
      );
      if (findMerchant) {
        setCurrentMerchant(findMerchant);
      } else {
        setCurrentMerchant(null);
      }
    } else {
      setCurrentMerchant(null);
    }
    setIsLoading(false);
  }, [id]);

  return (
    <Layout
      storeLogo={currentMerchant ? currentMerchant.logo : null}
      storeName={currentMerchant ? currentMerchant.name : null}
    >
      {isLoading ? (
        <TailSpin color="var(--primary)" width={50} height={50} />
      ) : currentMerchant !== null ? (
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
