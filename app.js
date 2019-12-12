const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
app.use(cors());
 
//Import Routes
const moviesRoute = require('./routes/movies');
app.use('/movies', moviesRoute);

//  include a static file serving middleware
app.use(express.static(__dirname + '/'));

//ROUTES
app.get('/' , (req,res) => {
    res.send('we are on home');
})

// Get all Data
app.get('/data', function(req,res){
    res.sendfile('index.html');
   }); 


//Connect to DB

//For Mongo Cloud
//mongoose.connect(process.env.DB_CONNECTION, {
//    useNewUrlParser: true,
//})
//.then(() => console.log('DB Connected!'))
//.catch(err => {
//    console.log("Connection Error: ", err.message);
//});

//for local database
mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true});

//Listening to the server on port 3000
app.listen(3000);