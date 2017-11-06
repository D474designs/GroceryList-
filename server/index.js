var express = require('express');
var bodyParser = require('body-parser');
var groceries = require('../database/index.js');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/groceries', function (req, res) {
  console.log(req.body);
  let description = req.body.description;
  let quanity = req.body.quanity !== undefined ? Number(req.body.quanity):1;

  if(!description) {
    res.sendStatus(400);

  }else {
    groceries.insertOne(description,quanity, function(err, data){
      if(err) {
        res.sendStatus(500);
      }else {
        res.json(data);
      }
    })

  }
 
})

app.get('/groceries', function (req, res) {
  groceries.selectAll(function(err, result){
    console.log(result);
    if(err) {
      res.sendStatus(500);
    }else {
      res.json(result)
    }
  })
})

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

