import express from 'express'
import routes from './routes/routes.js'
import expressroute from './routes/expressroutes.js'
import nodejsroute from './routes/nodejsroutes.js'
import greeting from './routes/greetingroutes.js'

const app = express()
const PORT = 3000

app.use('/greetings', greeting)
app.use('/express', expressroute)
app.use('/nodejs', nodejsroute)

app.listen(PORT, () => console.log('Hi there!'))