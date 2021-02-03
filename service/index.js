//import express from express
const express = require("express");
const app = express();
const port = 8000;

const productsRouter = require('./routers/products');
//const usersRouter = require('./routers/users');

app.use(express.json());

//app.use('/v1/users', usersRouter);
app.use('/v1/products', productsRouter);

//Update products
app.post('/v2/products', (req, res) => {
    res.send("Future Updates Go Here!")
})

app.listen(port, () => {
    console.log(`My app is listening at http://localhost:${port}`);
});

