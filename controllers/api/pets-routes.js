const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Pet, Owner } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
  console.log('======================');
  Pet.findAll({
    attributes: ['id', 'name', 'type', 'breed', 'age', 'owner_id' ],
    include: [
      {
        model: Owner,
        attributes: ['fname', 'lname']
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {

});

// POST /api/users
router.post('/', (req, res) => {

});

// PUT /api/users/1
router.put('/:id', (req, res) => {

});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {

});

module.exports = router;