var express = require('express');
var router = express.Router();
//require mysql2
const mysql = require('mysql2');
//require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//add get() route for /actors
router.get('/actors', function(req, res, next) {
  models.actor.findAll({}).then(actorsFound => {
    res.render('actors', {
      actors: actorsFound
    });
  });
});

module.exports = router;
