import { Router } from "express";
import { reserveController } from "../controllers/reserveController";
const router = Router();
router.post("/reserve", reserveController.insertReservation);

module.exports = router; 