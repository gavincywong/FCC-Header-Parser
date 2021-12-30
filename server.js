require('dotenv').config();
var express = require('express');
var port = process.env.PORT || 3000
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
 // Code below displays all header information
 //console.log(JSON.stringify(req.headers));
  res.json({
    ipaddress: req.headers['x-forwarded-for'],
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  })
});

var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
