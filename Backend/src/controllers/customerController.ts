import { client } from "../index"
import { Request, Response } from 'express';
export const customerController = {
    getCustomerFromEmail: async (req: Request, res: Response) => {
        const email = req.params.email;
        console.log(email);
        const customer = await client.query(`select first_name,last_name,wallet,img_url from customer where customer_id in (select userx_id from userx where email = '${email}')`);
        if (customer.rowCount !== 0)
            res.json(customer.rows[0]);
        else
            res.status(400).json({ message: "email doesn't exists" })
    },

};
