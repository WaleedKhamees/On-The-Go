import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { validateEmployeeForm } from "../../util/validations";

const AddEmployeeForm = ({ setInitFunc }) => {
    const typeOfEmployeeRef = useRef();
    const branchRef = useRef();
    const [branches, setBranches] = useState([]);
    const [error, setError] = useState({
        name: "",
        times: "",
        salary: "",
        email: "",
        password: ""
    });
    const getBranches = async () => {
        const branches = await axios.get("https://dbproject-zbiu.onrender.com/branch");
        console.log(branches.data);
        setBranches(branches.data);
    }
    useEffect(() => {
        getBranches();
    }, [])
    return (
        <form className="w-full bg-White flex flex-col items-center gap-4"
            onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const employee =
                {
                    email: form.Email.value,
                    password: form.Password.value,
                    first_name: form.FName.value,
                    last_name: form.LName.value,
                    StartTime: form.Stime.value,
                    EndTime: form.Etime.value,
                    TypeofEmployee: typeOfEmployeeRef.current.value,
                    Supervise_ID: Number.isNaN(Number.parseInt(form.SupervisorID.value)) ? null : Number.parseInt(form.SupervisorID.value),
                    Branch_ID: Number.parseInt(branchRef.current.value),
                    salary: Number.parseInt(form.Salary.value),
                }
                const validate = validateEmployeeForm(employee);
                console.log(validate.res);
                if (validate.error)
                    setError(validate.res);
                else {
                    setError({
                        name: "",
                        times: "",
                        salary: "",
                        email: "",
                        password: ""
                    })
                    await axios.post("https://dbproject-zbiu.onrender.com/employee/insert", employee);
                    setInitFunc("Access Employees");
                    location.reload();
                }
            }}

        >
            <span className="material-symbols-outlined ml-auto mr-4 cursor-pointer"
                onClick={() => { setInitFunc("Access Employees") }}>
                close
            </span>
            <h1 className="h1">Add Employee</h1>
            <div id="EmployeeName" className="flex flex-col gap-1">
                <div className="flex gap-4">
                    <input
                        type="text"
                        id="FName"
                        className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none "
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        id="LName"
                        className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
                        placeholder="Last Name"
                    />
                </div>
                <label
                    className={`${error.name ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="EmployeeName">
                    {error.name}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    id="Email"
                    autoComplete="off"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Employee's Email Address"
                />
                <label
                    className={`${error.email ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="Email">
                    {error.email}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="password"
                    id="Password"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Employee's Password"
                />
                <label
                    className={`${error.password ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="Password">
                    {error.password}
                </label>
            </div>
            <select
                ref={branchRef}
                className="flex max-w-[350px] justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select"
                defaultChecked="Select Branch">
                <option value="Select Branch" disabled>Select Branch</option>
                {branches &&
                    branches.map(branch => <option key={branch.loaction} value={branch.branch_id}>{branch.loaction}</option>)}
            </select >
            <select
                className="flex max-w-[350px] justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select"
                ref={typeOfEmployeeRef}>
                <option value="admin">admin</option>
                <option value="chef">chef</option>
                <option value="delivery">delivery</option>
                <option value="waiter">waiter</option>
            </select>
            <div className="flex flex-col gap-1">
                <input
                    type="text"
                    id="SupervisorID"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Employee's supervisor Id (optional)"
                />
                <label
                    className={`${error.supervise_ID ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="SupervisorID">
                    {error.supervise_ID}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="text"
                    id="Salary"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Employee's salary"
                />
                <label
                    className={`${error.salary ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="Salary">
                    {error.salary}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <div id="Times" className="flex gap-4">
                    <input
                        type="text"
                        id="Stime"
                        className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
                        placeholder="Start Time"
                    />
                    <input
                        type="text"
                        id="Etime"
                        className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
                        placeholder="End Time"
                    />
                </div>
                <label
                    className={`${error.times ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="Times">
                    {error.times}
                </label>
            </div>
            <input type="submit" value="Add Employee" className="cursor-pointer btn max-w-[350px]" />
        </form >
    )
}
export default AddEmployeeForm;