const fs = require("fs");
const constants = require("./constants/constants");

const whiteHouseParser = require("./parsers/whiteHouseParser");

const jsonParserById = async id => {
  let fileContent = JSON.parse(fs.readFileSync("./Feed/data.json"));

  let data = fileContent[id];
  let newsType = "blog";
  let components = {};

  constants.types.forEach(type => {
    if (data.claim_url.includes(type)) {
      newsType = type;
    }
  });
  data["news_type"] = newsType;

  if (newsType === "blog") {
    if (data.claim_url.includes("whitehouse")) {
      data['content'] = await getDataFromParsers(data.claim_url)
      return data
    }
  } else {
    return data;
  }
};

const getDataFromParsers = async url => {
  return new Promise(async (resolve, reject) => {
    whiteHouseParser(url).then(d => {
      resolve(d);
    });
  })
}

const getSize = () => {
  let fileContent = JSON.parse(fs.readFileSync("./Feed/data.json"));
  return fileContent.length
}

module.exports = {jsonParserById, getSize};
