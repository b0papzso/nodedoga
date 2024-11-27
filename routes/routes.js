import express from 'express'
import __dirname from '../util/rootpath.js'

const router = express()
router.get("/", (req, res, next)=>{
    res.send(`Hello, Papp Zsolt`),
    next()
})

export default router 