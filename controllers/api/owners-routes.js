const router = require('express').Router();
const { Owner, Post, Vote } = require('../../models');

// GET /api/Owners
router.get('/', (req, res) => {
  // Access our Owner model and run .findAll() method)
  Owner.findAll({
  attributes: { exclude: ['password'] }
  })
  .then(dbOwnerData => res.json(dbOwnerData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET /api/Owners/1
router.get('/:id', (req, res) => {
  Owner.findOne({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'post_url', 'created_at']
      },
      {
        model: Post,
        attributes: ['title'],
        through: Vote,
        as: 'voted_posts'
      }
    ],
    where: {
      id: req.params.id
    }
  })
    .then(dbOwnerData => {
      if (!dbOwnerData) {
        res.status(404).json({ message: 'No Owner found with this id' });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/Owners
router.post('/', (req, res) => {
  // expects {Ownername 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Owner.create({
    Ownername: req.body.Ownername,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbOwnerData => res.json(dbOwnerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    Owner.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbOwnerData => {
      if (!dbOwnerData) {
        res.status(400).json({ message: 'No Owner with that email address!' });
        return;
      }
  
      // res.json({ Owner: dbOwnerData });
  
      // Verify Owner
      const validPassword = dbOwnerData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }

      res.json({ Owner: dbOwnerData, message: 'You are now logged in!'});
    });  
  });

// PUT /api/Owners/1
router.put('/:id', (req, res) => {
   // expects {Ownername: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  Owner.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbOwnerData => {
      if (!dbOwnerData[0]) {
        res.status(404).json({ message: 'No Owner found with id' });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/Owners/1
router.delete('/:id', (req, res) => {
  Owner.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbOwnerData => {
      if(!dbOwnerData) {
        res.status(404).json({ message: 'No Owner found with this id' });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;