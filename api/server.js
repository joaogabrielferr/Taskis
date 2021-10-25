const express = require("express");
const apirouter = require("./routes/index");
const cors = require("cors");
const app = express();
const { check, validationResult } = require('express-validator');
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use('/api',apirouter);

const port = process.env.port || 3001;



app.listen(port);