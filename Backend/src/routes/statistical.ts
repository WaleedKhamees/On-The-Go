import { Router } from "express";
import { statsController } from "../controllers/statsController"
const router = Router();
router.get("/stats/eastern", statsController.getEasternStats);

router.get("/stats/western", statsController.getWesternStats);

router.get("/stats/drinks", statsController.getDrinksStats);


module.exports = router; 