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
    },
    updateItem: async (req: Request, res: Response) => {
        const newItem = req.body;
        const item = await client.query(`update item set item_name='${newItem.item_name}', item_desc = '${newItem.item_desc}', item_price = ${newItem.item_price},img_url = '${newItem.img_url}', discount_id = '${newItem.discount_id}', category = '${newItem.category}' where item_id = ${newItem.item_id}`);
        res.status(201);
    },
    deleteItem: async (req: Request, res: Response) => {
        const item = await client.query(`delete from item where item_id = ${req.params.id}`);
        res.status(201);
    }

};
