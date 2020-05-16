// allows to use environment variables
const dotenv = require('dotenv');
dotenv.config();

// Dependencies
const Aylien = require('aylien_textapi')
const cors = require('cors')
const port = 8000;
const bodyParser = require('body-parser');
const express = require('express')
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get("/", (req, res) => res.sendFile("index.html"));

// set aylien API credentias
var textApi = new Aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


app.post("/api", (req, res) => {
    const { text } = req.body;
    textApi.sentiment({ text }, (error, result, remaining) => {
      console.log("Aylien response", result, remaining);
      res.send(result);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${ port }!`));