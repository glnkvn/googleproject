
const search_1 = document.querySelector('#search1');
const form = document.querySelector('form');

function Search(searchValue) {
    const query=document.querySelector('ol');
    const quoteContent= document.createElement('li');
    quoteContent.textContent=` ${searchValue}`;
    query.append(quoteContent);
}

const cardValid = () => new Promise(getInfos);

// search_1.addEventListener('mouseover',(e) => {
//     search_1.style.backgroundColor = "blue";
   
// })

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    const validInfo = () => new Promise(getInfos);
    const searchValue = e.target.query.value;

    function getInfos (res, rej){     
        if (searchValue.length ){
            let result = Search(searchValue);
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

function renderStudent(search){
//    search_key.textContent=search; 
}

function handleFormSubmit(e) {
    e.preventDefault();
    const name = e.target.search;
    renderStudent(search);
}

module.exports={
    renderStudent,
    handleFormSubmit
}