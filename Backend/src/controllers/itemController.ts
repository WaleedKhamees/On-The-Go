import { client } from "../index"
import { Request, Response } from 'express';
export const itemController = {

    getItems: async (req: Request, res: Response) => {
        const items = await client.query(`select item_id ,item_name, item_desc,item_price, img_url,category,discount_percent 
         from item,discount
         where item.discount_id = discount.discount_id
         `);
        res.status(200).json(items.rows);
    },
    getItem: async (req: Request, res: Response) => {
        const item = await client.query(
            `select item_id ,item_name, item_desc,item_price, img_url,category,discount_percent from item,discount
        where item.discount_id = discount.discount_id and item_id = ${req.params.id}`);
        res.status(200).json(item.rows);
    },
    updateItem: async (req: Request, res: Response) => {
        try {
            const newItem = req.body;
            const item = await client.query(`update item set item_name='${newItem.item_name}', item_desc = '${newItem.item_desc}', item_price = ${newItem.item_price},img_url = '${newItem.img_url}', discount_id = '${newItem.discount_id}', category = '${newItem.category}' where item_id = ${newItem.item_id}`);
            res.status(201).json({ message: "Updated successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    deleteItem: async (req: Request, res: Response) => {
        try {
            const item = await client.query(`delete from item where item_id = ${req.params.id}`);
            res.status(201).json({ message: "Deleted successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    insertItem: async (req: Request, res: Response) => {
        try {
            const newitem = { item_name: req.body.item_name, item_desc: req.body.item_desc, item_price: req.body.item_price, img_url: req.body.img_url, discount_id: req.body.discount_id, category: req.body.category };
            await client.query(
                `insert into item (item_name,item_desc,item_price,img_url,discount_id,category) values ('${newitem.item_name}','${newitem.item_desc}', ${newitem.item_price}, '${newitem.img_url}', ${newitem.discount_id}, '${newitem.category}');`);
            res.status(201).json({ message: "Inserterd successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }

    }

};





