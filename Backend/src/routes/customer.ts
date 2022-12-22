import { Router } from "express";
import { customerController } from "../controllers/customerController"
const router = Router();
router.get("/customer/getcustomerfromemail/:email", customerController.getCustomerFromEmail);



module.exports = router; 