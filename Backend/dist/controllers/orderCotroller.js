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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
var index_1 = require("../index");
/* select item_id ,item_name, item_desc,item_price, img_url,category,discount_percent from item,discount
        where item.discount_id = discount.discount_id and item_id = ${req.params.id} */
var getitemsfororder = function (order_id) { return __awaiter(void 0, void 0, void 0, function () {
    var items, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, index_1.client.query("select item.Item_iD,Quantity,Item_Name,Item_Desc,Item_Price,Img_url,discount_percent from \n    item ,contains, discount\n    where order_id='".concat(order_id, "' and item.Item_iD=contains.Item_iD and item.discount_id = discount.discount_id ;"))];
            case 1:
                items = _a.sent();
                return [2 /*return*/, items.rows];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.orderController = {
    insertOrder: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var order, _a, customerID, wallet, itemsQuery, i, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    order = {
                        id: req.body.order_id,
                        state: req.body.order_state,
                        price: req.body.order_price,
                        items: req.body.items,
                        email: req.body.email,
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, index_1.client.query("SELECT * from userx,customer where email = '".concat(order.email, "' and userx_id = customer_id;"))];
                case 2:
                    _a = (_b.sent())
                        .rows[0], customerID = _a.userx_id, wallet = _a.wallet;
                    itemsQuery = "insert into contains values ";
                    for (i in order.items) {
                        itemsQuery += "(".concat(order.items[i].item_id, ", ").concat(customerID, ", '").concat(order.id, "', ").concat(order.items[i].qty, ")");
                        itemsQuery += ",";
                    }
                    itemsQuery = itemsQuery.slice(0, itemsQuery.length - 1);
                    itemsQuery += ";";
                    return [4 /*yield*/, index_1.client.query("insert into orderx (order_id, order_state, order_price) values ('".concat(order.id, "', '").concat(order.state, "', ").concat(order.price, ");"))];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, index_1.client.query(itemsQuery)];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, index_1.client.query("update customer set wallet=".concat(wallet - order.price, " where customer_id=").concat(customerID, ";"))];
                case 5:
                    _b.sent();
                    res.status(201).json({ message: "ordered placed successfully" });
                    return [3 /*break*/, 7];
                case 6:
                    err_2 = _b.sent();
                    console.log(err_2);
                    res.status(400).json();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); },
    updateState: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var order, item, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    order = { Order_State: req.body.Order_State, Order_ID: req.body.Order_ID };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, index_1.client.query("update OrderX set Order_State='".concat(order.Order_State, "' where Order_ID = '").concat(order.Order_ID, "'"))];
                case 2:
                    item = _a.sent();
                    res.status(201).json({ message: "Updated successfully" });
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    console.log(err_3);
                    res.status(400).json();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getAllOrders: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var order, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, index_1.client.query("select * from Orderx")];
                case 1:
                    order = _a.sent();
                    res.status(200).json(order.rows);
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    console.log(err_4);
                    res.status(400).json();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getAllOrderforempolyee: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var order, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, index_1.client.query("select * from Orderx where Employee_ID= ".concat(req.params.id, ";"))];
                case 1:
                    order = _a.sent();
                    res.status(200).json(order.rows);
                    return [3 /*break*/, 3];
                case 2:
                    err_5 = _a.sent();
                    console.log(err_5);
                    res.status(400).json();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getAllOrderforCustomer: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var Customer_ID, order, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, index_1.client.query("select UserX_ID from UserX where Email= ".concat(req.params.Email, ";"))];
                case 1:
                    Customer_ID = _a.sent();
                    return [4 /*yield*/, index_1.client.query("select OrderX.Order_ID,Order_State,Order_Price,Order_Date,Employee_ID,contains.Item_iD,Quantity,Item_Name,Item_Desc,Item_Price,Img_url \n        from Orderx                                \n        LEFT JOIN contains on OrderX.Order_ID=contains.Order_ID\n        LEFT JOIN Item     on Item.Item_iD=contains.Item_iD\n        where Customer_ID=".concat(Customer_ID.rows[0].userx_id, ";"))];
                case 2:
                    order = _a.sent();
                    res.status(200).json(order.rows);
                    return [3 /*break*/, 4];
                case 3:
                    err_6 = _a.sent();
                    console.log(err_6);
                    res.status(400).json();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getAllPendingOrders: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var order, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, index_1.client.query("select * from Orderx where Order_State='pending'")];
                case 1:
                    order = _a.sent();
                    res.status(200).json(order.rows);
                    return [3 /*break*/, 3];
                case 2:
                    err_7 = _a.sent();
                    console.log(err_7);
                    res.status(400).json();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getAllBeingDeliveredOrders: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var order, err_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, index_1.client.query("select * from Orderx where Order_State='being_delivered'")];
                case 1:
                    order = _a.sent();
                    res.status(200).json(order.rows);
                    return [3 /*break*/, 3];
                case 2:
                    err_8 = _a.sent();
                    console.log(err_8);
                    res.status(400).json();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getAllCookedOrders: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var order, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, index_1.client.query("select * from Orderx where Order_State='cooked'")];
                case 1:
                    order = _a.sent();
                    res.status(200).json(order.rows);
                    return [3 /*break*/, 3];
                case 2:
                    err_9 = _a.sent();
                    console.log(err_9);
                    res.status(400).json();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    updateidofcheif: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, Employee, err_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = { Employee_id: req.body.Employee_id, Order_ID: req.body.Order_ID };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, index_1.client.query("update OrderX set  chef_id=".concat(data.Employee_id, "  where order_id='").concat(data.Order_ID, "'"))];
                case 2:
                    Employee = _a.sent();
                    res.status(201).json({ message: "Updated successfully" });
                    return [3 /*break*/, 4];
                case 3:
                    err_10 = _a.sent();
                    console.log(err_10);
                    res.status(400).json();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    updateidofwaiter: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, Employee, err_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = { Employee_id: req.body.Employee_id, Order_ID: req.body.Order_ID };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, index_1.client.query("update OrderX set  waiter_id=".concat(data.Employee_id, "  where order_id='").concat(data.Order_ID, "'"))];
                case 2:
                    Employee = _a.sent();
                    res.status(201).json({ message: "Updated successfully" });
                    return [3 /*break*/, 4];
                case 3:
                    err_11 = _a.sent();
                    console.log(err_11);
                    res.status(400).json();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    updateidofdeliveryman: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, Employee, err_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = { Employee_id: req.body.Employee_id, Order_ID: req.body.Order_ID };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, index_1.client.query("update OrderX set  deliveryman_id=".concat(data.Employee_id, "  where order_id='").concat(data.Order_ID, "'"))];
                case 2:
                    Employee = _a.sent();
                    res.status(201).json({ message: "Updated successfully" });
                    return [3 /*break*/, 4];
                case 3:
                    err_12 = _a.sent();
                    console.log(err_12);
                    res.status(400).json();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getordersforcutomer: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var Customer_ID, orders, items, _a, _b, _c, _i, i, _d, err_13;
        var _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, index_1.client.query("select UserX_ID from UserX where Email='".concat(req.params.email, "';"))];
                case 1:
                    Customer_ID = _f.sent();
                    return [4 /*yield*/, index_1.client.query("select distinct OrderX.Order_ID,Order_State,Order_Price from Orderx ,contains where contains.Order_ID=OrderX.Order_ID and Customer_ID=".concat(Customer_ID.rows[0].userx_id, " ORDER BY OrderX.Order_ID desc;"))];
                case 2:
                    orders = (_f.sent()).rows;
                    items = [];
                    _a = orders;
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _f.label = 3;
                case 3:
                    if (!(_i < _b.length)) return [3 /*break*/, 6];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3 /*break*/, 5];
                    i = _c;
                    _d = [__spreadArray([], items, true)];
                    _e = { order_id: orders[i].order_id, order_state: orders[i].order_state, order_price: orders[i].order_price };
                    return [4 /*yield*/, getitemsfororder(orders[i].order_id)];
                case 4:
                    items = __spreadArray.apply(void 0, _d.concat([[(_e.items = _f.sent(), _e)], false]));
                    _f.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6:
                    res.status(200).json({ orders: items });
                    return [3 /*break*/, 8];
                case 7:
                    err_13 = _f.sent();
                    console.log(err_13);
                    res.status(400).json();
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); }
};
//# sourceMappingURL=orderCotroller.js.map