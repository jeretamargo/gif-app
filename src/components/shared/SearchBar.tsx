import React from "react";
interface Props {
  placeholder: string;
}

function SearchBar({ placeholder = "Buscar" }: Props) {
  /*   se asigna por defecto un valor si no se le pasa ninguno */
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder}></input>
      <button>Buscar</button>
    </div>
  );
}

export default SearchBar;
