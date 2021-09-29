const express = require('express')
const app = express();
const cors = require('cors');
const quotes = require('./quotes.json');

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;


function getRandomQuote(num) {
  return quotes[num];
}

function helloThere(req, res) {
    res.send('Hello there!\n find the most famouse quotes here');
}

function getAll(req,res) {
    res.send({quote : quotes});
}


function getRandom(req,res) {
    const index = Math.floor( Math.random() * quotes.length);
    res.send(getRandomQuote(index));
}


function getById(req, res){
    try{
        res.send(quotes[req.params.index]);
    }catch(error){
        console.log("index is out of range! try another index.");
        res.send({error :"index is out of range! try another index."});
    }
}

function getByRequestedWord(req,res) {
    const requestedWord = req.params.word.toLowerCase();
    const matchedWords=quotes.filter(quote => quote.toLowerCase().includes(requestedWord));
    res.json(matchedWords);
}

app.listen(port , () => {
  console.log(`port ${port}`);
})


app.get('/', helloThere);
app.get('/quotes', getAll);
app.get('/quotes/:index', getById);
app.get('/random', getRandom);
app.get('/:word', getByRequestedWord);

module.exports=app, getRandomQuote;
