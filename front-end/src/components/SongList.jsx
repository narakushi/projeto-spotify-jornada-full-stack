import React, { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentSValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} key={index} index={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => setItems((prevState) => prevState + 5)}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
