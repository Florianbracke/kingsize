const express = require('express');

const bodyParser = require('body-parser');//const { body } = require('express-validator');

const authRoutes = require('./routes/auth');

const app = express();

const errorController = require('./controllers/error');

const ports = process.env.PORT || 3305;


//https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, ()=> console.log(`Listening on port ${ports}`));
