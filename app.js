import express from 'express'
import defaultroute from './routes/defaultroutes.js'
import expressroute from './routes/expressroutes.js'
import nodejsroute from './routes/nodejsroutes.js'
import greeting from './routes/greetingroutes.js'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: false}))

app.use("/", defaultroute)
app.use('/greetings', greeting)
app.use('/express', expressroute)
app.use('/nodejs', nodejsroute)

app.listen(PORT, () => console.log('Hi there!'))