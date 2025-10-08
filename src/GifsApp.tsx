import React from "react";
import type { Gif } from "./components/gifs/interfaces/gif.interface";
import CustomHeader from "./components/shared/CustomHeader";
import SearchBar from "./components/shared/SearchBar";
import PreviousSearches from "./components/gifs/PreviousSearches";
import GifList from "./components/gifs/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./components/gifs/actions/get-gifs-by-query.action";

const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [foundGifs, setFoundGifs] = useState<Gif[]>([]);

  const handleSearchLabelClick = (search: string) => {
    console.log(`click en ${search}`);
  };

  const handleSearch = async (query: string) => {
    query = query.trim();
    if (query == "") {
      return;
    } else {
      query = query.toLowerCase();
    }
    if (previousSearches.includes(query)) {
      return;
    } else {
      if (previousSearches.length < 8) {
        setPreviousSearches([...previousSearches, query]);
      } else {
        console.log(`buscando: ${query}`);
      }
    }

    const resultGifs = await getGifsByQuery(query);
    setFoundGifs(resultGifs);
  };
  return (
    <>
      <CustomHeader
        title="Buscador de gifs"
        description="Buscá en el repo de gifs más grande de internet"
      />

      <SearchBar placeholder="Buscar gifs" onSearch={handleSearch} />

      <PreviousSearches
        searches={previousSearches}
        onLabelClick={handleSearchLabelClick}
      />

      <GifList gifs={foundGifs} />
    </>
  );
};

export default GifsApp;
