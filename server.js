const express = require('express');
const cors = require('cors');

const mainRouting = require('./source/routers/main.route'); 

const app = express();
require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use('/api',mainRouting)






const server = app.listen(process.env.PORT,(err)=>{
    !err 
    ? console.log(`Server stardet on ${process.env.PORT}`) 
    : console.log(err) 
})