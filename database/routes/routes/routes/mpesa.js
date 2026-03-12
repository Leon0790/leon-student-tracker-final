const express = require("express")
const axios = require("axios")

const router = express.Router()

router.post("/stk",async(req,res)=>{

const {phone,amount} = req.body

// Daraja API request structure

res.json({
message:"STK Push sent",
phone,
amount
})

})

module.exports = router
