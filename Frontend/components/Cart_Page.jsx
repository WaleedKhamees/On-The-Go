import ProductInfo from "./ProductInfo";

function Cart_Page(props) {
  return (
    <>
      <div className="py-2.5 px-4 space-y-2">
        <ProductInfo
          Img={props.Img}
          Price={props.Price}
          Header={props.Header}
          Description={props.Description}
        />
      </div>
      <div className="flex py-8 px-16 justify-between">
        <div className="flex gap-[182px] text-xs font-semibold">
          <div className="flex-col space-y-2 text-[#989898]">
            <p>Sub Total:</p>
            <p>Discount: </p>
            <p>Delivery Charge: </p>
            <p>VAT 14%:</p>
          </div>
          <div className="flex-col space-y-2 text-[#C4141C]">
            <p>{props.Price} EGP</p>
            <p>{props.Discount} EGP</p>
            <p>{props.Delivery} EGP</p>
            <p>{props.Price * 0.14} EGP</p>
          </div>
        </div>
        <div className="space-y-8 ">
          <div className="flex gap-[122px] ">
            <h2 className="h2">Total:</h2>
            <h2 className="h2 text-[#C4141C]">
              {" "}
              {props.Price -
                props.Discount +
                props.Delivery +
                props.Price * 0.14}{" "}
              EGP
            </h2>
          </div>
          <button className="rounded-lg pr-2 pl-2 bg-RedPrimary w-full h-[50px]">
            <p className="text-White text-center p-2  ">
              Processed to CHeckOut
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart_Page;
