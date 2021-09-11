const router = require('express').Router();
const { Appointment } = require('../../models');

router.get('/', (req, res) => {
  Appointment.findAll({
    owner_name: req.body.owner_name,
    pet_name: req.body.pet_name,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description
  })
    .then(dbAppointmentData => res.json(dbAppointmentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  Appointment.create({
    owner_name: req.params.owner_name,
    pet_name: req.params.pet_name,
    date: req.params.date,
    time: req.params.time,
    description: req.params.description
  })
    .then(dbAppointmentData => res.json(dbAppointmentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Appointment.destroy({
    where: {
    owner_name: req.params.owner_name,
    pet_name: req.params.pet_name,
    }
  })
  .then(dbAppointmentData => {
    if (!dbAppointmentData) {
      res.status(404).json({ message: 'No Appointment found with this owner or pet.' });
      return;
    }
    res.json(dbAppointmentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router; 