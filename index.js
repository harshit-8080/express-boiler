const express = require('express');

const Friend_R = require ("./routers/friends.router.js")

const app = express();

const PORT = 2000;

// middlewares
app.use(function (req, res, next) {
    console.log("MIDDLEWARE 1ST");
    if (req.hostname === "localhost") {
         //res.status(500).json({"error" : "internal server error"})
         next();
    }
})

app.use(express.json());
app.use(Friend_R);

app.listen(PORT , ()=>{
    console.log("server started On 2000");

})

