import React from "react";

export const TypeModal = ({ setCategory }) => {
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
};
