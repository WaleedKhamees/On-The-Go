"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var router = (0, express_1.Router)();
router.post("/login", userController_1.userController.login);
router.post("/signup", userController_1.userController.signup);
router.patch("/user/update", userController_1.userController.update);
module.exports = router;
//# sourceMappingURL=user.js.map