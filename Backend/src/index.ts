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
app.use("/", require("./routes/signup"));
app.use("/", require("./routes/login"));
// get domain.com/posts => get all posts
//  
// get : put : update  delete : delete  post : create 
// routes



app.listen(3000, () => { }); 