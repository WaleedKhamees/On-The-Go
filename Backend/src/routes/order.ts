import { Router } from "express";
import { orderController } from "../controllers/orderCotroller";
const router = Router();


router.post("/order/insert", orderController.insertOrder);
router.patch("/order/updateorder", orderController.updateState);
router.get("/order/getAllOrders", orderController.getAllOrders);
router.get("/order/getAllOrders/:id", orderController.getAllOrderforempolyee);
router.get("/order/getAllOrderforCustomer/:Email", orderController.getAllOrderforCustomer);
router.get("/order/getAllCookedOrders", orderController.getAllCookedOrders);
router.get("/order/getAllPendingOrders", orderController.getAllPendingOrders);
router.get("/order/getAllBeingDeliveredOrders", orderController.getAllBeingDeliveredOrders);
router.patch("/order/updateidofcheif", orderController.updateidofcheif);

router.patch("/order/updateidofwaiter", orderController.updateidofwaiter);
router.patch("/order/updateidofdeliveryman", orderController.updateidofdeliveryman);
router.get("/order/getordersforcutomer/:email", orderController.getordersforcutomer);
router.get("/order/getitemsfororder/:order_id", orderController.getitemsfororder);






module.exports = router; 




