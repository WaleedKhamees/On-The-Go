import { Router } from "express";
import { reviewController } from "../controllers/reviewController"
const router = Router();
router.get("/review", reviewController.getReviews);

router.get("/review/:id", reviewController.getReview);

router.post("/review/insert", reviewController.insertReview);


module.exports = router; 