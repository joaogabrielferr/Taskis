const express = require("express");
const apirouter = require("./routes/index");
const cors = require("cors");
const app = express();
const { check, validationResult } = require('express-validator');

const UserModel = require("./models/Users");

require("dotenv").config();
app.use(express.json());
app.use(cors());

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/taskis?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
{useNewUrlParser : true});

app.get("/testemongodb/:username", async (req,res)=>{
    const user = new UserModel({username: req.params.username,password:"passwordteste"});
    await user.save();
    res.send("inserted data");
});


app.use('/api',apirouter);

const port = process.env.PORT || 3001;



app.listen(port);