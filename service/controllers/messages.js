const Messages = require("../models/messages");

// @desc    get all messages
// @route   GET /api/v1/messages
// @access  Private
exports.getMessages = (req, res, next) => {
    Messages.find({ users: req.body.user }, (error, messages) => {
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

// @desc    get a message
// @route   GET /api/v1/messages/:id
// @access  Private
exports.getMessage = (req, res, next) => {
    Messages.findById(req.params.id, (error, message) => {
        if (error) {
            next(error);
        } else if (message) {
            res
                .status(200)
                .send(message);
        } else {
            res
                .status(404)
                .send({ error: "cannot find message" });
        }
    });
};

// @desc    create a message
// @route   POST /api/v1/messages
// @access  Private
exports.createMessage = (req, res, next) => {
    if (req.body.to == null || req.body.to.trim().length === 0) {
        res
            .status(406)
            .send({ error: "Must have a recipient" });
    }
    if (req.body.from == null || req.body.from.trim().length === 0) {
        res
            .status(406)
            .send({ error: "Must have a sender" });
    }
    if (req.body.subject == null || req.body.subject.trim().length === 0) {
        res
            .status(406)
            .send({ error: "Must have a subject" });
    }
    if (req.body.message == null || req.body.message.trim().length === 0) {
        res
            .status(406)
            .send({ error: "Must have a message" });
    }

    const message = {
        // TODO: replace with current authenticated user
        from: req.body.from,
        subject: req.body.subject,
        message: req.body.message
    };

    const messages = {
        // TODO: add current authenticated user
        users: [req.body.to, req.body.from],
        messages: [message],
    };

    Messages.create(messages)
        .then((newMessage) => {
            res
                .status(200)
                .send({ messageId: newMessage._id, success: true, msg: "create new message" });
        })
        .catch((error) => {
            console.log(error);
            next(error);
        });
};

// @desc    update message
// @route   PUT /api/v1/messages/:id
// @access  Private
exports.updateMessage = (req, res, next) => {
    if (req.body.from == null || req.body.from.trim().length === 0) {
        res
            .status(406)
            .send({ error: "Must have a sender" });
    }
    if (req.body.message == null || req.body.message.trim().length === 0) {
        res
            .status(406)
            .send({ error: "Must have a message" });
    }

    // push new message onto messages array
    const update = {
        $push: {
            messages: {
                // TODO: add current authenticated user
                from: req.body.from,
                message: req.body.message
            }
        }
    };

    // return the modified document rather than the original.
    const options = { new: true };
    
    Messages.findByIdAndUpdate(req.params.id, update, options, (error, messages) => {
        if (error) {
            next(error);
        } else if (messages) {
            res
                .status(200)
                .send(messages);
        } else {
            res
                .status(404)
                .send({ error: "cannot find message" });
        }
    });
};

// @desc    delete message
// @route   DELETE /api/v1/messages/:id
// @access  Private
exports.deleteMessage = (req, res, next) => {
    Messages.findByIdAndDelete(req.params.id, (error, message) => {
        if (error) {
            next(error);
        } else if (message) {
            res
                .status(200)
                .send({ success: true, msg: `delete message ${req.params.id}` });
        } else {
            res
            .status(404)
            .send({ error: "cannot find message" });
        }
    });  
};
