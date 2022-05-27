require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json())
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
console.log('mongodb connected')
})

const port = 9000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})