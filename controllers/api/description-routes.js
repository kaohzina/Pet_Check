const router = require('express').Router();
const { Description } = require('../../models');

router.get('/', (req, res) => {
  Description.findAll()
    .then(dbDescriptionData => res.json(dbDescriptionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  Description.create({
    owner_id: req.body.owner_id,
    pet_id: req.body.pet_id,
    appointment_description: req.body.appointment_description
  })
    .then(dbDescriptionData => res.json(dbDescriptionData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
<<<<<<< HEAD
  if (req.session) {
    Description.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbDescriptionData => {
        if (!dbDescriptionData) {
          res.status(404).json({ message: 'No description found with this id!' });
          return;
        }
        res.json(dbDescriptionData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
=======
  Description.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbDescriptionData => {
      if (!dbDescriptionData) {
        res.status(404).json({ message: 'No description found with this id!'});
      }
      res.json(dbDescriptionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
>>>>>>> develop
});

module.exports = router;