let quotesList = [];
let nextId = 0;

require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("In base route");
})

app.get('/quotes', (req,res) => {
    res.send("In quotes '/' route");
})

app.listen(process.env.PORT || 3001, () => console.log(`Server is running on ${process.env.PORT} or 3001`));