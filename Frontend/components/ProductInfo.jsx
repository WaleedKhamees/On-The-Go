import React from "react";
import { useState } from "react";

function ProductInfo(props) {
  const [num, setnum] = useState(3);

  function Decrease() {
    if (num - 1 > 0) {
      setnum((prevNum) => prevNum - 1);
    }
  }

  function Increase() {
    setnum((prevNum) => prevNum + 1);
  }

  return (
    <div className="flex h-max-[250px]">
      <img src={props.Img} className="max-h-[200px] "></img>

      <div className="flex  bg-RedPrimary flex-grow w-3/4  max-h-[200px] justify-between">
        <div className=" flex-col flex gap-2 pl-16 py-16">
          <h1 className="h1 text-White">{props.Header}</h1>
          <p className="p  text-White">{props.Description} </p>
        </div>

        <div className="flex  flex-col gap-2 pr-16 py-10">
          <p className="p text-White text-center">{props.Price}</p>
          <div className="flex items-center justify-center">
            <button
              onClick={Decrease}
              className="border rounded-l-lg border-White   "
            >
              <p className="text-White text-center p-2 ">-</p>
            </button>

            <button className="border  border-White   ">
              <p className="text-White text-center p-2 ">{num}</p>
            </button>

            <button
              onClick={Increase}
              className="border rounded-r-lg border-White   "
            >
              <p className="text-White text-center p-2 ">+</p>
            </button>
          </div>

          <button className="border rounded-lg border-White pr-2 pl-2">
            <p className="text-White text-center p-2  ">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
