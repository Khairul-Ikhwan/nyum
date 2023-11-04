import GeneralNav from "../navigation/GeneralNav";

export default function General({ children }) {
  return (
    <div className="page">
      <GeneralNav />
      <div className="children">{children}</div>
    </div>
  );
}
