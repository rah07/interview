const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    qtyPerUnit: {
      type: Number,
      required: true,
    },

    unitPrice: {
      type: Number,
      required: true,
    },
    unitInStock: {
      type: Number,
      required: true,
    },

    discontinued: {
      type: Boolean,
      required: true,
    },

    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
