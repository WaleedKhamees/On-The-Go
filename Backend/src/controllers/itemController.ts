import { client } from "../index"
import { Request, Response } from 'express';
export const itemController = {
    getItems: async (req: Request, res: Response) => {
        const items = await client.query(`select * from item`);
        res.status(200).json(items.rows);
    },
    getItem: async (req: Request, res: Response) => {
        const item = await client.query(`select * from item where item_id = ${req.params.id}`);
        res.status(200).json(item.rows);
    }
};
