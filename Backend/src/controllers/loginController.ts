import { client } from "../index"
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
export const loginController = {
    login: async (req: Request, res: Response) => {
        const reqUser = { email: req.body.email, password: req.body.password };

        const user = (await client.query(`select email,password,kind from userx where email = '${reqUser.email}'`)).rows;
        if (user.length === 0) {
            res.status(400).send({ message: "user not found" });
            return
        }
        try {
            if (await bcrypt.compare(reqUser.password, user[0].password)) {
                res.status(200).json({ ...user[0] });
            }
            else
                res.status(400).json({ message: "failed" });
        }
        catch (err) {
            console.log(err)
            res.status(400).send({});
        }

    }
};