const express = require('express');

const app = express();

app.listen(8000, () => {
    console.log('Server started!')
  });

//getting one specific object from an endpoint

app.route('api/dogs/').get((req,res) => {
    res.send({
        dogs: [{name: 'charlie'}, {name: 'lilly'}],
    })
});

app.route('api/dogs/:name').get((req,res) => {
    const requestedDogName = req.params['name'];
    res.send({ name: requestedDogName});
});

//sending a new object to an endpoint (to insert a new dog into the database)

