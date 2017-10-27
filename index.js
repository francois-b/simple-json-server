var express = require('express');
fs = require('fs');

var app = express();
var json_data;

fs.readFile('data.json', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  json_data = data;
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(json_data);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
