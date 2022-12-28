import { client } from "../index"
import { Request, Response } from 'express';


export const discountController = {
    getdiscounts: async (req: Request, res: Response) => {
        const discounts = await client.query(`select * from discount`);
        console.log(discounts.rows)
        res.status(200).json(discounts.rows);
    },
    getdiscount: async (req: Request, res: Response) => {
        const discount = await client.query(`select * from discount where discount_id = ${req.params.id}`);
        res.status(200).json(discount.rows);
    },
    updatediscount: async (req: Request, res: Response) => {
        const newdiscount = { discount_id: req.body.discount_id, start_date: req.body.start_date, end_date: req.body.end_date, discount_percent: req.body.discount_percent };
        try {
            const discount = await client.query(`update discount set start_date='${newdiscount.start_date}', end_date = '${newdiscount.end_date}', discount_percent = '${newdiscount.discount_percent}' where discount_id = ${newdiscount.discount_id}`);
            res.status(201).json({ message: "Updated successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    deletediscount: async (req: Request, res: Response) => {
        try {
            await client.query(`delete from discount where discount_id = ${req.params.id}`);
            res.status(201).json({ message: "Deleted successfully" });

        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    insertdiscount: async (req: Request, res: Response) => {
        try {
            const newdiscount = { start_date: req.body.start_date, end_date: req.body.end_date, discount_percent: req.body.discount_percent };
            await client.query(`
            insert into discount (start_date, end_date, discount_percent) values ('${newdiscount.start_date}', '${newdiscount.end_date}', ${newdiscount.discount_percent});`);
            res.status(201).json({ message: "Inserterd successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }

    }

};





