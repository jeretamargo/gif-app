import React, { useEffect, useState } from "react";
interface Props {
  placeholder: string;
  onSearch: (query: string) => void;
}

function SearchBar({ placeholder = "Buscar", onSearch }: Props) {
  /*   se asigna por defecto un valor (buscar)si no se le pasa ninguno */

  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onSearch(query);
    }, 700);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [query, onSearch]);

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;
