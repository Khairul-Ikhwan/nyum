export default function SectionContainer({ style, children }) {
  return (
    <section className="section-container" style={style}>
      {children}
    </section>
  );
}
