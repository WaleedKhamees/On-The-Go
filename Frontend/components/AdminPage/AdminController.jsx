import axios from "axios";
import React, { useEffect, useState } from "react";

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
        break;
    }
    setInitFunc(func);
  };


  const [employees, setEmployees] = useState([]);
  const [employeeBeingEdited, setEmployeeBeingEdited] = useState({
    employee_id: "",
    first_name: "",
    last_name: "",
    typeofemployee: "",
    supervise_id: "",
    branch_id: "",
    starttime: "",
    endtime: "",
    salary: "",
  });
  const [employeeInEditMode, setEmployeeInEditMode] = useState({
    status: false,
    rowKey: -1
  });

  useEffect(() => {
    console.log(employeeBeingEdited)
  }, [employeeBeingEdited])

  const getEmployees = async () => {
    const response = await axios.get("http://localhost:3000/employee");
    const employees = await response.data;
    setEmployees(employees);
  };
  const handleEmployeeEdit = (employeeIndex, employee) => {
    setEmployeeInEditMode({ rowKey: employeeIndex, status: true });
    setEmployeeBeingEdited(employee);
  }
  const updateEmployee = async () => {
    await axios.patch("http://localhost:3000/employee/update", employeeBeingEdited);
    setEmployeeBeingEdited({});
    setEmployeeInEditMode({ rowKey: -1, status: false });
  }
  const deleteEmployee = async (employee_id, employeeIndex) => {
    await axios.delete(`http://localhost:3000/employee/delete/${employee_id}`);
    setEmployees(employees.filter((employee, i) => i !== employeeIndex));
  }



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



      <div className={`${employees.length ? "" : "hidden"}`}>
        {
          initFunc === "Access Employees" && employees.length &&
          <div className={` border rounded-lg overflow-clip`}>
            <table className="w-full text-left">
              <thead className="border-b ">
                <tr>
                  {Object.keys(employees[0]).map(key =>
                    <th className="px-4 py-2" key={key}>{key.toUpperCase()}</th>
                  )}
                  <th className="px-4 py-2">Modify</th>
                </tr>
              </thead>
              <tbody>

                {employees.map((employee, employeeIndex) =>
                  <tr
                    key={employeeIndex}
                    className={`${employeeIndex !== employeeInEditMode.rowKey ? "even:bg-[#4b4b4b] even:text-White odd:bg-[#d9d9d9] odd:text-body" : ""}`}>
                    <>
                      {/* Data  */}
                      {
                        Object.values(employee).map((value, i) =>
                          <td
                            key={`${value}-${i}`}
                            className="px-4 py-2 focus:outline-none text-center"
                            onInput={(e) => {
                              const tempEmployee = employeeBeingEdited;
                              tempEmployee[Object.keys(tempEmployee)[i]] = e.target.textContent;
                              setEmployeeBeingEdited({ ...tempEmployee });
                            }}
                            suppressContentEditableWarning
                            contentEditable={employeeInEditMode.rowKey === employeeIndex && EMPLOYEE_EDITABLE[Object.keys(employee)[i]]}>
                            {value ?? "-"}
                          </td>
                        )}
                      {/* edit delete  */}
                      {
                        employeeInEditMode.rowKey !== employeeIndex
                        &&
                        <td className="px-4 py-2 cursor-pointer flex gap-1 justify-center">
                          <span className="material-symbols-outlined" onClick={() => {
                            handleEmployeeEdit(employeeIndex, employee);
                          }}>
                            edit
                          </span>
                          <span className="material-symbols-outlined" onClick={() => deleteEmployee(employee.employee_id, employeeIndex)}>
                            delete
                          </span>
                        </td>
                      }
                      {/* done */}
                      {
                        employeeInEditMode.rowKey === employeeIndex
                        &&
                        <td className="px-4 py-2 cursor-pointer flex gap-1 justify-center" onClick={() => updateEmployee()}>
                          <span className="material-symbols-outlined">
                            done
                          </span>
                        </td>
                      }
                    </>

                  </tr>)}
              </tbody>
            </table>
          </div>
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

/*
Object.values(employee).map(attr => <td key={attr}>{attr}</td>))
 <div
        className=""
        onClick={(e) => setFuncActive(!funcActive)}
      >
        <div className="flex items-center gap-4 w-full ">
          <MdManageAccounts fill="#333333" size={16} />
          <p className={p ${!funcHasChose ? "text-Small" : "text-Body"}`}>
            {func}
          </p>
        </div>
        <BiChevronDown size={16} />
      </div>
      <ul
        className={`overflow-y-auto max-h-[120px] absolute w - full cursor - pointer z - 50 transition - all ease - linear duration - 1000 ${
                    funcActive? "block": "hidden"
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