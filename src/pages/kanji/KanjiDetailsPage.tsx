import { useParams } from "react-router";
import { type KanjiDetails } from "../../hooks/useKanji";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import "../../css/pages.css";
import { useEffect, useState } from "react";

type KanjiParams = {
  kanjiCharacter?: string;
};

function KanjiDetailsPage() {
  const { kanjiCharacter } = useParams<KanjiParams>();
  const [kanji, setKanji] = useState<KanjiDetails>();

  useEffect(() => {
    async function fetchKanjiDetails() {
      try {
        const res = await fetch(
          `https://kanjiapi.dev/v1/kanji/${kanjiCharacter}`,
        );
        const data = await res.json();

        setKanji(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchKanjiDetails();
  }, []);

  function kanjiDetection(kanjiFinded: KanjiDetails | undefined) {
    return !kanjiFinded ? (
      <p>Kanji introuvable</p>
    ) : (
      <>
        {/* <h1 className="kanji-details-main-title">Détails du kanji</h1>
        <p className="kanji-character">{kanjiCharacter}</p>
        <div className="kanji-readings-div">
          <p className="kanji-kun-readings-text">{`Lecture${kanjiFinded.kun_readings.length > 1 ? "s" : ""} purement japonaise${kanjiFinded.kun_readings.length > 1 ? "s" : ""}: ${kanjiFinded.kun_readings.map((kun_reading) => kun_reading)}`}</p>
          <p className="kanji-on-readings-text">{`Lecture${kanjiFinded.on_readings.length > 1 ? "s" : ""} sino-japonaise${kanjiFinded.on_readings.length > 1 ? "s" : ""}: ${kanjiFinded.on_readings.map((on_reading) => on_reading)}`}</p>
        </div>
        <div className="kanji-details-div">
          <p id="kanji-jlpt-level">{`Kanji Grade: ${kanjiFinded.grade}`}</p>
          <p id="kanji-stroke-count">{`Nombre de trait: ${kanjiFinded.stroke_count}`}</p>
          <p id="kanji-meaning">{`Signification: ${kanjiFinded.heisig_en}`}</p>
        </div> */}
      </>
    );
  }

  return (
    <div className="kanji-details-page-div">
      <Header />
      <Sidebar />
      <div className="kanji-details-card-wrapper">
        <div className="kanji-details-card">{kanjiDetection(kanji)}</div>
      </div>
    </div>
  );
}

export default KanjiDetailsPage;
