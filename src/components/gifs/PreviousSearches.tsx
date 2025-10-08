import React from "react";
interface Props {
  searches: string[];
  onLabelClick: (search: string) => void;
}
function PreviousSearches({ searches, onLabelClick }: Props) {
  return (
    <div className="previous-searches">
      <h2>Búsquedas Previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} onClick={() => onLabelClick(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviousSearches;
