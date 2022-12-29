import express from "express";
import { Client } from "pg";
import * as dotenv from "dotenv";
const cors = require('cors');
dotenv.config();

export const client = new Client(process.env.connectionString)
client.connect();

const app = express();

// parse json

app.use(express.json());
app.use(cors());
app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
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
app.use("/", require("./routes/statistical"));

// get domain.com/posts => get all posts
//  
// get :  put : update  delete : delete  post : create 
// routes
app.listen(process.env.PORT || 3000, () => {





}); 