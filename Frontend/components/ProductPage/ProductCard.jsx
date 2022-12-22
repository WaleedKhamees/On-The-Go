import React from "react";
import { useContext } from "react";
import { cartContext } from "../../src/App";

const ProductCard = ({ item }) => {
  const { addItem } = useContext(cartContext)
  return (
    <div className="max-w-[250px] bg-White flex flex-col gap-4 items-center justify-between">
      <h2 className="h2 text-Headings">{item.item_name}</h2>
      <img src={item.img_url} alt="" className="max-h-[225px] h-fit" />
      <p className="p text-Body text-center">{item.item_desc}</p>
      <div className="flex items-center w-full h-[50px]">
        <div className="flex-grow flex-1 flex justify-center items-center h-full border-2 border-RedPrimary rounded-lg rounded-r-none border-r-0">
          <h2 className="text-RedPrimary h2 ">{item.item_price}</h2>
        </div>
        <button onClick={() => { addItem(item) }} className="h-full text-White bg-RedPrimary flex-grow flex-1 flex justify-center items-center rounded-lg rounded-l-none border-2 border-RedPrimary border-l-0">
          <p className="outlinebody">ORDER</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
