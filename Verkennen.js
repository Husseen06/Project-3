let zoeken = [
    'Husseen Aden',
    'Ziad Toumi',
    'Shaakir Omar',
  ];
  
  const searchInput = document.getElementById('search');
  const searchWrapper = document.querySelector('.wrapper');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = zoeken.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    Resultaten(results);
  });
  
  function Resultaten(results) {
    if (!results.length) { 
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li><a href= "overonsHusseen.html">${"Husseen Aden"}</a></li>,
    <li><a href= "overonsZiad.html">${"Ziad Toumi"}</a></li>,
    <li><a href= "overonsShaakir.html">${"Shaakir Omar"}</a></li>`; 
            
    })

  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<a href= "#"><ul>${content}</ul></a>`;
  }
