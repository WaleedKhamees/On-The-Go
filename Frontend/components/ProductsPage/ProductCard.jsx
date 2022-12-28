import React from "react";
import { useContext } from "react";
import { cartContext } from "../../src/App";

const ProductCard = ({ item }) => {
  const { addItem } = useContext(cartContext);
  return (
    <div className="w-[250px] h-[400px] bg-White flex flex-col gap-4 items-center justify-between">
      <h2 className="h2 text-Headings max-h-[200px]">{item.item_name}</h2>
      <img src={item.img_url} alt="" className="max-w-auto max-h-[200px]" />
      <p className="p text-Body text-center">{item.item_desc}</p>
      <div className="flex items-center w-full min-h-[50px]">
        <div className="flex-grow flex-1 flex justify-center items-center h-full border-2 border-RedPrimary rounded-lg rounded-r-none border-r-0">
          <h2 className="text-RedPrimary h2 ">
            <span
              className={`  p-1 ${
                item.discount_percent != 0
                  ? " text-Small line-through"
                  : " text-RedPrimary"
              }`}
            >
              {item.item_price}
            </span>
            <span
              className={` h1 text-RedPrimary p-1 ${
                item.discount_percent === 0 ? "hidden" : "visible"
              }`}
            >
              {Math.floor(
                item.item_price -
                  item.item_price * (item.discount_percent / 100.0)
              )}
            </span>
            EGP
          </h2>
        </div>
        <button className="h-full text-White bg-RedPrimary flex-grow flex-1 flex justify-center items-center rounded-lg rounded-l-none border-2 border-RedPrimary border-l-0">
          <p className="outlinebody">ORDER</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
