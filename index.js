const express = require('express')

const app = express()
// app.use(express.json())
const userRouter = require('./src/routes/user').default
const cors = require('cors')

app.get('/', async (req, res) => {
    console.log('smth is happening')
    res.send('Hello, world!')
    
})
app.use(cors())
app.use('/users', userRouter)

app.listen(3001, () => console.log('The server is running on the port 3001'))


// sudo pkill node