const express = require('express');
const List = require('../models/list')
const router = express.Router();

router.get('/', (req, res, next) => {
  List.find()
  .then((list) => {res.render('index', {message: `오늘 할일 ${list.length}`, todolist: list})
console.log(list)})
  .catch((err) => console.log(err));
});

router.post('/', (req,res,next) => {
  console.log(req)
  const list = {title : req.body.content, date:req.body.date};
  List.create(list)
  .then(()=>res.redirect('/'))
  .catch((err) => console.log(err))
});

router.post('/:id', (req,res,next) => {
  const id = req.params.id;
  List.findByIdAndDelete(id)
  .then(()=>res.redirect('/'))
  .catch((err) => console.log(err))
});

router.get('/serch', (req,res,next) => {
  const date = req.query.date;
  List.find({date: date})
  .then(list => res.render('index', {message: `${date} 할일 : ${list.length}`, todolist: list}))
  .catch(err => console.log(err))
})

module.exports = router;

