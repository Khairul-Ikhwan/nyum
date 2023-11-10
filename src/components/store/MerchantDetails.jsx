import Pills from "../ui/Pills";

export default function MerchantDetails({ currentMerchant }) {
  function calculateTimeElapsed(dateCreated) {
    const now = new Date();
    const createdDate = new Date(dateCreated * 1000); // Convert to milliseconds
    const timeDiff = now - createdDate;
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else {
      return "New Store";
    }
  }

  return (
    <>
      <h4>Merchant Details Component</h4>
      <p>Store Name: {currentMerchant.name} </p>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <p>Store Logo:</p>
        <div className="logo">
          <img
            style={{ width: "inherit" }}
            src={currentMerchant.logo}
            alt="Store Logo"
          />
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
    </>
  );
}
