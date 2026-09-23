import Footer from "../../components/Footer";
import Header from "../../components/Header";
import KanjiCategory from "../../components/KanjiCategory";
import Sidebar from "../../components/Sidebar";

import "../../css/pages.css";
import { KANJI_LEVELS } from "../../utils/kanji";

function KanjiCategoryListPage() {
  return (
    <div className="kanji-category-list-div">
      <Header />
      <Sidebar />
      <h1 id="kanji-category-list-main-title">Liste des Kanji par Niveau</h1>
      <div id="kanji-jlpt-category-list-div">
        {KANJI_LEVELS.map((level) => (
          <KanjiCategory key={level.url} level={level.title} path={level.url} />
        ))}
      </div>
      <Footer
        version={0.1}
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
      />
    </div>
  );
}

export default KanjiCategoryListPage;
