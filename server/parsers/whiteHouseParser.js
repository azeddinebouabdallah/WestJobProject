const cheerio = require("cheerio");
const axios = require("axios");

/*
axios.get(`https://www.google.com/search?q=${searchStringGoogle}&ie=UTF-8&num=100`, {
         headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36,gzip(gfe)'
         }
      }) 
 */
const whiteHouseParser = async url => {
  return new Promise(async (resolve, reject) => {
    page = await axios
    .get(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36,gzip(gfe)"
      }
    })
    console.log(2)
      let $ = cheerio.load(page.data);

      let newsTitle = $(".page-header__title").text();
      let newsContent = "";

      $(".page-content__content, .editor").each((index, p) => {
        p =
          $(p)
            .find("p")
            .text() + "\n";
        newsContent += p;
      });

      components = {
        newsTitle: newsTitle,
        newsContent: newsContent
      };
    resolve(components)
  })
  
   
};

module.exports = whiteHouseParser;
