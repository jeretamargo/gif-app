import React from "react";
import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./components/shared/CustomHeader";
import SearchBar from "./components/shared/SearchBar";
import PreviousSearches from "./components/gifs/PreviousSearches";
import GifList from "./components/gifs/GifList";

const GifsApp = () => {
  return (
    <>
      <CustomHeader
        title="Buscador de gifs"
        description="Buscá en el repo de gifs más grande de internet"
      />

      <SearchBar placeholder="Buscar gifs" />

      <PreviousSearches />
      {/* gif container */}
      <GifList gifs={mockGifs} />
    </>
  );
};

export default GifsApp;
