import React from "react";
import Items from "./Items";

import "./Shop.css";

import image from "../../../../assets/Size.jpg";

const Shop = () => {
  // eslint-disable-next-line
  const data = [
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
    {
      image: image,
      name: "Tên áo - Màu áo",
      price: "500.000",
    },
  ];

  return (
    <div className="conatinerShop">
      <p>Áo thun unisex</p>
      {/* <div className="containerShop--items">
        {data.map((item) => {
          return (
            <Items image={item.image} name={item.name} price={item.price} />
          );
        })}
      </div> */}

      <div className="containerShop--items">
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
      </div>
      <div className="containerShop--items">
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
      </div>
      <div className="containerShop--items">
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
      </div>
      <div className="containerShop--items lastRow">
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
        <Items image={image} name="Tên áo - Màu áo" price="500.000" />
      </div>
    </div>
  );
};

export default Shop;
