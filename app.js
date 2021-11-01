const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const path = require('path')
require('dotenv/config')

var corsOptions = {
  origin: 'https://msmghee.herokuapp.com',
  optionsSuccessStatus: 200
}



app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect(
    process.env.DB_CONNECTION, {
    "useUnifiedTopology":true,
    "useCreateIndex":true,
    "useNewUrlParser":true,
    "useFindAndModify":false,
  } , ()=>{
    console.log("database is connected !!!!")
  })



const router = require("./routes/route")
app.use(router)

app.use(express.static(path.resolve(__dirname, "./client/dist/msmGhee")));
app.listen(4000);