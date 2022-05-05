import React, { useEffect, useState } from "react";

export const ItemPreview = ({ item }) => {
  const [isSelectItem, setIsSelectItem] = useState(false);

  useEffect(() => {}, [isSelectItem]);

  return (
    <div
      className="item-preview-container"
      onClick={() =>
        setIsSelectItem((isSelectItem) => !isSelectItem)
      }
    >
      {isSelectItem ? (
        <div
          style={{
            display: !isSelectItem ? "none" : "block",
          }}
        >
          <p>
            {" "}
            <span>type:</span> {item.type}
          </p>
          <p>
            {" "}
            <span> views:</span> {item.views}
          </p>
          <p>
            <span>downloads:</span> {item.downloads}
          </p>
          <p>
            <span>collections:</span> {item.collections}
          </p>
        </div>
      ) : (
        <img
          style={{
            display: isSelectItem ? "none" : "block",
          }}
          src={item.webformatURL}
          alt=""
        />
      )}
    </div>
  );
};
