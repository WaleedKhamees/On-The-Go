import { Router } from "express";
import { client } from "../index";
import { itemController } from "../controllers/itemController"
const router = Router();
// CRUD : create, read, Update, delete 
// https -> methods : put, get, patch, delete
// get /posts -> get /post : gets all post
// get /posts/:id -> get specific post with id 
// put /login -> req -> parameters, body {"user" : "mostafa elsayed" , "passward" : "1234"}, headers 
// patch /post/:id -> update 
// delete /post/:id -> delete  
// frontend (view) <- api (auth, crud) <- database  
router.get("/item", itemController.getItems);

router.get("/item/:id", itemController.getItem);


module.exports = router; 