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
    Appointment_text: req.body.Appointment_text,
    post_url: req.body.post_url
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
    id:req.params.id,
    }
  })
  .then(dbAppointmentData => {
    if (!dbAppointmentData) {
      res.status(404).json({ message: 'No Appointment found with this id' });
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