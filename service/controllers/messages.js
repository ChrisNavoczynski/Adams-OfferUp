const Messages = require("../models/messages");

// @desc    get all messages
// @route   GET /api/v1/messages
// @access  Private
exports.getMessages = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: "show all messages" });
};

// @desc    get a message
// @route   GET /api/v1/messages/:id
// @access  Private
exports.getMessage = (req, res, next) => {
    Messages.findById(req.params.id, (error, message) => {
        if (error) {
            res
                .status(404)
                .send({ error: "cannot find message" });
        } else if (message) {
            res
                .status(200)
                .send(message);
        } else {
            next();
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
        to: req.body.to,
        from: req.body.from,
        subject: req.body.subject,
        message: req.body.message
    };
    
    Messages.create(message)
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
exports.updateMessage = (res) => {
    res.sendStatus(501);
};

// @desc    delete message
// @route   DELETE /api/v1/messages/:id
// @access  Private
exports.deleteMessage = (req, res, next) => {
    Messages.findByIdAndDelete(req.params.id, (error, message) => {
        if (error) {
            res
                .status(404)
                .send({ error: "cannot find message" });
        } else if (message) {
            res
                .status(200)
                .send({ success: true, msg: `delete message ${req.params.id}` });
        } else {
            next();
        }
    });  
};
