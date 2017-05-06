var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();
// var absPath = path.join(__dirname, '../src/index.html');
// console.log('ErKo: ' + absPath);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
  //res.sendFile(absPath);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    // console.log(absPath);
  } else {
    open('http://localhost:' + port);
  }
})
