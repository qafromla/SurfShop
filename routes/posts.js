const express = require('express');
const router = express.Router();

/* GET users listing. /posts */
router.get('/', function (req, res, next) {
    res.send('INDEX /posts');
});

router.get('/new', function (req, res, next) {
    res.send('NEW /posts/new');
});

router.post('/', function (req, res, next) {
    res.send('CREATE /posts');
});

router.get('/:id', function (req, res, next) {
    res.send('SHOW /posts/:id');
});

router.get('/:id/edit', function (req, res, next) {
    res.send('EDIT /posts/:id/edit');
});

router.put('/:id', function (req, res, next) {
    res.send('UPDATE /posts/:id');
});

router.delete('/:id', function (req, res, next) {
    res.send('DELETE /posts/:id');
});

module.exports = router;

/*==============

GET index        /posts
GET new          /posts/new
POST create      /posts
GET show         /posts/:id
GET edit         /posts/:id/edit
PUT update       /posts/:id
DELETE destroy   /posts/:id


===================*/