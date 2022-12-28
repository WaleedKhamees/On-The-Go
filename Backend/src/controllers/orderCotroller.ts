import { client } from "../index"
import { Request, Response } from 'express';
/* select item_id ,item_name, item_desc,item_price, img_url,category,discount_percent from item,discount
        where item.discount_id = discount.discount_id and item_id = ${req.params.id} */
const getitemsfororder = async (order_id) => {

    try {
        const items = await client.query(`select item.Item_iD,Quantity,Item_Name,Item_Desc,Item_Price,Img_url,discount_percent from 
    item ,contains, discount
    where order_id='${order_id}' and item.Item_iD=contains.Item_iD and item.discount_id = discount.discount_id ;`);
        return items.rows;
    }
    catch (err) {
        console.log(err);
    }

};
export const orderController = {

    insertOrder: async (req: Request, res: Response) => {

        const order = {
            id: req.body.order_id,
            state: req.body.order_state,
            price: req.body.order_price,
            items: req.body.items,
            email: req.body.email,
        };
        try {

            const { userx_id: customerID, wallet } =
                (await client.query
                    (`SELECT * from userx,customer where email = '${order.email}' and userx_id = customer_id;`))
                    .rows[0];
            let itemsQuery = `insert into contains values `;
            for (let i in order.items) {
                itemsQuery += `(${order.items[i].item_id}, ${customerID}, '${order.id}', ${order.items[i].qty})`;
                itemsQuery += ","
            }
            itemsQuery = itemsQuery.slice(0, itemsQuery.length - 1);
            itemsQuery += ";";

            await client.query(`insert into orderx (order_id, order_state, order_price) values ('${order.id}', '${order.state}', ${order.price});`);
            await client.query(itemsQuery);
            await client.query(`update customer set wallet=${wallet - order.price} where customer_id=${customerID};`);
            res.status(201).json({ message: "ordered placed successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    updateState: async (req: Request, res: Response) => {


        const order = { Order_State: req.body.Order_State, Order_ID: req.body.Order_ID };

        try {

            const item = await client.query(`update OrderX set Order_State='${order.Order_State}' where Order_ID = '${order.Order_ID}'`);
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

    },
    getAllPendingOrders: async (req: Request, res: Response) => {

        try {
            const order = await client.query(`select * from Orderx where Order_State='pending'`);
            res.status(200).json(order.rows);

        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },
    getAllBeingDeliveredOrders: async (req: Request, res: Response) => {

        try {
            const order = await client.query(`select * from Orderx where Order_State='being_delivered'`);
            res.status(200).json(order.rows);

        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },

    getAllCookedOrders: async (req: Request, res: Response) => {

        try {
            const order = await client.query(`select * from Orderx where Order_State='cooked'`);
            res.status(200).json(order.rows);

        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },



    updateidofcheif: async (req: Request, res: Response) => {
        const data = { Employee_id: req.body.Employee_id, Order_ID: req.body.Order_ID }
        try {
            const Employee = await client.query(`update OrderX set  chef_id=${data.Employee_id}  where order_id='${data.Order_ID}'`);

            res.status(201).json({ message: "Updated successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    }
    ,


    updateidofwaiter: async (req: Request, res: Response) => {
        const data = { Employee_id: req.body.Employee_id, Order_ID: req.body.Order_ID }
        try {
            const Employee = await client.query(`update OrderX set  waiter_id=${data.Employee_id}  where order_id='${data.Order_ID}'`);

            res.status(201).json({ message: "Updated successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },





    updateidofdeliveryman: async (req: Request, res: Response) => {
        const data = { Employee_id: req.body.Employee_id, Order_ID: req.body.Order_ID }
        try {
            const Employee = await client.query(`update OrderX set  deliveryman_id=${data.Employee_id}  where order_id='${data.Order_ID}'`);

            res.status(201).json({ message: "Updated successfully" });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    },


    getordersforcutomer: async (req: Request, res: Response) => {

        try {
            const Customer_ID = await client.query(`select UserX_ID from UserX where Email='${req.params.email}';`);
            const orders = (await client.query(`select distinct OrderX.Order_ID,Order_State,Order_Price from Orderx ,contains where contains.Order_ID=OrderX.Order_ID and Customer_ID=${Customer_ID.rows[0].userx_id} ORDER BY OrderX.Order_ID desc;`)).rows;
            let items = [];
            for (let i in orders) {
                items = [...items, { order_id: orders[i].order_id, order_state: orders[i].order_state, order_price: orders[i].order_price, items: await getitemsfororder(orders[i].order_id) }];
            }

            res.status(200).json({ orders: items });
        }
        catch (err) {
            console.log(err);
            res.status(400).json();
        }
    }



};















