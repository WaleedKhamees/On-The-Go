import { Router } from "express";
import { itemController } from "../controllers/itemController"
const router = Router();
router.get("/item", itemController.getItems);

router.get("/item/:id", itemController.getItem);


module.exports = router; 