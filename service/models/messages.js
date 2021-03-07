const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    to: mongoose.Types.ObjectId,
    from: mongoose.Types.ObjectId,
    subject: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const messagesSchema = new mongoose.Schema({
    users: [{ user: { type: mongoose.Schema.Types.ObjectId, required: true } }],
    messages: [messageSchema],
});

const Messages = mongoose.model("Messages", messagesSchema);

module.exports = Messages;
