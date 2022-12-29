"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var orderCotroller_1 = require("../controllers/orderCotroller");
var router = (0, express_1.Router)();
router.post("/order/insert", orderCotroller_1.orderController.insertOrder);
router.patch("/order/updateorder", orderCotroller_1.orderController.updateState);
router.get("/order/getAllOrders", orderCotroller_1.orderController.getAllOrders);
router.get("/order/getAllOrders/:id", orderCotroller_1.orderController.getAllOrderforempolyee);
router.get("/order/getAllOrderforCustomer/:Email", orderCotroller_1.orderController.getAllOrderforCustomer);
router.get("/order/getAllCookedOrders", orderCotroller_1.orderController.getAllCookedOrders);
router.get("/order/getAllPendingOrders", orderCotroller_1.orderController.getAllPendingOrders);
router.get("/order/getAllBeingDeliveredOrders", orderCotroller_1.orderController.getAllBeingDeliveredOrders);
router.patch("/order/updateidofcheif", orderCotroller_1.orderController.updateidofcheif);
router.patch("/order/updateidofwaiter", orderCotroller_1.orderController.updateidofwaiter);
router.patch("/order/updateidofdeliveryman", orderCotroller_1.orderController.updateidofdeliveryman);
router.get("/order/getordersforcutomer/:email", orderCotroller_1.orderController.getordersforcutomer);
module.exports = router;
//# sourceMappingURL=order.js.map