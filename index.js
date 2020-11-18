const express = require('express'); //importing express
const apiRoutes = require('./routes') //import api routes

const bodyParser = require('body-parser');//import body parser
const mongoose = require('mongoose'); //import mongoose


 const app = express(); //start app

 var port = process.env.PORT || 8080; //assign a port

 //Use API routes in the App
    app.use('/api', apiRoutes)

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

//connect to mongoose
const dbPath = 'mongodb://localhost/node-express-mongo';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('Database connected successfully');
}, error => {
    console.log(error, 'error');
})

 app.get('/',(req, res)=>{
     res.send("Welcome to Express"); //Welcome message
 })


 //launch the app to a specified port
 app.listen(port, ()=>{
    console.log("Listening to port " +port);
 })
