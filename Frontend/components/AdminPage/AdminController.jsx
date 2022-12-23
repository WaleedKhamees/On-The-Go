import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const initFuncOptions = ["Access Employees", "Access Menu"];

  const [initFunc, setInitFunc] = useState("");
  const selectInitFunc = async (func) => {
    switch (func) {
      case "Access Employees":
        getEmployees();
        break;
      case "Access Menu":
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
        onChange={(e) => { selectInitFunc(e.target.value) }}
        defaultValue={"Select an option"}
        className="flex max-w-[350px] justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select">
        <option value="Select an option" disabled>Select an option</option>
        {initFuncOptions.map(func => <option key={func} value={func}>{func}</option>)}
      </select>


      <div className={`${employees.length ? "" : "hidden"} py-2`}>
        {
          initFunc === "Access Employees" && employees.length &&
          <Table
            data={employees}
            itemEditable={EMPLOYEE_EDITABLE}
            apiUpdate="http://localhost:3000/employee/update"
            apiDelete="http://localhost:3000/employee/delete"
          />
        }

        {
          initFunc === "Access Menu" && items.length &&
          <Table
            data={items}
            itemEditable={ITEM_EDITABLE}
            apiUpdate="http://localhost:3000/item/update"
            apiDelete="http://localhost:3000/item/delete"
          />
        }
      </div>

      {
        initFunc === "Add Employee"
        &&
        <form className="z-50 absolute w-full bg-White flex flex-col items-center gap-4 -translate-y-32 py-16"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const employeeUser = {
              email: form.Email.value,
              password: form.Password.value
            }
            const employee =
            {
              first_name: form.FName.value,
              last_name: form.LName.value,
              typeofemployee: form.Typeofemployee.value,
              supervise_id: form.Supervisorid.value,
              branch_id: form.Branchid.value,
              starttime: form.Stime.value,
              endtime: form.Etime.value,
              salary: form.Salary.value,
            }
            console.log(employee, employeeUser);
          }}

        >
          <span class="material-symbols-outlined ml-auto mr-4 cursor-pointer"
            onClick={() => { setInitFunc("Access Employees") }}>
            close
          </span>
          <h1 className="h1">Add Employee</h1>
          <div className="flex gap-4">
            <input
              type="text"
              required
              id="FName"
              className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none "
              placeholder="First Name"
            ></input>
            <input
              type="text"
              required
              id="LName"
              className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
              placeholder="Last Name"
            ></input>
          </div>
          <input
            id="Email"
            required
            autoComplete="off"
            className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
            placeholder="Enter Employee's Email Address"
          ></input>
          <input
            type="password"
            required
            id="Password"
            className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
            placeholder="Enter Employee's Password"
          ></input>
          <input
            type="text"
            required
            id="branchid"
            className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
            placeholder="Enter Branch's ID"
          ></input>
          <input
            type="text"
            required
            id="Typeofemployee"
            className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
            placeholder="Enter your type of employee"
          ></input>
          <input
            type="text"
            id="Supervisorid"
            required
            className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
            placeholder="Enter Employee's supervisor Id (optional)"
          ></input>
          <input
            type="text"
            id="Salary"
            className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
            placeholder="Enter Employee's salary"
          ></input>
          <div className="flex gap-4">
            <input
              type="text"
              id="Stime"
              className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
              placeholder="Start Time"
            ></input>
            <input
              type="text"
              id="Etime"
              className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
              placeholder="End Time"
            ></input>
          </div>
          <input type="submit" value="Add Employee" className="cursor-pointer btn max-w-[350px]" />
        </form>
      }


      {initFunc === "Access Employees" && <button className="btn max-w-[350px]" onClick={() => { setInitFunc("Add Employee") }}>Add Employee</button>}
    </div >
  );
};

export default AdminController;