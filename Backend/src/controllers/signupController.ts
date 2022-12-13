import { client } from "../index"
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
export const signupController = {
    signup: async (req: Request, res: Response) => {
        let user;
        const hasedPassword = await bcrypt.hash(req.body.password, 10);
        user = { first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: hasedPassword, wallet: req.body.wallet };
        try {
            await client.query(`
            insert into userx (email, password) values ('${user.email}', '${user.password}');`);
            await client.query(`
            insert into customer (customer_id,first_name, last_name, wallet) values ((select userx_id from userx as u where u.email = '${user.email}'),'${user.first_name}', '${user.last_name}', ${user.wallet});`);
            res.status(201).json({ message: "success" });
        }
        catch (err) {
            res.status(400).json({ message: "Email Already Exists!" });
        }

    }
};
