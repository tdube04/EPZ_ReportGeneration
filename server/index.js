const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
var compression = require('compression');
var where = require("lodash.where");
var filter = require('lodash.filter');
const _ = require("lodash");

const models = require('./items_model');
const repo = require('./repository');
const { userInfo } = require('./fetchUser')

const pdfTemplate = require('./documents'); // html template code

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(compression()); //use compression 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, access-control-request-headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, authorization, Access-Control-Allow-Credentials, X-Auth-Token, X-Accept-Charset,X-Accept");
    res.header("Access-Control-Allow-Headers", "*");

    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/create-pdf', (req, res) => {

    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => { //passing getByOne json
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/items', (req, res) => {
    res.send(models.loadItem());


});

app.get('/', (req, res) => {
    res.send('Hello from Report geration API')
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
});
//<<<<======================================================>>>
app.get('/request', async (req, res, next) => {
    try {
     await axios.get('http://reportdomain.epzglobal.com/restapi/api/allReports.php')
            .then((response) => {
                 var filtered = response.data.
                    filter(reject => !(reject.sten == 0)).
                    filter(reject => !(reject.testName == null)).
                    filter(reject => !(reject.testName === 'EPZ MBTI')).
                    filter(reject => !(reject.testName === 'IN-TRAY EXERCISE')).
                    filter(reject => !(reject.testName === 'LEADERSHIP STYLE')).
                
                    filter(reject => !(reject.testName === 'MANAGERIAL IN-TRAY')).
                    filter(reject => !(reject.testName === 'EP career interest')).
                    filter(reject => !(reject.testName === 'EPZ EXECUTIVE BIODATA')).
                    filter(reject => !(reject.testName === 'EPZ Global Career Test')).

                    filter(reject => !(reject.testName === 'INDUSTRY PERSONALITY TEST')).
                    filter(reject => !(reject.testName === 'EMPLOYEE ENGAGEMENT SURVEY')).
                    filter(reject => !(reject.testName === 'EPZ EXECUTIVE  INTRAY EXERCISE')).
                    filter(reject => !(reject.testName === 'EP OCCUPATIONAL PERSONALITY TEST')).
                    filter(reject => !(reject.testName === 'EMOTIONAL INTELLIGENCE ASSESSMENT')).

                    filter(reject => !(reject.testName === 'General intellectual effectiveness')).
                    filter(reject => !(reject.testName === 'EP LEADERSHIP DEVELOPMENT ASSESSMENT')).
                    filter(reject => !(reject.testName === 'EPZ BIODATA AND INCOMPLETE SENTENCES')).
                    filter(reject => !(reject.testName === 'MANAGERIAL SITUATIONAL JUDGEMENT TEST'))

                   
                    //  .reduce((acc, val, ind) => {
                    //        const index = acc.findIndex(el => el.candidate_id === val.candidate_id);
                    //        if(index !== -1){
                    //           const key = Object.keys(val)[1];
                    //           acc[index][key] = val[key];
                    //        } else {
                    //           acc.push(val);
                    //        };
                    //        return acc;
                    //     }, []);
                   

                    // .reduce((accumalator, current) => {
                    //     if(!accumalator.some(item => item.testName === current.testName)) {
                    //       accumalator.push(current);
                    //     }
                    //     return accumalator;
                    // },[]);

                console.log(filtered);
                res.json(filtered);  
            })
            // let filtered = _.reject(response.data, 
            //     { 'sten': 0, });
            //     return filtered;

    } catch (error) {
        next(error);
    }

});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
