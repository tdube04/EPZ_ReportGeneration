const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const dotenv =require('dotenv');

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));