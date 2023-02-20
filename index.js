const express = require('express');
const {Client} = require('pg')

const app = express();


const client = new Client({
  host:"localhost",
  user:"postgres",
  port:5432,
  password:"cata@1234567",
  database:"CATAPHARMA_WEB"
})
  app.listen(4000, () =>{
console.log("server is running on port 4000")
  })

client.connect();


app.get('/products/:id', (req,res)=>{
  client.query(`Select * from product_specifications where id=${req.params.id}`,(err,result)=>{
    if(!err){
      res.send(result.rows);
    }
  });
  client.end;
})