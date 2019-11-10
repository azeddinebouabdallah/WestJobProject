const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");

const PORT = 3000;

const jsonParser = require("./jsonParser");

let app = express();

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/size', (req, res) => {
  return res.status(200).json({
    size: jsonParser.getSize()
  })
})

app.get("/:id", async (req, res) => {
  let id = req.params.id;
  console.log("HEY");

  let data = await jsonParser.jsonParserById(id);

  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
