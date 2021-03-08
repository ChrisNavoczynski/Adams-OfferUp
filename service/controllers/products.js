const Products = require("../models/products");

exports.createProduct = (req, res, next) => {
    if (req.body.itemName.trim().length === 0) {
        res.status(411);
        res.send({error: "A Product name is required"});
    }
    if (req.body.price == null || req.body.price <= 0) {
        res.status(406);
        res.send({error: "Price cannot be zero $ or lower"});
    }

const categoryType = req.body.categoryType;
const categoryArr = categoryType.split(",");
    
const product = {
    itemName: req.body.itemName,
    categoryType: categoryArr,
    price: req.body.price,
    description: req.body.description,
    //location: geocodedLocation,
    seller: req.body.seller
};

Products.create(product)
    .then((newItem) => {
        res.send({ newItemId: newItem._id });
    })
    .catch((error) => {
        next(error);
    });
};

exports.getProducts = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: "show all products" });
};

exports.getProduct = (req, res, next) => {
    Products.findById(req.params.id, (error, product) => {
        if (error) {
            res
                .status(404)
                .send({ error: "Unable to locate product" });
        } else if (product) {
            res
                .status(200)
                .send(product);
        } else {
            next();
        }
    });
};

exports.updateProduct = (req, res, next) => { 
    const alternate = {confirm: true};
    Products.findByIdAndUpdate(req.params.id, req.body, alternate, (error, product) => {
        if (error) {
            next("Error, unable to locate");
        } else Products.findById(req.params.id, (error, product) => {
            res
                .status(200)
                .send(product);
        });
    });
};

exports.deleteProduct = (req, res, next) => {
    Products.findByIdAndDelete(req.params.id, (error, product) => {
        if (error) {
            res
                .status(404)
                .send({ error: "cannot find this product" });
        } else if (product) {
            res
                .status(200)
                .send({ success: true, msg: `delete product ${req.params.id}` });
        } else {
            next();
        }
    });  
};

