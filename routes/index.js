var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ian', (req, res, next) =>
{
	res.render('ian', {});
});

router.get('/kia', (req, res, next) =>
{
	res.render('kia', {});
});

router.get('/mom', (req, res, next) =>
{
	res.render('mom', {});
});

router.get('/dad', (req, res, next) =>
{
	res.render('dad', {});
});

router.get('/nicole', (req, res, next) =>
{
	res.render('nicole', {});
});

module.exports = router;
