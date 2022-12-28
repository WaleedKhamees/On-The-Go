import HistoryProductCard from "./HistoryProductCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../../src/App";
import dayjs from "dayjs";
const History = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(userContext);
  console.log(user);
  const getOrders = async (e) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/order/getordersforcutomer/${user.email}`
      );
      setOrders(res.data.orders);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="flex flex-col w-full px-8 gap-8 ">
      {orders && orders.map(order => (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 py-2 justify-center">
            <h2 className="h2">Order: {order.order_id} </h2>
            <div className="flex gap-2 items-center">
              <p className="p text-Small">Order date: </p>
              <p className=" text-Body"> {dayjs(Number.parseInt(order.order_id)).format("YYYY/MM/DD")} </p>
              <div className="bg-Small w-1 h-fill "></div>
              <p className="p text-Small"> Status: </p>
              <p className={`${order.order_state === "pending" ?
                "text-RedPrimary" :
                order.order_state === "cooked" ?
                  "text-Yellow" :
                  order.order_state === "being_delivered" ?
                    "text-GreenPrimary" : "text-Body"}`}> {order.order_state} </p>
            </div>
            <div className="bg-Small h-1 w-full" />
          </div>
          <div className="flex flex-col gap-4">
            {order.items.map((item, i) => (
              <HistoryProductCard
                Img={item.img_url}
                nameitem={item.item_name}
                descitem={item.item_desc}
                Price={item.item_price}
                Qty={item.quantity}
              />
            ))}
            <div className="flex px-4 items-center justify-between">
              <h2 className="h2 mr-8">Order Summary:</h2>
              <div className="flex flex-col gap-2">
                <div className="flex items-center w-full justify-between gap-4">
                  <p className="p text-Body">Sub Total:</p>
                  <p className="small text-Body">
                    {order.items.reduce((acc, item) => acc + (item.item_price * item.quantity), 0)} EGP
                  </p>
                </div>
                <div className="flex items-center w-full justify-between gap-4">
                  <p className="small text-Small">Discount</p>
                  <p className="small text-Small">
                    {order.items.reduce((acc, item) => acc + (item.item_price * item.quantity * item.discount_percent), 0)} EGP
                  </p>
                </div>
                <div className="flex items-center w-full justify-between gap-4">
                  <p className="small text-Small">Delivery:</p>
                  <p className="small text-Small">
                    {30} EGP
                  </p>
                </div>
                <div className="flex items-center w-full justify-between gap-4">
                  <p className="small text-Small">Vat 14%:</p>
                  <p className="small text-Small">
                    {Math.round(order.items.reduce((acc, item) => acc + (item.item_price * item.quantity), 0) * 0.14)} EGP
                  </p>
                </div>
                <div className="flex items-center w-full justify-between gap-4">
                  <p className="p text-Body">Total:</p>
                  <p className="small text-Body">
                    {order.order_price} EGP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      ))}
    </div>
  );
};

export default History;
