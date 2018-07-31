const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const app = express()
var routes = require('./routes.js');


app.use(bodyParser.json())
app.use(cookieParser());


app.use(express.static(__dirname + '/public'));


app.use(routes); // define routes last always


app.listen(3005, function(){
    console.log("Listening on port 3005!")
});