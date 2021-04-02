const cors = require('cors')
const express = require('express');
const app = express();
const mysql = require('mysql');

const pool= mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            :   'root',
    password        :   'root',
    database        :   'kingsize'
})

var corsOptions = {
  origin: true,
  methods: ["GET","POST"],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(express.json());

app.use(express.urlencoded({
      extended: true
}));
  
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(cors(corsOptions))

app.listen(8000, () => {
    console.log('Server started!')
  });

app.route('/api/dogs').get((req,res) => {
    res.send({
        dogs: [{name: 'charlie'}, {name: 'lilly'}],
    })
});

app.route('/:name').get((req,res) => {
    const requestedDogName = req.params['name'];
    res.send({ name: requestedDogName});
});

//sending a new object to an endpoint (to insert a new dog into the database)

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.route('api/dogs').post((req,res) => {
    res.send(201, req.body);
});

//changing an object at an endpoint

app.route('/api/dogs/:name').put((req, res) => {
    res.send(200, req.body)
});

//deleting an object at an endpoint

app.route('/api/dogs/:name').delete((req, res) => {
    res.sendStatus(204)
});

