"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reviewController_1 = require("../controllers/reviewController");
var router = (0, express_1.Router)();
router.get("/review", reviewController_1.reviewController.getReviews);
router.get("/review/:id", reviewController_1.reviewController.getReview);
router.post("/review/insert", reviewController_1.reviewController.insertReview);
module.exports = router;
//# sourceMappingURL=review.js.map