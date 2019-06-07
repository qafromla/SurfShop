const express = require('express');
const router = express.Router();

 
router.get('/', function (req, res, next) {
    res.send('INDEX  ');
});

router.get('/new', function (req, res, next) {
    res.send('NEW  ');
});

router.post('/', function (req, res, next) {
    res.send('CREATE ');
});

router.get('/:id', function (req, res, next) {
    res.send('SHOW  ');
});

router.get('/:id/edit', function (req, res, next) {
    res.send('EDIT  ');
});

router.put('/:id', function (req, res, next) {
    res.send('UPDATE  ');
});

router.delete('/:id', function (req, res, next) {
    res.send('DELETE  ');
});

module.exports = router;

/*==============

GET index        /reviews
GET new          /reviews/new
POST create      /reviews
GET show         /reviews/:id
GET edit         /reviews/:id/edit
PUT update       /reviews/:id
DELETE destroy   /reviews/:id


===================*/