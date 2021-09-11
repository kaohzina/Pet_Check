const sequelize = require('../config/connection');
const { Owner, Pet, Appointment} = require('../models');
const router = require('express').Router();

// Homepage Route:

router.get('/', (req, res) => {
  console.log('======================');
  Pet.findAll({
    attributes: [
      'id',
      'name',
      'type',
      'breed',
      'age',
      [sequelize.literal('(SELECT COUNT(*) FROM appointment WHERE Pet.id = Appointment.pet_id)'), 'Pet_Appointment']
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
        // Pets,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single Pet
router.get('/register', (req, res) => {
  console.log("mandi");
  Pet.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'type',
      'breed',
      'age',
      [sequelize.literal('(SELECT COUNT(*) FROM Appoinment WHERE Pet.id = Appointment_pet.id)'), 'Pet_Appointment']
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
        res.status(404).json({ message: 'No Pet found with this id' });
        return;
      }

      const Pet = dbPetData.get({ plain: true });

      res.render('register', {
        // Pet,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log("nick");
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
