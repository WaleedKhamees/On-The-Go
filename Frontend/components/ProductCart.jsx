import React from "react";
import { useContext } from "react";
import { cartContext } from "../src/App";
import { getPath } from "../util/routerFunctions";
import StarsRating from "./atoms/StarsRating";

const ProductInfo = ({ item, rating }) => {
  const { addItem } = useContext(cartContext);
  const path = getPath();
  const decrease = () => {
    addItem(item, item.qty - 1);
  }
  const increase = () => {
    addItem(item, item.qty + 1);
  }
  return (
    <div className="flex max-h-[200px] rounded-lg overflow-clip j">
      <img src={item.img_url} className="w-[250px] bg-[#d1d5db]" />

      <div className="flex  bg-RedPrimary flex-grow w-3/4  max-h-[200px] justify-between rounded-r-lg items-center">
        <div className=" flex-col flex gap-2 pl-16 py-16">
          <h1 className="h1 text-White">{item.item_name}</h1>
          <p className="p  text-White">{item.item_desc} </p>
          <StarsRating Rating={rating} />
        </div>

        <div className="flex flex-col items-center gap-2 pr-16 py-10">
          <p className="p text-White text-center">{(parseFloat(item.item_price) * item.qty) || item.item_price} EGP</p>
          {path === "cart" &&
            <div className="flex items-center justify-center">
              <button
                onClick={() => decrease()}
                className="border border-r-0 rounded-l-lg border-White   "
              >
                <p className="text-White text-center p px-2 py-1 ">-</p>
              </button>

              <button className="border  border-White">
                <p className="text-White text-center p px-2 py-1 ">{item.qty || 0}</p>
              </button>

              <button
                onClick={() => increase()}
                className="border border-l-0 rounded-r-lg border-White"
              >
                <p className="text-White text-center p px-2 py-1 ">+</p>
              </button>
            </div>}

          {path !== "cart" && <button
            onClick={() => addItem(item)}
            className="border rounded-lg border-White w-fit">
            <p className="text-White text-center p-2 whitespace-nowrap">Add to Cart</p>
          </button>}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
