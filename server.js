let quotes = [
{id: 0, quote: "f you change the way you look at things, the things you look at change.", author: "Anonymous", sentiment: "negative"},
{id: 0, quote: "Change the world by being yourself.", author: "Amy Poehler", sentiment: "positive"},
{id: 0, quote: "Every moment is a fresh beginning.", author: "T.S Eliot", sentiment: "negative"},
{id: 0, quote: "Tough times never last but tough people do.", author: "Robert H. Schiuller", sentiment: "negative"},
{id: 0, quote: "One day the people that don’t even believe in you will tell everyone how they met you.", author: "Johnny Depp", sentiment: "negative"},
{id: 0, quote: "If you tell the truth you don’t have to remember anything.", author: "Mark Twain", sentiment: "positive"},
{id: 0, quote: "Have enough courage to start and enough heart to finish. ", author: "essica N. S. Yourko", sentiment: "negative"},
{id: 0, quote: "I don’t need it to be easy, I need it to be worth it.", author: "Lil Wayne", sentiment: "negative"},
{id: 0, quote: "Try to be a rainbow in someone’s cloud.", author: "Maya Angelou", sentiment: "positive"},
{id: 0, quote: "Wanting to be someone else is a waste of who you are.", author: "Kurt Cobain", sentiment: "negative"},
{id: 0, quote: "The time is always right to do what is right.", author: "Martin Luther King Jr.", sentiment: "positive"},
{id: 0, quote: "Let the beauty of what you love be what you do.", author: "Rumi", sentiment: "positive"},
{id: 0, quote: "May your choices reflect your hopes, not your fears.", author: "Nelson Mandela", sentiment: "positive"},
{id: 0, quote: "Life becomes easier when you learn to accept the apology you never got.", author: "R. Brault", sentiment: "negative"},
{id: 0, quote: "The meaning of life is to give life meaning.", author: "Ken Hudgins", sentiment: "positive"},
{id: 0, quote: "Embrace the glorious mess that you are.", author: "Elizabeth Gilbert", sentiment: "negative"},
{id: 0, quote: "Normality is a paved road: it’s comfortable to walk but no flowers grow.", author: "Vincent van Gogh", sentiment: "negative"},
{id: 0, quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "Anonymous", sentiment: "negative"},
{id: 0, quote: "Don’t be afraid of failure! Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford", sentiment: "negative"},
{id: 0, quote: 'If you fail, never give up because F.A.I.L. means “First Attempt In Learning!”', author: "Anonymous", sentiment: "negative"},
{id: 0, quote: "Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.", author: "Thich Nhat Hanh", sentiment: "negative"},
{id: 0, quote: "It is only in our darkest hours that we may discover the true strength of the brilliant light within ourselves that can never, ever, be dimmed.", author: "Doe Zantamata", sentiment: "negative"},
{id: 0, quote: "I will love the light for it shows me the way, yet I will endure the darkness for it shows me the stars.", author: "Og Mandino", sentiment: "negative"},
{id: 0, quote: "Next to trying and winning, the best thing is trying and failing.", author: "L.M. Montgomery", sentiment: "negative"},
{id: 0, quote: "The gem cannot be polished without friction, nor man perfected without trials", author: "Chinese Proverb", sentiment: "negative"},
{id: 0, quote: "Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it.", author: "Michael Jordan", sentiment: "negative"},
{id: 0, quote: "Use what you’ve been through as fuel, believe in yourself and be unstoppable!", author: "Yvonne Pierre", sentiment: "positive"},
{id: 0, quote: "Believe that life is worth living and your belief will help create the fact.", author: "William James", sentiment: "negative"},
{id: 0, quote: "If you don’t like something change it; if you can’t change it, change the way you think about it.", author: "Mary Engelbreit", sentiment: "negative"},
{id: 0, quote: "Sometimes our light goes out, but is blown again into instant flame by an encounter with another human being.", author: "Albert Schweitzer", sentiment: "negative"},
{id: 0, quote: "I learned there are troubles of more than one kind. Some come from ahead, others come from behind. But I’ve bought a big bat. I’m all ready, you see. Now my troubles are going to have trouble with me.", author: "Dr. Seuss", sentiment: "positive"},
{id: 0, quote: "In three words I can sum up everything I’ve learned about life. It goes on.", author: "Robert Frost", sentiment: "positive"},
{id: 0, quote: 'Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day, saying, “I will try again tomorrow.”', author: "Mary Anne Radmacher", sentiment: "negative"},
{id: 0, quote: "Never regret a day in your life . Good days give you happiness and bad days give you experience.", author: "Unknown", sentiment: "positive"},
{id: 0, quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.", author: "Dr. Seuss", sentiment: "positive"},
{id: 0, quote: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt", sentiment: "negative"},
{id: 0, quote: "It’s not about how hard you can hit; it’s about how hard you can get hit and keep moving forward.", author: "Rocky Balboa, Rocky", sentiment: "negative"},
{id: 0, quote: "The way get started is to quit talking and begin doing.", author: "Walt Disney", sentiment: "negative"},
{id: 0, quote: "Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.", author: "Les Brow", sentiment: "positive"},
{id: 0, quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", sentiment: "negative"},
{id: 0, quote: "Staying positive does not mean that things will turn out okay. Rather it is knowing that you will be okay no matter how things turn out.", author: "Unknown", sentiment: "negative"},
{id: 0, quote: "You don’t find will power, you create it.", author: "Anonymous", sentiment: "positive"},
{id: 0, quote: "Don’t wait for opportunity. Create it.", author: "Anonymous", sentiment: "positive"},
{id: 0, quote: "The first and greatest victory is to conquer self.", author: "Plato", sentiment: "positive"}
];
const cors = require('cors')
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors({
    "origin": process.env.CLIENT_URL
}))


app.get('/', (req, res) => {
    res.send("Landing page");
})

app.post('/quotes', (req,res) => { 
    // receives a request with a 'sentiment' body attribute
    // 'sentiment' can be 'positive', 'negative', or empty
    // response delivers a random quote from a filtered or unfiltered list, as appropriate 
    let filteredQuotes = []; 
    console.log("Server received sentiment: " + req.body.sentiment)
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