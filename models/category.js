const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },

    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  },

  {
    timestamps: true,
  }
);

const category = mongoose.model("category", categorySchema);
module.exports = category;
