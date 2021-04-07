const cors = require('cors')
const express = require('express');
const app = express();
const mysql = require('mysql');

let corsOptions = {
   origin: true,
   methods: ["GET","POST"],
   credentials: true,
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
 }

const pool= mysql.createPool({
    connectionLimit :   10,
    host            :   'localhost',
    user            :   'root',
    password        :   'root',
    database        :   'kingsize',
    port            :   '3307'
})

app.use(express.json());
app.use(express.urlencoded({
      extended: true
}));
  
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(cors(corsOptions))

app.listen(3000, () => {
    console.log('Server started!' )
});

  

  app.get('/', (req, res) => { 
      pool.getConnection((error,connection) => {

          if (error) {
              
                throw error
            }

          connection.query('SELECT * from user', (error, rows) => {

              connection.release()
            
              if (!error) {
                  res.send(rows)
              } else {
                  console.log(error)
              }
              console.log('data are:', rows)
              
          })
      })
  })

app.get('/Email', (req, res) => {
    pool.getConnection((error,connection) => {

        if (error) {
            
              throw error
          }
          console.log(req.body.email_signIp)
        connection.query('SELECT * FROM users WHERE email = ?;', [req.body.email_signIp],(error, rows) => {

            connection.release()
            console.log(req.body.email_signIp)
            if (!error) {
                
                res.send(data)

            } else {
                console.log(error)
                res.status(500).send({ error: "Something failed!" });
                return;
                
            }
        })
    })
})
 

  app.post('/login', (req, res) => { 

    pool.getConnection((error,connection) => {

        if (error) {throw error}

        connection.query("INSERT INTO user ( `email`, `password`) VALUES ( ?, ?);",[req.body.email_signUp, req.body.password_signUp], (error, data) => {
        
            connection.release()

            if (!error) {
                
                res.send(data)

            } else {
                
                res.status(500).send({ error: "Something failed!" });
                return;
                
            }
        })
    })
})
 
// app.route('/api/dogs').get((req,res) => {
//     res.send({
//         dogs: [{name: 'charlie'}, {name: 'lilly'}],
//     })
// });

// app.route('/:name').get((req,res) => {
//     const requestedDogName = req.params['name'];
//     res.send({ name: requestedDogName});
// });

// //sending a new object to an endpoint (to insert a new dog into the database)

// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.route('api/dogs').post((req,res) => {
//     res.send(201, req.body);
// });

// //changing an object at an endpoint

// app.route('/api/dogs/:name').put((req, res) => {
//     res.send(200, req.body)
// });

// //deleting an object at an endpoint

// app.route('/api/dogs/:name').delete((req, res) => {
//     res.sendStatus(204)
// });


