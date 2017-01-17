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
app.use('/public', express.static(path.join(__dirname + '/public')));

app.use("/static", express.static(__dirname + '/static'));

//app.set('view engine', 'ejs');

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.sendfile('public/views/index.html');
});


app.set('port', (process.env.PORT || 3000));

//console.log("Running on port 3000");

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })



//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('pages/index')
// });

// app.get('/cool', function(request, response) {
//   response.send(cool());
// });




// http.createServer(function(req, res) {
//   if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
//     // parse a file upload
//     var form = new formidable.IncomingForm();
//
//     form.parse(req, function(err, fields, files) {
//       res.writeHead(200, {'content-type': 'text/plain'});
//       res.write('received upload:\n\n');
//       res.end(util.inspect({fields: fields, files: files}));
//     });
//
//     return;
//   }
//
//   // show a file upload form
//   res.writeHead(200, {'content-type': 'text/html'});
//   res.end(
//     '<form action="/upload" enctype="multipart/form-data" method="post">'+
//     '<input type="text" name="title"><br>'+
//     '<input type="file" name="upload" multiple="multiple"><br>'+
//     '<input type="submit" value="Upload">'+
//     '</form>'
//   );
// }).listen(8080);
