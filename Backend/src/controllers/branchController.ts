import { client } from "../index"
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
export const branchController = {
    GetBranches: async (req: Request, res: Response) => {
        try {
            const branches = (await client.query(`select * from branch`)).rows;
            res.status(200).json(branches);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "error in the branches controller" });
        }
    }
};