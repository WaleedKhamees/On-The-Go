"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var employeeController_1 = require("../controllers/employeeController");
var router = (0, express_1.Router)();
router.get("/employee", employeeController_1.employeeController.getEmployees);
router.get("/employee/:id", employeeController_1.employeeController.getEmployee);
router.patch("/employee/update", employeeController_1.employeeController.updateEmployee);
router.delete("/employee/delete/:id", employeeController_1.employeeController.deleteEmployee);
router.post("/employee/insert", employeeController_1.employeeController.insertEmployee);
router.get("/employee/getTypeByEmail/:email", employeeController_1.employeeController.getTypeByEmail);
router.get("/employee/getEmployeeByEmail/:email", employeeController_1.employeeController.getEmployeeByEmail);
module.exports = router;
//# sourceMappingURL=employee.js.map