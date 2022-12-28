import ForproductHitsory from "./ForproductHistory";
import { useEffect, useState } from "react";
import axios from "axios";
const History = () => {
  const [arrorders, setarrorders] = useState([]);
  const [arritems, setarritems] = useState([]);

  const getorders = async (e) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/order/getordersforcutomer/${
          JSON.parse(localStorage.getItem("user")).email
        }`
      );
      setarrorders(res.data);
    } catch (err) {
      console.log(err);
      console.log("error yastaaaaa");
    }
  };

  const getItems = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/order/getitemsfororder/${id}`
      );

      setarritems(res.data);
    } catch (err) {
      console.log(err);
      console.log("error yastaaaaa");
    }
  };

  useEffect(() => {
    getorders();
  }, []);

  return (
    <>
      {arrorders.map((keyy) => {
        getItems(keyy.order_id);
        return (
          arritems && (
            <div className="flex flex-col pl-8 mt-4">
              <div>
                <div>Order: {keyy.order_id} </div>
                <div className="flex gap-2">
                  <p className="p text-Small">Order date: </p>
                  <p className=" text-Body"> {keyy.order_id} </p>
                  <div className="bg-Small w-1 h-fill "></div>
                  <p className="p text-Small"> Status: </p>
                  <p className=" text-Body"> {keyy.order_state} </p>
                </div>
                <div className="bg-Small h-1 w-fill mt-6 mr-8 "> </div>
              </div>

              {arritems.map((key, i) => (
                <ForproductHitsory
                  Img={key.img_url}
                  nameitem={key.item_name}
                  descitem={key.item_desc}
                  Price={key.item_price}
                  Qty={key.quantity}
                />
              ))}

              <div className="flex py-8 px-16 justify-between">
                <div className="space-y-8 ">
                  <div className="flex  ">
                    <h2 className="h2 mr-8">Order Summary:</h2>
                  </div>
                </div>

                <div className="flex gap-[182px] text-xs font-semibold">
                  <div className="flex-col space-y-2 text-Small">
                    <p className="p text-Body">Sub Total:</p>
                    {/* <p className="p text-Small">Discount: </p> */}
                    <p className="p text-Small">Delivery Charge: </p>
                    <p className="p text-Small">VAT 14%:</p>
                    <p className="p text-Body">Total:</p>
                  </div>

                  <div className="flex-col space-y-2">
                    <p className="p text-Body">{keyy.order_price} EGP</p>
                    {/* <p className="p text-Small">{keyy.order_price} EGP</p> */}
                    <p className="p text-Small">15 EGP</p>
                    <p className="p text-Small">
                      {Math.floor(keyy.order_price * 0.14)} EGP
                    </p>
                    <p className="p text-Body">
                      {keyy.order_price +
                        15 +
                        Math.floor(keyy.order_price * 0.14)}{" "}
                      EGP
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-Small h-1 w-fill mt-6 mr-8 "> </div>
            </div>
          )
        );
      })}
    </>
  );
};

export default History;
