const cheerio = require("cheerio");

const permaParser = url => {
  fetch(url)
    .then(res => res.json())
    .then(page => {
        let $ = cheerio.load(page)
        
        
    })
    .catch(err => console.error(err));
};
