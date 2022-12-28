import { Router } from "express";

import { tableController } from "../controllers/tableController";

const router = Router();
router.get("/table/getTables", tableController.getTables);
router.get("/table/getTableforbranch/:branch_id", tableController.getTableforbranch);

router.patch("/table/updatetable", tableController.updatetable);
router.post("/table/inserttable", tableController.inserttable);

router.post("/table/deletetable", tableController.deletetable);


module.exports = router; 
