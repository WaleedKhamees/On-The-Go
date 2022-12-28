import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import AddProductForm from "./AddProductForm";
import AddDiscountForm from "./AddDiscountForm";
import AddTableForm from "./AddTableForm";
import Table from "../atoms/Table";

const EMPLOYEE_EDITABLE = {
  employee_id: false,
  first_name: true,
  last_name: true,
  typeofemployee: true,
  supervise_id: true,
  branch_id: true,
  starttime: true,
  endtime: true,
  salary: true,
};
const ITEM_EDITABLE = {
  item_id: false,
  item_name: true,
  item_desc: true,
  item_price: true,
  img_url: true,
  discount_id: true,
  category: true,
}
const DISCOUNT_EDITABLE = {
  discount_id: false,
  start_date: true,
  end_date: true,
  discount_percent: true,
}

const TABLE_EDITABLE = {
  table_num: false,
  branch_id: false,
  cardinality: true,
};

const AdminController = () => {
  // const [funcActive, setFuncActive] = useState(false);
  // const [funcHasChose, setFuncHasChose] = useState(false);
  // const [func, setfunc] = useState("What do you want to do?");
  const initFuncOptions = ["Access Employees", "Access Items", "Access Discounts", "Access Tables"];

  const [initFunc, setInitFunc] = useState("");
  const selectInitFunc = async (func) => {
    switch (func) {
      case "Access Employees":
        getEmployees();
        break;
      case "Access Items":
        getItem();
        break;
      case "Access Discounts":
        getDiscounts();
        break;
      case "Access Tables":
        getTables();
        break;
    }
    setInitFunc(func);
  };

  const [employees, setEmployees] = useState([]);
  const [items, setItems] = useState([]);
  const [discounts, setDiscounts] = useState([]);


  const [Tables, setTables] = useState([]);

  const getEmployees = async () => {
    const response = await axios.get("http://localhost:3000/employee");
    const employees = await response.data;
    setEmployees(employees);
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  const getItem = async () => {
    const response = await axios.get("http://localhost:3000/item");
    const items = await response.data;
    setItems(items);
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  const getDiscounts = async () => {
    const response = await axios.get("http://localhost:3000/discount");
    const discounts = await response.data;
    setDiscounts(discounts);
  };

  //////////////////////////////////getTabeles/////////////////////////////////////////////

  const getTables = async () => {
    const response = await axios.get(" http://localhost:3000/table/getTables");
    const Tables = await response.data;
    setTables(Tables);
  };

  //////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h3 className="h3">What do you want to do</h3>

      <select
        className="flex max-w-[350px] justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select"
        onChange={(e) => {
          selectInitFunc(e.target.value);
        }}>
        {initFuncOptions.map((func) => (
          <option key={func} value={func}>
            {func}
          </option>
        ))}
      </select>

      <div className="px-8" hidden={initFunc !== "Access Employees"}>
        {employees && initFunc === "Access Employees" && employees.length && (
          <Table
            data={employees}
            itemEditable={EMPLOYEE_EDITABLE}
            apiUpdate="http://localhost:3000/employee/update"
            apiDelete="http://localhost:3000/employee/delete"
            tableID="employee_id"
          />
        )}
      </div>
      {initFunc === "Access Employees" && (
        <button
          hidden={initFunc !== "Access Employees"}
          className="btn max-w-[350px]"
          onClick={() => {
            setInitFunc("Add Employee");
          }}
        >
          Add Employee
        </button>
      )}
      {initFunc === "Add Employee" && (
        <AddEmployeeForm setInitFunc={setInitFunc} />
      )}

      <div className="px-8" hidden={initFunc !== "Access Items"}>
        {items && initFunc === "Access Items" && items.length && (
          <Table
            data={items}
            itemEditable={ITEM_EDITABLE}
            apiUpdate="http://localhost:3000/item/update"
            apiDelete="http://localhost:3000/item/delete"
            tableID="item_id"
          />)
        }
      </div>
      {initFunc === "Access Items" && (
        <button
          className="btn max-w-[350px]"
          hidden={initFunc !== "Access Items"}
          onClick={() => {
            setInitFunc("Add Item");
          }}
        >
          Add Item
        </button>
      )}
      {initFunc === "Add Item" && (
        <AddProductForm setInitFunc={setInitFunc} />
      )}


      <div hidden={initFunc !== "Access Discounts"} className="px-8">
        {
          discounts && initFunc === "Access Discounts" && discounts.length &&
          <Table
            data={discounts}
            itemEditable={DISCOUNT_EDITABLE}
            apiUpdate="http://localhost:3000/discount/update"
            apiDelete="http://localhost:3000/discount/delete"
            tableID="discount_id"
          />
        }
      </div>
      {initFunc === "Access Discounts" && (

        <button className="btn max-w-[350px]" hidden={initFunc !== "Access Discounts"} onClick={() => { setInitFunc("Add Discount") }}>
          Add Discount
        </button>
      )}
      {initFunc === "Add Discount" && (
        <AddDiscountForm setInitFunc={setInitFunc} />
      )}

      <div hidden={initFunc !== "Access Tables"} className="px-8">
        {
          Tables && initFunc === "Access Tables" && Tables.length && (
            <Table
              data={Tables}
              itemEditable={TABLE_EDITABLE}
              apiUpdate="http://localhost:3000/table/updatetable"
              apiDelete="http://localhost:3000/table/deletetable"
              tableID="branch_id"
            />
          )
        }
      </div>
      {initFunc === "Access Tables" && (
        <button
          className="btn max-w-[350px]"
          hidden={initFunc !== "Access Tables"}
          onClick={() => {
            setInitFunc("Add Table");
          }}
        >
          Add Table
        </button>
      )}
      {initFunc === "Add Table" && <AddTableForm setInitFunc={setInitFunc} />}


    </div>
  );
};

export default AdminController;
