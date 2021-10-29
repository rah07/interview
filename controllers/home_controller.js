const Product = require("../models/product");

module.exports.home = function (req, res) {
  Product.find({}, function (err, products) {
    if (err) {
      console.log("error while display product", err);
      return;
    }

    console.log(products);
    return res.render("home", {
      title: "Product | Home",

      products: products,
    });
  });
};
