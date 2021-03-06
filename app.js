/*eslint-env node-update*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var responseTime = require('response-time');
var StatsD = require('node-statsd');
//var StatsD = require('node-statsd'),
//client = new StatsD();

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

var stats = new StatsD();

stats.socket.on('error', function (error) {
  console.error(error.stack);
});

app.use(responseTime(function (req, res, time) {
	  var stat = (req.method + req.url).toLowerCase()
	    .replace(/[:\.]/g, '')
	    .replace(/\//g, '_')
	  stats.timing(stat, time)
	}))
// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.send('hello world');  
});


app.get('/hello', function (req, res) {
  console.time('hello');
  res.send('hello tooo this morning!');
  console.timeEnd('hello');
});


app.get(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var server = app.listen(3000, function () {
  var port = server.address().port;
 console.log('Example app listening at port %s', port);
});
module.exports = server;
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
