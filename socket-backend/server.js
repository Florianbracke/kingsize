var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
        }
    });
const cors = require('cors');

var corsOptions = {
origin: true,
methods: ["GET","POST"],
credentials: true,
optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};

app.use((req, res, next) => {
res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
);
next();
});

app.use(cors(corsOptions))

app.get('/', (req, res) => res.send('hello!'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
       });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});