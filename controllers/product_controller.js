const product = require("../models/product");

const category = require("../models/category");

module.exports.create = function (req, res) {
  category.create(
    {
      categoryName: req.body.categoryName,
    },
    function (err, category) {
      // handle error
      if (err) {
        console.log("Error while create category", err);
        return;
      }
      console.log(category);
      // product.categoryID = category._id;
      // product.save();
      // res.redirect("/");

      product.create(
        {
          productName: req.body.productName,
          qtyPerUnit: req.body.qtyPerUnit,
          unitPrice: req.body.unitPrice,
          unitInStock: req.body.unitInStock,
          discontinued: req.body.discontinued,
          categoryID: category._id,
        },
        function (err, product) {
          if (err) {
            console.log("error in creating a product", err);
            return;
          }

          console.log(product);
          return res.redirect("back");
        }
      );
    }
  );
};

//   product.create(
//     {
//       productName: req.body.productName,
//       qtyPerUnit: req.body.qtyPerUnit,
//       unitPrice: req.body.unitPrice,
//       unitInStock: req.body.unitInStock,
//       discontinued: req.body.discontinued,
//     },
//     function (err, product) {
//       if (err) {
//         console.log("error in creating a product", err);
//         return;
//       }

//       console.log(product);
//       return res.redirect("back");
//     }
//   );
// };
