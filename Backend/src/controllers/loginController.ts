import { client } from "../index"
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
export const loginController = {
    login: async (req: Request, res: Response) => {
        const reqUser = { email: req.body.email, password: req.body.password };

        const user = (await client.query(`select * from userx where email = '${reqUser.email}'`)).rows;
        if (!user) {
            res.status(400).send({ message: "user not found" });
            return
        }
        try {
            if (await bcrypt.compare(reqUser.password, user[0].password))
                res.send("success");
            else
                res.send("failed");
        }
        catch (err) {
            console.log(err)
            res.status(400).send({});
        }

    }
};