const sequelize = require('../config/connection');
<<<<<<< HEAD
const { Owner, Pet, Appointment, Description } = require('../models');
=======
<<<<<<< HEAD
const { Pet, Owner, Description } = require('../models');
=======
const { Pet, Owner } = require('../models');
>>>>>>> controller
>>>>>>> develop
const router = require('express').Router();

// Homepage Route:

router.get('/', (req, res) => {
<<<<<<< HEAD
  Appointment.findAll({
    attributes: [
      'id',
      'owner_id',
      'pet_id',
      'data',
      'time'
=======
  console.log('======================');
  Pet.findAll({
    attributes: [
      'id',
      'name',
      'type',
      'breed',
      'age',
      [sequelize.literal('(SELECT COUNT(*) FROM appointment WHERE Pet.id = Appointment.pet_id)'), 'Pet_Appointment']
>>>>>>> develop
    ],
    include: [
      {
        model: Owner,
<<<<<<< HEAD
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
=======
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
>>>>>>> develop
});

// get single Pet
router.get('/Pet/:id', (req, res) => {
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

      res.render('/register', {
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
