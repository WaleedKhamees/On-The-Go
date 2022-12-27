import { providerController } from './../controllers/providerController';
import { Router } from "express";
const router = Router();
router.get("/provider/GetBranchIdByName/:branchname", providerController.GetBranchIdByName);
router.post("/provider/AddDonations", providerController.AddDonations);

module.exports = router; 