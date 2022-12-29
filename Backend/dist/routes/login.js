"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var router = (0, express_1.Router)();
router.post("/login", userController_1.loginController.login);
module.exports = router;
//# sourceMappingURL=login.js.map