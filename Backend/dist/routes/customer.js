"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var customerController_1 = require("../controllers/customerController");
var router = (0, express_1.Router)();
router.get("/customer/getcustomerfromemail/:email", customerController_1.customerController.getCustomerFromEmail);
module.exports = router;
//# sourceMappingURL=customer.js.map