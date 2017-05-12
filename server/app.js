var express = require('express');
var app = express();
var path = require('path');


// serve static files
app.use(express.static(path.resolve('./server/public')));

// server index file
app.get('/info', function(req, res) {
    res.send("hello from the server");
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("server running, check", port);
});
