"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeController = void 0;
var index_1 = require("../index");
var bcrypt = __importStar(require("bcrypt"));
exports.employeeController = {
    getEmployees: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var Employees;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.client.query("select * from Employee")];
                case 1:
                    Employees = _a.sent();
                    res.status(200).json(Employees.rows);
                    return [2 /*return*/];
            }
        });
    }); },
    getEmployee: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var Employee;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.client.query("select * from Employee where Employee_id = ".concat(req.params.id))];
                case 1:
                    Employee = _a.sent();
                    res.status(200).json(Employee.rows);
                    return [2 /*return*/];
            }
        });
    }); },
    updateEmployee: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var newEmployee, Employee, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newEmployee = { Employee_id: req.body.employee_id, first_name: req.body.first_name, last_name: req.body.last_name, StartTime: req.body.starttime, EndTime: req.body.endtime, TypeofEmployee: req.body.typeofemployee, Supervise_ID: req.body.supervise_id, Branch_ID: req.body.branch_id, salary: req.body.salary };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, index_1.client.query("update Employee set first_name='".concat(newEmployee.first_name, "', last_name = '").concat(newEmployee.last_name, "', StartTime = '").concat(newEmployee.StartTime, "',EndTime = '").concat(newEmployee.EndTime, "', TypeofEmployee = '").concat(newEmployee.TypeofEmployee, "', Supervise_ID = ").concat(newEmployee.Supervise_ID, ", Branch_ID = ").concat(newEmployee.Branch_ID, ", salary = ").concat(newEmployee.salary, " where employee_id = ").concat(newEmployee.Employee_id))];
                case 2:
                    Employee = _a.sent();
                    res.status(201).json({ message: "Updated successfully" });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    res.status(400).json();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    deleteEmployee: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, index_1.client.query("delete from Employee where Employee_id = ".concat(req.params.id))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, index_1.client.query("delete from userx where userx_id = ".concat(req.params.id))];
                case 2:
                    _a.sent();
                    res.status(201).json({ message: "Deleted successfully" });
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.log(err_2);
                    res.status(400).json();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    insertEmployee: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var hasedPassword, user, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, bcrypt.hash(req.body.password, 10)];
                case 1:
                    hasedPassword = _a.sent();
                    user = { email: req.body.email, password: hasedPassword, first_name: req.body.first_name, last_name: req.body.last_name, StartTime: req.body.StartTime, EndTime: req.body.EndTime, TypeofEmployee: req.body.TypeofEmployee, Supervise_ID: req.body.Supervise_ID, Branch_ID: req.body.Branch_ID, salary: req.body.salary };
                    return [4 /*yield*/, index_1.client.query("\n            insert into userx (email,password,Kind) values ('".concat(user.email, "', '").concat(user.password, "','").concat(user.TypeofEmployee === "admin" ? "a" : "e", "');"))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, index_1.client.query(user.Supervise_ID ?
                            "insert into Employee (Employee_ID,first_name,last_name,TypeofEmployee,Supervise_ID,Branch_ID, StartTime,EndTime,salary)\n                values ((select userx_id from userx as u where u.email = '".concat(user.email, "'),'").concat(user.first_name, "', '").concat(user.last_name, "', '").concat(user.TypeofEmployee, "', ").concat(user.Supervise_ID, ", ").concat(user.Branch_ID, ", '").concat(user.StartTime, "', '").concat(user.EndTime, "', ").concat(user.salary, ");")
                            :
                                "insert into Employee (Employee_ID,first_name,last_name,TypeofEmployee,Branch_ID, StartTime,EndTime,salary) values ((select userx_id from userx as u where u.email = '".concat(user.email, "'),'").concat(user.first_name, "', '").concat(user.last_name, "', '").concat(user.TypeofEmployee, "', ").concat(user.Branch_ID, ", '").concat(user.StartTime, "', '").concat(user.EndTime, "', ").concat(user.salary, ");"))];
                case 3:
                    _a.sent();
                    res.status(201).json({ message: "Inserterd successfully" });
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    console.log(err_3);
                    res.status(400).json();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    getTypeByEmail: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var employee_id, type, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, index_1.client.query("select Userx_ID from Userx where email='".concat(req.params.email, "'"))];
                case 1: return [4 /*yield*/, (_a.sent()).rows];
                case 2:
                    employee_id = _a.sent();
                    return [4 /*yield*/, index_1.client.query("select TypeofEmployee from Employee where Employee_ID =".concat(employee_id[0].userx_id))];
                case 3: return [4 /*yield*/, (_a.sent()).rows];
                case 4:
                    type = _a.sent();
                    res.status(200).json(type[0].typeofemployee);
                    return [3 /*break*/, 6];
                case 5:
                    err_4 = _a.sent();
                    console.log(err_4);
                    res.status(400).json();
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); },
    getEmployeeByEmail: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var employee_id, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, index_1.client.query("select Userx_ID from Userx where email='".concat(req.params.email, "'"))];
                case 1: return [4 /*yield*/, (_a.sent()).rows];
                case 2:
                    employee_id = _a.sent();
                    res.status(200).json(employee_id[0].userx_id);
                    return [3 /*break*/, 4];
                case 3:
                    err_5 = _a.sent();
                    console.log(err_5);
                    res.status(400).json();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }
};
//# sourceMappingURL=employeeController.js.map