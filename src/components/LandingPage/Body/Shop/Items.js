import React from "react";

import "./Items.css";

const Items = ({ name, price, image, itemsId }) => {
  return (
    <>
      <div className="shopItems">
        <img src={image} className="shopItems--image" alt={"image" + itemsId} />
        <h3 className="shopItems--name">{name}</h3>
        <h4 className="shopItems--price">{price}</h4>
      </div>
    </>
  );
};

export default Items;
