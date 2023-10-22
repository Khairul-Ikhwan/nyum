export default function Hero({ backgroundImg, backgroundPosition, children }) {
  return (
    <section
      className="hero"
      style={{
        backgroundColor: "white",
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: backgroundPosition,
      }}
    >
      <div className="hero-container">
        <div className="hero-title">{children}</div>
      </div>
    </section>
  );
}
