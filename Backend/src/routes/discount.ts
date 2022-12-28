import { Router } from "express";
import { discountController } from "../controllers/discountController";
const router = Router();
router.get("/discount", discountController.getdiscounts);

router.get("/discount/:id", discountController.getdiscount);

router.patch("/discount/update", discountController.updatediscount);

router.delete("/discount/delete/:id", discountController.deletediscount);

router.post("/discount/insert", discountController.insertdiscount);


module.exports = router; 