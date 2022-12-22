import { Router } from "express";
import { orderController } from "../controllers/orderCotroller";
const router = Router();


router.post("/order/insertorder", orderController.insertOrder);
router.patch("/order/updateorder", orderController.updateState);
router.get("/order/getAllOrders", orderController.getAllOrders);
router.get("/order/getAllOrders/:id", orderController.getAllOrderforempolyee);
router.get("/order/getAllOrderforCustomer/:Email", orderController.getAllOrderforCustomer);
router.get("/order/getAllCookedOrders", orderController.getAllCookedOrders);
router.get("/order/getAllPendingOrders", orderController.getAllPendingOrders);
module.exports = router; 



