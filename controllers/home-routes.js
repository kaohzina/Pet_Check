const sequelize = require('../config/connection');
const { Owner, Pet, Appointment, seeds} = require('../models');
const router = require('express').Router();

//Get all appointments for the homepage
router.get('/', (req, res) => {
  Pet.findAll({
    attributes: [
      'id',
      'name',
      'type',
      'breed',
      'age',
      [sequelize.literal('(SELECT COUNT(*) FROM appointment WHERE pet.id = Appointment.pet_id)'), 'Pet_Appointment']
    ],
    include: [
      {
        model: Owner,
        attributes: ['fname', 'lname']
      }
    ]
  })
    .then(dbPetData => {
      const Pets = dbPetData.map(Pet => Pet.get({ plain: true }));

      res.render('homepage', {
        Pets,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single Pet
router.get('/register', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'type',
      'breed',
      'age'
    ],
    include: [
      {
        model: Owner,
        attributes: ['fname', 'lname']
      }
    ]
  })
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No pet found with this id' });
        return;
      }

      const Pet = dbPetData.get({ plain: true });

      res.render('register', {
        Pet,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
