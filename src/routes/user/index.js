const express = require("express")
const fs = require("fs")
const path = require("path")


const getUsers = () => {
    const userJsonPath = path.join(__dirname, 'users.json')
    const userBuffer = fs.readFileSync(userJsonPath)
    const userString = userBuffer.toString()
    const users = JSON.parse(userString)
    return users
}
const userRouter = express.Router()


userRouter.get("/", (req, res) => {
    const users = getUsers()
    res.send(users)
})

userRouter.get("/:id", (req, res) => {
    const users = getUsers()
    const user = users.find(u => u.id === req.params.id)

    if (user)
       res.send(user)
    else
       res.status(404).send("NOT FOUND")
})

userRouter.post("/", (req, res) => {
    res.send('POST')
})
userRouter.put("/", (req, res) => {
    res.send('PUT')
})
userRouter.delete("/", (req, res) => {
    res.send('DELETE')
})

module.exports = userRouter;