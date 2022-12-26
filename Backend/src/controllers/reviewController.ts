import { client } from "../index"
import { Request, Response } from 'express';


export const reviewController = {
    getReviews: async (req: Request, res: Response) => {
        const Reviews = await client.query(`select * from review`);
        res.status(200).json(Reviews.rows);
    },
    insertReview: async (req: Request, res: Response) => {
        try {
            const user = { customer_id: req.body.customer_id, item_id: req.body.item_id, review_date: req.body.review_date, rate: req.body.rate, review_desc: req.body.review_desc };
            await client.query(`
            insert into Review (customer_id	,item_id,review_date,rate,review_desc) values (${user.customer_id},${user.item_id}, '${user.review_date}', ${user.rate}, '${user.review_desc}');`);
            res.status(201).json({ message: "Inserterd successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }

    }

};





