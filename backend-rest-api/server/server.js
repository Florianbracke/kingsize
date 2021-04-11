const cors = require('cors')
const express = require('express');
const app = express();
const mysql = require('mysql');
//const bodyparser = require('body-parser')


app.use(express.json());
app.use(express.urlencoded({ extended: true}));



const pool= mysql.createPool({
    connectionLimit :   10,
    host            :   'localhost',
    user            :   'root',
    password        :   'root',
    database        :   'kingsize',
    port            :   '3307'
})


  
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 'application/json; charset=utf-8', Accept");
    next();
});

let corsOptions = {
    origin: "*",
    methods: ["GET","POST"],
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))


app.get('/Homepage/:id', (req, res) => {  // randomize id's
    
   const id = req.params.id;

console.log(JSON.stringify(req.params.id))

      pool.getConnection((error,connection) => {

          if (error) {
              
                console.log(error + "error homepage")
            }

          connection.query("SELECT * from user WHERE id = ?;",id, (error, rows) => {
            
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

app.post('/Email', (req, res) => {

    pool.getConnection((error,connection) => {

    if (error) {throw error}
 
  connection.query('SELECT * from user WHERE email = ?', [req.body.email], (error, rows) => {

      connection.release()
    
            if (!error) {
                
                res.send(rows)
                console.log(rows)
            } else {
                
                res.status(500).send({ error: "Something failed!" });
                return;
                
            }
        })
        
    })
})
 
app.post('/login', (req, res) => { 

    pool.getConnection((error,connection) => {
        
        if (error) {console.log("error on login" + error) }

        connection.query("INSERT INTO user ( `email`, `password`) VALUES ( ?, ?);",[req.body.email_signUp, req.body.password_signUp], (error, data) => {
        
            connection.release()

            if (!error) {
                
                //res.send(data)

            } else {
                
                res.status(500).send({ error: "Something failed!" });
                return;
                
            }
        })
    })
})

app.post('/yes', (req, res) =>{
   
const id= req.body.IdData

console.log(req.body.id)

    pool.getConnection((error,connection) => {
       
        if (error) {throw error}
       
        connection.query("INSERT INTO user_table (id_connection) VALUE (?);",req.body.id, (error, data) => {
        
            connection.release()

            if (!error) {
                
                res.send(data)

            } else {
                
                res.status(500).send({ error});
                return;
                
            }
            
        })
    })

})


app.listen(3000, () => {
    console.log('Server started!' )
});