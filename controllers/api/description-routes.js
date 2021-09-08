const router = require('express').Router();
const { Description } = require('../../models');

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {
  Description.create({
    owner_id: req.body.owner_id,
    pet_id: req.body.pet_id,
    appointment_description: req.body.appointment_description,
  })
    .then(dbDescriptionData => res.json(dbDescriptionData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {

});

module.exports = router;