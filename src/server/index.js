const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const axios = require("axios")


const app = express()


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const { stringify } = require('querystring');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Dev Code

const apiURL = "https://api.meaningcloud.com/sentiment-2.1";   
const apiKey = "?key=";
const outFormat = "&of=json";
const txt = "&txt="
const model  = "&model=general";
const language = "&lang=en";
const key = process.env.API_KEY;

 app.get("/traerDatos", function (req, res){
    let datos = {};
    const name = req.query.name;
    const finalURL = apiURL + apiKey + key + outFormat + txt + name + model + language;
    console.log(`name: ${name}`);
    console.log(`finalURL: ${finalURL}`);
    axios.post(finalURL, {})
    .then(function (axiosRes){
        const r = axiosRes.data; 
        console.log(r);
        datos["sentence"] = name;
        datos["subjectivity"]= r.subjectivity; 
        res.json(datos);
        res.end();
    }) 
    .catch (function (error) {
        console.log(error);
        res.end();
    })
 })

