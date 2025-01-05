import React from "react";

const ItemList = ({ items, dummy }) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div>
            <span>{item.card.info.name}</span>
            <span> - ₹{item.card.info.price / 100}</span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
