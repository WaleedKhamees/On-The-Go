"use strict";
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
exports.discountController = void 0;
var index_1 = require("../index");
exports.discountController = {
    getdiscounts: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var discounts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.client.query("select * from discount")];
                case 1:
                    discounts = _a.sent();
                    console.log(discounts.rows);
                    res.status(200).json(discounts.rows);
                    return [2 /*return*/];
            }
        });
    }); },
    getdiscount: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var discount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.client.query("select * from discount where discount_id = ".concat(req.params.id))];
                case 1:
                    discount = _a.sent();
                    res.status(200).json(discount.rows);
                    return [2 /*return*/];
            }
        });
    }); },
    updatediscount: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var newdiscount, discount, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newdiscount = { discount_id: req.body.discount_id, start_date: req.body.start_date, end_date: req.body.end_date, discount_percent: req.body.discount_percent };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, index_1.client.query("update discount set start_date='".concat(newdiscount.start_date, "', end_date = '").concat(newdiscount.end_date, "', discount_percent = '").concat(newdiscount.discount_percent, "' where discount_id = ").concat(newdiscount.discount_id))];
                case 2:
                    discount = _a.sent();
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
    deletediscount: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, index_1.client.query("delete from discount where discount_id = ".concat(req.params.id))];
                case 1:
                    _a.sent();
                    res.status(201).json({ message: "Deleted successfully" });
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log(err_2);
                    res.status(400).json();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    insertdiscount: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var newdiscount, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newdiscount = { start_date: req.body.start_date, end_date: req.body.end_date, discount_percent: req.body.discount_percent };
                    return [4 /*yield*/, index_1.client.query("\n            insert into discount (start_date, end_date, discount_percent) values ('".concat(newdiscount.start_date, "', '").concat(newdiscount.end_date, "', ").concat(newdiscount.discount_percent, ");"))];
                case 1:
                    _a.sent();
                    res.status(201).json({ message: "Inserterd successfully" });
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.log(err_3);
                    res.status(400).json();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
//# sourceMappingURL=discountController.js.map