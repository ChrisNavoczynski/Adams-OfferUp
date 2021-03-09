const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    from: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const messagesSchema = new mongoose.Schema({
    users: [String],
    messages: [messageSchema],
});

const Messages = mongoose.model("Messages", messagesSchema);

module.exports = Messages;
