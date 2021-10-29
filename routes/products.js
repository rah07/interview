const express = require("express");
const router = express.Router();

const productController = require("../controllers/product_controller");

router.post("/create", productController.create);

router.get("/delete/:id", productController.destroy);


module.exports = router;
