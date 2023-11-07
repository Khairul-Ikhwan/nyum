import GeneralNav from "../navigation/GeneralNav";

export default function Layout({ children, storeLogo, storeName }) {
  return (
    <div className="page">
      <GeneralNav storeLogo={storeLogo} storeName={storeName} />
      <div className="children">{children}</div>
    </div>
  );
}
