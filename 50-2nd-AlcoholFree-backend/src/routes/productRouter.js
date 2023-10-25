const express = require("express");
const router = express.Router();
const productController = require("../controlles/productController");


//게사글 등록
router.get("/detail", productController.detailProduct);
router.post("/detail", productController.shoppingBaskets);
module.exports ={
    router
}