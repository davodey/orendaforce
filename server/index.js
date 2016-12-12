// server/index.js
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = require('./app');
const router = express.Router();
const yelpReviewData = require('./yelpReviewData');
const yelpBusinessData = require('./yelpBusinessData');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening on port 5000!`);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

function getApiData () {
    yelpReviewData(function(data) {
        router.get('/', function (req, res) {
            res.json(data);
        });
    });

    yelpBusinessData(function(data) {
        router.get('/biz', function (req, res) {
            res.json(data);
        });
    });
}

getApiData();
setInterval(getApiData, 3600000);

// all of our routes will be prefixed with /api
app.use('/api', router);

