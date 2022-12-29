"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var branchController_1 = require("../controllers/branchController");
var router = (0, express_1.Router)();
router.get("/branch", branchController_1.branchController.GetBranches);
module.exports = router;
//# sourceMappingURL=branch.js.map