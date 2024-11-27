import express from 'express'
import __dirname from '../util/rootpath.js'
import path from 'path'

const router = express.Router()
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

export default router 