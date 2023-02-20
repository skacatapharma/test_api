const {Client} = require('pg')

const client = new Client({
  host:"localhost",
  user:"postgres",
  port:5432,
  password:"cata@1234567",
  database:"CATAPHARMA_WEB"
})

client.connect();

client.query(`Select * from product_specifications`,(err,res)=>{
  if(!err){
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
   client.end;
})