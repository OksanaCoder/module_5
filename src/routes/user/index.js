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

const writeUsers = (users) => {
    const userJsonPath = path.join(__dirname, 'users.json')
    fs.writeFileSync(userJsonPath, JSON.stringify(users))
}

const userRouter = express.Router()




userRouter.get("/:id", (req, res) => {
    const users = getUsers()
    const user = users.find(u => u.id === req.params.id)

    if (user)
       res.send(user)
    else
       res.status(404).send("NOT FOUND")
})
userRouter.get("/", (req, res) => {
    const users = getUsers()
    res.send(users)
})

userRouter.post("/", (req, res) => {
    console.log(req.body)
    const users = getUsers()
    users.push(req.body)
    writeUsers(users)
    res.send(req.body)
})
userRouter.put("/", (req, res) => {
    const users = getUsers()
    const index = users.map(x => x.id).indexOf(res.patam.id)
    if(idex === -1)
    return res.status(404).send('not found')
    else {
        users[index] = req.body
        writeUsers(users)
        res.send('PUT')
    }
   
})
userRouter.delete("/:id", (req, res) => {
    const users = getUsers()
    const filtered = users.filter(user => user.id !== req.params.id)
    if(users.length === filtered.length)
    return res.status(404).send('not found')
    else {
        writeUsers(filtered)
        res.send('DELETE')
    }
   
})

module.exports = userRouter;