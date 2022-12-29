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
exports.itemController = void 0;
var index_1 = require("../index");
exports.itemController = {
    getItemAdmin: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.client.query("select * from item")];
                case 1:
                    items = _a.sent();
                    res.status(200).json(items.rows);
                    return [2 /*return*/];
            }
        });
    }); },
    getItems: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.client.query("select item_id ,item_name, item_desc,item_price, img_url,category,discount_percent \n         from item,discount\n         where item.discount_id = discount.discount_id\n         ")];
                case 1:
                    items = _a.sent();
                    res.status(200).json(items.rows);
                    return [2 /*return*/];
            }
        });
    }); },
    getItem: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.client.query("select item_id ,item_name, item_desc,item_price, img_url,category,discount_percent from item,discount\n        where item.discount_id = discount.discount_id and item_id = ".concat(req.params.id))];
                case 1:
                    item = _a.sent();
                    res.status(200).json(item.rows);
                    return [2 /*return*/];
            }
        });
    }); },
    updateItem: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var newItem, item, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newItem = req.body;
                    return [4 /*yield*/, index_1.client.query("update item set item_name='".concat(newItem.item_name, "', item_desc = '").concat(newItem.item_desc, "', item_price = ").concat(newItem.item_price, ",img_url = '").concat(newItem.img_url, "', discount_id = '").concat(newItem.discount_id, "', category = '").concat(newItem.category, "' where item_id = ").concat(newItem.item_id))];
                case 1:
                    item = _a.sent();
                    res.status(201).json({ message: "Updated successfully" });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    res.status(400).json();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    deleteItem: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var item, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, index_1.client.query("delete from item where item_id = ".concat(req.params.id))];
                case 1:
                    item = _a.sent();
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
    insertItem: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var newitem, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newitem = { item_name: req.body.item_name, item_desc: req.body.item_desc, item_price: req.body.item_price, img_url: req.body.img_url, discount_id: req.body.discount_id, category: req.body.category };
                    return [4 /*yield*/, index_1.client.query("insert into item (item_name,item_desc,item_price,img_url,discount_id,category) values ('".concat(newitem.item_name, "','").concat(newitem.item_desc, "', ").concat(newitem.item_price, ", '").concat(newitem.img_url, "', ").concat(newitem.discount_id, ", '").concat(newitem.category, "');"))];
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
//# sourceMappingURL=itemController.js.map