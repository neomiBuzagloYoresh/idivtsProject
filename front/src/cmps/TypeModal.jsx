import React from "react";

export const TypeModal = ({ setCategory, closeModal }) => {
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
  function emitModal(category) {
    closeModal();
    setCategory(category);
  }

  return (
    <section className="type-modal-container">
      <div className="btn-type-container">
        {catagories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => emitModal(category)}
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
