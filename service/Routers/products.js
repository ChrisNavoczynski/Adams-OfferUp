const express = require('express');
const productsRouter = express.Router();
const productsControl = require('../controllers/productsControl');
const Products = require('../models/products');

productsRouter.route('/')
    .get((req, res, next) => {
        Products.find({}, (error, products) => {
        if (error) {next("Error, unable to locate")}
        else if (products) {res.send(products)}
        else {res.sendStatus(404)}
        })
    })
    .post(productsControl.newProduct);
    
productsRouter.route("/:id")
    .get((req, res, next) => {
        Products.findById(req.params.id, (error, products) => {
            if (error) {next("Error, unable to locate")}
            else if (products) {res.send(products)}
            else {res.sendStatus(404)}
        })
    })
    .delete((req, res, next) => {
        Products.findByIdAndDelete(req.params.id, (error, user) => {
            if (error) {next("Error, unable to locate ID")}
            else if (user) {res.sendStatus(204)}
            else {res.status(505)}
        })
    })
    .put((req, res, next) => { 
        const alternate = {confirm: true}
        Products.findByIdAndUpdate(req.params.id, req.body, alternate, (error, products) => {
            if (error) {next("Error, unable to locate")}
            else Product.findById(req.params.id, (error, products) => {
                res.send(products)
            })
        })
    });
module.exports = productsRouter;