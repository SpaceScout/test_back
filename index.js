

const PORT = "5000"
const express = require("express")
const {json} = require("express");
const app = express()

app.use(json())

app.listen(PORT, () => console.log("писька"))