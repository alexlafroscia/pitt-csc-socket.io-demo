var fs, app, http, io;
fs = require('fs');
app = require('express')();
http = require('http').Server(app);
io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on('connection', function(socket) {
    console.log('A user connected');
    
    socket.on('message', function(data) {
        io.emit('message', data);
    });
    
    socket.on('disconnect', function() {
       console.log("A user disconnected"); 
    });
    
});

http.listen(3000, function() {
    console.log("listening on port %d", http.address().port);
});