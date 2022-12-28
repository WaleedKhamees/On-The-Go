import { Router } from "express";
import { employeeController } from "../controllers/employeeController"
const router = Router();
router.get("/employee", employeeController.getEmployees);

router.get("/employee/:id", employeeController.getEmployee);

router.patch("/employee/update", employeeController.updateEmployee);

router.delete("/employee/delete/:id", employeeController.deleteEmployee);

router.post("/employee/insert", employeeController.insertEmployee);

router.get("/employee/getTypeByEmail/:email", employeeController.getTypeByEmail);

router.get("/employee/getEmployeeByEmail/:email", employeeController.getEmployeeByEmail);




module.exports = router; 