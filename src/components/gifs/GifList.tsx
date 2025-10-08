import React from "react";
import type { Gif } from "../gifs/interfaces/gif.interface";
interface Props {
  gifs: Gif[];
}

function GifList({ gifs }: Props) {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title}></img>
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
}

export default GifList;
