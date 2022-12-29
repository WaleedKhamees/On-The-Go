"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var statsController_1 = require("../controllers/statsController");
var router = (0, express_1.Router)();
router.get("/stats/eastern", statsController_1.statsController.getEasternStats);
router.get("/stats/western", statsController_1.statsController.getWesternStats);
router.get("/stats/drinks", statsController_1.statsController.getDrinksStats);
module.exports = router;
//# sourceMappingURL=statistical.js.map