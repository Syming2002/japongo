import type React from "react";
import "../css/pages.css";

interface FilterProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  stroke_count: number;
  setStrokeCount: React.Dispatch<React.SetStateAction<number>>;
}

function Filter({
  search,
  setSearch,
  stroke_count,
  setStrokeCount,
}: FilterProps) {
  return (
    <div id="filter" className="filter-div">
      <div className="kanji-character-filter-div">
        <label className="filter-label" htmlFor="kanji-character-filter">
          Search a kanji
        </label>
        <input
          type="text"
          name="kanji-character-filter"
          id="kanji-character-filter"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="stroke-count-filter-div">
        <label className="filter-label" htmlFor="stroke-number-filter">
          Filter by stroke number
        </label>
        <input
          type="number"
          name="stroke-number-filter"
          id="stroke-number-filter"
          min={0}
          value={stroke_count}
          onChange={(e) => setStrokeCount(e.target.valueAsNumber)}
        />
      </div>
    </div>
  );
}

export default Filter;
