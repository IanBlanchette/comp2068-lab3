var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const persons =[
	{
		path: 'ian',
		name: "Ian Blanchette",
		age: 28, 
		city: 'Little Britain', 
		birthplace: 'Huntsville',
		likes: 'pizza',
		dislikes: 'slow drivers'
	 },
	 {
		path: 'kia',
		name: 'Kia',
		age: 23,
		city: 'Little Britain',
		birthplace: 'Lindsay',
		likes: 'chocolate',
		dislikes: 'rude people',
		relation: 'fiance'
	}

	 ];

router.get('/:name', (req, res, next) =>
{
	const name = req.params.name;
	console.log(name);
	const person = persons.find(per => per.path === name);
	if(!person)
	{
		return next(new Error("Person does not exsist"));	
		
	}
	res.render('person', person);
});


module.exports = router;
