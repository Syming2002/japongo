import { useNavigate } from "react-router";

import "../css/cards.css";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface CardProps {
  isKanaCard?: boolean;
  kana?: string;
  romaji?: string;
  isKanjiCard?: boolean;
  kanji?: string;
  onKanjiCardClick?(): void;
  isGrammarCard?: boolean;
  grammarPath?: string;
  grammarTheme?: string;
  isVerbalFormulaCard?: boolean;
  verbalFormula?: string;
}

interface KanaCardProps {
  kana?: string;
  romaji?: string;
}

interface KanjiCardProps {
  kanji?: string;
  onKanjiCardClick?(): void;
}

interface GrammarCardProps {
  grammarPath?: string;
  grammarTheme?: string;
}

interface VerbalFormulaCardProps {
  verbalFormula?: string;
}

function Card({
  isKanaCard,
  kana,
  romaji,
  isKanjiCard,
  kanji,
  onKanjiCardClick,
  isGrammarCard,
  grammarPath,
  grammarTheme,
  isVerbalFormulaCard,
  verbalFormula,
}: CardProps) {
  return (
    (isKanaCard && <KanaCard kana={kana} romaji={romaji} />) ||
    (isKanjiCard && (
      <KanjiCard kanji={kanji} onKanjiCardClick={onKanjiCardClick} />
    )) ||
    (isGrammarCard && (
      <GrammarCard grammarPath={grammarPath} grammarTheme={grammarTheme} />
    )) ||
    (isVerbalFormulaCard && <VerbalFormulaCard verbalFormula={verbalFormula} />)
  );
}

function KanaCard({ kana, romaji }: KanaCardProps) {
  return (
    <>
      <td
        className={kana === " " ? "kana-card-table-empty" : "kana-card-table"}
      >
        <p className={kana === " " ? "" : "kana-text"}>{kana}</p>
        {kana !== " " && <hr id="kana-romaji-hr" />}
        <p className={kana === " " ? "" : "romaji-text"}>{romaji}</p>
      </td>
    </>
  );
}

function KanjiCard({ kanji, onKanjiCardClick }: KanjiCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <li
      key={kanji}
      ref={ref}
      className={clsx("kanji-item", {
        "kanji-item-visible": inView,
        "kanji-item-hidden": !inView,
      })}
    >
      <button onClick={onKanjiCardClick} className="kanji-card">
        {kanji}
      </button>
    </li>
  );
}

function GrammarCard({ grammarPath, grammarTheme }: GrammarCardProps) {
  const navigate = useNavigate();

  function onGrammarCardClick(link?: string) {
    navigate(link === undefined ? "" : link);
  }

  return (
    <div
      className="grammar-selection-card-div"
      onClick={() => onGrammarCardClick(grammarPath)}
    >
      <p className="grammar-selection-card-text">{grammarTheme}</p>
    </div>
  );
}

function VerbalFormulaCard({ verbalFormula }: VerbalFormulaCardProps) {
  const navigate = useNavigate();

  function onVerbalFormulaCardClick(link?: string) {
    navigate(link === undefined ? "" : link);
  }

  return (
    <div
      className="grammar-selection-card-div"
      onClick={() => onVerbalFormulaCardClick(verbalFormula)}
    >
      <p className="grammar-selection-card-text">{verbalFormula}</p>
    </div>
  );
}

export default Card;
