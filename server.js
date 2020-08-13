let quotes = [
    {id: 0, quote: "Cool Beans", author: "Nick Quandt", sentiment: "positive"}, 
    {id: 1, quote: "Arf!", author: "the neighbor's dog", sentiment: "positive"}, 
    {id: 3, quote: "Pain builds character!", author: "abusive parents", sentiment: "negative"}, 
    {id: 4, quote: "The darkest hour is just before the dawn", author: "Thomas Fuller", sentiment: "negative"}
];

require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Landing page");
})

app.get('/quotes', (req,res) => { 
    // receives a request with a 'sentiment' body attribute
    // 'sentiment' can be 'positive', 'negative', or empty
    // response delivers a random quote from a filtered or unfiltered list, as appropriate 
    let filteredQuotes = []; 
    if (req.body.sentiment){
        quotes.forEach(quote => {
            if (req.body.sentiment === quote.sentiment){
                filteredQuotes.push(quote);
            }
        })
    } else {
        filteredQuotes = quotes
    }
    res.json(filteredQuotes[Math.floor(Math.random()*filteredQuotes.length)]);
})

app.listen(process.env.PORT || 3001, () => console.log(`Server is running on ${process.env.PORT} or 3001`));