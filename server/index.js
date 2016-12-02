// server/index.js
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = require('./app');
const router = express.Router();
const router2 = express.Router();
const PORT = process.env.PORT || 9000;
const yelpReviewData = require('./yelpReviewData');
const yelpBusinessData = require('./yelpBusinessData');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

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

// all of our routes will be prefixed with /api
app.use('/api', router);

