//var cool = require('cool-ascii-faces');
var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

//EXPRESS JS
var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.use(express.static(__dirname + '.static'));
app.use(express.static(__dirname + '/views'));

app.use(express.static(__dirname + '/static'));

//app.set('view engine', 'ejs');

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile('index.html');
});


app.set('port', (process.env.PORT || 3000));

//console.log("Running on port 3000");

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
