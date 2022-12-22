import { client } from "../index"
import { Request, Response } from 'express';
export const orderController = {
    
    insertOrder: async (req: Request, res: Response) => {
        
        const order = {Order_State: req.body.Order_State, Order_Price: req.body.Order_Price, 
            Order_Date: req.body.Order_Date, Employee_ID: req.body.Employee_ID }; 
            console.log(req.body);
            try {            
         
                await client.query(`
            insert into OrderX (Order_State, Order_Price,Order_Date,Employee_ID) values ('${order.Order_State}', ${order.Order_Price},'${order.Order_Date}',${order.Employee_ID});`);
            res.status(201).json({ message: "Inserterd successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    updateState: async (req: Request, res: Response) => {
        
        const order = {Order_State: req.body.Order_State, Order_ID: req.body.Order_ID  }; 
     
            try {            
         
            const item = await client.query(`update OrderX set Order_State='${order.Order_State}' where Order_ID = ${order.Order_ID}`);
            res.status(201).json({ message: "Updated successfully" });
       
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    getAllOrders: async (req: Request, res: Response) => {

            try {            
                const order = await client.query(`select * from Orderx`);
                res.status(200).json(order.rows);
          
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    getAllOrderforempolyee: async (req: Request, res: Response) => {

        try {            
            const order = await client.query(`select * from Orderx where Employee_ID= ${req.params.id};`);
            res.status(200).json(order.rows);
           }
    catch (err) {
        console.log(err);
        res.status(400).json();
    }
    

    
}, 
getAllOrderforCustomer: async (req: Request, res: Response) => {
    
     try {            
        const Customer_ID = await client.query(`select UserX_ID from UserX where Email= ${req.params.Email};`);
        const order = await client.query(`select OrderX.Order_ID,Order_State,Order_Price,Order_Date,Employee_ID,contains.Item_iD,Quantity,Item_Name,Item_Desc,Item_Price,Img_url 
        from Orderx                                
        LEFT JOIN contains on OrderX.Order_ID=contains.Order_ID
        LEFT JOIN Item     on Item.Item_iD=contains.Item_iD
        where Customer_ID=${Customer_ID.rows[0].userx_id};`);
          
        res.status(200).json(order.rows);
       }
    catch (err) {
        console.log(err);
        res.status(400).json();
     }    
  
}













};















