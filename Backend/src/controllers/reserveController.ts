import { client } from "../index";
import { Request, Response } from "express";
export const reserveController = {

  insertReservation: async (req: Request, res: Response) => {
    try {
      const reserve = {
        Cardinality: req.body.Cardinality,
        Reservation_Date: req.body.Reservation_Date,
        Reservation_Time: req.body.Reservation_Time,
        email: req.body.email,
        Branch_ID: req.body.Branch_ID,
      };
      

      console.log(reserve)   
const Customer_ID =(
  await client.query(
    `select userx_id from UserX where email='${reserve.email}';`
  )
).rows[0];
      

 
      const Tablesnum = (
        await client.query(
          `select Table_num from TableX where Branch_ID=${reserve.Branch_ID} and  Cardinality=${reserve.Cardinality} and NOT EXISTS(select * from Reserve where TableX.Table_Num=Reserve.Table_Num and Reserve.Branch_ID=${reserve.Branch_ID} and Reservation_Date= '${reserve.Reservation_Date}' and Reservation_Time= '${reserve.Reservation_Time}');`
        )
      ).rows;

      if (Tablesnum.length) {
        await client.query(`
     insert into Reserve values (${Tablesnum[0].table_num}, ${reserve.Branch_ID},${Customer_ID.userx_id}, '${reserve.Reservation_Date}','${reserve.Reservation_Time}');`);
        res.status(201).send({ message: "Reservation Has been reserved" });
      } else {
        res.send({
          message:
            "NO Table Availble with this Cardinality and in this Branch at Present, Try Later ", 
        });
      }

    } catch (err) {
      console.log(err);
      res.status(400).send();
    }
  }

};
