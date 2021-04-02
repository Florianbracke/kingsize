var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
      origin: "https://localhost:4200",
      methods: ["GET", "POST"]
    }
  });

app.get('/', (req, res) => res.send('hello!'));

io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});