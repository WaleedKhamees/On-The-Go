import axios from "axios";

const AddEmployeeForm = ({ setInitFunc }) => {
    return (
        <form className="z-50 absolute w-full bg-White flex flex-col items-center gap-4 -translate-y-32 py-16"
            onSubmit={async (e) => {
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
                    StartTime: form.Stime.value,
                    EndTime: form.Etime.value,
                    TypeofEmployee: form.Typeofemployee.value,
                    Supervise_ID: form.SupervisorID.value,
                    Branch_ID: form.BranchID.value,
                    salary: form.Salary.value,
                }
                const res = await axios.post("http://localhost:3000/employee/insert", { ...employee, ...employeeUser });
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
                id="BranchID"
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
                id="SupervisorID"
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
    )
}
export default AddEmployeeForm;