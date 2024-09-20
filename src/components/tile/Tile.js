import React from "react";

export const Tile = ({ title, name, description }) => {
  return (
    <li>
      <p><strong>{name || title}</strong></p>
      {Object.entries(description).map(([key, value], index) => (
        <p key={index}>{key}: {value}</p>
      ))}
    </li>
  );
};