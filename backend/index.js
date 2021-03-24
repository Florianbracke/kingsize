const express = require('express');

const bodyParser = require('body-parser');//const { body } = require('express-validator');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json()); //https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use((req, res, next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.listen(ports, ()=> console.log(`Listening on port ${ports}`));
