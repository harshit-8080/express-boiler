const friend_M = require('../models/friend.models');
const friends = friend_M.friends

exports.getFriends = async (req , res) => {

    console.log("there");
   // res.redirect('back')
    res.status(200).json(friends);
}

exports.getFriend = async (req, res) => {
    
    const friend= friends[req.params.friendId];
    if (friend) res.status(200).json(friend);

}

exports.addFriend = async (req, res) => {
  
        if(!req.body.name) {
            return res.status(400).send({
                "error":"friend name missing"
            })
        }
    
        const friend = {
            id : friends.length + 1, 
            name: req.body.name
        }
    
        friends.push(friend);
    
        return res.status(201).json({
            "msg":"friend is added"
        })
    
    
}


exports.getGet = async (req, res) => {
    console.log("here");
    res.redirect('/friend');
    //console.log("back");
   // res.status(200).json({"username":"harshit raj"})
}

exports.getPost = async (req, res) => {
    res.status(200).send({"msg":"OK done"});
}