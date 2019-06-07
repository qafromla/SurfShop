const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function (req, res, next) {
  res.send('Registration')
});

router.post('/register', function (req, res, next) {
  res.send('POST Registration')
});

router.get('/login', function (req, res, next) {
  res.send('Login')
});

router.post('/login', function (req, res, next) {
  res.send('Post Login')
});


router.get('/profile', function (req, res, next) {
  res.send('Profile')
});


router.put('/profile/:uder_id', function (req, res, next) {
  res.send('Update Profile')
});


router.get('/forgot-pass', function (req, res, next) {
  res.send('GET Forgot pass')
});


router.put('/forgot-pass', function (req, res, next) {
  res.send('PUT Forgot pass')
});


router.get('/reset-pass/:token', function (req, res, next) {
  res.send('GET Reset pass')
});


router.post('/reset-pass/:token', function (req, res, next) {
  res.send('POST Reset pass')
});









module.exports = router;
