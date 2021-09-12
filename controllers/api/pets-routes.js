const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Pet, Owner, Appointment } = require('../../models');

// GET /api/pets
router.get('/', (req, res) => {
  Pet.findAll({
    attributes: ['id', 'name', 'type', 'breed', 'age', 'owner_fullname', [sequelize.literal('(SELECT COUNT(*) FROM appointment WHERE pet.id = appointment.pet_id)'), 'appointment_count']
   ],
    include: [
      {
        model: Owner,
        attributes: ['first_name', 'last_name']
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// GET /api/pet/1
router.get('/:id', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name', 'type', 'breed', 'age', 'owner_name', [sequelize.literal('(SELECT COUNT(*) FROM appointment WHERE pet.id = appoinment.pet_id)'), 'appointment_count']
   ],
    include: [
      {
        model: Appointment,
        attributes: ['description'],
        include: {model: Owner,
          attributes: ['fname', 'lname']
        }
      }
    ]
  })
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No pet found with this owner' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// POST /api/pet
router.post('/', (req, res) => {
  Pet.create({
    name: req.body.name,
    type: req.body.type,
    breed: req.body.breed,
    age: req.body.age,
    owner_id: req.session.owner_id
  })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// PUT /api/pet/appointment
router.put('/appointment', (req, res) => {
  if(req.session){
    Pet.appointmentDate({ ...req.body, owner_id: req.session.owner_id }, { Appointment, Owner, Pet })
    .then(updatedPetData => res.json(updatedPetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
});  
// PUT /api/pet/1
router.put('/:id', (req, res) => {
  Pet.update(
    {
      name: req.body.name,
      type: req.body.type,
      breed: req.body.breed,
      age: req.body.age,
      owner_fullname: req.body.owner_fullname
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No pet found with this owner' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// DELETE /api/pet/1
router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Pet.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No pet found with this id' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;