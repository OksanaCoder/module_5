const express = require("express")
const fs = require("fs")


const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    const userContent = fs.readFileSync("users.json")
    const userString = userContent.toString()
    users = JSON.parse(userString)
  
    res.send(users)

})



module.exports = userRouter;