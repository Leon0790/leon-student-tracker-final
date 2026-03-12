const express = require("express")
const bodyParser = require("body-parser")

const authRoutes = require("./routes/auth")
const studentRoutes = require("./routes/students")
const mpesaRoutes = require("./routes/mpesa")

const app = express()

app.use(bodyParser.json())
app.use(express.static("public"))

app.use("/api/auth",authRoutes)
app.use("/api/students",studentRoutes)
app.use("/api/mpesa",mpesaRoutes)

app.listen(3000,()=>{

console.log("Server running")

})
