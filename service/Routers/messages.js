const express = require("express");
const usersRouter = require("../ad320group/AD320-TeamAdams/service/data/usersData");
const messagesRouter = express.Router();

//This represents an active chat between two users
const chats = [
    {id: "1", user1: "Bill", user2: "Bob"}
]
//This represents the messages within the chat
const messages = [
    {from: "Bill", to:"Bob", message:"Hello"}
]

messagesRouter.route('/v1/messages') 
  .post((req, res, next) => {
    // create a new chat
   // grab users name and id to identify chat
   res.send(req);
}) 

messagesRouter.route('/:id')
.get((req, res)=>{
    const matchingMessages = messages.filter((m) => {
        return req.params['id'] ===m.id;
    })});
