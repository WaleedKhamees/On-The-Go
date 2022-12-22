import { useEffect, useState, useContext } from "react";
import { cartContext } from "../src/App";
import ProductCart from "./ProductCart";

function Cart_Page(props) {
  const { cart } = useContext(cartContext);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  useEffect(() => {
    let res = 0;
    // get discount; 
    for (let i in cart) {
      res += cart[i].qty * parseFloat(cart[i].item_price.slice(1));
    }
    setSubTotalPrice(res);
  }, [cart])

  return (
    <div className="flex flex-col justify-between h-full flex-grow py-4">
      <div className="flex flex-col px-4 gap-4">
        {cart && cart.map(item => <ProductCart item={item} Rating={5} />)}
      </div>
      <div className="flex py-8 px-16 justify-between items-center">
        <div className="flex gap-[182px] text-xs font-semibold">
          <div className="min-w-[300px] flex flex-col gap-2 text-[#989898]">
            <div className=" flex justify-between small">
              <p>Sub Total:</p>
              <p>{subTotalPrice} EGP</p>
            </div>
            <div className="flex justify-between small">
              <p>Discount: </p>
              <p>{0} EGP</p>
            </div>
            <div className="flex justify-between small">
              <p>Delivery Charge: </p>
              <p>{30} EGP</p>
            </div>
            <div className="flex justify-between small">
              <p>VAT 14%:</p>
              <p>{Math.round(subTotalPrice * 0.14)} EGP</p>
            </div>
          </div>
        </div>
        <div className="space-y-8 ">
          <div className="flex justify-between ">
            <h2 className="h2">Total:</h2>
            <h2 className="h2 text-RedPrimary">
              {subTotalPrice + Math.round(subTotalPrice * 0.14) + 30}{" "}
              EGP
            </h2>
          </div>
          <button className="rounded-lg pr-2 pl-2 bg-RedPrimary w-full h-[50px]">
            <p className="text-White text-center p-2 outlinebody">
              Processed to CheckOut
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart_Page;
