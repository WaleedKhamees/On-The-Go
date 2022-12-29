"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var providerController_1 = require("./../controllers/providerController");
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/provider/GetBranchIdByName/:branchname", providerController_1.providerController.GetBranchIdByName);
router.post("/provider/AddDonations", providerController_1.providerController.AddDonations);
module.exports = router;
//# sourceMappingURL=provider.js.map