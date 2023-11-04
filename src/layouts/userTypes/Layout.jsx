import GeneralNav from "../navigation/GeneralNav";

export default function Layout({ children }) {
  return (
    <div className="page">
      <GeneralNav />
      <div className="children">{children}</div>
    </div>
  );
}
