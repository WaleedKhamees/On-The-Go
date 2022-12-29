import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { cartContext, userContext } from "../../src/App";
import ProductCart from "../atoms/ProductCart";

function Cart_Page(props) {
  const { cart, clearCart } = useContext(cartContext);
  const { user, logUser } = useContext(userContext);
  const [message, setMessage] = useState("");
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  useEffect(() => {
    let res = 0;
    for (let i in cart) {
      res += cart[i].qty * parseFloat(cart[i].item_price) - cart[i].qty * parseFloat(cart[i].item_price) * (cart[i].discount_percent / 100 ?? 0);
      /* parseFloat(item.item_price) * item.qty - (parseFloat(item.item_price) * item.qty * (item.discount_percent / 100 ?? 0)) */
    }
    setSubTotalPrice(Math.floor(res));
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
              <p>{Math.floor(subTotalPrice * 0.14)} EGP</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-fit">
          <div className="flex justify-between ">
            <h2 className="h2">Total:</h2>
            <h2 className="h2 text-RedPrimary" id="total">
              {cart.length ? (subTotalPrice + Math.floor(subTotalPrice * 0.14) + 30) : 0}{" "}
              EGP
            </h2>
          </div>
          <label htmlFor="total" className="small text-RedPrimary m-0">{message}</label>
          <button className="rounded-lg px-4 bg-RedPrimary w-full h-[50px]">
            <p
              onClick={async () => {
                if (cart.length) {
                  const order = {
                    order_id: JSON.stringify((new Date()).getTime()),
                    order_state: "pending",
                    order_price: (subTotalPrice + Math.floor(subTotalPrice * 0.14) + 30),
                    items: cart,
                    email: user.email
                  }
                  if (user.wallet >= order.order_price) {
                    try {
                      logUser({ ...user, wallet: user.wallet - order.order_price });
                      clearCart();
                      const res = (await axios.post("http://localhost:3000/order/insert", order)).data;
                      setMessage(res.message);
                    }
                    catch {
                      console.log("an error occurred");
                    }
                  }
                  else {
                    setMessage("You lack the balance to make this purchase");
                  }
                }
                else {
                  setMessage("Please Order some Items from Menu")
                }
              }}
              className="text-White text-center p-2 outlinebody">
              Processed to CheckOut
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart_Page;
