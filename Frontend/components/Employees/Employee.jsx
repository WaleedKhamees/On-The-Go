import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
const Employee = () => {
  const [arr, setarr] = useState([]);

  const handleSubmit = async (e) => {
    try {
      const res = await axios.get(
        "http://localhost:3000/order/getAllPendingOrders"
      );
      setarr(res.data);
    } catch (err) {
      console.log(err);
      console.log("error yastaaaaa");
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <table className=" table-auto text-center h3  ">
      <thead className="border rounded border-spacing-3">
        <tr>
          <th>Order_ID</th>
          <th>Order_State</th>
          <th>Order_Price</th>
          <th>Order_Date</th>
          <th>assign</th>
        </tr>
      </thead>

      <tbody>
        {arr.map((key, i) => (
          <tr>
            <td>{key.order_id} </td>
            <td>{key.order_state} </td>
            <td> {key.order_price} </td>
            <td>{dayjs(key.order_date).format("YYYY-MM-DD")}</td>
            <td>
              <button className="btn  bg-RedPrimary">assign</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Employee;
