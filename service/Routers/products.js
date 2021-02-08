const express = require('express');
const productsRouter = express.Router();
const productsData = require('../data/productsData');

productsRouter.route('/')
    .get((req, res) => {
        res.status(200);
        res.json(productsData.products);
    })
    .post((req, res) => {
        console.log(req.body);
        res.sendStatus(204); 
    });
    
productsRouter.route("/:id")
    .get((req, res) => {
        const matchingProducts = productData.products.filter((p) => {
            return req.params['id'] === p.id;
    })
        if (matchingProducts.length === 1) {
            res.status(200);
            res.send(matchingProducts[0]);    
        } else {
            res.sendStatus(400);
        }
    })
    .put((req, res) => {
        res.sendStatus(404);
    })
    .delete((req, res) => {
        res.sendStatus(505);
    });

module.exports = productsRouter;