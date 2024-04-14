function followAccount(username) {
  alert('Je volgt nu ' + username);
  
}

let zoeken = [
'Husseen Aden',
'Ziad Toumi',
'Shaakir Omar',
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('keyup', () => {
let input = searchInput.value.toLowerCase();
let result = zoeken.find(item => item.toLowerCase().includes(input));
if (result) {
 searchWrapper.classList.add('show');
 if (result === 'Husseen Aden') {
   searchResults.innerHTML = `<li><a href="overonsHusseen.html">${result}</a></li>`;
 } else if (result === 'Shaakir Omar') {
   searchResults.innerHTML = `<li><a href="OveronsShaakir.html">${result}</a></li>`;
 } else if (result === 'Ziad Toumi') {
   searchResults.innerHTML = `<li><a href="overonsZiad.html">${result}</a></li>`;
 } else {
   searchResults.innerHTML = `<li><a href="${result.toLowerCase().replace(' ', '')}.html">${result}</a></li>`;
 }
} else {
 searchWrapper.classList.remove('show');
 searchResults.innerHTML = '';
}
});
