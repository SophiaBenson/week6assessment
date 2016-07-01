var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());
var mongoose = require('mongoose');
mongoose.connect( 'localhost:27017/superHeroDB' );
var returnedModel = require('../models/mongo.js');



//get basic url
app.get("/", function(req, res){
  console.log("bird is in base url");
  res.sendFile(path.resolve('./public/views/index.html'));
});//end base url
app.get('/getHeroes', function (req,res) {
  console.log("bird is in getHeroes");
  returnedModel.find().then(function (data) {
    res.send(data);
  });

});//end of get heroes
//static public
app.use(express.static('public'));

//spin up server
app.listen( 4242, "localhost", function(req, res){
  console.log("Server listening on 4242 ");
});//end app.listen

//add hero object route
app.post('/addHeroes', function(req, res){
  console.log("in addHeroes, bird has: ");
  var objectToSave={
    alias: req.body.alias,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    city: req.body.city,
    power_name: req.body.power_name
  };
  var newHero=returnedModel(objectToSave);
  newHero.save();
  res.send(true);
});//end heroes post
