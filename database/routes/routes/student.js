const express = require("express")
const connectDB = require("../database/db")

const router = express.Router()

router.get("/",async(req,res)=>{

const db = await connectDB()

let students = await db.collection("students").find().toArray()

students.forEach(s=>{

const total =
s.math+
s.english+
s.kiswahili+
s.science+
s.agriculture+
s.social+
s.pretechnical+
s.arts+
s.religion

s.total = total
s.mean = total/9

})

students.sort((a,b)=>b.total-a.total)

students.forEach((s,i)=> s.rank = i+1)

res.json(students)

})

router.post("/",async(req,res)=>{

const db = await connectDB()

await db.collection("students").insertOne(req.body)

res.json({message:"Saved"})

})

router.put("/:id",async(req,res)=>{

const db = await connectDB()

await db.collection("students").updateOne(
{_id:require("mongodb").ObjectId(req.params.id)},
{$set:req.body}
)

res.json({message:"Updated"})

})

router.delete("/:id",async(req,res)=>{

const db = await connectDB()

await db.collection("students").deleteOne(
{_id:require("mongodb").ObjectId(req.params.id)}
)

res.json({message:"Deleted"})

})

module.exports = router
