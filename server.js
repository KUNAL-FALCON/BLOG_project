const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const connection=require('./connection')
const Post=require('./routes/route')

app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json());
app.use('/post',Post);
  
app.listen(3000);
  