const mongoose = require("mongoose");

const mapSchema = new mongoose.Schema({
  readable: String,
  latitude: Number,
  longitude: Number,
})

const itemsSchema = new mongoose.Schema({
    itemName: {type: String, required: true},
    categoryType: [String],
    available: {type: Boolean, default: true},
    price: Number,
    description: String,
    seller: {type: String, required: true},
    location: mapSchema,
    itemImage: { type: String }
  });

const Products = mongoose.model("products", itemsSchema);

module.exports = Products;