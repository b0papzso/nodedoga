import express from "express";

const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Hello, Papp Zsolt")
})

export default router