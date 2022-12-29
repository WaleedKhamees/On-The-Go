"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tableController_1 = require("../controllers/tableController");
var router = (0, express_1.Router)();
router.get("/table/getTables", tableController_1.tableController.getTables);
router.get("/table/getTableforbranch/:branch_id", tableController_1.tableController.getTableforbranch);
router.patch("/table/updatetable", tableController_1.tableController.updatetable);
router.post("/table/inserttable", tableController_1.tableController.inserttable);
router.post("/table/deletetable", tableController_1.tableController.deletetable);
module.exports = router;
//# sourceMappingURL=table.js.map