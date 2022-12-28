import { client } from "../index";
import { Request, Response } from "express";
export const tableController = {

    getTables: async (req: Request, res: Response) => {
        const Employees = await client.query(`select * from tablex`);
        res.status(200).json(Employees.rows);
    },
    getTableforbranch: async (req: Request, res: Response) => {
        const Employee = await client.query(`select table_num ,cardinality from tablex where branch_id = ${req.params.branch_id}`);
        res.status(200).json(Employee.rows);
    },
    updatetable: async (req: Request, res: Response) => {
        const table = { table_num:req.body.table_num, branch_id: req.body.branch_id, cardinality:req.body.cardinality };
        try {
         
           

            const tablee = await client.query(`update tablex set cardinality=${table.cardinality} where  branch_id=${table.branch_id} and table_num=${table.table_num} `);
            res.status(201).json({ message: "Updated successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },

    inserttable: async (req: Request, res: Response) => {
        try {
            const newtable = {table_num: req.body.table_num, branch_id: req.body.branch_id, cardinality:req.body.cardinality};
            await client.query(
            `insert into tablex values (${newtable.table_num},${newtable.branch_id}, ${newtable.cardinality});`);
            res.status(201).json({ message: "Inserterd successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ message: "error" });
        }
    },
    deletetable: async (req: Request, res: Response) => {
       
        const table = {table_num: req.body.table_num, branch_id: req.body.branch_id};
        try {
            const tablex = await client.query(`delete from tablex where table_num = ${table.table_num} and branch_id=${table.branch_id} `);
            res.status(201).json({ message: "Deleted successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    }

};


