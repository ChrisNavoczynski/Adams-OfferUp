const Products = require("../models/products");
const { getLocation } = require("../util/GoogleMapWrapper");
const debug = require("debug")("api");

exports.getProducts = (req, res, next) => {
    Products.find({}, (error, messages) => {
        if (error) {
            next(error);
        } else if (messages) {
            res
                .status(200)
                .send(messages);
        } else {
            res
                .status(404)
                .send({ error: "cannot find messages" });
        }
    });
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

exports.createProduct = async (req, res, next) => {
    if (req.body.itemName.trim().length === 0) {
        res.status(411);
        res.send({error: "A Product name is required"});
    }
    if (req.body.price == null || req.body.price <= 0) {
        res.status(406);
        res.send({error: "Price cannot be zero $ or lower"});
    }

    // This Google Map portion taken directly from Jason's sample code
    if (req.body.location.length === 0) {
        res.status(400);
        res.send({ error: "Please enter a valid address" });
    } else {
    let geocodedLocation;
        try {
            geocodedLocation = await getLocation(req.body.location);
            debug(`Geocoded Location ${geocodedLocation}`);
        } catch (err) {
            res
                .status(400)
                .send({ error: "Invalid Location" });
            debug(`Location error ${err}`);
        }
       
    const product = {
        itemName: req.body.itemName,
        categoryType: req.body.categoryType,
        available: req.body.available,
        price: req.body.price,
        description: req.body.description,
        seller: req.body.seller,
        location: geocodedLocation,
    };

    Products.create(product)
        .then((newItem) => {
            res
            .status(200)
            .send({ ItemId: newItem._id });
        })
        .catch((error) => {
            res
            .status(406)
            .send(error);
    });
}};

