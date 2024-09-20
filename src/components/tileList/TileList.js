import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items = [], type }) => {
  if (items.length === 0) {
    return <p>No {type} available</p>;
  } else {
    return (
      <ul>
        {items.map((item, index) => {
          const { name, title, ...description } = item;
          return <Tile key={index} name={name || title} description={description} />;
        })}
      </ul>
    )
  }
};