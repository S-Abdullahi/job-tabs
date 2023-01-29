import React from "react";

export default function Menu({ menu, displayJD, index, value }) {
  return (
    <button
      className={`menu-item ${index === value && "active"}`}
      onClick={() => displayJD(index)}
    >
      {menu.company}
    </button>
  );
}
