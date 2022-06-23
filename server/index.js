require("dotenv").config();
const express = require("express");
const path = require("path");
const controller = require("./controller.js")

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

var cors = require('cors');
app.use(cors());

// able to use req.body, body parser
app.use(express.json())

// set up RESTful routes:
app.post('/moment', controller.create);

app.get('/moments', controller.read);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);