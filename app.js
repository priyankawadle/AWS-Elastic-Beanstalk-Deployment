const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.get('/start', (req, res) => {

    res.send('Hello World!');
});

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port:process.env.MYSQLPORT
});

con.connect(function(err) {
    if(err) throw err;
    console.log('Connected');  
});

app.get('/start', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/items', (req, res) => {
    const query='select * from customers';
    con.query(query,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send({status:200,data:result});
    })
});


app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT} app listening on port ${process.env.PORT}!`));