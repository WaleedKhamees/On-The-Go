import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
const Employee = () => {
  const [arr, setarr] = useState([]);
  const [cookedOrders, setcookedOrders] = useState([]);
  const [type, settype] = useState("");
  const [BeingDeliveredOrders, setBeingDeliveredOrders] = useState([]);

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

  const GetCookedOrders = async (e) => {
    try {
      const res = await axios.get(
        "http://localhost:3000/order/getAllCookedOrders"
      );
      setcookedOrders(res.data);
    } catch (err) {
      console.log(err);
      console.log("error yastaaaaa");
    }
  };

  const BeingDeliveredOrdersfun = async (e) => {
    try {
      const res = await axios.get(
        " http://localhost:3000/order/getAllBeingDeliveredOrders"
      );
      setBeingDeliveredOrders(res.data);
    } catch (err) {
      console.log(err);
      console.log("error yastaaaaa");
    }
  };

  // router.get("/order/getAllCookedOrders", orderController.getAllCookedOrders);
  const gettype = async (e) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/employee/getTypeByEmail/${
          JSON.parse(localStorage.getItem("user")).email
        }`
      );

      settype(res.data);
    } catch (err) {
      console.log(err);
      console.log("error yastaaaaa");
    }
  };

  useEffect(() => {
    handleSubmit();
    gettype();
    GetCookedOrders();
    BeingDeliveredOrdersfun();
  }, []);

  return (
    <>
      {type == "chief" && (
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
            {arr.map((key1, i) => (
              <tr>
                <td>{key1.order_id} </td>
                <td>{key1.order_state} </td>
                <td> {key1.order_price} </td>
                <td>{dayjs(key1.order_date).format("YYYY-MM-DD")}</td>
                <td>
                  <button
                    onClick={async () => {
                      const id = await axios.get(
                        `http://localhost:3000/employee/getEmployeeByEmail/${
                          JSON.parse(localStorage.getItem("user")).email
                        }`
                      );

                      const obj2 = {
                        Employee_id: id.data,
                        Order_ID: key1.order_id,
                      };

                      const update = axios.patch(
                        "http://localhost:3000/order/updateidofcheif",
                        obj2
                      );

                      const obj = {
                        Order_State: "cooked",
                        Order_ID: key1.order_id,
                      };

                      const re = axios.patch(
                        "http://localhost:3000/order/updateorder",
                        obj
                      );

                      setarr(
                        arr.filter((item) => item.order_id !== key1.order_id)
                      );
                    }}
                    className="btn  bg-RedPrimary"
                  >
                    assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {type == "delivery" && (
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
            {BeingDeliveredOrders.map((key, i) => (
              <tr>
                <td>{key.order_id} </td>
                <td>{key.order_state} </td>
                <td> {key.order_price} </td>
                <td>{dayjs(key.order_date).format("YYYY-MM-DD")}</td>
                <td>
                  <button
                    onClick={async () => {
                      const id = await axios.get(
                        `http://localhost:3000/employee/getEmployeeByEmail/${
                          JSON.parse(localStorage.getItem("user")).email
                        }`
                      );

                      const obj2 = {
                        Employee_id: id.data,
                        Order_ID: key.order_id,
                      };

                      const update = axios.patch(
                        "http://localhost:3000/order/updateidofwaiter",
                        obj2
                      );

                      const obj = {
                        Order_State: "delivered",
                        Order_ID: key.order_id,
                      };

                      const re = axios.patch(
                        "http://localhost:3000/order/updateorder",
                        obj
                      );

                      setBeingDeliveredOrders(
                        BeingDeliveredOrders.filter(
                          (item) => item.order_id !== key.order_id
                        )
                      );
                    }}
                    className="btn  bg-RedPrimary"
                  >
                    assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {type == "waiter" && (
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
            {cookedOrders.map((key3, i) => (
              <tr>
                <td>{key3.order_id} </td>
                <td>{key3.order_state} </td>
                <td> {key3.order_price} </td>
                <td>{dayjs(key3.order_date).format("YYYY-MM-DD")}</td>
                <td>
                  <button
                    onClick={async () => {
                      const id = await axios.get(
                        `http://localhost:3000/employee/getEmployeeByEmail/${
                          JSON.parse(localStorage.getItem("user")).email
                        }`
                      );

                      const obj2 = {
                        Employee_id: id.data,
                        Order_ID: key3.order_id,
                      };

                      const update = axios.patch(
                        "http://localhost:3000/order/updateidofdeliveryman",
                        obj2
                      );

                      const obj = {
                        Order_State: "being_delivered",
                        Order_ID: key3.order_id,
                      };

                      const re = axios.patch(
                        "http://localhost:3000/order/updateorder",
                        obj
                      );

                      setcookedOrders(
                        cookedOrders.filter(
                          (item) => item.order_id !== key3.order_id
                        )
                      );
                    }}
                    className="btn  bg-RedPrimary"
                  >
                    assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Employee;
