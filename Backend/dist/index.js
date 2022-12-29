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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var express_1 = __importDefault(require("express"));
var pg_1 = require("pg");
var dotenv = __importStar(require("dotenv"));
var cors = require('cors');
dotenv.config();
exports.client = new pg_1.Client(process.env.connectionString);
exports.client.connect();
var app = (0, express_1.default)();
// parse json
app.use(express_1.default.json());
app.use(cors());
app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use("/", require("./routes/item"));
app.use("/", require("./routes/user"));
app.use("/", require("./routes/reserve"));
app.use("/", require("./routes/employee"));
app.use("/", require("./routes/order"));
app.use("/", require("./routes/customer"));
app.use("/", require("./routes/branch"));
app.use("/", require("./routes/provider"));
app.use("/", require("./routes/review"));
app.use("/", require("./routes/discount"));
app.use("/", require("./routes/table"));
// get domain.com/posts => get all posts
//  
// get :  put : update  delete : delete  post : create 
// routes
app.listen(process.env.PORT || 3000, function () {
});
//# sourceMappingURL=index.js.map