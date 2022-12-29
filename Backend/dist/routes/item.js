"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var itemController_1 = require("../controllers/itemController");
var router = (0, express_1.Router)();
router.get("/item", itemController_1.itemController.getItems);
router.get("/item/admin", itemController_1.itemController.getItemAdmin);
router.get("/item/:id", itemController_1.itemController.getItem);
router.post("/item/insert", itemController_1.itemController.insertItem);
router.delete("/item/delete/:id", itemController_1.itemController.deleteItem);
router.patch("/item/update", itemController_1.itemController.updateItem);
module.exports = router;
//# sourceMappingURL=item.js.map