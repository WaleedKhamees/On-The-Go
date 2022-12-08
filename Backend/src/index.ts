import express from "express";
import { Client } from "pg";
import * as dotenv from "dotenv";
dotenv.config();

export const client = new Client(process.env.connectionString)
client.connect();

const app = express();

// parse json

app.use(express.json());

app.use("/", require("./routes/item"));
// get domain.com/posts => get all posts
//  
// get : put : update  delete : delete  post : create 
// routes



app.listen(3000, () => { }); 