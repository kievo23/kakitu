var express = require('express');
var router = express.Router();

var DataPoint = require(__dirname + '/../models/DataPoint');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nitume API' });
});

router.get('/orders', function(req, res, next) {
  DataPoint.find({},{'_id': 0,'_v': 0}).sort({"date": -1}).then(function(d){
    res.render('orders', { title: 'Nitume Orders', orders: d });
  })

});

module.exports = router;
