import { Router } from "express";
import { itemController } from "../controllers/itemController"
const router = Router();
router.get("/item", itemController.getItems);
router.get("/item/admin", itemController.getItemAdmin);


router.get("/item/:id", itemController.getItem);

router.post("/item/insert", itemController.insertItem);

router.delete("/item/delete/:id", itemController.deleteItem);

router.patch("/item/update", itemController.updateItem);

module.exports = router; 