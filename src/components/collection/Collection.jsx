import CollectionCard from "./CollectionCard";
import "./collection.css";

export default function Collection() {
  const merchants = [
    {
      productName: "Epok-Epok",
      storeName: "Crofuffles",
      productPrice: 10,
    },
    {
      productName: "Fresh Fruit Salad",
      storeName: "Fruit Delights",
      productPrice: 8,
    },
    {
      productName: "Spicy Chicken Wings",
      storeName: "WingMaster",
      productPrice: 12,
    },
  ];

  return (
    <div className="collection">
      <h2>Recently Added</h2>
      <div className="collection-container">
        {merchants.map((merchant, index) => (
          <CollectionCard
            key={index} // Make sure to provide a unique key for each rendered component
            productName={merchant.productName}
            storeName={merchant.storeName}
            productPrice={merchant.productPrice}
          />
        ))}
      </div>
    </div>
  );
}
