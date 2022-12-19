import axios from "axios";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
const AdminController = () => {
  // const [funcActive, setFuncActive] = useState(false);
  // const [funcHasChose, setFuncHasChose] = useState(false);
  // const [func, setfunc] = useState("What do you want to do?");
  const initFuncOptions = ["Access Employees", "Access Menu"];
  const options = ["View", "Edit", "Delete", "Update"];

  const [initFunc, setInitFunc] = useState("");
  const [employeeFunc, setEmployeeFunc] = useState("");
  const [employees, setEmployees] = useState([]);
  const getEmployees = async () => {
    const response = await axios.get("http://localhost:3000/employee");
    const employees = await response.data;
    setEmployees(employees);
    console.log(employees);
  }

  const handleEmployeeFuncChange = async (func) => {
    switch (func) {
      case "View":
        getEmployees();
        break;
    }
    setEmployeeFunc(func);
  }



  const [menuFunc, setMenuFunc] = useState("");






  return (
    <>
      <h3 className="h3">What do you want to do</h3>

      <select
        onChange={(e) => { setInitFunc(e.target.value) }}
        defaultValue={"Select an option"}
        className="flex max-w-[350px] justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select">
        <option value="Select an option" disabled>Select an option</option>
        {initFuncOptions.map(func => <option key={func} value={func}>{func}</option>)}
      </select>




      {
        initFunc === "Access Employees" &&
        <>
          <select
            onChange={(e) => { handleEmployeeFuncChange(e.target.value) }}
            defaultValue={"Select an option"}
            className="flex justify-between max-w-[350px] items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select">
            <option value="Select an option" disabled>Select an option</option>
            {options.map(func => <option value={func}>{func}</option>)}
          </select>
          {
            employeeFunc === "View" && employees.length &&
            <div className="w-4/5 mt-4 border rounded-lg overflow-clip">
              <table className="w-full text-left">
                <thead className="border-b ">
                  <tr>
                    {Object.keys(employees[0]).map(key => <th className="px-4 py-2" key={key}>{key.toUpperCase()}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {employees.map(employee => <tr className="even:bg-[#1f2937] even:text-White odd:bg-[#374151] odd:text-White">{Object.values(employee).map(value => <td className="px-4 py-2">{value ?? "NONE"}</td>)}</tr>)}
                </tbody>
              </table>
            </div>

          }
        </>
      }
    </>
  );
};

export default AdminController;

/*
Object.values(employee).map(attr => <td key={attr}>{attr}</td>))
 <div
        className=""
        onClick={(e) => setFuncActive(!funcActive)}
      >
        <div className="flex items-center gap-4 w-full ">
          <MdManageAccounts fill="#333333" size={16} />
          <p className={`p ${!funcHasChose ? "text-Small" : "text-Body"}`}>
            {func}
          </p>
        </div>
        <BiChevronDown size={16} />
      </div>
      <ul
        className={`overflow-y-auto max-h-[120px] absolute w-full cursor-pointer z-50 transition-all ease-linear duration-1000 ${funcActive ? "block" : "hidden"
          }`}
        onMouseLeave={(e) => setFuncActive(false)}
      >
        {funcOptions.map((option) => (
          <li
            key={option}
            className="flex items-center gap-4 px-4 py-2 bg-White hover:bg-Small hover:text-White w-full fill-Body hover:fill-White text-Body z-50"
            onClick={(event) => handleClick(event, option)}
          >
            <div className="flex gap-4 items-center">
              <MdManageAccounts size={16} />
              {option}
            </div>
          </li>
        ))}
      </ul> */