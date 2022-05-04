import React, { useEffect, useState } from "react";

function ItemPreview({ item }) {
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
          <p>type: {item.type}</p>
          <p>views: {item.views}</p>
          <p>downloads: {item.downloads}</p>
          <p>collections: {item.collections}</p>
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
}
export default ItemPreview;
