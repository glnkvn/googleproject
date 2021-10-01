const givenQuotes=require('../quotes.json');

const search_1 = document.querySelector('#search1');
const form = document.querySelector('form');

function Search(searchValue) {
    const query=document.querySelector('ol');
    const quoteContent= document.createElement('li');
    quoteContent.textContent=` ${searchValue}`;
    query.append(quoteContent);
}

const cardValid = () => {new Promise(getInfos)};


form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    const validInfo = () => new Promise(getInfos);
    const searchValue = e.target.query.value;

    getRequestedWord(givenQuotes,searchValue);

    fetch('http://localhost:3000/:searchValue')
            .then(res => res.json())
            .then(printRequestedWord)
            .catch(console.warn);

    
    function getInfos (res, rej){     
        if (searchValue.length ){
            let result = Search(searchValue);
            printRequestedWord(searchValue);
            res(result);
        }else{
            const err = "No given input";
            rej(err)
        }
    }
    validInfo()
        .then(success =>  console.log(success))
        .catch((error) => {
        console.error(error)
    })

                     
})

function printRequestedWord(data) {
    const param = document.querySelector("p");
    param.textContent = `${data}+ worked`;

}

function getRequestedWord(lists,word) {
    const requestedWord = word.toLowerCase();
    const matchedWords=lists.filter(quote => quote.toLowerCase().includes(requestedWord));
    const result=document.createElement('p');
    result.innerHTML=matchedWords;
    return matchedWords;
}

// const para = document.querySelector("p");
// para.textContent = "This is new.";

// const para = document.querySelector("p");
// para.textContent = "data";