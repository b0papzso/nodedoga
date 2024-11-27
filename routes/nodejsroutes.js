import express from "express";

const router = express.Router()

router.get("/", (req, res, next)=>{
    res.send(`A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.`),
    next()
})

export default router