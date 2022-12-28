import { Router } from "express";
import { branchController } from "../controllers/branchController";
const router = Router();
router.get("/branch/GetBranches", branchController.GetBranches);
module.exports = router; 