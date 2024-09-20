import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items = [], type }) => {
  console.log(items);
  if (items.length === 0) {
    return <p>No {type} available</p>;
  } else {
    return (
      <ul>
        {items.map((item, index) => {
          const { name, title, ...description } = item;
          const displayName = name || title; // Use name if available, otherwise use title
          return <Tile key={index} name={displayName} description={description} />;
        })}
      </ul>
    )
  }

  // if (items.length === 0) {
  //   return <p>No items yet</p>
  // }

  // return (
  //   <ul>
  //     {items.map((item, index) => {
  //       const { name, ...description } = item;
  //       return <Tile key={index} name={name} description={description} />;
  //     })}
  //   </ul>
  // );
};