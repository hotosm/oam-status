'use strict';

require('newrelic');
var request = require('request');
var express = require('express');
var app = express();

/**
 * The port to serve the webpage on
 */
var port = process.env.PORT || 3000;

/**
 * Get the status from New Relic
 */
var getNewRelicStatus = function (cb) {
  var options = {
    url: 'https://api.newrelic.com/v2/applications/' + process.env.NEW_RELIC_APP_ID + '.json',
    headers: {
      'x-api-key': process.env.NEW_RELIC_API_KEY
    }
  };

  request(options, function (error, response, body) {
    if (error) {
      return cb('unknown');
    }

    var data;
    try {
      data = JSON.parse(body);
      return cb({
        health: data.application.health_status,
        lastCheck: data.application.last_reported_at
      });
    } catch (e) {
      return cb({
        health: 'unknown',
        lastCheck: null
      });
    }
  });
};

/*
 * Start a simple Express server.
 */
app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('.html', require('ejs').renderFile);
app.get('/', function (req, res) {
  getNewRelicStatus(function (status) {
    status.catalogUrl = process.env.CATALOG_URL || 'https://oam-catalog.herokuapp.com';
    res.render('index', status);
  });
});
app.get('/healthcheck', function (req, res) {
  // Enable cors for this endpoint.
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  getNewRelicStatus(function (status) {
    res.send(status);
  });
});
app.get('/ping', function (req, res) {
  res.send('pong');
});
app.listen(port, function () {
  console.info('Web server started on port ' + port + '.\n');
});
