import { client } from "../index"
import { Request, Response } from 'express';


export const statsController = {
    getEasternStats: async (req: Request, res: Response) => {
        try {
            const thisMonth = (await client.query(`
            select sum(i.item_price*c.quantity)
            from contains as c,item as i,orderx as o
            where i.category = 'Eastern' and c.item_id = i.item_id and o.order_id = c.order_id and
            o.order_date > now() - interval '30 days';`)).rows[0].sum;
            const lastMonth = (await client.query(`
            select sum(i.item_price*c.quantity) 
            from contains as c,item as i,orderx as o
            where i.category = 'Eastern' and c.item_id = i.item_id and o.order_id = c.order_id and
            o.order_date < now() - interval '30 days' and o.order_date > now() - interval '60 days';
            `)).rows[0].sum;
            res.status(200).json({ thisMonth, lastMonth });
        } catch (error) {
            res.status(400).json({ message: "error" });
            console.log(error);
        }
    },
    getWesternStats: async (req: Request, res: Response) => {
        try {
            const thisMonth = (await client.query(`
            select sum(i.item_price*c.quantity)
            from contains as c,item as i,orderx as o
            where i.category = 'Western' and c.item_id = i.item_id and o.order_id = c.order_id and
            o.order_date > now() - interval '30 days';`)).rows[0].sum;
            const lastMonth = (await client.query(`
            select sum(i.item_price*c.quantity) 
            from contains as c,item as i,orderx as o
            where i.category = 'Western' and c.item_id = i.item_id and o.order_id = c.order_id and
            o.order_date < now() - interval '30 days' and o.order_date > now() - interval '60 days';
            `)).rows[0].sum;
            res.status(200).json({ thisMonth, lastMonth });
        } catch (error) {
            res.status(400).json({ message: "error" });
            console.log(error);
        }
    },
    getDrinksStats: async (req: Request, res: Response) => {
        try {
            const thisMonth = (await client.query(`
            select sum(i.item_price*c.quantity)
            from contains as c,item as i,orderx as o
            where i.category = 'Drinks' and c.item_id = i.item_id and o.order_id = c.order_id and
            o.order_date > now() - interval '30 days';`)).rows[0].sum;
            const lastMonth = (await client.query(`
            select sum(i.item_price*c.quantity) 
            from contains as c,item as i,orderx as o
            where i.category = 'Drinks' and c.item_id = i.item_id and o.order_id = c.order_id and
            o.order_date < now() - interval '30 days' and o.order_date > now() - interval '60 days';
            `)).rows[0].sum;
            res.status(200).json({ thisMonth, lastMonth });
        } catch (error) {
            res.status(400).json({ message: "error" });
            console.log(error);
        }
    },

};





