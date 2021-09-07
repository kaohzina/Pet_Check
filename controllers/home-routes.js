const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();
// Homepage Route:
router.get('/', (req, res) => {
  res.render('homepage');
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/products', (req, res) => {
  res.render('products');
});
router.get('/services', (req, res) => {
  res.render('services');
});
router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;