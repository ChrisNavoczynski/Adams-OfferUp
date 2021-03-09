const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    itemName: {type: String, required: true},
    categoryType: [String],
    available: {type: Boolean, default: true},
    price: Number,
    description: String,
    location: String,
    seller: {type: String, required: true}
  });

const Products = mongoose.model("products", itemsSchema);

module.exports = Products;