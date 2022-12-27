import { client } from "../index"
import { Request, Response } from 'express';


export const reviewController = {
    getReviews: async (req: Request, res: Response) => {
        const Reviews = await client.query(`select * from review`);
        res.status(200).json(Reviews.rows);
    },
    getReview: async (req: Request, res: Response) => {
        const review = await client.query(`select first_name,last_name,img_url,item_id,review_date,rate,review_desc from customer,review where item_id = ${req.params.id} and customer.customer_id=review.customer_id`);
        res.status(200).json(review.rows);
    },
    insertReview: async (req: Request, res: Response) => {
        try {
            const user = { email: req.body.email, item_id: req.body.item_id, review_date: req.body.review_date, rate: req.body.rate, review_desc: req.body.review_desc };
            await client.query(`
            insert into Review (customer_id	,item_id,review_date,rate,review_desc) values ((select userx_id from userx where email='${user.email}'),${user.item_id}, '${user.review_date}', ${user.rate}, '${user.review_desc}');`);
            res.status(201).json({ message: "Inserterd successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }

    }

};





