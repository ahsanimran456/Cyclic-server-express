import express from "express";
import {Adduser} from "./Adduser.js";
import Getusers from "./Getusers.js";
import Deleteuser from "./Deleteuser.js";
import {AddProducts} from "./AddProduct.js";
import GetProducts from "./GetProducts.js";
import Deleteproducts from "./DeleteProducts.js";
import Editproduct from "./Editproduct.js";
import mongoose from 'mongoose';


const Router = express.Router();

Router.post("/adduser",Adduser);
Router.post("/addproducts",AddProducts)
Router.get("/getusers",Getusers);
Router.get("/getproducts",GetProducts)
Router.delete("/deleteuser/:id",Deleteuser)
Router.delete("/removeproduct/:id",Deleteproducts)
Router.put("/product/:id",Editproduct)
export default Router