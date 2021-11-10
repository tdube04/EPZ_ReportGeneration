const { readFileSync } = require('fs');
var where = require("lodash.where");
const _ = require('lodash');
// const fetch = require('node-fetch');
const request = require('request');


const url = 'http://reportdomain.epzglobal.com/restapi/api/allReports.php';

var filtered = () =>  request({ url, json: true,}, (err, response) => {
    var data = response.body;
 
   
})




var filtered = () => candidates.
    filter(reject => !(reject.sten == 0)).
    filter(reject => !(reject.testName == null)).
    filter(reject => !(reject.testName === 'EPZ MBTI')).
    filter(reject => !(reject.testName === 'IN-TRAY EXERCISE')).
    filter(reject => !(reject.testName === 'LEADERSHIP STYLE')).

    filter(reject => !(reject.testName === 'MANAGERIAL IN-TRAY')).
    filter(reject => !(reject.testName === 'EP career interest')).
    filter(reject => !(reject.testName === 'EPZ EXECUTIVE BIODATA')).
    filter(reject => !(reject.testName === 'EPZ Global Career Test'))


//     filter(reject => !(reject.testName === 'INDUSTRY PERSONALITY TEST')).
//     filter(reject => !(reject.testName === 'EMPLOYEE ENGAGEMENT SURVEY')).
//     filter(reject => !(reject.testName === 'EPZ EXECUTIVE  INTRAY EXERCISE')).
//     filter(reject => !(reject.testName === 'EP OCCUPATIONAL PERSONALITY TEST')).
//     filter(reject => !(reject.testName === 'EMOTIONAL INTELLIGENCE ASSESSMENT')).

//     filter(reject => !(reject.testName === 'General intellectual effectiveness')).
//     filter(reject => !(reject.testName === 'EP LEADERSHIP DEVELOPMENT ASSESSMENT')).
//     filter(reject => !(reject.testName === 'EPZ BIODATA AND INCOMPLETE SENTENCES')).
//     filter(reject => !(reject.testName === 'MANAGERIAL SITUATIONAL JUDGEMENT TEST'))

module.exports = { filtered };

