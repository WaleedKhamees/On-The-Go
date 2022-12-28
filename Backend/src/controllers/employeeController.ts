import { client } from "../index"
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';


export const employeeController = {
    getEmployees: async (req: Request, res: Response) => {
        const Employees = await client.query(`select * from Employee`);
        res.status(200).json(Employees.rows);
    },
    getEmployee: async (req: Request, res: Response) => {
        const Employee = await client.query(`select * from Employee where Employee_id = ${req.params.id}`);
        res.status(200).json(Employee.rows);
    },
    updateEmployee: async (req: Request, res: Response) => {
        const newEmployee = { Employee_id: req.body.employee_id, first_name: req.body.first_name, last_name: req.body.last_name, StartTime: req.body.starttime, EndTime: req.body.endtime, TypeofEmployee: req.body.typeofemployee, Supervise_ID: req.body.supervise_id, Branch_ID: req.body.branch_id, salary: req.body.salary };
        try {
            const Employee = await client.query(`update Employee set first_name='${newEmployee.first_name}', last_name = '${newEmployee.last_name}', StartTime = '${newEmployee.StartTime}',EndTime = '${newEmployee.EndTime}', TypeofEmployee = '${newEmployee.TypeofEmployee}', Supervise_ID = ${newEmployee.Supervise_ID}, Branch_ID = ${newEmployee.Branch_ID}, salary = ${newEmployee.salary} where employee_id = ${newEmployee.Employee_id}`);
            res.status(201).json({ message: "Updated successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    deleteEmployee: async (req: Request, res: Response) => {
        try {
            await client.query(`delete from Employee where Employee_id = ${req.params.id}`);
            await client.query(`delete from userx where userx_id = ${req.params.id}`);
            res.status(201).json({ message: "Deleted successfully" });

        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    insertEmployee: async (req: Request, res: Response) => {
        try {
            const hasedPassword = await bcrypt.hash(req.body.password, 10);
            const user = { email: req.body.email, password: hasedPassword, first_name: req.body.first_name, last_name: req.body.last_name, StartTime: req.body.StartTime, EndTime: req.body.EndTime, TypeofEmployee: req.body.TypeofEmployee, Supervise_ID: req.body.Supervise_ID, Branch_ID: req.body.Branch_ID, salary: req.body.salary };
            await client.query(`
            insert into userx (email,password,Kind) values ('${user.email}', '${user.password}','${user.TypeofEmployee === "admin" ? "a" : "e"}');`);
            await client.query(user.Supervise_ID ?
                `insert into Employee (Employee_ID,first_name,last_name,TypeofEmployee,Supervise_ID,Branch_ID, StartTime,EndTime,salary)
                values ((select userx_id from userx as u where u.email = '${user.email}'),'${user.first_name}', '${user.last_name}', '${user.TypeofEmployee}', ${user.Supervise_ID}, ${user.Branch_ID}, '${user.StartTime}', '${user.EndTime}', ${user.salary});`
                :
                `insert into Employee (Employee_ID,first_name,last_name,TypeofEmployee,Branch_ID, StartTime,EndTime,salary) values ((select userx_id from userx as u where u.email = '${user.email}'),'${user.first_name}', '${user.last_name}', '${user.TypeofEmployee}', ${user.Branch_ID}, '${user.StartTime}', '${user.EndTime}', ${user.salary});`);
            res.status(201).json({ message: "Inserterd successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }

    },

    getTypeByEmail: async (req: Request, res: Response) => {

        try {



            const employee_id = await (await client.query(`select Userx_ID from Userx where email='${req.params.email}'`)).rows;
            const type = await (await client.query(`select TypeofEmployee from Employee where Employee_ID =${employee_id[0].userx_id}`)).rows;

            res.status(200).json(type[0].typeofemployee);


        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    getEmployeeByEmail: async (req: Request, res: Response) => {

        try {

            const employee_id = await (await client.query(`select Userx_ID from Userx where email='${req.params.email}'`)).rows;

            res.status(200).json(employee_id[0].userx_id);

        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    }





};





