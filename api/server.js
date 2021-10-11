const express = require("express");
const apirouter = require("./routes/index")
const app = express();
require("dotenv").config();
app.use(express.json());


app.use('/task',apirouter);

const port = process.env.port || 3001;

app.listen(port);