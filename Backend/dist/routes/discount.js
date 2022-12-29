"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var discountController_1 = require("../controllers/discountController");
var router = (0, express_1.Router)();
router.get("/discount", discountController_1.discountController.getdiscounts);
router.get("/discount/:id", discountController_1.discountController.getdiscount);
router.patch("/discount/update", discountController_1.discountController.updatediscount);
router.delete("/discount/delete/:id", discountController_1.discountController.deletediscount);
router.post("/discount/insert", discountController_1.discountController.insertdiscount);
module.exports = router;
//# sourceMappingURL=discount.js.map