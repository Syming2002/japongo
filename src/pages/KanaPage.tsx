import Footer from "../components/Footer";
import Header from "../components/Header";
import KanaTableRow from "../components/KanaTableRow";
import Sidebar from "../components/Sidebar";
import { useKana } from "../hooks/useKana";

import "../css/pages.css";

function KanaPage() {
  const kana = useKana();

  return (
    <>
      <Header />
      <Sidebar />
      <h1 id="hiragana-title">Tableau des Hiragana</h1>
      <table className="kana-table">
        <tbody>
          <KanaTableRow kanaArray={kana} isHiragana={true} />
        </tbody>
      </table>
      <div className="kana-hr-wrapper">
        <hr id="kana-page-hr" />
      </div>
      <h1 id="katakana-title">Tableau des Katakana</h1>
      <table className="kana-table">
        <tbody>
          <KanaTableRow kanaArray={kana} isHiragana={false} />
        </tbody>
      </table>
      <Footer
        version={0.1}
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
      />
    </>
  );
}

export default KanaPage;
