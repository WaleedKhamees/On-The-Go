import { client } from "../index"
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
export const providerController = {
    GetBranchIdByName: async (req: Request, res: Response) => {
        try {
            const branch = (await client.query(`select b.branch_id from branch b where b.loaction='${req.params.branchname}'`)).rows[0];
            res.status(200).json(branch.branch_id);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "error in the Provider controller" });
        }
    },
    AddDonations: async (req: Request, res: Response) => {
        try {
            const provider = {
                email: req.body.email,
                branchlocation: req.body.branchlocation,
                amount: req.body.amount
            };
            const branch_ID = (await client.query(`select b.branch_id from branch b where b.loaction='${provider.branchlocation}'`)).rows[0].branch_id;
            const provider_ID = (await client.query(`select userx_id from UserX where email='${provider.email}';`)).rows[0].userx_id;
            const myquery = (await client.query(`
            INSERT INTO donate (provider_id, branch_id, amount)
            VALUES
            (${provider_ID},${branch_ID}, ${provider.amount});`));
            res.status(200).json("the Donation is dDone Successfully");
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "error in the Provider Doantions" });
        }
    }
};