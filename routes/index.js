var express = require('express');
var router = express.Router();

const todos = require('../data/todos');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { todos });
});

router.post('/todos', function(req, res) {
  todos.push({todo:req.body.todo, done:true});
  console.log(todos)
  res.redirect('/')
})

router.delete('/todos/:deleteId', function(req, res) {
  todos.splice(req.params.deleteId, 1);
  res.redirect('/')
})

module.exports = router;
