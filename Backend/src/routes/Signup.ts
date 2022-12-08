import { Router } from "express";
import { client } from "../index";
import { SignupController } from "../controllers/SignupController"
const router = Router();
router.post("/signup", SignupController.Signup);



module.exports = router; 