// allows to use environment variables
const dotenv = require('dotenv');
dotenv.config();

// Dependencies
const express = require('express')
const cors = require("cors");
const Aylien = require('aylien_textapi')
const port = 8000;

// Setup express to run server and routes
const app = express();
app.use(cors());
app.use(express.static('dist'));

// set aylien API credentias
var textApi = new Aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post("/api", (req, res) => {
    const { text } = req.body;
    console.log("Request to '/api' endpoint", text);
    textApi.sentiment({ text }, (error, result, remaining) => {
      console.log("Aylien Callback", result, remaining);
      res.send(result);
    });
  });

app.listen(port, () => console.log(`Example app listening on port ${PORT}!`));