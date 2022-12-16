import { client } from "../index"
import { Request, Response } from 'express';


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
        const newEmployee = { Employee_id: req.body.Employee_id, first_name: req.body.first_name, last_name: req.body.last_name, StartTime: req.body.StartTime, EndTime: req.body.EndTime, TypeofEmployee: req.body.TypeofEmployee, Supervise_ID: req.body.Supervise_ID, Branch_ID: req.body.Branch_ID, salary: req.body.salary };
        const Employee = await client.query(`update Employee set first_name='${newEmployee.first_name}', last_name = '${newEmployee.last_name}', StartTime = '${newEmployee.StartTime}',EndTime = '${newEmployee.EndTime}', TypeofEmployee = '${newEmployee.TypeofEmployee}', Supervise_ID = ${newEmployee.Supervise_ID}, Branch_ID = ${newEmployee.Branch_ID}, salary = ${newEmployee.salary} where employee_id = ${newEmployee.Employee_id}`);
        res.status(201);
    },
    deleteEmployee: async (req: Request, res: Response) => {
        const Employee = await client.query(`delete from Employee where Employee_id = ${req.params.id}`);
        res.status(201);
    },
    insertEmployee: async (req: Request, res: Response) => {
        try {
            const user = { email: req.body.email, password: req.body.password, first_name: req.body.first_name, last_name: req.body.last_name, StartTime: req.body.StartTime, EndTime: req.body.EndTime, TypeofEmployee: req.body.TypeofEmployee, Supervise_ID: req.body.Supervise_ID, Branch_ID: req.body.Branch_ID, salary: req.body.salary };
            await client.query(`
            insert into userx (email, password,Kind) values ('${user.email}', '${user.password}','e');`);
            await client.query(`
            insert into Employee (Employee_ID,first_name, last_name,TypeofEmployee,Supervise_ID,Branch_ID, StartTime,EndTime,salary) values ((select userx_id from userx as u where u.email = '${user.email}'),'${user.first_name}', '${user.last_name}', '${user.TypeofEmployee}', ${user.Supervise_ID}, ${user.Branch_ID}, '${user.StartTime}', '${user.EndTime}', ${user.salary});`);
            res.status(201).json({ message: "Inserterd successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }

    }

};





