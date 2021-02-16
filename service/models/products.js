const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    itemName: {type: String, required: true},
    categoryType: [String],
    available: {type: Boolean, default: true},
    price: Number,
    description: String,
    sellerInfo: {type: String, required: true},
    initDate: {type: Date, default: Date.now},
  });


const Products = mongoose.model('Products', postSchema);

module.exports = Products;