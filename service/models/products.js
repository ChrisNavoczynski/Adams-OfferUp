const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {type: String, required: true},
    categoryType: [String],
    available: {type: Boolean, default: true},
    price: Number,
    description: String,
    sellerInfo: {type: String, required: true},
    initDate: {type: Date, default: Date.now},
  });


const Products = mongoose.model('Products', itemSchema);

module.exports = Products;