import { Router } from "express";
import { client } from "../index";
import { loginController } from "../controllers/loginController"
const router = Router();
router.post("/login", loginController.login);



module.exports = router; 