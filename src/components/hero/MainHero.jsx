export default function MainHero({ children, backgroundImage }) {
  return (
    <div className="hero">
      <div className="ad" style={{ backgroundImage: backgroundImage }}>
        {children}
      </div>
      <div className="recently-added">recent news</div>
      <div className="nonsense">Some other nonsense</div>
    </div>
  );
}
