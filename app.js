var app, connect, express, fs, router, server;
fs = require('fs');
express = require('express');
app = express();
router = express.Router();


app.get('/', function(req, res) {
    res.send("Hello World");
});

server = app.listen(3000, function() {
  return console.log("listening on port %d", server.address().port);
});

module.exports = app;