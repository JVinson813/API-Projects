let url ='https://cat-fact.herokuapp.com/facts/random'

const form = document.querySelector('form');
form.addEventListener('submit', fetchResults);
const video = document.createElement('iframe');
const text = document.querySelector('.card-text');
const page = document.querySelector('body');
video.src = "https://www.youtube.com/embed/s4czKWt4B7g"; // video unavailable :(

function fetchResults(e) {
    e.preventDefault();

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(json){
    console.log(json);
    let facts = json.text
    text.innerHTML = facts
    
})
}
const randomFact = Array[Math.floor(Math.random() * Array.length)];





