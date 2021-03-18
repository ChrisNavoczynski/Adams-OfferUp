const User = require("../models/users");

// @desc    get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = (req, res, next) => {
    User.find({ }, (error, users) => {
        if (error) {
            next(error);
        } else if (users) {
            res
                .status(200)
                .send(users);
        } else {
            res
                .status(404)
                .send({ error: "cannot find users" });
        }
    });
};

// @desc    get a user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = (req, res, next) => {
    User.findById(req.params.id, (error, user) => {
        if (error) {
            next(error);
        } else if (user) {
            res
                .status(200)
                .send(user);
        } else {
            res
                .status(404)
                .send({ error: "cannot find user" });
        }
    });
};

// @desc    create user
// @route   POST /api/v1/users
// @access  Private
exports.createUser = (req, res, next) => {
    if (
        req.body.lastName.trim().length === 0 ||
        req.body.firstName.trim().length === 0
        ) {
            res
                .status(411)
                .send({error: "Must have first and last name"});
        }
    if (req.body.status == null) {
        res
            .status(406)
            .send({error: "Must pick account type: buyer, seller, admin"});
    }

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        accountID: req.body.accountID,
        status: req.body.status
    };
    
    User.create(user)
        .then((newUser) => {
            res
                .status(200)
                .send({ userId: newUser._id, success: true, msg: "create new user" });
        })
        .catch((error) => {
            res 
            .status(406)
            .send(error);
        });
};

// @desc    update user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = (req, res, next) => {
    const options = { new: true };
    const update = req.body;
    User.findByIdAndUpdate(req.params.id, update, options, (error, messages) => {
        if (error) {
            next(error);
        } else if (messages) {
            res
                .status(200)
                .send(messages);
        } else {
            res
                .status(404)
                .send({ error: "cannot find user" });
        }
    });
};

// @desc    delete user
// @route   DELETE /api/v1/users/:id
// @access  Private
exports.deleteUser = (req, res, next) => {
    User.findByIdAndDelete(req.params.id, (error, message) => {
        if (error) {
            next(error);
        } else if (message) {
            res
                .status(200)
                .send({ success: true, msg: `delete user ${req.params.id}` });
        } else {
            res
            .status(404)
            .send({ error: "cannot find user" });
        }
    });
};
