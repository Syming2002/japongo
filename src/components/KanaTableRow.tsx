import type { Kana } from "../hooks/useKana";

import "../css/cards.css";
import Card from "./Card";

interface KanaTableRowProps {
  kanaArray: Kana;
  isHiragana: boolean;
}

function KanaTableRow({ kanaArray, isHiragana }: KanaTableRowProps) {
  return (
    <tr className="kana-table-row">
      {kanaArray.map((kana) =>
        isHiragana ? (
          <Card
            isKanaCard={true}
            key={kana.id}
            kana={kana.hiragana}
            romaji={kana.romaji}
          />
        ) : (
          <Card
            isKanaCard={true}
            key={kana.id}
            kana={kana.katakana}
            romaji={kana.romaji}
          />
        ),
      )}
    </tr>
  );
}

export default KanaTableRow;
