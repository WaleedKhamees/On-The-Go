import ForproductHitsory from "./ForproductHistory";
import { useQuery } from "react-query";
const History = () => {
  const { isLoading, error, data } = useQuery("repoData", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return fetch(
      `http://localhost:3000/order/getAllOrderforCustomer/${user.email}`
    ).then((res) => res.json());
  });

  return (
    <div className="flex flex-col pl-8">
      <div>
        <div>Order: {data.Order_ID} </div>
        <div className="flex gap-2">
          <p className="p text-Small">Order date: </p>
          <p className=" text-Body"> {data.Order_Date} </p>
          <div className="bg-Small w-1 h-fill "></div>
          <p className="p text-Small"> Status: </p>
          <p className=" text-Body"> {data.Order_State} </p>
        </div>
        <div className="bg-Small h-1 w-fill mt-6 mr-8 "> </div>
      </div>

      <ForproductHitsory
        Img={data.Img_url}
        nameitem={data.Item_Name}
        descitem={data.Item_Desc}
        Price={data.Item_Price}
        Qty={data.Quantity}
      />

      <div className="flex py-8 px-16 justify-between">
        <div className="space-y-8 ">
          <div className="flex  ">
            <h2 className="h2 mr-8">Order Summary:</h2>
          </div>
        </div>

        <div className="flex gap-[182px] text-xs font-semibold">
          <div className="flex-col space-y-2 text-Small">
            <p className="p text-Body">Sub Total:</p>
            <p className="p text-Small">Discount: </p>
            <p className="p text-Small">Delivery Charge: </p>
            <p className="p text-Small">VAT 14%:</p>
            <p className="p text-Body">Total:</p>
          </div>

          <div className="flex-col space-y-2">
            <p className="p text-Body">{props.Price} EGP</p>
            <p className="p text-Small">{props.Price} EGP</p>
            <p className="p text-Small">15 EGP</p>
            <p className="p text-Small">{Math.floor(props.Price * 0.14)} EGP</p>
            <p className="p text-Body">
              {props.Price + 15 + Math.floor(props.Price * 0.14)} EGP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
