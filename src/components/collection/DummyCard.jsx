export default function DummyCard() {
  return (
    <div className="card">
      <div
        className="card-container"
        style={{
          color: "white",
          backgroundColor: "lightgrey",
          border: "0px",
          flexGrow: "1",
          minHeight: "200px",
        }}
      >
        <div
          className="description"
          style={{ placeContent: "center", placeItems: "center" }}
        >
          <h2>Loading...</h2>
        </div>
      </div>
    </div>
  );
}
