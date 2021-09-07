const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Pet, User, Vote } = require('../../models');


// get all users
router.get('/', (req, res) => {
  Pet.findAll({
    attributes: ['id', 'Pet_url', 'title', 'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE Pet.id = vote.Pet_id)'), 'vote_count']
    ],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one user
router.get('/:id', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'Pet_url', 'title', 'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE Pet.id = vote.Pet_id)'), 'vote_count']
  ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No Pet found with this id' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all Pets
router.post('/', (req, res) => {
  // expects {title: 'Taskmaster goes public!', Pet_url: 'https://taskmaster.com/press', user_id: 1}
  Pet.create({
    title: req.body.title,
    Pet_url: req.body.Pet_url,
    user_id: req.body.user_id
  })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/Pets/upvote
// Make sure this is above the /:id put route, express will think "upvote" is a valid parameter for /:id
router.put('/upvote', (req, res) => {
  // custom static method created in models/Pet.js
  Pet.upvote(req.body, { Vote })
    .then(updatedPetData => res.json(updatedPetData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});
// update one Pet
router.put('/:id', (req, res) => {
  Pet.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No Pet found with this id' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete one Pet
router.delete('/:id', (req, res) => {
  Pet.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No Pet found with this id' });
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