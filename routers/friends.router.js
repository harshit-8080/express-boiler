const express = require("express")
const Friend_C = require ("../controllers/friends.controller.js")

const friendRouter = express.Router()

friendRouter.get("/friend", Friend_C.getFriends);
friendRouter.get("/friend/:friendId", Friend_C.getFriend);
friendRouter.post("/friend", Friend_C.addFriend);

friendRouter.get("/get", Friend_C.getGet);

// app.get(/post/, (req, res) => { /* */ })
//will match /post , /post/first , /thepost , /posting/something , and so on.


friendRouter.get(/post/, Friend_C.getPost);

module.exports = friendRouter;