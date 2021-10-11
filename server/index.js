const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const dotenv =require('dotenv');

const apiCallFromRequest = require('./Request')

const http = require('http')

const models = require('./items_model');
const repo = require('./repository');
const {userInfo} = require('./fetchUser')

const pdfTemplate = require('./documents');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// enable CORS without external module
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://epz-reportgeneration.herokuapp.com/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.post('/create-pdf',  (req, res) => {

    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => { //passing getByOne json
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/items', (req,res) => {
    res.send(models.loadItem());
});

app.get('/', (req, res) => {
    res.send('Hello from Report geration API')
  });

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
});

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
http.createServer( cors(),(req, res) => {
    if(req.url === "/request"){
        apiCallFromRequest.callApi(function(response){
            //console.log(JSON.stringify(response));
            res.write(JSON.stringify(response));
            res.end();
        });
    }
    
    
    // res.end();
}).listen(PORT, () => console.log(`Listening on port ${PORT}`));

