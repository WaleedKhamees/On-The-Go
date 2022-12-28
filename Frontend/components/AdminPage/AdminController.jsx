import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm"
import AddProductForm from "./AddProductForm";
import Table from "./Table";

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

const AdminController = () => {
  // const [funcActive, setFuncActive] = useState(false);
  // const [funcHasChose, setFuncHasChose] = useState(false);
  // const [func, setfunc] = useState("What do you want to do?");
  const initFuncOptions = ["Access Employees", "Access Products"];

  const [initFunc, setInitFunc] = useState("");
  const selectInitFunc = async (func) => {
    switch (func) {
      case "Access Employees":
        getEmployees();
        break;
      case "Access Products":
        getItem();
        break;
    }
    setInitFunc(func);
  };


  const [employees, setEmployees] = useState([]);
  const [items, setItems] = useState([]);



  const getEmployees = async () => {
    const response = await axios.get("http://localhost:3000/employee");
    const employees = await response.data;
    setEmployees(employees);
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    console.log(items, employees);
  }, [items, employees])
  const getItem = async () => {
    const response = await axios.get("http://localhost:3000/item");
    const items = await response.data;
    setItems(items);
  };




  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h3 className="h3">What do you want to do</h3>

      <select
        className="flex max-w-[350px] justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select"
        onChange={(e) => { selectInitFunc(e.target.value) }}
        defaultValue={"Select an option"}>
        <option value="Select an option" disabled>Select an option</option>
        {initFuncOptions.map(func => <option key={func} value={func}>{func}</option>)}
      </select>


      <div className={`${employees.length ? "" : "hidden"} px-8`}>
        {
          employees && initFunc === "Access Employees" && employees.length &&
          <Table
            data={employees}
            itemEditable={EMPLOYEE_EDITABLE}
            apiUpdate="http://localhost:3000/employee/update"
            apiDelete="http://localhost:3000/employee/delete"
            tableID="employee_id"
          />
        }

        {
          items && initFunc === "Access Products" && items.length &&
          <Table
            data={items}
            itemEditable={ITEM_EDITABLE}
            apiUpdate="http://localhost:3000/item/update"
            apiDelete="http://localhost:3000/item/delete"
            tableID="item_id"
          />
        }
      </div>

      {
        initFunc === "Add Employee"
        &&
        <AddEmployeeForm setInitFunc={setInitFunc} />
      }
      {
        initFunc === "Add Product"
        &&
        <AddProductForm setInitFunc={setInitFunc} />
      }
      {
        initFunc === "Access Employees"
        &&
        <button hidden={initFunc !== "Access Employees"} className="btn max-w-[350px]" onClick={() => { setInitFunc("Add Employee") }}>
          Add Employee
        </button>
      }
      {
        initFunc === "Access Products" &&
        <button className="btn max-w-[350px]" hidden={initFunc !== "Access Products"} onClick={() => { setInitFunc("Add Product") }}>
          Add Product
        </button>
      }
    </div >
  );
};

export default AdminController;