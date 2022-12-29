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
exports.reserveController = void 0;
var index_1 = require("../index");
exports.reserveController = {
    insertReservation: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var reserve, Customer_ID, Tablesnum, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    reserve = {
                        Cardinality: req.body.Cardinality,
                        Reservation_Date: req.body.Reservation_Date,
                        Reservation_Time: req.body.Reservation_Time,
                        email: req.body.email,
                        Branch_ID: req.body.Branch_ID,
                    };
                    console.log(reserve);
                    return [4 /*yield*/, index_1.client.query("select userx_id from UserX where email='".concat(reserve.email, "';"))];
                case 1:
                    Customer_ID = (_a.sent()).rows[0];
                    return [4 /*yield*/, index_1.client.query("select Table_num from TableX where Branch_ID=".concat(reserve.Branch_ID, " and  Cardinality=").concat(reserve.Cardinality, " and NOT EXISTS(select * from Reserve where TableX.Table_Num=Reserve.Table_Num and Reserve.Branch_ID=").concat(reserve.Branch_ID, " and Reservation_Date= '").concat(reserve.Reservation_Date, "' and Reservation_Time= '").concat(reserve.Reservation_Time, "');"))];
                case 2:
                    Tablesnum = (_a.sent()).rows;
                    if (!Tablesnum.length) return [3 /*break*/, 4];
                    return [4 /*yield*/, index_1.client.query("\n     insert into Reserve values (".concat(Tablesnum[0].table_num, ", ").concat(reserve.Branch_ID, ",").concat(Customer_ID.userx_id, ", '").concat(reserve.Reservation_Date, "','").concat(reserve.Reservation_Time, "');"))];
                case 3:
                    _a.sent();
                    res.status(201).send({ message: "Reservation Has been reserved" });
                    return [3 /*break*/, 5];
                case 4:
                    res.send({
                        message: "NO Table Availble with this Cardinality and in this Branch at Present, Try Later ",
                    });
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.log(err_1);
                    res.status(400).send();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); }
};
//# sourceMappingURL=reserveController.js.map