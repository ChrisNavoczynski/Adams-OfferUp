//import express from express
const express = require("express");
const app = express();
const port = 8000;

const mongoose = require("mongoose");
const debug = require("debug")("api");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

const productsRouter = require("./routers/products");
const usersRouter = require("./routers/users");

//mongoDB Connection
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const url = `mongodb+srv://${user}:${password}@projectapp.7ulwe.mongodb.net/local_library?retryWrites=true&w=majority`;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { debug("Connection is Successful"); },
    (err) => { debug(`Connection failure ${err}`); },
  );

const db = mongoose.connection;
db.on("error", () => debug("Error in MongoDB connection"));
db.on("close", () => { debug("Closed MongoDB connection"); 
});

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use("/v1/users", usersRouter);
app.use("/v1/products", productsRouter);

//Update products
app.post("/v2/products", (req, res) => {
    res.send("Future Updates Go Here!");
});
app.post("/v2/users", (req, res) => {
    res.status(501);
    res.send("New user update");
});
app.listen(port, () => {
    console.log(`My app is listening at http://localhost:${port}`);
});

