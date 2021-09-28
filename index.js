const express = require('express')
const app = express();
const cors = require('cors');
const quotes = require('./quotes.json');

const port = process.env.PORT || 3000;


function getRandomQuote(num) {
  return quotes[num];
}

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello there!\n find the most famouse quotes here'));


app.get('/quotes', (req,res) => {
    res.send({quote : quotes});
})


app.get('/random', (req,res) => {
  const index = Math.floor( Math.random() * quotes.length);
  res.send(getRandomQuote(index));
});


app.get('/quotes/:index', (req, res) => {
  try{
    res.send(quotes[req.params.index]);
  }catch(error){
    console.log("index is out of range! try another index.");
    res.send({error :"index is out of range! try another index."});
  }
})

app.get('/:word' ,(req,res) => {
    const requestedWord = req.params.word.toLowerCase();
    const matchedWords=quotes.filter(quote => quote.toLowerCase().includes(requestedWord));
    res.json(matchedWords);
})


app.listen(port , () => {
  console.log(`port ${port}`);
})

module.exports=app, getRandomQuote;
