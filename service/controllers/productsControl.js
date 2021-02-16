const Products = require("../models/products");

exports.newProduct = (req, res, next) => {
    if (req.body.itemName.trim().length === 0) {
        res.status(411).send({error: "A Product name is required"});
    }
    if (req.body.price <= 0 || req.body.price == null) {
        res.status(406).send({error: "Price cannot be zero $ or lower"});
    }

const category = req.body.category;
const categoryArr = category.split(",");
    
const newItem = {
    itemName: req.body.itemName,
    category: categoryArr,
    price: req.body.price,
    description: req.body.description,
    seller: req.body.seller
};

Products.create(newItem)
    .then((newItem) => {
        res.send({newItemId: newItem._id});
    })
    .catch((error) => {
        console.log(error);
        next(error);
    });
};