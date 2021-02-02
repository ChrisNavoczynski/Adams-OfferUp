const express = require('express');
const productsRouter = express.Router();

const products = [
    {selectItem: "Specific Item name"},
    {id: "7", name: "Selected Item id=7", price: 80, photo: "link", available: true,
    photo: "Photo of Selected Item", description: "item details",
    map: "GoogleMap Link", save: true, contactSeller: "link"},
    
    { header: "Similar Items"},
    { id: "1", name: "Similar Item 1", price: 60, photo: "link", available: true},
    { id: "2", name: "Similar Item 2", price: 54, photo: "link", available: false},
    { id: "3", name: "Similar Item 3", price: 250, photo: "link", available: true},
    { id: "4", name: "Similar Item 4", price: 90, photo: "link", available: true}   
 ]

productsRouter.route('/')
    .get((req, res) => {
        res.json(products);
    })
    .post((req, res) => {
        console.log(req.body);
        res.sendStatus(204); //successful with no return
    });

productsRouter.route("/:id")
    .get((req, res) => {
        const matchingProducts = products.filter((p) => {
            return req.params['id'] === p.id;
    })
        if (matchingProducts.length === 1) {
            res.send(matchingProducts[0]);    
        } else {
            res.sendStatus(400);
        }
});
module.exports = productsRouter;