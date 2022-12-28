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
            const branch_balance = (await client.query(`select b.balance from branch b where b.branch_id=${branch_ID}`)).rows[0].balance;
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let currentDate = `${day}/${month}/${year}--${hours}--${minutes}--${seconds}`;
            const firstquery = (await client.query(`
            INSERT INTO donate (provider_id, branch_id,Donation_Date, amount)
            VALUES
            (${provider_ID},${branch_ID},'${currentDate}',${provider.amount});`));
            const secondQuery = (await client.query(`UPDATE branch
                                    SET balance=${branch_balance + provider.amount}
                                    WHERE branch_id=${branch_ID};`));
            res.status(200).json("the Donation is dDone Successfully");
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "error in the Provider Doantions" });
        }
    }
};