import React, { useEffect, useState } from "react";
import { TypeModal } from "./TypeModal";
import { ItemPreview } from "./ItemPreview";
import { loadItems } from "../store/actions/itemActions";
import { Loader } from "./Loader";

export const ItemList = ({
  items,
  setCategory,
  onSetPage,
}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    loadItems(items);
  }, []);

  if (!items) return <Loader />;
  return (
    <section className="item-list-main main-layout">
      <button
        className="btn-modal"
        onClick={() =>
          setIsShowModal((isShowModal) => !isShowModal)
        }
      >
        {isShowModal ? "close" : "open"}
      </button>
      {isShowModal && (
        <div className="type-modal">
          <TypeModal
            setCategory={setCategory}
            items={items}
          />
        </div>
      )}

      <ul className="item-list-container clean-list main-layout">
        {items.map((item) => (
          <li className="item-preview" key={item.id}>
            <ItemPreview item={item} />
          </li>
        ))}
      </ul>
      <div className="pagination-container main-layout">
        <button
          className="btn-modal"
          onClick={() => onSetPage(-1)}
        >
          Prev
        </button>
        <button
          className="btn-modal"
          onClick={() => onSetPage(1)}
        >
          Next
        </button>
      </div>
    </section>
  );
};
