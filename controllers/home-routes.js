const sequelize = require('../config/connection');
const { Pet, Owner, Description } = require('../models');
const router = require('express').Router();
// Homepage Route:
router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;