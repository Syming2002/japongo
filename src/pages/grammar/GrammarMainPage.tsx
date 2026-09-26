import Header from "../../components/Header";

import "../../css/pages.css";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { HIRAGANA_PARTICULE } from "../../utils/kana";
import Card from "../../components/Card";

function GrammarMainPage() {
  return (
    <div id="grammar-main-page-div">
      <Header />
      <Sidebar />
      <h1 className="grammar-main-page-tooltip">
        Cliquez sur une particule sur laquelle vous voulez approfondir
      </h1>
      <div className="grammar-selection-list-div-wrapper">
        <div className="grammar-selection-list-div">
          {HIRAGANA_PARTICULE.map((hiragana) => (
            <Card
              isGrammarCard={true}
              key={hiragana}
              grammarPath={`/particle/${hiragana}`}
              grammarTheme={`The particle ${hiragana}`}
            />
          ))}
        </div>
      </div>
      <Footer
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
        version={0.1}
      />
    </div>
  );
}

export default GrammarMainPage;
