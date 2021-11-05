const poemContainer = document.getElementById('poem-container');
const poemText = document.getElementById('poem');
const twitterBtn = document.getElementById('twitter');
const newPoemButton = document.getElementById('new-poem');
const loader = document.getElementById('loader');


// show loading
function loading() {
    loader.hidden= false;
    poemContainer.hidden=true;
}

function complete() {
    loader.hidden= true;
    poemContainer.hidden= false;
}

function newPoem() {
    loading();
    const poem = localPoems[Math.floor(Math.random() * localPoems.length)];
    poemText.textContent = poem.text;
    complete();
}

const displayedText = poem.text
// Tweet Quote
function tweetPoem() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${poemText.innerText}`;
    window.open(twitterUrl, '_blank');
  }
  
// event listener
newPoemButton.addEventListener('click', newPoem);
twitterBtn.addEventListener('click', tweetPoem);
// On load
newPoem();