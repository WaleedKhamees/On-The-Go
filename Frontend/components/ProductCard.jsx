import React from "react";

function ProductCard(props) {
  return (
    <div className="max-w-[312.5px] px-8 py-4 bg-White flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
        <h2 className="h2 text-Headings">{props.ProductName}</h2>
        <img src={props.ProductImage} alt="" className="w-[250px] h-fit" />
        <p className="p text-Body text-center">{props.ProductDescription}</p>
      </div>
      <div className="flex items-center outline outline-2 outline-RedPrimary rounded-lg w-full overflow-clip ">
        <h2 className="text-RedPrimary h2 flex-grow text-center">
          {props.ProductPrice}
        </h2>
        <button className="p-4 text-White bg-RedPrimary flex-grow flex justify-center  ">
          <p className="outlinebody ">ORDER</p>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
