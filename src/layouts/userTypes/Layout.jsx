import Search from "../../components/ui/Search";
import SectionBox from "../../components/ui/SectionBox";
import GeneralNav from "../navigation/GeneralNav";

export default function Layout({ children, storeLogo, storeName }) {
  return (
    <div className="page">
      <GeneralNav storeLogo={storeLogo} storeName={storeName} />
      <SectionBox>
        <Search />
      </SectionBox>
      <div className="children">{children}</div>
    </div>
  );
}
