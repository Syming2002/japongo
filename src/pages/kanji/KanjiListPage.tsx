import { useEffect, useMemo, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "../../css/pages.css";
import Sidebar from "../../components/Sidebar";
import { useParams, type To } from "react-router";
import { useKanji, type KanjiDetails } from "../../hooks/useKanji";
import { KANJI_LEVELS } from "../../utils/kanji";
import Filter from "../../components/Filter";
import Card from "../../components/Card";

type KanjiLevelParams = {
  kanjiLevel?: "1" | "2" | "3" | "4" | "5" | "6" | "S";
};

function KanjiListPage() {
  const kanjiCtx = useKanji();
  const { kanjiLevel } = useParams<KanjiLevelParams>();

  const [search, setSearch] = useState("");
  const [strokeCount, setStrokeCount] = useState(0);

  const currentLevel = KANJI_LEVELS.find(({ url }) => kanjiLevel === url);

  useEffect(() => {
    async function fetchKanji() {
      try {
        kanjiCtx.setLoading(true);

        const res = await fetch(
          `http://localhost:8081/kanji/grade/${currentLevel?.url}`,
        );

        const kanji: KanjiDetails[] = await res.json();

        kanjiCtx.setKanjiArray(kanji);
      } catch (err) {
        console.error(err);
      } finally {
        kanjiCtx.setLoading(false);
      }
    }

    fetchKanji();

    return () => {
      kanjiCtx.setKanjiArray([]);
    };
  }, [currentLevel]);

  if (!currentLevel) {
    return <p>Level not found</p>;
  }

  function handleKanjiClick(jlptLink: string, kanji: string): To {
    return `/${jlptLink}/${kanji}`;
  }

  const filterKanjiCharacter = useMemo(() => {
    return kanjiCtx.kanjiArray.filter((kanji) => {
      const macthesCharacter = kanji.kanji_character.includes(search);

      const matchesStrokeCount =
        strokeCount === 0 || kanji.stroke_count === strokeCount;

      return macthesCharacter && matchesStrokeCount;
    });
  }, [search, strokeCount, kanjiCtx.kanjiArray]);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="filter-wrapper">
        <Filter
          search={search}
          setSearch={setSearch}
          stroke_count={strokeCount}
          setStrokeCount={setStrokeCount}
        />
      </div>
      <h1 id="kanji-title">Kanji du {currentLevel.title}</h1>
      {kanjiCtx.loading && (
        <h2 style={{ textAlign: "center" }}>Chargement...</h2>
      )}

      <ul className="kanji-list">
        {filterKanjiCharacter.map((kanji) => (
          <Card
            key={kanji.kanji_character}
            isKanjiCard={true}
            kanji={kanji.kanji_character}
            onKanjiCardClick={handleKanjiClick(
              currentLevel.url,
              kanji.kanji_character,
            )}
          />
        ))}
      </ul>

      <Footer
        version={0.1}
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
      />
    </div>
  );
}

export default KanjiListPage;
