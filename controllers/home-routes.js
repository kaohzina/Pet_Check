const sequelize = require('../config/connection');
const { Owner, Pet, Appointment, Description } = require('../models');
const router = require('express').Router();

// Homepage Route:
router.get('/', (req, res) => {
  Appointment.findAll({
    attributes: [
      'id',
      'owner_id',
      'pet_id',
      'data',
      'time'
    ],
    include: [
      {
        model: Owner,
        attributes: ['fname', 'lname', 'email'],
        include: {
          model: Pet,
          attributes: ['name', 'type', 'breed']
        }
      }
    ]
  })
    .then(dbAppointmentData => {
      res.render('homepage', dbAppointmentData[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;