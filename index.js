const express = require('express')

const app = express()
const userRouter = require('./src/routes/user')

app.get('/hello', async (req, res) => {
    console.log('smth is happening')
    res.send('Hello, world!')
})

app.use('/users', userRouter)

app.listen(4000, () => console.log('The server is running on the port 4000'))


// sudo pkill node