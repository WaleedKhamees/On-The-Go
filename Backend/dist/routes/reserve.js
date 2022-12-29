"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reserveController_1 = require("../controllers/reserveController");
var router = (0, express_1.Router)();
router.post("/reserve", reserveController_1.reserveController.insertReservation);
module.exports = router;
//# sourceMappingURL=reserve.js.map