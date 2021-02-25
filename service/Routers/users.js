const express = require("express");
const usersRouter = express.Router();

const usersData = require("../data/usersData");

usersRouter.route("/")
    .get((req, res, next) => {
        res.status(200);
        res.json(usersData.usersList);
    })
    .post((req, res, next) => {
        console.log(req.body);
        // creating a new user
        // grab input information from req body
        // check if exists res.status(409) conflict
        // else
        res.sendStatus(201); // created
    });

usersRouter.route("/:id")
    .get((req, res, next) => {
        const matchingUsers = usersData.usersList.filter((user) => {
            return req.params["id"] === user.id;
        });
        if (matchingUsers.length === 1) {
            res.status(200);
            res.send(matchingUsers[0]);
        } else {
            res.sendStatus(404);
        }
    })
    .put((req, res, next) => {
        // update user
        res.sendStatus(501);
    })
    .delete((req, res, next) => {
        // delete user
        res.sendStatus(501);
    });

module.exports = usersRouter;