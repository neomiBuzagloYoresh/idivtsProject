import React, { useEffect, useState } from "react";

function TypeModal({ items, setCategory }) {
  const catagories = [
    "animals",
    "numbers",
    "program",
    "country",
    "singers",
    "colors",
    "people",
    "sports",
    "works",
    "movies",
    "nature",
    "food",
    "funny",
    "music",
    "cools",
  ];

  return (
    <section className="type-modal-container">
      <div className="btn-type-container">
        {catagories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => setCategory(category)}
              className="btn-type"
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default TypeModal;

// useEffect(async () => {
//   await itemService.loadItems(type);
//   // close the modal!
// }, [type])
