import React from "react";

const ProductCard = (props) => {
  return (
    <div className="max-w-[314px] px-8 py-4 bg-White flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
        <h2 className="h2 text-Headings">{props.ProductName}</h2>
        <img src={props.ProductImage} alt="" className="w-[250px] h-fit" />
        <p className="p text-Body text-center">{props.ProductDescription}</p>
      </div>
      <div className="flex items-center w-full h-[50px]">
        <div className="flex-grow flex-1 flex justify-center items-center h-full border-2 border-RedPrimary rounded-lg rounded-r-none border-r-0">
          <h2 className="text-RedPrimary h2 ">{props.ProductPrice}</h2>
        </div>
        <button className="h-full text-White bg-RedPrimary flex-grow flex-1 flex justify-center items-center rounded-lg rounded-l-none border-2 border-RedPrimary border-l-0">
          <p className="outlinebody">ORDER</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
