import { client } from "../index"
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
export const userController = {
    login: async (req: Request, res: Response) => {
        const reqUser = { email: req.body.email, password: req.body.password };

        const user = (await client.query(`select email,password,kind from userx where email = '${reqUser.email}'`)).rows;
        console.log(user);
        if (!user) {
            res.status(404).send({ message: "User not found" });
            return
        }
        try {
            if (await bcrypt.compare(reqUser.password, user[0].password)) {
                res.status(200).json({ ...user[0] });
            }
            else
                res.status(400).json({ message: "Please enter the correct password" });
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ message: "backend error" });
        }

    },
    signup: async (req: Request, res: Response) => {
        const user = { first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, wallet: req.body.wallet, kind: req.body.kind };
        console.log(user);
        const hasedPassword = await bcrypt.hash(req.body.password, 10);
        try {
            await client.query(`
            insert into userx (email, password, kind) values ('${user.email}', '${hasedPassword}', '${user.kind ? user.kind : 'c'}');`);
            if (user.kind && user.kind == 'p') {
                await client.query(`
                insert into providerx (provider_id,first_name, last_name) values ((select userx_id from userx as u where u.email = '${user.email}'),'${user.first_name}', '${user.last_name}');`);
            }
            else if (!user.kind || user.kind == 'c')
                await client.query(`
            insert into customer (customer_id,first_name, last_name, wallet) values ((select userx_id from userx as u where u.email = '${user.email}'),'${user.first_name}', '${user.last_name}', ${user.wallet});`);

            res.status(201).json({ message: "success" });
        }
        catch (err) {
            res.status(400).json({ message: "Email Already Exists!" });
        }

    },
    update: async (req: Request, res: Response) => {
        const user = { email: req.body.email, old_password: req.body.old_password, new_password: req.body.new_password };
        try {
            const userDatabase = (await client.query(`select userx_id,email,password from userx where email = '${user.email}'`)).rows[0];
            console.log(userDatabase);
            if (await bcrypt.compare(user.old_password, userDatabase.password) && userDatabase.email === user.email) {
                const hasedPassword = await bcrypt.hash(user.new_password, 10);
                await client.query(`update userx set password = '${hasedPassword}' where userx_id = ${userDatabase.userx_id};`);
                res.status(200).json({ message: "Updated Successfully" });
            }
            else {
                res.status(200).json({ message: "Wrong Password or email" });
            }
        } catch (err) {
            console.log(err);
        }
    }
};